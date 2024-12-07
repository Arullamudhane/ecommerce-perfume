import { useCart } from '../context/CartContext';
import { Minus, Plus, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg transform transition-transform z-50 overflow-y-auto">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
        {state.items.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.brand}</p>
                    <p className="font-semibold">{formatPrice(item.price)}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() =>
                          dispatch({
                            type: 'UPDATE_QUANTITY',
                            payload: { id: item.id, quantity: Math.max(0, item.quantity - 1) }
                          })
                        }
                        className="p-1 rounded-md hover:bg-gray-100"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          dispatch({
                            type: 'UPDATE_QUANTITY',
                            payload: { id: item.id, quantity: item.quantity + 1 }
                          })
                        }
                        className="p-1 rounded-md hover:bg-gray-100"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>{formatPrice(state.total)}</span>
              </div>
              <button
                onClick={() => navigate('/checkout')}
                className="w-full mt-4 bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}