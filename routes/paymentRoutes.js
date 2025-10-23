// ===============================================
// routes/paymentRoutes.js
// -----------------------------------------------
// Defines payment and billing endpoints for transaction processing and history.
// Handles all routes related to financial operations and payment management.
// ===============================================

// 1️⃣ Import express.Router() for creating modular route handlers
// 2️⃣ Import paymentController functions for request handling
//     - processPayment, getPaymentHistory, getPaymentReceipt, refundPayment, getAllPayments
// 3️⃣ Import middleware functions for request processing
//     - authMiddleware: Verify JWT tokens for authentication
//     - roleMiddleware: Restrict access based on user roles (admin for certain operations)
// 4️⃣ Define routes with appropriate HTTP methods and paths:
//     POST   /process           - Process payment for an order (customer/admin)
//     GET    /history           - Get authenticated user's payment history (customer/admin)
//     GET    /receipt/:id       - Get specific payment receipt by ID (authenticated users)
//     POST   /refund/:id        - Process refund for payment (admin only)
//     GET    /                  - Get all payments (admin only)
// 5️⃣ Apply middleware in proper order:
//     - authMiddleware for all routes to ensure authentication
//     - roleMiddleware for admin-only operations
//     - Validation middleware for data integrity
// 6️⃣ Implement route parameter validation:
//     - Validate payment ID format for ID-based routes
//     - Handle invalid ID formats gracefully
// 7️⃣ Export the configured router for use in app.js
