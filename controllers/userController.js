// ===============================================
// controllers/userController.js
// -----------------------------------------------
// Handles user profile management including viewing, updating, and administration.
// Manages user accounts and profile information across the platform.
// ===============================================

// 1️⃣ getUserProfile(req, res)
//     - Handle requests for user's own profile
//     - Extract user ID from authenticated request
//     - Call userService.getUserProfile() to fetch user data
//     - Return success response with user profile information
//     - Exclude sensitive information like password

// 2️⃣ updateUserProfile(req, res)
//     - Handle user profile update requests
//     - Extract user ID from authenticated request
//     - Extract update data from request body
//     - Validate allowed fields for update
//     - Call userService.updateUserProfile() to modify profile
//     - Return success response with updated user data
//     - Handle validation errors and duplicates

// 3️⃣ changePassword(req, res)
//     - Handle password change requests
//     - Extract current and new passwords from request body
//     - Validate current password matches existing
//     - Validate new password meets security requirements
//     - Call userService.changePassword() to update password
//     - Return success response
//     - Send notification email for security

// 4️⃣ getAllUsers(req, res)
//     - Handle requests for all users (admin only)
//     - Support filtering by role, status, date range
//     - Call userService.getAllUsers() to fetch user list
//     - Return success response with users array
//     - Support pagination for large user bases

// 5️⃣ getUserById(req, res)
//     - Handle requests for specific user by ID (admin only)
//     - Extract user ID from request parameters
//     - Call userService.getUserById() to fetch user
//     - Return success response with user details
//     - Handle not found scenarios

// 6️⃣ updateUserRole(req, res)
//     - Handle user role update requests (admin only)
//     - Extract user ID and new role from request
//     - Validate role change permissions
//     - Call userService.updateUserRole() to modify role
//     - Return success response with updated user
//     - Log role change for audit purposes

// 7️⃣ deactivateUser(req, res)
//     - Handle user deactivation requests (admin only)
//     - Extract user ID from request parameters
//     - Call userService.deactivateUser() to disable account
//     - Return success response
//     - Handle self-deactivation prevention

// 8️⃣ Export all controller functions for use in userRoutes
