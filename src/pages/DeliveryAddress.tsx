import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import { DeliveryAddress } from '../types';
import Navbar from '../components/Navbar';

// Delivery Address page component - form for entering delivery information
const DeliveryAddressPage: React.FC = () => {
  const { setDeliveryAddress } = useCart();
  const navigate = useNavigate();

  // Form state with default values matching the image
  const [formData, setFormData] = useState<DeliveryAddress>({
    street: 'Azad Nagar 1st Cross',
    apartment: 'Sameena Complex, 2nd Floor',
    city: 'Bhatkal',
    state: 'Karnataka',
    zipCode: '581320',
    country: 'India'
  });

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDeliveryAddress(formData);
    navigate('/order-confirmation');
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="text-center mb-3">Delivery Address</h2>
            <p className="text-center text-muted mb-4">Enter your complete delivery information</p>

            {/* Delivery Address Form */}
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  {/* Street Address */}
                  <div className="mb-3">
                    <label className="form-label">
                      Street Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="street"
                      value={formData.street}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Apartment */}
                  <div className="mb-3">
                    <label className="form-label">Apartment, Suite, Unit (Optional)</label>
                    <input
                      type="text"
                      className="form-control"
                      name="apartment"
                      value={formData.apartment}
                      onChange={handleChange}
                    />
                  </div>

                  {/* City, State, ZIP in one row */}
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <label className="form-label">
                        City <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label className="form-label">
                        State <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label className="form-label">
                        ZIP Code <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Country */}
                  <div className="mb-4">
                    <label className="form-label">
                      Country <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Country</option>
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-primary w-100">
                    Continue to Order Summary
                  </button>
                </form>
              </div>
            </div>

            {/* Progress Indicator */}
            <p className="text-center text-muted mt-4" style={{ fontSize: '0.9rem' }}>
              Step 2 of 3 • Delivery Information
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddressPage;
