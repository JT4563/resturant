// ===============================================
// routes/analyticsRoutes.js
// -----------------------------------------------
// Defines analytics and reporting endpoints for business intelligence.
// Handles all routes related to data insights and performance metrics.
// ===============================================

// 1️⃣ Import express.Router() for creating modular route handlers
// 2️⃣ Import analyticsController functions for request handling
//     - getSalesReport, getPopularItems, getCustomerFrequency, getChefPerformance, getDashboardStats
// 3️⃣ Import middleware functions for request processing
//     - authMiddleware: Verify JWT tokens for authentication
//     - roleMiddleware: Restrict access to admin users only
// 4️⃣ Define routes with appropriate HTTP methods and paths:
//     GET    /sales            - Get sales report data (admin only)
//     GET    /popular-items    - Get popular menu items (admin only)
//     GET    /customer-frequency - Get customer visit frequency (admin only)
//     GET    /chef-performance - Get chef performance metrics (admin only)
//     GET    /dashboard        - Get comprehensive dashboard stats (admin only)
// 5️⃣ Apply middleware in proper order:
//     - authMiddleware for all routes to ensure authentication
//     - roleMiddleware to restrict access to admin users only
//     - Validation middleware for query parameters
// 6️⃣ Implement query parameter validation:
//     - Validate date ranges and filter parameters
//     - Handle invalid parameters gracefully
// 7️⃣ Export the configured router for use in app.js
