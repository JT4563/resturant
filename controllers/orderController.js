// ===============================================
// controllers/orderController.js
// -----------------------------------------------
// Handles order management including creation, status updates, and retrieval.
// Manages the complete order lifecycle from placement to fulfillment.
// ===============================================

// 1️⃣ createOrder(req, res)
//     - Handle new order creation requests (customer only)
//     - Extract order data from request body (items, customer info)
//     - Validate required fields and item availability
//     - Call orderService.createOrder() to process order
//     - Return success response with order details and total amount
//     - Handle validation errors and unavailable items

// 2️⃣ getOrdersByUser(req, res)
//     - Handle requests for user's order history
//     - Extract user ID from authenticated request
//     - Call orderService.getOrdersByUser() to fetch orders
//     - Return success response with orders array
//     - Support pagination for large order histories

// 3️⃣ getOrderById(req, res)
//     - Handle requests for specific order by ID
//     - Extract order ID from request parameters
//     - Call orderService.getOrderById() to fetch order
//     - Return success response with order details
//     - Handle not found scenarios and authorization checks

// 4️⃣ updateOrderStatus(req, res)
//     - Handle order status update requests (chef/admin only)
//     - Extract order ID from request parameters
//     - Extract new status from request body
//     - Validate status transitions (pending → preparing → ready → served)
//     - Call orderService.updateOrderStatus() to modify status
//     - Return success response with updated order
//     - Handle invalid status transitions

// 5️⃣ assignChef(req, res)
//     - Handle chef assignment to orders (admin/waiter only)
//     - Extract order ID and chef ID from request
//     - Call orderService.assignChef() to assign chef
//     - Return success response with updated order
//     - Handle invalid chef assignments

// 6️⃣ getAllOrders(req, res)
//     - Handle requests for all orders (admin only)
//     - Support filtering by status, date range, customer
//     - Call orderService.getAllOrders() to fetch orders
//     - Return success response with orders array
//     - Support pagination for large datasets

// 7️⃣ Export all controller functions for use in orderRoutes
