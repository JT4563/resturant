// ===============================================
// app.js
// -----------------------------------------------
// This file configures the Express application and sets up middleware pipeline.
// Central configuration point for routes, middleware, and error handling.
// ===============================================

// 1️⃣ Import express and necessary middleware libraries
//     - express: Core web framework
//     - cors: Cross-Origin Resource Sharing middleware
//     - morgan: HTTP request logger middleware
//     - dotenv: Environment variables loader
// 2️⃣ Initialize Express application using express()
// 3️⃣ Apply global middleware in order:
//     - express.json(): Parse incoming JSON requests
//     - cors(): Enable Cross-Origin Resource Sharing
//     - morgan(): Log HTTP requests (development only)
// 4️⃣ Import and register all route files:
//     - authRoutes: Authentication endpoints
//     - menuRoutes: Menu management endpoints
//     - orderRoutes: Order management endpoints
//     - paymentRoutes: Payment processing endpoints
//     - analyticsRoutes: Analytics and reporting endpoints
// 5️⃣ Create a base API route prefix like /api/v1 for versioning
// 6️⃣ Add a fallback route for 404 errors (unknown routes)
// 7️⃣ Add centralized error-handling middleware for catching exceptions
//     - Custom errorMiddleware for structured error responses
// 8️⃣ Export the configured `app` instance for use in server.js
