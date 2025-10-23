// ===============================================
// middlewares/authMiddleware.js
// -----------------------------------------------
// Middleware to verify JWT tokens and authenticate users.
// Protects routes by validating authorization headers.
// ===============================================

// 1️⃣ Extract JWT token from Authorization header
//     - Expected format: "Bearer <token>"
//     - Handles missing or malformed tokens
// 2️⃣ Verify token using JWT library and application secret
//     - Validates token signature and expiration
//     - Decodes user information from token payload
// 3️⃣ Attach decoded user information to request object (req.user)
//     - Makes user data available to subsequent middleware and controllers
// 4️⃣ Call next() middleware if token is valid
// 5️⃣ Send 401 Unauthorized response if token is invalid or missing
//     - Uses standardized error response format
// 6️⃣ Handle edge cases:
//     - Missing Authorization header
//     - Malformed token format
//     - Expired tokens
//     - Invalid signatures
// 7️⃣ Export the middleware function for use in route definitions
