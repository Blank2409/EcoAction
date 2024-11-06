import React from 'react';
import { Droplet, Leaf, Recycle, Award } from 'lucide-react';
import ProgressBar from './ProgressBar';
import ActivityCard from './ActivityCard';
import VoucherSection from './VoucherSection';


const Dashboard = () => {
  const totalPoints = 1500;
  const currentPoints = 750;

  const activities = [
    { icon: Droplet, label: 'Save Water', points: 50 },
    { icon: Leaf, label: 'Plant Trees', points: 100 },
    { icon: Recycle, label: 'Recycle', points: 75 },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-green-800">
        Welcome, Eco Warrior!
      </h2>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-green-700 mb-4">
          Your Eco Impact
        </h3>
        <ProgressBar current={currentPoints} total={totalPoints} />
        <p className="text-center mt-2 text-gray-600">
          {currentPoints} / {totalPoints} points earned
        </p>
      </div>
      <div>
        {activities.map((activity, index) => (
          <ActivityCard
            key={index}
            icon={activity.icon}
            label={activity.label}
            points={activity.points}
          />
        ))}
      </div>
      <VoucherSection />
      
    </div>
  );
};

export default Dashboard;
