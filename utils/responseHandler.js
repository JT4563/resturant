// ===============================================
// utils/responseHandler.js
// -----------------------------------------------
// Provides consistent API responses across the application.
// Standardizes success and error response formats for better client handling.
// ===============================================

// 1️⃣ success(res, message, data)
//     - Send standardized success response
//     - Parameters:
//         * res: Express response object
//         * message: Success message string
//         * data: Response data object (optional)
//     - Returns: JSON response with status, message, and data

// 2️⃣ error(res, message, code)
//     - Send standardized error response
//     - Parameters:
//         * res: Express response object
//         * message: Error message string
//         * code: HTTP status code (default: 400)
//     - Returns: JSON response with status, message, and error code

// Export both functions for use in controllers
