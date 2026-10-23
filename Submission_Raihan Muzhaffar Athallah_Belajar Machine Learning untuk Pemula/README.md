# Bank Transaction Clustering and Classification

A two-stage machine learning project on tabular bank transaction data:

1. **Clustering (unsupervised):** K-Means groups the transactions into clusters.
2. **Classification (supervised):** Decision Tree and Random Forest models are trained to predict the cluster label produced in the first stage.

This project is the final submission for the Dicoding class **Belajar Machine Learning untuk Pemula** (Machine Learning for Beginners).

## Dataset

The notebook loads a published Google Sheets CSV of bank transactions (see [References](#references)). The dataset is described as 2,512 transactions covering transaction attributes, customer demographics, and usage patterns, and it is intended for exploring fraud detection and anomaly identification. The copy loaded here has 2,537 rows and 16 columns, including missing values (18 to 30 per column) and 21 duplicate rows, which the notebook cleans.

**Raw columns:** `TransactionID`, `AccountID`, `TransactionAmount`, `TransactionDate`, `TransactionType`, `Location`, `DeviceID`, `IP Address`, `MerchantID`, `Channel`, `CustomerAge`, `CustomerOccupation`, `TransactionDuration`, `LoginAttempts`, `AccountBalance`, `PreviousTransactionDate`.

**Features used for modeling (10):** `TransactionAmount`, `TransactionType`, `Location`, `Channel`, `CustomerAge`, `CustomerOccupation`, `TransactionDuration`, `LoginAttempts`, `AccountBalance`, and `CustomerAge_Bin` (customer age split into three groups).

| Stage | Rows |
| --- | ---: |
| Loaded dataset | 2,537 |
| After dropping missing values | 2,156 |
| After dropping duplicates | 2,135 |
| After IQR outlier removal | 1,945 |

## Pipeline

**Notebook 1: [`01_clustering.ipynb`](./01_clustering.ipynb)**

1. Exploratory data analysis: summary statistics, correlation heatmap, histograms, count plots, and a boxplot.
2. Cleaning: drop missing values and duplicates, then drop the ID, IP address, and date columns.
3. Preprocessing: label-encode categorical features, remove outliers with the IQR method, standardize numeric features with `StandardScaler`, and bin `CustomerAge` into three groups with `pd.qcut`.
4. Modeling: choose k with the elbow method (Yellowbrick `KElbowVisualizer`, silhouette metric), train `KMeans(n_clusters=2, random_state=42)`, evaluate with the silhouette score, and visualize the clusters in 2D with PCA. A second K-Means model is trained on the two PCA components for comparison.
5. Interpretation and export: summarize each cluster on scaled and on original values (after inverse transforms), rename the cluster column to `Target`, and save the results as CSV files.

**Notebook 2: [`02_classification.ipynb`](./02_classification.ipynb)**

1. Load `data_clustering_inverse.csv` and one-hot encode the categorical features (55 features in total).
2. Split into training and test sets (80/20, stratified by `Target`): 1,556 and 389 rows.
3. Train a Decision Tree as the baseline and a Random Forest for comparison.
4. Tune the Random Forest with `GridSearchCV` (5-fold cross-validation, accuracy scoring) over `n_estimators` in `[50, 100, 150]`, `max_depth` in `[None, 5, 10]`, and `min_samples_split` in `[2, 5]`.
5. Evaluate with accuracy, precision, recall, and F1-score, and save every model.

## Results

**Clustering**

| Metric | Value |
| --- | --- |
| Number of clusters (elbow method, silhouette metric) | 2 |
| Silhouette score | 0.5722 |
| Cluster sizes | 980 and 965 rows |

**Classification** (test set of 389 rows, weighted averages)

| Model | Accuracy | Precision | Recall | F1-score |
| --- | ---: | ---: | ---: | ---: |
| Decision Tree | 1.0000 | 1.0000 | 1.0000 | 1.0000 |
| Random Forest | 1.0000 | 1.0000 | 1.0000 | 1.0000 |
| Tuned Random Forest | 1.0000 | 1.0000 | 1.0000 | 1.0000 |

Best parameters from the grid search: `max_depth=None`, `min_samples_split=2`, `n_estimators=50` (best cross-validation accuracy: 1.0).

## Notes and limitations

- **The clusters are driven by `Location`.** Categorical features were label-encoded but not scaled, so the `Location` codes (0 to 42) dominate the Euclidean distance used by K-Means, next to the other encoded codes (at most 3) and the standardized numeric features (roughly -1.5 to 3). A single threshold on `Location` reproduces the cluster labels exactly: the two clusters contain 22 and 21 different cities with no overlap, while every other feature separates them no better than 52.4% (chance level is 50%). The silhouette score of 0.572 therefore largely reflects how the city codes are split. Scaling or one-hot encoding the categorical features, or using a clustering method designed for mixed data, are natural next steps.
- **The perfect classification scores are expected.** The `Target` labels come from K-Means on the same features, so the classifiers only learn to reproduce that split (for example by recognizing which cities fall into each cluster). The 1.0 scores do not measure predictive power on an independent label.
- **The `.h5` files are not HDF5.** They are scikit-learn models saved with `joblib` (Python pickle format) and are loaded with `joblib.load`. They were saved with scikit-learn 1.8.0, so load them with the same version. Only load pickle files from sources you trust.
- **Language:** plot titles, axis labels, and printed messages inside the notebooks are in Indonesian, as in the original submission. Code comments and notebook text are in English.

## Repository structure

```text
bank-transaction-clustering-classification/
├── 01_clustering.ipynb                       # EDA, preprocessing, K-Means, interpretation
├── 02_classification.ipynb                   # Decision Tree, Random Forest, tuning
├── data_clustering.csv                       # 1,945 rows: scaled and encoded features + Target
├── data_clustering_inverse.csv               # Same rows in original units and categories + Target
├── model_clustering.h5                       # K-Means (k=2) on the 10 preprocessed features
├── PCA_model_clustering.h5                   # K-Means (k=2) on 2 PCA components
├── decision_tree_model.h5                    # Decision Tree classifier
├── explore_RandomForest_classification.h5    # Random Forest with default parameters
├── tuning_classification.h5                  # GridSearchCV object (tuned Random Forest)
└── README.md
```

## Getting started

The notebooks were run with Python 3.13.5 and scikit-learn 1.8.0.

```bash
pip install pandas numpy matplotlib seaborn scikit-learn yellowbrick joblib jupyter
jupyter notebook
```

Run the notebooks in order:

1. `01_clustering.ipynb` needs an internet connection to download the dataset. It writes `data_clustering.csv`, `data_clustering_inverse.csv`, and the two clustering models into the working directory.
2. `02_classification.ipynb` reads `data_clustering_inverse.csv` and writes the three classification models.

## Using the saved models

Predict cluster labels with the clustering model:

```python
import joblib
import pandas as pd

kmeans = joblib.load("model_clustering.h5")
X = pd.read_csv("data_clustering.csv").drop(columns="Target")
print(kmeans.predict(X)[:10])
```

Predict cluster labels with the Decision Tree classifier:

```python
import joblib
import pandas as pd

clf = joblib.load("decision_tree_model.h5")
df = pd.read_csv("data_clustering_inverse.csv")

categorical = df.select_dtypes(include=["object"]).columns
X = pd.get_dummies(df, columns=categorical, drop_first=True).drop(columns="Target")
print(clf.predict(X)[:10])
```

## References

**Data**

- [Dataset used by the notebook](https://docs.google.com/spreadsheets/d/e/2PACX-1vTbg5WVW6W3c8SPNUGc3A3AL-AG32TPEQGpdzARfNICMsLFI0LQj0jporhsLCeVhkN5AoRsTkn08AYl/pub?output=csv): published Google Sheets CSV loaded with `pd.read_csv`.
- [Reference dataset folder](https://drive.google.com/drive/folders/1Zs7VmPZ-jNwsRlMKH65Ea-LApSwx6lKx?usp=drive_link) (Google Drive): the mandatory dataset reference given in the course submission brief.
- [Bank Transaction Dataset for Fraud Detection](https://www.kaggle.com/datasets/valakhorasani/bank-transaction-dataset-for-fraud-detection) by valakhorasani on Kaggle: the public dataset whose description matches the data used here.

**Course**

- Dicoding, [Belajar Machine Learning untuk Pemula](https://www.dicoding.com/academies/184-belajar-machine-learning-untuk-pemula): class and final submission brief.

**Methods and libraries**

- scikit-learn: [KMeans](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html), [silhouette_score](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.silhouette_score.html), [PCA](https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html), [DecisionTreeClassifier](https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeClassifier.html), [RandomForestClassifier](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html), and [GridSearchCV](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.GridSearchCV.html).
- Yellowbrick, [Elbow Method (`KElbowVisualizer`)](https://yellowbrick.readthedocs.io/en/stable/api/cluster/elbow.html).
- [pandas](https://pandas.pydata.org/docs/), [seaborn](https://seaborn.pydata.org/), [Matplotlib](https://matplotlib.org/), and [joblib](https://joblib.readthedocs.io/).

## Author

**Raihan Muzhaffar Athallah**: GitHub [@Ahayrai18](https://github.com/Ahayrai18)
