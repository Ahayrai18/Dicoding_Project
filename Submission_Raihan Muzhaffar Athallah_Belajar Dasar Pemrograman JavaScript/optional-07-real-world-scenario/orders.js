// Generate a unique order id
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// In-memory order list
const orders = [];

// Create an order and add it to the list
function addOrder(customerName, items) {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  const newOrder = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: 'Menunggu',
  };

  orders.push(newOrder);

  return newOrder;
}

// Update an order's status by id
function updateOrderStatus(orderId, status) {
  const order = orders.find((order) => order.id === orderId);

  if (!order) {
    return null;
  }

  order.status = status;

  return order;
}

// Sum the total price of completed orders
function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === 'Selesai')
    .reduce((total, order) => total + order.totalPrice, 0);
}

// Delete an order by id
function deleteOrder(id) {
  const index = orders.findIndex((order) => order.id === id);

  if (index !== -1) {
    orders.splice(index, 1);
  }
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
