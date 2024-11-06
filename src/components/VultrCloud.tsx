import { Cloud, Database, Server } from 'lucide-react';

const VultrCloud = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-green-800">
        Vultr Cloud Integration
      </h2>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-green-700 mb-4">
          Cloud Infrastructure
        </h3>
        <div className="flex items-center justify-center space-x-8">
          <div className="text-center">
            <Cloud className="w-16 h-16 text-blue-500 mx-auto" />
            <p className="mt-2 text-gray-600">Vultr Cloud</p>
          </div>
          <div className="text-center">
            <Database className="w-16 h-16 text-green-500 mx-auto" />
            <p className="mt-2 text-gray-600">User Data</p>
          </div>
          <div className="text-center">
            <Server className="w-16 h-16 text-purple-500 mx-auto" />
            <p className="mt-2 text-gray-600">API Servers</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold text-green-700 mb-4">
          Vultr Cloud Benefits
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>High-performance SSD cloud servers</li>
          <li>Global network of data centers</li>
          <li>Scalable infrastructure for growing user base</li>
          <li>Secure and reliable data storage</li>
          <li>Low-latency API responses for smooth user experience</li>
        </ul>
      </div>
    </div>
  );
};

export default VultrCloud;
