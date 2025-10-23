// ===============================================
// routes/menuRoutes.js
// -----------------------------------------------
// Defines menu management endpoints for CRUD operations and smart suggestions.
// Handles all routes related to menu items and recommendation features.
// ===============================================

// 1️⃣ Import express.Router() for creating modular route handlers
// 2️⃣ Import menuController functions for request handling
//     - createMenuItem, getAllMenuItems, getMenuItemById, updateMenuItem, deleteMenuItem, getMenuSuggestions
// 3️⃣ Import middleware functions for request processing
//     - authMiddleware: Verify JWT tokens for authentication
//     - roleMiddleware: Restrict access based on user roles (admin for write operations)
// 4️⃣ Define routes with appropriate HTTP methods and paths:
//     POST   /              - Create new menu item (admin only)
//     GET    /              - Get all available menu items (public/customer)
//     GET    /:id           - Get specific menu item by ID (public/customer)
//     PUT    /:id           - Update menu item (admin only)
//     DELETE /:id           - Delete menu item (admin only)
//     GET    /suggestions/:userId - Get personalized menu suggestions (customer only)
// 5️⃣ Apply middleware in proper order:
//     - authMiddleware for protected routes
//     - roleMiddleware for admin-only operations
//     - Validation middleware for data integrity
// 6️⃣ Implement route parameter validation:
//     - Validate menu item ID format for ID-based routes
//     - Handle invalid ID formats gracefully
// 7️⃣ Export the configured router for use in app.js
