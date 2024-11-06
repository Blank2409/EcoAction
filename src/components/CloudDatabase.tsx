import React from 'react';

const CloudDatabase: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-4">
      <h3 className="text-xl font-semibold text-green-700 mb-4">Cloud Data</h3>
      <p className="text-gray-600">
        Your latest activity data is synced with the cloud.
      </p>
      {/* Add cloud database logic here */}
    </div>
  );
};

export default CloudDatabase;
