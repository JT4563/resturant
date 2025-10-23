// ===============================================
// models/menuModel.js
// -----------------------------------------------
// Defines schema for menu items (dishes) in the restaurant.
// Supports categorization, pricing, and availability management.
// ===============================================

// 1️⃣ Import mongoose for MongoDB object modeling
// 2️⃣ Define menuSchema with fields:
//     - name: String (required) - Dish name
//     - category: String (required, enum) - Dish category (Starters, Main Course, Desserts, Drinks)
//     - description: String - Detailed dish description
//     - price: Number (required, min: 0) - Price in rupees
//     - imageUrl: String - URL to dish image
//     - availability: Boolean (default: true) - Current availability status
//     - rating: Number (min: 0, max: 5) - Average customer rating
//     - createdAt: Date (default: current date) - Creation timestamp
// 3️⃣ Implement data validation:
//     - Required fields validation
//     - Price must be positive
//     - Rating between 0-5
//     - Category validation with enum
// 4️⃣ Add indexes for efficient querying:
//     - Category index for filtering
//     - Availability index for active menu items
//     - Name text index for search functionality
// 5️⃣ Export mongoose.model('Menu', menuSchema) for use in services
