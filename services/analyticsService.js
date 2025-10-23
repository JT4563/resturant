// ===============================================
// services/analyticsService.js
// -----------------------------------------------
// Handles all analytics computations and business intelligence operations.
// Aggregates data from various sources to generate actionable insights.
// ===============================================

// 1️⃣ getDailySalesReport(dateRange, filters)
//     - Validate date range parameters
//     - Aggregate payments by date using MongoDB aggregation pipeline
//     - Calculate total sales, order count, and average order value
//     - Group results by day/week/month based on range
//     - Apply filters (payment method, order type)
//     - Return time-series sales data with trends
//     - Handle empty date ranges and database errors
//     - Include comparison with previous periods

// 2️⃣ getTopDishes(limit, category, timeRange)
//     - Validate limit parameter (default: 10)
//     - Aggregate orders by menu item using MongoDB aggregation
//     - Count occurrences and calculate revenue per item
//     - Filter by category and time range if specified
//     - Sort by order frequency or revenue
//     - Return ranked list of popular dishes
//     - Handle empty results and database errors
//     - Include item details (name, category, price)

// 3️⃣ getCustomerFrequency(dateRange)
//     - Validate date range parameters
//     - Count number of orders per customer using aggregation
//     - Categorize customers by frequency (one-time, regular, frequent)
//     - Calculate customer retention metrics
//     - Identify returning vs new customers
//     - Return frequency distribution and loyalty insights
//     - Handle empty date ranges and database errors

// 4️⃣ getChefPerformance(dateRange, chefId)
//     - Validate date range and chef ID parameters
//     - Aggregate orders by assigned chef using aggregation
//     - Count orders prepared and calculate completion times
//     - Filter by specific chef if ID provided
//     - Calculate performance metrics (orders/day, efficiency)
//     - Return chef performance rankings and statistics
//     - Handle empty results and database errors

// 5️⃣ getDashboardStats(dateRange)
//     - Validate date range parameters
//     - Combine multiple analytics metrics in single query
//     - Calculate key performance indicators:
//         * Total sales and order count
//         * Average order value
//         * Customer acquisition rate
//         * Popular items
//         * Peak ordering hours
//     - Return consolidated dashboard data
//     - Handle database errors and partial data availability

// 6️⃣ getRevenueByCategory(dateRange)
//     - Validate date range parameters
//     - Aggregate revenue by menu category
//     - Calculate percentage contribution per category
//     - Return category-wise revenue breakdown
//     - Handle empty results and database errors

// 7️⃣ getOrderTrends(dateRange, granularity)
//     - Validate date range and granularity parameters
//     - Analyze order patterns over time
//     - Identify peak hours and days
//     - Calculate order growth rates
//     - Return trend analysis with forecasts
//     - Handle empty results and database errors

// 8️⃣ Export all functions for use in analyticsController
