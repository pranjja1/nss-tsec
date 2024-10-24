import React from 'react';

const announcements = [
  {
    id: 1,
    title: 'Community Clean-Up Drive',
    date: 'September 25, 2024',
    description: 'Join us for a community clean-up drive to help maintain the cleanliness of our local environment. All NSS members are encouraged to participate.',
  },
  {
    id: 2,
    title: 'Annual NSS Fest',
    date: 'October 15, 2024',
    description: 'The Annual NSS Fest is just around the corner! Prepare for a day filled with fun activities, workshops, and guest speakers. Don’t miss out!',
  },
  {
    id: 3,
    title: 'Blood Donation Camp',
    date: 'November 5, 2024',
    description: 'We are organizing a blood donation camp in collaboration with local hospitals. Your donation can save lives. Please mark your calendars and participate.',
  },
  // Add more announcements as needed
];

export default function Announcements() {
  return (
    <section className="bg-gray-100 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Announcements</h2>
          <p className="mt-4 text-lg text-gray-700">
            Stay updated with the latest announcements and upcoming events organized by NSS TSEC.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-red-600">{announcement.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{announcement.date}</p>
              <p className="mt-4 text-gray-700">{announcement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
