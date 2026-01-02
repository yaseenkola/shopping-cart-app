# Shopping Cart App

A simple e-commerce shopping cart application built with React, TypeScript, and Bootstrap.

## Features

- **Products Page**: Browse and add products to cart
- **Cart Page**: View cart items, update quantities, and proceed to checkout
- **Delivery Address Page**: Enter delivery information
- **Order Confirmation Page**: View order confirmation details

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Navigate to the project directory:
   ```bash
   cd shopping-cart-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is busy).

### Building for Production

To create a production build:
```bash
npm run build
```

## Project Structure

```
shopping-cart-app/
├── src/
│   ├── components/       # Reusable components (Navbar)
│   ├── pages/           # Page components (Products, Cart, etc.)
│   ├── App.tsx          # Main app component with routing
│   ├── CartContext.tsx  # Cart state management
│   ├── data.ts          # Dummy product data
│   ├── types.ts         # TypeScript type definitions
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Project dependencies
└── tsconfig.json        # TypeScript configuration
```

## How It Works

### State Management

The app uses React Context API for state management:
- `CartContext` manages cart items and delivery address
- All components can access cart state using the `useCart()` hook

### Routing

React Router is used for navigation between pages:
- `/products` - Products page
- `/cart` - Shopping cart
- `/delivery-address` - Delivery address form
- `/order-confirmation` - Order confirmation

### Key Components

1. **Products Page**: Displays products in a grid. Click "Add to Cart" to add items.
2. **Cart Page**: Shows all cart items with quantity controls. Calculate totals and proceed to checkout.
3. **Delivery Address Page**: Form to enter delivery information (pre-filled with example data).
4. **Order Confirmation Page**: Displays the delivery address and print confirmation option.

## Technologies Used

- **React**: UI library
- **TypeScript**: Type safety
- **Bootstrap**: Styling and responsive design
- **React Router**: Client-side routing
- **Vite**: Build tool and development server

## Notes for Beginners

- All components are in the `src/pages/` directory
- The `CartContext` provides shared state across components
- Bootstrap classes are used for styling (e.g., `btn`, `card`, `container`)
- TypeScript types are defined in `src/types.ts` for better code safety
