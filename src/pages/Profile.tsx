import { useState } from 'react';
import { User } from '../types';

export default function Profile() {
  const [user, setUser] = useState<User>({
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // Handle profile update
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center space-x-6 mb-6">
            <img
              src={user.avatar}
              alt={user.name}
              className="h-24 w-24 rounded-full"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
              <p className="text-gray-500">{user.email}</p>
            </div>
          </div>

          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
            >
              Edit Profile
            </button>
          )}
        </div>

        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Order History</h3>
          <div className="space-y-4">
            {/* Sample order history */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">Order #12345</p>
                  <p className="text-sm text-gray-500">Placed on March 15, 2024</p>
                  <p className="text-sm text-gray-500">2 items • ₹24,998</p>
                </div>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                  Delivered
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}