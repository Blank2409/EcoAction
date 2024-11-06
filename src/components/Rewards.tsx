import { useEffect, useState } from 'react';
import axios from 'axios';
import { Gift } from 'lucide-react';

const Rewards = () => {
  const [vouchers, setVouchers] = useState([]);
  const [userPoints, setUserPoints] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const vouchersResponse = await axios.get('/api/vouchers');
        setVouchers(vouchersResponse.data);

        const userStatsResponse = await axios.get('/api/user/stats');
        setUserPoints(userStatsResponse.data.currentPoints);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const redeemVoucher = async (voucherId) => {
    try {
      await axios.post(`/api/vouchers/redeem/${voucherId}`);
      alert('Voucher redeemed successfully!');
      // Refresh vouchers and user points
      const vouchersResponse = await axios.get('/api/vouchers');
      setVouchers(vouchersResponse.data);
      const userStatsResponse = await axios.get('/api/user/stats');
      setUserPoints(userStatsResponse.data.currentPoints);
    } catch (error) {
      console.error('Error redeeming voucher:', error);
      alert('Failed to redeem voucher. Please try again.');
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-green-800">Rewards</h2>
      <p className="text-lg text-gray-600">
        Your current points:{' '}
        <span className="font-bold text-green-600">{userPoints}</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vouchers.map((voucher) => (
          <div
            key={voucher.id}
            className="bg-white rounded-lg shadow p-6 space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-green-700">
                {voucher.title}
              </h3>
              <Gift className="w-8 h-8 text-green-500" />
            </div>
            <p className="text-gray-600">{voucher.description}</p>
            <p className="text-lg font-bold text-green-600">
              {voucher.points} points
            </p>
            <button
              onClick={() => redeemVoucher(voucher.id)}
              disabled={userPoints < voucher.points}
              className={`w-full py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white 
                ${
                  userPoints >= voucher.points
                    ? 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
            >
              Redeem
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rewards;
