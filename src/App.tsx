import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Products from './pages/Products';
import Cart from './pages/Cart';
import DeliveryAddressPage from './pages/DeliveryAddress';
import OrderConfirmation from './pages/OrderConfirmation';

// Main App component with routing
function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Redirect root to products page */}
          <Route path="/" element={<Navigate to="/products" replace />} />
          
          {/* Products page (main shop page) */}
          <Route path="/products" element={<Products />} />
          
          {/* Cart page */}
          <Route path="/cart" element={<Cart />} />
          
          {/* Delivery Address page */}
          <Route path="/delivery-address" element={<DeliveryAddressPage />} />
          
          {/* Order Confirmation page */}
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
