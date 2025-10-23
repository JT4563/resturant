// ===============================================
// routes/authRoutes.js
// -----------------------------------------------
// Defines authentication endpoints for user registration, login, and session management.
// Handles all routes related to user authentication and authorization.
// ===============================================

// 1️⃣ Import express.Router() for creating modular route handlers
// 2️⃣ Import authController functions for request handling
//     - signup, login, logout, refreshToken
// 3️⃣ Define routes with appropriate HTTP methods and paths:
//     POST   /signup        - User registration endpoint
//     POST   /login         - User authentication endpoint
//     POST   /logout        - User session termination endpoint
//     POST   /refresh-token - JWT token refresh endpoint
// 4️⃣ Apply middleware where needed:
//     - Input validation middleware for data integrity
//     - Rate limiting middleware for security
// 5️⃣ Implement request validation:
//     - Validate required fields for signup and login
//     - Sanitize input data to prevent injection attacks
// 6️⃣ Export the configured router for use in app.js
