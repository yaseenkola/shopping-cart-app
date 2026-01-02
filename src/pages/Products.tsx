import React from 'react';
import { useCart } from '../CartContext';
import { products } from '../data';
import Navbar from '../components/Navbar';

// Products page component - displays all products in a grid
const Products: React.FC = () => {
  const { addToCart, cartItems, updateQuantity, removeFromCart } = useCart();
  
  // Helper function to get cart quantity for a product
  const getCartQuantity = (productId: number): number => {
    const cartItem = cartItems.find(item => item.product.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="mb-4">Our Products</h2>
        
        {/* Product Grid */}
        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="card h-100">
                <img 
                  src={product.image} 
                  className="card-img-top" 
                  alt={product.title}
                  style={{ height: '300px', objectFit: 'contain', padding: '20px' }}
                />
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title text-muted text-uppercase" style={{ fontSize: '0.8rem' }}>
                    {product.category}
                  </h6>
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text flex-grow-1" style={{ fontSize: '0.9rem' }}>
                    {product.description}
                  </p>
                  <div className="mt-auto">
                    <p className="card-text">
                      <strong>${product.price.toFixed(2)}</strong>
                    </p>
                    {getCartQuantity(product.id) === 0 ? (
                      <button
                        className="btn btn-primary w-100"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <div className="d-flex align-items-center justify-content-center" style={{ gap: '8px' }}>
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => {
                            const currentQty = getCartQuantity(product.id);
                            if (currentQty <= 1) {
                              removeFromCart(product.id);
                            } else {
                              updateQuantity(product.id, currentQty - 1);
                            }
                          }}
                          style={{ 
                            minWidth: '40px',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            lineHeight: '1',
                            padding: '6px 12px'
                          }}
                        >
                          −
                        </button>
                        <div 
                          className="d-flex align-items-center justify-content-center"
                          style={{ 
                            minWidth: '50px',
                            fontWeight: '600',
                            fontSize: '1.1rem',
                            padding: '0 8px'
                          }}
                        >
                          {getCartQuantity(product.id)}
                        </div>
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => updateQuantity(product.id, getCartQuantity(product.id) + 1)}
                          style={{ 
                            minWidth: '40px',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            lineHeight: '1',
                            padding: '6px 12px'
                          }}
                        >
                          +
                        </button>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => removeFromCart(product.id)}
                          title="Remove from cart"
                          style={{ 
                            minWidth: '40px',
                            padding: '6px 12px',
                            marginLeft: '8px'
                          }}
                        >
                          🗑️
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
