import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Activities from './components/Activities';
import Upload from './components/Upload';
import Rewards from './components/Rewards';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <Router>
      <div className="min-h-screen bg-green-50 flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/rewards" element={<Rewards />} />
              {/* Removed the Vultr Cloud route */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;