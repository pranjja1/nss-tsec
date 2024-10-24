import React, { useState } from 'react';

export default function TrackingSection() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingData, setTrackingData] = useState(null);
  const [error, setError] = useState('');

  const handleTrackingChange = (e) => {
    setTrackingNumber(e.target.value);
  };

  const handleTrackSubmit = async (e) => {
    e.preventDefault();
    // Example API request to fetch tracking information
    try {
      // Replace with actual API endpoint
      const response = await fetch(`/api/track/${trackingNumber}`);
      if (!response.ok) {
        throw new Error('Tracking number not found');
      }
      const data = await response.json();
      setTrackingData(data);
      setError('');
    } catch (err) {
      setError(err.message);
      setTrackingData(null);
    }
  };

  return (
    <section className="bg-gray-100 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Track Your Report</h2>
          <p className="mt-4 text-lg text-gray-700">
            Use the tracking number provided to monitor the status of your report or issue.
          </p>
        </div>

        <div className="mt-12">
          <form onSubmit={handleTrackSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label htmlFor="tracking-number" className="block text-sm font-medium text-gray-700">
                Tracking Number
              </label>
              <input
                type="text"
                id="tracking-number"
                value={trackingNumber}
                onChange={handleTrackingChange}
                required
                className="mt-1 block w-full bg-gray-200 border border-gray-300 rounded-lg shadow-sm "
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-red-600 text-white text-lg font-medium px-6 py-3 rounded-lg hover:bg-red-700 transition"
              >
                Track
              </button>
            </div>
          </form>

          {trackingData && (
            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900">Tracking Details</h3>
              <div className="mt-4">
                <p className="text-lg font-medium text-gray-700">Status: <span className="font-normal text-gray-600">{trackingData.status}</span></p>
                <p className="text-lg font-medium text-gray-700">Last Updated: <span className="font-normal text-gray-600">{new Date(trackingData.lastUpdated).toLocaleDateString()}</span></p>
                <p className="text-lg font-medium text-gray-700">Details: <span className="font-normal text-gray-600">{trackingData.details}</span></p>
              </div>
            </div>
          )}

          {error && (
            <div className="mt-8 bg-red-100 text-red-700 p-4 rounded-lg">
              <p className="text-lg font-medium">Error: {error}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
