// ===============================================
// utils/tokenUtils.js
// -----------------------------------------------
// Helper functions to generate and verify JWT tokens for authentication.
// Secures API endpoints by validating user sessions.
// ===============================================

// 1️⃣ Function generateToken(userData)
//     - Generates a JWT token for authenticated users
//     - Parameters:
//         * userData: Object containing user information to encode
//     - Uses: jwt.sign() with payload, secret, and expiration
//     - Returns: Signed JWT token string

// 2️⃣ Function verifyToken(token)
//     - Verifies the authenticity and validity of a JWT token
//     - Parameters:
//         * token: JWT token string to verify
//     - Uses: jwt.verify() with application secret
//     - Returns: Decoded user data if valid, throws error if invalid

// 3️⃣ Export both functions for use in authentication middleware and controllers
