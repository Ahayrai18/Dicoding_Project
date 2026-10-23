// Inventory manager holding a list of items
class Inventory {
  constructor() {
    this.items = [];
  }

  // Add an item to the inventory
  addItem(item) {
    this.items.push(item);
  }

  // Remove an item by id
  removeItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  // Return the details of every item, one per line
  listItems() {
    return this.items.map((item) => item.displayDetails()).join('\n');
  }
}

export default Inventory;
