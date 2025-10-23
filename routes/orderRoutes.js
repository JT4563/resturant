// ===============================================
// routes/orderRoutes.js
// -----------------------------------------------
// Defines all order-related endpoints and route configurations.
// Maps HTTP requests to appropriate controller functions with middleware protection.
// ===============================================

// 1️⃣ Import express.Router() for creating modular route handlers
// 2️⃣ Import orderController functions for request handling
//     - createOrder, getOrdersByUser, getOrderById, updateOrderStatus, assignChef, getAllOrders
// 3️⃣ Import middleware functions for request processing
//     - authMiddleware: Verify JWT tokens for authentication
//     - roleMiddleware: Restrict access based on user roles
// 4️⃣ Define routes with appropriate HTTP methods and paths:
//     POST   /create           - Create new order (customer only)
//     GET    /my-orders        - Get authenticated user's orders (customer only)
//     GET    /:id              - Get specific order by ID (authenticated users)
//     PATCH  /:id/status       - Update order status (chef/admin only)
//     PATCH  /:id/assign-chef  - Assign chef to order (admin/waiter only)
//     GET    /                 - Get all orders (admin only)
//     GET    /:id/receipt      - Get order receipt (authenticated users)
// 5️⃣ Apply middleware in proper order:
//     - authMiddleware for all routes to ensure authentication
//     - roleMiddleware with specific roles for protected routes
//     - Validation middleware for data integrity
// 6️⃣ Implement route parameter validation:
//     - Validate order ID format for ID-based routes
//     - Handle invalid ID formats gracefully
// 7️⃣ Export the configured router for use in app.js
