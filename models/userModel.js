// ===============================================
// models/userModel.js
// -----------------------------------------------
// Defines the User schema and model for authentication and role management.
// Includes user roles, password encryption, and helper methods for security.
// ===============================================

// 1️⃣ Import mongoose for MongoDB object modeling and bcrypt for password hashing
// 2️⃣ Define userSchema with fields:
//     - name: String (required) - User's full name
//     - email: String (required, unique) - User's email address for login
//     - password: String (required, minlength: 6) - Hashed password
//     - role: String (enum: ['customer', 'chef', 'waiter', 'admin']) - User's role in system
//     - createdAt: Date (default: current date) - Account creation timestamp
// 3️⃣ Add a pre-save hook to hash password using bcrypt
//     - Only hashes password if it's been modified
//     - Uses bcrypt.genSalt() and bcrypt.hash() for secure hashing
//     - Salt rounds: 10 for adequate security
// 4️⃣ Create a method to compare entered password with hashed one
//     - comparePassword(enteredPassword): Boolean - Validates login credentials
//     - Uses bcrypt.compare() for secure comparison
// 5️⃣ Implement data validation:
//     - Email format validation using regex
//     - Password strength requirements
//     - Role validation with enum
// 6️⃣ Export mongoose.model('User', userSchema) for use in services
