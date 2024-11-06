import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ActivityCard from './ActivityCard';

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get('/api/activities');
        setActivities(response.data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-green-800">Eco-Friendly Activities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <ActivityCard key={index} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default Activities;