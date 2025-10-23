// ===============================================
// models/analyticsModel.js
// -----------------------------------------------
// Defines schema for storing analytics data and business insights.
// Aggregates sales data, customer behavior, and performance metrics.
// ===============================================

// 1️⃣ Import mongoose for MongoDB object modeling
// 2️⃣ Define analyticsSchema with fields:
//     - date: Date (required) - Date for which analytics are recorded
//     - totalSales: Number (default: 0) - Total revenue for the day
//     - orderCount: Number (default: 0) - Number of orders placed
//     - popularItems: Array of objects containing:
//         * itemId: ObjectId ref('Menu') - Reference to menu item
//         * count: Number - Number of times ordered
//     - chefPerformance: Array of objects containing:
//         * chefId: ObjectId ref('User') - Reference to chef user
//         * ordersPrepared: Number - Number of orders prepared by chef
//     - customerFrequency: Map - Customer visit frequency tracking
//     - averageOrderValue: Number (default: 0) - Average spending per order
//     - peakHours: Array - Hourly order distribution
// 3️⃣ Implement data validation:
//     - Date required
//     - Numeric fields must be non-negative
//     - Array size limitations for performance
// 4️⃣ Add indexes for efficient querying:
//     - Date index for time-series queries
//     - Popular items index for recommendations
// 5️⃣ Add static methods for analytics calculations:
//     - calculateDailySales()
//     - getPopularItems()
//     - getChefPerformance()
// 6️⃣ Export mongoose.model('Analytics', analyticsSchema) for use in services
