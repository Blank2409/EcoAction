import { useState } from 'react';
import axios from 'axios';
import { Upload as UploadIcon } from 'lucide-react';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [activity, setActivity] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !activity) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('activity', activity);

    try {
      await axios.post('/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Upload successful!');
      setFile(null);
      setActivity('');
    } catch (error) {
      console.error('Error uploading:', error);
      alert('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-green-800">Upload Eco Activity</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-4">
        <div>
          <label htmlFor="activity" className="block text-sm font-medium text-gray-700">
            Activity Type
          </label>
          <select
            id="activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            <option value="">Select an activity</option>
            <option value="water">Save Water</option>
            <option value="tree">Plant Trees</option>
            <option value="recycle">Recycle</option>
          </select>
        </div>
        <div>
          <label htmlFor="file" className="block text-sm font-medium text-gray-700">
            Upload Photo
          </label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-green-50 file:text-green-700
              hover:file:bg-green-100"
          />
        </div>
        <button
          type="submit"
          disabled={uploading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          {uploading ? 'Uploading...' : (
            <>
              <UploadIcon className="w-5 h-5 mr-2" />
              Upload Activity
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default Upload;