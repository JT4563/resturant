// ===============================================
// controllers/analyticsController.js
// -----------------------------------------------
// Generates analytics reports including sales data, popular items, and performance metrics.
// Provides business intelligence for restaurant management decisions.
// ===============================================

// 1️⃣ getSalesReport(req, res)
//     - Handle requests for sales analytics
//     - Extract date range from query parameters
//     - Call analyticsService.getSalesReport() to generate report
//     - Return success response with daily sales data and totals
//     - Support different time granularities (daily, weekly, monthly)

// 2️⃣ getPopularItems(req, res)
//     - Handle requests for popular menu items
//     - Extract limit and category filters from query parameters
//     - Call analyticsService.getPopularItems() to fetch rankings
//     - Return success response with ranked menu items
//     - Support time-based popularity (today, week, month, all-time)

// 3️⃣ getCustomerFrequency(req, res)
//     - Handle requests for customer visit frequency
//     - Extract date range from query parameters
//     - Call analyticsService.getCustomerFrequency() to analyze patterns
//     - Return success response with customer loyalty metrics
//     - Include returning vs new customer ratios

// 4️⃣ getChefPerformance(req, res)
//     - Handle requests for chef performance metrics (admin only)
//     - Extract date range and chef filters from query parameters
//     - Call analyticsService.getChefPerformance() to evaluate productivity
//     - Return success response with chef performance data
//     - Include orders prepared, average preparation time

// 5️⃣ getDashboardStats(req, res)
//     - Handle requests for comprehensive dashboard overview
//     - Combine multiple analytics metrics in a single response
//     - Call analyticsService.getDashboardStats() to aggregate data
//     - Return success response with key performance indicators
//     - Include total sales, orders, customers, and trending items

// 6️⃣ Export all controller functions for use in analyticsRoutes
