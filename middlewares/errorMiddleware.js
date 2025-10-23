// ===============================================
// middlewares/errorMiddleware.js
// -----------------------------------------------
// Centralized error handler for all application errors.
// Provides consistent error responses and logging across the application.
// ===============================================

// 1️⃣ Catch all thrown errors from controllers and other middleware
//     - Synchronous and asynchronous errors
//     - Express validator errors
//     - Database errors
//     - Custom application errors
// 2️⃣ Log error details for debugging (using winston logger)
//     - Error message, stack trace, and request context
//     - Different log levels based on error severity
// 3️⃣ Determine appropriate HTTP status code:
//     - Use error.statusCode if provided
//     - Default to 500 (Internal Server Error)
// 4️⃣ Send structured JSON response with:
//     - Success flag (false for errors)
//     - Error message
//     - Status code
//     - Optional error details in development
// 5️⃣ Handle specific error types:
//     - ValidationError (Mongoose validation errors)
//     - CastError (invalid MongoDB IDs)
//     - JsonWebTokenError (JWT verification errors)
//     - Duplicate key errors
// 6️⃣ Prevent leaking sensitive information in production
// 7️⃣ Export as error-handling middleware for app.js
