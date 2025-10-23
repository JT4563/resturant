// ===============================================
// server.js
// -----------------------------------------------
// This file starts the Express server and manages application lifecycle.
// Entry point that connects to MongoDB and begins listening for requests.
// ===============================================

// 1️⃣ Import dotenv and configure environment variables
//     - Loads .env file variables into process.env
// 2️⃣ Import the configured `app` instance from app.js
// 3️⃣ Import connectDB() function from db/connectDB.js
// 4️⃣ Define the PORT from process.env.PORT or default to 5000
// 5️⃣ Call connectDB() to establish MongoDB connection before starting server
//     - Ensures database is available before accepting requests
// 6️⃣ Start the HTTP server using app.listen()
//     - Listen on specified PORT
//     - Log server startup message with port information
// 7️⃣ Add event listeners for process-level events:
//     - unhandledRejection: Handle unhandled promise rejections
//     - uncaughtException: Handle uncaught synchronous exceptions
// 8️⃣ Gracefully shutdown server on termination signals
//     - SIGTERM: Graceful shutdown signal
//     - SIGINT: Interrupt signal (Ctrl+C)
// 9️⃣ Log server status (Server running on port X) when successfully started
