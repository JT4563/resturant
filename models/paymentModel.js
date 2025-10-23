// ===============================================
// models/paymentModel.js
// -----------------------------------------------
// Defines schema for payment transactions and billing information.
// Tracks payment methods, amounts, taxes, and transaction status.
// ===============================================

// 1️⃣ Import mongoose for MongoDB object modeling
// 2️⃣ Define paymentSchema with fields:
//     - orderId: ObjectId ref('Order') - Reference to associated order
//     - paymentMethod: String (enum: ['cash', 'card', 'upi']) - Payment method used
//     - amount: Number (required, min: 0) - Base order amount before taxes
//     - gst: Number (default: 0) - Goods and Services Tax amount
//     - serviceCharge: Number (default: 0) - Additional service charges
//     - totalAfterTax: Number (required, min: 0) - Final amount including all charges
//     - paymentStatus: String (enum: ['pending', 'completed', 'failed']) - Transaction status
//     - transactionId: String - External payment gateway transaction ID
//     - createdAt: Date (default: current date) - Payment creation timestamp
//     - updatedAt: Date - Last modification timestamp
// 3️⃣ Implement data validation:
//     - Required fields validation
//     - Amount must be positive
//     - Valid payment method and status enums
//     - Total calculation validation
// 4️⃣ Add pre-save hook to calculate totalAfterTax
//     - totalAfterTax = amount + gst + serviceCharge
// 5️⃣ Add indexes for efficient querying:
//     - Order reference index
//     - Payment status index
//     - Date range queries index
// 6️⃣ Export mongoose.model('Payment', paymentSchema) for use in services
