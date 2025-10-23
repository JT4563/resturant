// ===============================================
// utils/logger.js
// -----------------------------------------------
// Logger setup for monitoring application activity and debugging.
// Uses Winston for structured logging with different log levels.
// ===============================================

// 1️⃣ Import Winston library for advanced logging capabilities
// 2️⃣ Configure log levels (error, warn, info, debug)
// 3️⃣ Set up transports for console and file outputs
// 4️⃣ Define log format with timestamps and log levels
// 5️⃣ Create and export logger instance for use throughout the application
// 6️⃣ Provide functions for different log levels:
//     - logger.info(message) for general information
//     - logger.error(message) for error reporting
//     - logger.warn(message) for warnings
//     - logger.debug(message) for debugging information
