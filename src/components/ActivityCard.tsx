import React from 'react';
import { LucideIcon } from 'lucide-react'; // Adjust import if necessary

interface ActivityCardProps {
  icon: LucideIcon;
  label: string;
  points: number;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  icon: Icon,
  label,
  points,
}) => {
  return (
    <div className="flex items-center space-x-4 bg-gray-100 rounded-lg p-4 shadow">
      <Icon className="text-green-600 w-8 h-8" />
      <div>
        <h4 className="font-semibold text-gray-700">{label}</h4>
        <p className="text-gray-500">{points} points</p>
      </div>
    </div>
  );
};

export default ActivityCard;
