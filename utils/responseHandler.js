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
export const success = (res,message,data=NULL)=>{

    return res.status(200).json(
       { status:"success",
        message:message,
        data :data
       })
}

// 2️⃣ error(res, message, code)
//     - Send standardized error response
//     - Parameters:
//         * res: Express response object
//         * message: Error message string
//         * code: HTTP status code (default: 400)
//     - Returns: JSON response with status, message, and error code
export const error =(res,message,code=400)=>{
     return res.status(200).json(
       { status:"error",
        message:message,
       })


}

// Export both functions for use in controllers

