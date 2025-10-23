// ===============================================
// controllers/authController.js
// -----------------------------------------------
// Handles authentication logic including user registration, login, and token management.
// Acts as the interface between HTTP requests and authentication services.
// ===============================================

// 1️⃣ signup(req, res)
//     - Handle user registration requests
//     - Extract user data from request body (name, email, password, role)
//     - Validate required fields and data formats
//     - Call userService.registerUser() to create new user
//     - Return success response with user data and JWT token
//     - Handle validation errors and duplicate email scenarios

// 2️⃣ login(req, res)
//     - Handle user login requests
//     - Extract credentials from request body (email, password)
//     - Validate required fields
//     - Call userService.loginUser() to authenticate user
//     - Return success response with JWT token on successful authentication
//     - Handle invalid credentials and authentication errors

// 3️⃣ logout(req, res)
//     - Handle user logout requests
//     - Clear authentication tokens from client
//     - Return success response

// 4️⃣ refreshToken(req, res)
//     - Handle JWT token refresh requests
//     - Validate refresh token
//     - Generate new access token
//     - Return updated token pair

// 5️⃣ Export all controller functions for use in authRoutes
