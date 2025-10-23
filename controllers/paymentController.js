// ===============================================
// controllers/paymentController.js
// -----------------------------------------------
// Manages billing, payment processing, and transaction handling.
// Processes payments and generates invoices for completed orders.
// ===============================================

// 1️⃣ processPayment(req, res)
//     - Handle payment processing requests
//     - Extract order ID and payment details from request
//     - Validate payment information and order status
//     - Calculate total amount including taxes and charges
//     - Call paymentService.processPayment() to handle transaction
//     - Return success response with payment confirmation and receipt
//     - Handle payment failures and invalid orders

// 2️⃣ getPaymentHistory(req, res)
//     - Handle requests for user's payment history
//     - Extract user ID from authenticated request
//     - Call paymentService.getPaymentHistory() to fetch transactions
//     - Return success response with payment records array
//     - Support date range filtering and pagination

// 3️⃣ getPaymentReceipt(req, res)
//     - Handle requests for specific payment receipt
//     - Extract payment ID from request parameters
//     - Call paymentService.getPaymentReceipt() to fetch details
//     - Return success response with complete payment information
//     - Handle not found scenarios and authorization checks

// 4️⃣ refundPayment(req, res)
//     - Handle payment refund requests (admin only)
//     - Extract payment ID and refund details from request
//     - Validate refund eligibility and amount
//     - Call paymentService.refundPayment() to process refund
//     - Return success response with refund confirmation
//     - Handle invalid refunds and processing errors

// 5️⃣ getAllPayments(req, res)
//     - Handle requests for all payments (admin only)
//     - Support filtering by date range, status, payment method
//     - Call paymentService.getAllPayments() to fetch transactions
//     - Return success response with payments array
//     - Support pagination for large datasets

// 6️⃣ Export all controller functions for use in paymentRoutes
