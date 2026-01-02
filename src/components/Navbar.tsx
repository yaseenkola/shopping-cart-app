import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

// Navigation bar component used across all pages
const Navbar: React.FC = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Shop</Link>
          <Link className="nav-link" to="/products">Products</Link>
          <Link className="nav-link position-relative" to="/cart">
            Cart
            {totalItems > 0 && (
              <span 
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: '0.7rem' }}
              >
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
