// ===============================================
// db/connectDB.js
// -----------------------------------------------
// This file handles the MongoDB connection using Mongoose ODM.
// Establishes database connectivity and handles connection events.
// ===============================================

// 1️⃣ Import mongoose library for MongoDB object modeling
// 2️⃣ Create an async function connectDB()
//     - Uses mongoose.connect() to establish connection with MongoDB
//     - Takes connection string from environment variables (process.env.MONGO_URI)
//     - Connection options include:
//         * useNewUrlParser: true (uses new URL parser)
//         * useUnifiedTopology: true (uses new topology engine)
// 3️⃣ Log successful connection with database host information
// 4️⃣ Catch and log any errors if connection fails
//     - Process exits with failure code if connection cannot be established
// 5️⃣ Handle connection events:
//     - Connection established
//     - Connection error
//     - Disconnected
// 6️⃣ Export connectDB() function to be used in server.js for application startup
