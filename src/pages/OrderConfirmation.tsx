import React from 'react';
import { useCart } from '../CartContext';
import Navbar from '../components/Navbar';

// Order Confirmation page component - displays order confirmation details
const OrderConfirmation: React.FC = () => {
  const { deliveryAddress } = useCart();

  // Handle print confirmation
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            {/* Order Confirmation Card */}
            <div className="card shadow-sm">
              <div className="card-body p-5">
                <h2 className="card-title mb-4">Order Confirmation</h2>

                {/* Delivery Address Section */}
                {deliveryAddress && (
                  <div className="mb-4">
                    <h5 className="mb-3">Delivery Address</h5>
                    <div className="ms-3">
                      <p className="mb-2">
                        <strong>Street:</strong> {deliveryAddress.street}
                      </p>
                      <p className="mb-2">
                        <strong>Apartment:</strong> {deliveryAddress.apartment}
                      </p>
                      <p className="mb-2">
                        <strong>City:</strong> {deliveryAddress.city}
                      </p>
                      <p className="mb-2">
                        <strong>State:</strong> {deliveryAddress.state}
                      </p>
                      <p className="mb-2">
                        <strong>ZIP Code:</strong> {deliveryAddress.zipCode}
                      </p>
                      <p className="mb-2">
                        <strong>Country:</strong> {deliveryAddress.country}
                      </p>
                    </div>
                  </div>
                )}

                {/* Print Button */}
                <button
                  className="btn btn-success mt-3"
                  onClick={handlePrint}
                >
                  Print Confirmation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
