Set uniqueElement(List<int> myList) {
  // TODO 1

  // a set can't hold duplicates, so toSet() keeps unique values only
  return myList.toSet();

  // End of TODO 1
}

Map<String, String> buildFutsalPlayersMap() {
  // TODO 2

  // position as the key, player name as the value
  return {
    'Goalkeeper': 'Andri',
    'Anchor': 'Irfan',
    'Pivot': 'Fikri',
    'Right Flank': 'Aldi',
    'Left Flank': 'Hafid',
  };

  // End of TODO 2
}

Map<String, String> updatePivotPlayer() {
  final futsalPlayers = buildFutsalPlayersMap();

  // TODO 3

  // 'Pivot' already exists, so this replaces its value (Fikri -> Fajar)
  futsalPlayers['Pivot'] = 'Fajar';

  // End of TODO 3

  return futsalPlayers;
}
