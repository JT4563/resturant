// ===============================================
// models/orderModel.js
// -----------------------------------------------
// Defines schema for customer orders and kitchen workflow management.
// Includes references to users and menu items with status tracking.
// ===============================================

// 1️⃣ Import mongoose for MongoDB object modeling
// 2️⃣ Define orderSchema with fields:
//     - customer: ObjectId ref('User') - Reference to customer user
//     - items: Array of objects containing:
//         * menuItemId: ObjectId ref('Menu') - Reference to menu item
//         * quantity: Number (min: 1) - Quantity ordered
//         * price: Number - Price at time of order
//     - totalAmount: Number (required, min: 0) - Calculated total order value
//     - status: String (enum: ['pending', 'preparing', 'ready', 'served']) - Order workflow status
//     - assignedChef: ObjectId ref('User') - Reference to chef user
//     - createdAt: Date (default: current date) - Order creation timestamp
//     - updatedAt: Date - Last modification timestamp
// 3️⃣ Implement data validation:
//     - Customer reference required
//     - Items array must not be empty
//     - Quantity must be positive
//     - Total amount must be calculated correctly
//     - Status validation with enum
// 4️⃣ Add pre-save hook to update timestamps
// 5️⃣ Add indexes for efficient querying:
//     - Customer index for order history
//     - Status index for kitchen workflow
//     - Chef assignment index for chef-specific orders
// 6️⃣ Export mongoose.model('Order', orderSchema) for use in services
