import { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder } from './orders.js';

// Add sample orders
addOrder('Alice', [
  { name: 'Nasi Goreng', price: 20000 },
  { name: 'Teh Manis', price: 5000 }
]);

addOrder('Bob', [
  { name: 'Mie Goreng', price: 15000 },
  { name: 'Kopi', price: 10000 }
]);

console.log(orders);

// Update order statuses
updateOrderStatus(orders[0].id, 'Diproses');
updateOrderStatus(orders[1].id, 'Selesai');

console.log(orders);

// Revenue from completed orders
console.log(calculateTotalRevenue());

// Delete an order
deleteOrder(orders[0].id);

console.log(orders);
