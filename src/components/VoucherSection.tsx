import React from 'react';

const VoucherSection: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-4">
      <h3 className="text-xl font-semibold text-green-700 mb-4">Available Vouchers</h3>
      <p className="text-gray-600">You can redeem your points for exciting vouchers!</p>
      {/* Add voucher display logic here */}
    </div>
  );
};

export default VoucherSection;
