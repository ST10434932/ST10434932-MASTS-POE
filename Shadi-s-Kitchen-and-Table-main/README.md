# Shadi-s-Kitchen-and-Table
MAST 5112 POE PART final
 Chef Menu App - Final POE

## Overview

The Chef Menu App allows chefs to manage their restaurant's menu, while also enabling guests to view and filter menu items based on course categories. For the final POE, new features were added to improve functionality and structure. These features include average price breakdown by course, a new screen for menu item management, and a guest filter option. The app’s code has also been refactored for better organization.

## Features

### 1. **Average Price Breakdown on Home Screen**
   - The app now displays the average price of menu items, broken down into the following courses:
     - Starters
     - Main Meals
     - Desserts
   - This allows users to get an overview of the average cost of dishes in each course category.

### 2. **Menu Item Management on a Separate Screen**
   - The functionality for adding and removing menu items has been moved to a separate screen, improving the user experience.
   - The chef can:
     - **Add menu items**: Enter the name, description, and price of new dishes.
     - **Remove menu items**: Delete dishes from the menu.
   - The home page now shows only the complete menu without the option to add/remove items.

### 3. **Array for Storing Menu Items**
   - Menu items are stored in an array, ensuring that they persist as they are added or removed.
   - The list of menu items is dynamically updated when changes are made.

### 4. **Guest Filtering by Course**
   - A new feature allows guests to filter the menu by course, displaying only items from a specific category (e.g., starters, main meals, or desserts).
   - This provides a more tailored experience for the guest.

### 5. **Code Refactoring**
   - The app has been refactored to improve code structure by splitting the code into multiple files and functions.
   - This enhances readability, maintainability, and scalability.

## Changelog

- **[Feature]** Added average price breakdown by course (starters, main meals, desserts) on the home screen.
- **[Refactor]** Moved the menu item management feature to a new screen where the chef can add and remove menu items.
- **[Feature]** Implemented array-based storage for menu items.
- **[Feature]** Added a guest filter to display menu items based on the course.
- **[Refactor]** Refactored the code into multiple files and functions for better organization.

## Installation

### Prerequisites
- Ensure you have **Node.js** and **npm** installed on your machine.

### Steps to Run the App

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
