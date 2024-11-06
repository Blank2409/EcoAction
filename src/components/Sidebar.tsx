import React from 'react';
import { Award, Cloud, Droplet, Gift, Leaf, Recycle, Upload } from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', icon: Leaf, label: 'Dashboard' },
    { id: 'activities', icon: Recycle, label: 'Activities' },
    { id: 'upload', icon: Upload, label: 'Upload' },
    { id: 'rewards', icon: Gift, label: 'Rewards' },
    
  ];

  return (
    <aside className="bg-green-800 text-white w-64 p-6 space-y-6">
      {menuItems.map((item) => (
        <button
          key={item.id}
          className={`flex items-center space-x-2 w-full p-2 rounded ${
            activeTab === item.id ? 'bg-green-700' : 'hover:bg-green-700'
          }`}
          onClick={() => setActiveTab(item.id)}
        >
          <item.icon className="w-5 h-5" />
          <span>{item.label}</span>
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;