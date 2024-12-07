import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { DeliveryAddress } from '../types';

export default function Checkout() {
  const { state } = useCart();
  const [address, setAddress] = useState<DeliveryAddress>({
    fullName: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment integration here
    console.log('Processing payment...', { address, items: state.items });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                value={address.fullName}
                onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Street Address</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                value={address.street}
                onChange={(e) => setAddress({ ...address, street: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  value={address.city}
                  onChange={(e) => setAddress({ ...address, city: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">State</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  value={address.state}
                  onChange={(e) => setAddress({ ...address, state: e.target.value })}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">PIN Code</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  value={address.pincode}
                  onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  value={address.phone}
                  onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Place Order
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
                </div>
              ))}
            </div>
            <div className="border-t mt-6 pt-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>{formatPrice(state.total)}</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900 mt-2">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between text-lg font-semibold mt-4">
                <p>Total</p>
                <p>{formatPrice(state.total)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}