import React, { useState } from 'react';

export default function ReportingSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server
    console.log('Report submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section className="bg-gray-100 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Report an Issue</h2>
          <p className="mt-4 text-lg text-gray-700">
            If you have any issues or concerns, please fill out the form below to submit a report or complaint. We value your feedback and will address it promptly.
          </p>
        </div>

        <div className="mt-12">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full bg-gray-200 border border-gray-300 rounded-lg shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full bg-gray-200 border border-gray-300 rounded-lg shadow-sm "
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full bg-gray-200 border border-gray-300 rounded-lg shadow-sm "
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="mt-1 block w-full bg-gray-200 border border-gray-300 rounded-lg shadow-sm "
                ></textarea>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="bg-red-600 text-white text-lg font-medium px-6 py-3 rounded-lg hover:bg-red-700 transition"
              >
                Submit Report
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
