// Storage key and app state
const STORAGE_KEY = 'expenseTrackerTransactions';

let transactions = [];
let editingId = null;
let searchKeyword = '';
let lastGeneratedId = 0;

// Generate a unique, increasing id
function generateId() {
  let id = +new Date();
  if (id <= lastGeneratedId) id = lastGeneratedId + 1;
  lastGeneratedId = id;
  return id;
}

// Load transactions from localStorage
function loadTransactions() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    transactions = [];
    return;
  }
  try {
    const parsed = JSON.parse(raw);
    transactions = Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.warn('Data localStorage tidak valid, mulai dari daftar kosong.', err);
    transactions = [];
  }
}

// Save transactions to localStorage
function saveTransactions() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
}

// Save data and notify listeners of the change
function notifyDataChanged() {
  saveTransactions();
  document.dispatchEvent(new Event('transaction:updated'));
}

// DOM references: transaction lists
const incomeListEl = document.getElementById('incomeList');
const expenseListEl = document.getElementById('expenseList');

// DOM references: transaction form
const transactionForm = document.getElementById('transactionForm');
const titleInput = document.getElementById('transactionFormTitleInput');
const amountInput = document.getElementById('transactionFormAmountInput');
const dateInput = document.getElementById('transactionFormDateInput');
const typeSelect = document.getElementById('transactionFormTypeSelect');
const submitButton = transactionForm.querySelector('[data-testid="transactionFormSubmitButton"]');
const formHeading = document.getElementById('form-heading');
const formCard = document.querySelector('.tracker-form-section__card');

// DOM references: search form
const searchForm = document.getElementById('searchTransactionForm');
const searchInput = document.getElementById('searchTransactionFormTitleInput');

// DOM references: summary amounts
const balanceAmountEl = document.querySelector('.tracker-summary__balance-amount');
const incomeAmountEl = document.querySelector('.tracker-summary__stat-amount--income');
const expenseAmountEl = document.querySelector('.tracker-summary__stat-amount--expense');

// Header greeting
const greetingEl = document.querySelector('.tracker-header__greeting');
greetingEl.innerHTML = 'Halo, <strong>Raihan Muzhaffar Athallah (budi_sentonowy2b)</strong>';

// Format an amount for a transaction card
function formatCardAmount(amount) {
  return `Rp${amount}`;
}

// Format an amount for the summary
function formatDashboardAmount(amount) {
  const sign = amount < 0 ? '-' : '';
  return `${sign}Rp ${Math.abs(amount).toLocaleString('id-ID')}`;
}

// Build a transaction card element
function createTransactionCard(tx) {
  const item = document.createElement('div');
  item.setAttribute('data-testid', 'transactionItem');
  item.className = 'tracker-transaction-item';
  item.dataset.id = tx.id;

  const icon = document.createElement('div');
  icon.className = `tracker-transaction-item__icon tracker-transaction-item__icon--${tx.type}`;
  icon.setAttribute('aria-hidden', 'true');
  icon.textContent = tx.type === 'income' ? '↑' : '↓';

  const detail = document.createElement('div');
  detail.className = 'tracker-transaction-item__detail';

  const title = document.createElement('h3');
  title.setAttribute('data-testid', 'transactionItemTitle');
  title.className = 'tracker-transaction-item__title';
  title.textContent = tx.title;

  const date = document.createElement('p');
  date.setAttribute('data-testid', 'transactionItemDate');
  date.className = 'tracker-transaction-item__date';
  date.textContent = `Tanggal: ${tx.date}`;

  const type = document.createElement('p');
  type.setAttribute('data-testid', 'transactionItemType');
  type.className = 'tracker-transaction-item__type';
  type.textContent = `Tipe: ${tx.type === 'income' ? 'Pemasukan' : 'Pengeluaran'}`;

  detail.append(title, date, type);

  const right = document.createElement('div');
  right.className = 'tracker-transaction-item__right';

  const amount = document.createElement('p');
  amount.setAttribute('data-testid', 'transactionItemAmount');
  amount.className = `tracker-transaction-item__amount tracker-transaction-item__amount--${tx.type}`;
  amount.textContent = `Nominal: ${formatCardAmount(tx.amount)}`;

  const actions = document.createElement('div');
  actions.className = 'tracker-transaction-item__actions';

  const editBtn = document.createElement('button');
  editBtn.type = 'button';
  editBtn.className = 'tracker-transaction-item__btn tracker-transaction-item__btn--edit';
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', () => startEditTransaction(tx.id));

  const editTypeBtn = document.createElement('button');
  editTypeBtn.type = 'button';
  editTypeBtn.setAttribute('data-testid', 'transactionItemEditTypeButton');
  editTypeBtn.className = 'tracker-transaction-item__btn';
  editTypeBtn.textContent = 'Ubah Tipe';
  editTypeBtn.addEventListener('click', () => toggleTransactionType(tx.id));

  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.setAttribute('data-testid', 'transactionItemDeleteButton');
  deleteBtn.className = 'tracker-transaction-item__btn tracker-transaction-item__btn--delete';
  deleteBtn.textContent = 'Hapus';
  deleteBtn.addEventListener('click', () => deleteTransaction(tx.id));

  actions.append(editBtn, editTypeBtn, deleteBtn);
  right.append(amount, actions);
  item.append(icon, detail, right);

  return item;
}

// Build an empty-state message
function createEmptyState(message) {
  const empty = document.createElement('p');
  empty.className = 'tracker-transaction-list__empty';
  empty.textContent = message;
  return empty;
}

// Render income and expense lists (with search filter)
function renderTransactions() {
  incomeListEl.innerHTML = '';
  expenseListEl.innerHTML = '';

  const keyword = searchKeyword.trim().toLowerCase();
  const source = keyword
    ? transactions.filter((tx) => tx.title.toLowerCase().includes(keyword))
    : transactions;

  const ordered = source.slice().reverse();
  const incomes = ordered.filter((tx) => tx.type === 'income');
  const expenses = ordered.filter((tx) => tx.type === 'expense');

  if (incomes.length === 0) {
    incomeListEl.appendChild(
      createEmptyState(keyword ? 'Tidak ada pemasukan yang cocok.' : 'Belum ada pemasukan.')
    );
  } else {
    incomes.forEach((tx) => incomeListEl.appendChild(createTransactionCard(tx)));
  }

  if (expenses.length === 0) {
    expenseListEl.appendChild(
      createEmptyState(keyword ? 'Tidak ada pengeluaran yang cocok.' : 'Belum ada pengeluaran.')
    );
  } else {
    expenses.forEach((tx) => expenseListEl.appendChild(createTransactionCard(tx)));
  }
}

// Update balance, income, and expense totals
function updateDashboard() {
  const totalIncome = transactions
    .filter((tx) => tx.type === 'income')
    .reduce((sum, tx) => sum + tx.amount, 0);
  const totalExpense = transactions
    .filter((tx) => tx.type === 'expense')
    .reduce((sum, tx) => sum + tx.amount, 0);
  const balance = totalIncome - totalExpense;

  balanceAmountEl.textContent = formatDashboardAmount(balance);
  incomeAmountEl.textContent = formatDashboardAmount(totalIncome);
  expenseAmountEl.textContent = formatDashboardAmount(totalExpense);
}

// Re-render lists and summary; refresh on data changes
function refreshView() {
  renderTransactions();
  updateDashboard();
}
document.addEventListener('transaction:updated', refreshView);

// Cancel button shown while editing
const cancelEditBtn = document.createElement('button');
cancelEditBtn.type = 'button';
cancelEditBtn.className = 'tracker-form__cancel';
cancelEditBtn.textContent = 'Batal';
cancelEditBtn.addEventListener('click', () => {
  exitEditMode();
  transactionForm.reset();
});

// Switch the form to edit mode
function startEditTransaction(id) {
  const tx = transactions.find((t) => t.id === id);
  if (!tx) return;

  editingId = id;
  titleInput.value = tx.title;
  amountInput.value = tx.amount;
  dateInput.value = tx.date;
  typeSelect.value = tx.type;

  submitButton.textContent = 'Simpan Perubahan';
  formHeading.textContent = 'Edit Transaksi';
  formCard.classList.add('tracker-form-section__card--editing');

  if (!cancelEditBtn.isConnected) {
    submitButton.insertAdjacentElement('afterend', cancelEditBtn);
  }

  formCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  titleInput.focus();
}

// Switch the form back to add mode
function exitEditMode() {
  editingId = null;
  submitButton.textContent = 'Simpan';
  formHeading.textContent = 'Tambah Pencatatan Baru';
  formCard.classList.remove('tracker-form-section__card--editing');
  if (cancelEditBtn.isConnected) {
    cancelEditBtn.remove();
  }
}

// Form submit: validate, then add or update a transaction
transactionForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const amount = Number(amountInput.value);
  const date = dateInput.value || new Date().toISOString().slice(0, 10);
  const type = typeSelect.value;

  if (title === '') {
    alert('Judul transaksi tidak boleh kosong.');
    return;
  }
  if (!(amount >= 1)) {
    alert('Nominal harus diisi minimal Rp1.');
    return;
  }

  if (editingId !== null) {
    const idx = transactions.findIndex((tx) => tx.id === editingId);
    if (idx !== -1) {
      transactions[idx] = { ...transactions[idx], title, amount, date, type };
    }
    exitEditMode();
  } else {
    transactions.push({ id: generateId(), title, amount, date, type });
  }

  notifyDataChanged();
  transactionForm.reset();
});

// Toggle a transaction between income and expense
function toggleTransactionType(id) {
  const tx = transactions.find((t) => t.id === id);
  if (!tx) return;
  tx.type = tx.type === 'income' ? 'expense' : 'income';
  notifyDataChanged();
}

// Delete a transaction
function deleteTransaction(id) {
  transactions = transactions.filter((tx) => tx.id !== id);
  if (editingId === id) {
    exitEditMode();
    transactionForm.reset();
  }
  notifyDataChanged();
}

// Search: filter while typing and on submit
searchInput.addEventListener('input', function () {
  searchKeyword = searchInput.value;
  renderTransactions();
});

searchForm.addEventListener('submit', function (e) {
  e.preventDefault();
  searchKeyword = searchInput.value;
  renderTransactions();
});

// Initial load
loadTransactions();
refreshView();
