// ===============================================
// routes/userRoutes.js
// -----------------------------------------------
// Defines user management endpoints for profile operations and administration.
// Handles all routes related to user accounts and profile management.
// ===============================================

// 1️⃣ Import express.Router() for creating modular route handlers
// 2️⃣ Import userController functions for request handling
//     - getUserProfile, updateUserProfile, changePassword, getAllUsers, getUserById, updateUserRole, deactivateUser
// 3️⃣ Import middleware functions for request processing
//     - authMiddleware: Verify JWT tokens for authentication
//     - roleMiddleware: Restrict access based on user roles (admin for certain operations)
// 4️⃣ Define routes with appropriate HTTP methods and paths:
//     GET    /profile          - Get authenticated user's profile (authenticated users)
//     PUT    /profile          - Update authenticated user's profile (authenticated users)
//     PUT    /change-password  - Change user password (authenticated users)
//     GET    /                 - Get all users (admin only)
//     GET    /:id              - Get specific user by ID (admin only)
//     PUT    /:id/role         - Update user role (admin only)
//     DELETE /:id              - Deactivate user account (admin only)
// 5️⃣ Apply middleware in proper order:
//     - authMiddleware for all routes to ensure authentication
//     - roleMiddleware for admin-only operations
//     - Validation middleware for data integrity
// 6️⃣ Implement route parameter validation:
//     - Validate user ID format for ID-based routes
//     - Handle invalid ID formats gracefully
// 7️⃣ Export the configured router for use in app.js
