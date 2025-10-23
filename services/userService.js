// ===============================================
// services/userService.js
// -----------------------------------------------
// Contains business logic related to users and account management.
// Implements core user functionality including authentication, profile management, and administration.
// ===============================================

// 1️⃣ registerUser(data)
//     - Validate user input data (name, email, password, role)
//     - Check if user with same email already exists
//     - Hash password using bcrypt with appropriate salt rounds
//     - Create new User document with validated data
//     - Save user to database using UserModel
//     - Generate JWT token for immediate authentication
//     - Return user object (without password) and token
//     - Handle validation errors and database exceptions

// 2️⃣ loginUser(credentials)
//     - Validate email and password presence
//     - Check email existence in database
//     - Compare entered password with stored hash using bcrypt
//     - Generate JWT token with user payload (id, role)
//     - Set token expiration time (e.g., 24 hours)
//     - Return user object (without password) and token
//     - Handle invalid credentials and authentication errors

// 3️⃣ getUserProfile(userId)
//     - Validate user ID format (MongoDB ObjectId)
//     - Fetch user data by ID from database
//     - Exclude sensitive fields (password) from response
//     - Populate related data if needed (e.g., order history)
//     - Return basic profile information
//     - Handle user not found scenarios

// 4️⃣ updateUserProfile(userId, newData)
//     - Validate user ID and update data
//     - Check for field-level permissions (users can only update own profile)
//     - Validate email uniqueness if email is being updated
//     - Update allowed user fields in database
//     - Return updated user object
//     - Handle validation errors and database conflicts

// 5️⃣ changePassword(userId, currentPassword, newPassword)
//     - Validate all password fields are present
//     - Verify current password matches stored hash
//     - Validate new password meets security requirements
//     - Hash new password using bcrypt
//     - Update password in database
//     - Return success confirmation
//     - Handle incorrect current password

// 6️⃣ getAllUsers(filters, options)
//     - Apply filters (role, status, date range)
//     - Implement pagination with limit and offset
//     - Fetch users from database with selected fields
//     - Return users array and pagination metadata
//     - Handle database errors and empty results

// 7️⃣ getUserById(userId)
//     - Validate user ID format
//     - Fetch complete user data by ID
//     - Return user object for administrative purposes
//     - Handle user not found scenarios

// 8️⃣ updateUserRole(userId, newRole)
//     - Validate user ID and role permissions
//     - Check authorization (only admins can change roles)
//     - Validate new role is within allowed enum values
//     - Update user role in database
//     - Log role change for audit trail
//     - Return updated user object

// 9️⃣ deactivateUser(userId)
//     - Validate user ID
//     - Check authorization (only admins can deactivate accounts)
//     - Prevent self-deactivation
//     - Update user status to deactivated
//     - Invalidate active sessions/tokens
//     - Return success confirmation

// 🔟 Export all functions at the end using `module.exports`
