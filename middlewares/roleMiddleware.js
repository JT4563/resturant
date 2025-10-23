// ===============================================
// middlewares/roleMiddleware.js
// -----------------------------------------------
// Middleware to restrict routes based on user roles.
// Implements role-based access control (RBAC) for secure endpoints.
// ===============================================

// 1️⃣ Accept allowed roles as parameter (array of role strings)
//     - Example: ['admin', 'chef'] allows both admins and chefs
// 2️⃣ Check if authenticated user's role (from req.user.role) is in allowed roles
//     - Assumes user is already authenticated via authMiddleware
// 3️⃣ Call next() middleware if user role is permitted
// 4️⃣ Send 403 Forbidden response if user role is not authorized
//     - Uses standardized error response format
// 5️⃣ Handle edge cases:
//     - Missing user object (user not authenticated)
//     - Missing role property
//     - Invalid role values
// 6️⃣ Export factory function that returns configured middleware
//     - Allows flexible role configuration per route
