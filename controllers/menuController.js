// ===============================================
// controllers/menuController.js
// -----------------------------------------------
// Manages CRUD operations for menu items and admin menu management.
// Handles requests for creating, reading, updating, and deleting menu items.
// ===============================================

// 1️⃣ createMenuItem(req, res)
//     - Handle menu item creation requests (admin only)
//     - Extract menu data from request body
//     - Validate required fields and data formats
//     - Call menuService.createMenuItem() to save new item
//     - Return success response with created menu item
//     - Handle validation errors and duplicate item scenarios

// 2️⃣ getAllMenuItems(req, res)
//     - Handle requests for all available menu items
//     - Support filtering by category and availability
//     - Call menuService.getAllMenuItems() to fetch items
//     - Return success response with menu items array

// 3️⃣ getMenuItemById(req, res)
//     - Handle requests for specific menu item by ID
//     - Extract item ID from request parameters
//     - Call menuService.getMenuItemById() to fetch item
//     - Return success response with menu item data
//     - Handle not found scenarios

// 4️⃣ updateMenuItem(req, res)
//     - Handle menu item update requests (admin only)
//     - Extract item ID from request parameters
//     - Extract update data from request body
//     - Call menuService.updateMenuItem() to modify item
//     - Return success response with updated menu item
//     - Handle validation errors and not found scenarios

// 5️⃣ deleteMenuItem(req, res)
//     - Handle menu item deletion requests (admin only)
//     - Extract item ID from request parameters
//     - Call menuService.deleteMenuItem() to remove item
//     - Return success response
//     - Handle not found scenarios

// 6️⃣ getMenuSuggestions(req, res)
//     - Handle smart menu suggestion requests
//     - Extract user ID from request parameters
//     - Call menuService.getMenuSuggestions() to get personalized recommendations
//     - Return success response with suggested menu items

// 7️⃣ Export all controller functions for use in menuRoutes
