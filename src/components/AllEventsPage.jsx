
// AllEventsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const events = [
  {
    id: 1,
    title: 'Annual Blood Donation Camp',
    date: '25th September 2024',
    description: 'Join us for our annual blood donation camp to contribute to saving lives and supporting local hospitals.',
    backgroundImage: 'url(/images/bdd1.jpg)',
  },
  {
    id: 2,
    title: 'Beach and Mangrove Cleanups',
    date: '21st September 2024',
    description: 'Help keep our shores pristine! Join us to remove litter and protect marine life. All are welcome—bring gloves and a love for the ocean!',
    backgroundImage: 'url(/images/beach10.jpg)',
  },
  {
    id: 3,
    title: 'Rural Development Outreach',
    date: 'December 10, 2024',
    description: 'Be a part of our rural outreach program, where we conduct health camps and educational activities in adopted villages.',
    backgroundImage: 'url(/images/photo4.jpg)',
  },
  {
    id: 4,
    title: 'Another Event Title',
    date: 'January 20, 2025',
    description: 'Details about another event.',
    backgroundImage: 'url(/images/photo1.jpg)', // Ensure this URL is correct
  },
  {
    id: 5,
    title: 'Annual Blood Donation Camp',
    date: '25th September 2024',
    description: 'Join us for our annual blood donation camp to contribute to saving lives and supporting local hospitals.',
    backgroundImage: 'url(/images/bdd1.jpg)', // Ensure this URL is correct
  },
  {
    id: 6,
    title: 'Beach and Mangrove Cleanups',
    date: '21st September 2024',
    description: 'Help keep our shores pristine! Join us to remove litter and protect marine life. All are welcome—bring gloves and a love for the ocean!',
    backgroundImage: 'url(/images/beach10.jpg)', // Ensure this URL is correct
  },
  {
    id: 7,
    title: 'Rural Development Outreach',
    date: 'December 10, 2024',
    description: 'Be a part of our rural outreach program, where we conduct health camps and educational activities in adopted villages.',
    backgroundImage: 'url(/images/photo4.jpg)', // Ensure this URL is correct
  },
  {
    id: 8,
    title: 'Another Event Title',
    date: 'January 20, 2025',
    description: 'Details about another event.',
    backgroundImage: 'url(/images/photo1.jpg)', // Ensure this URL is correct
  },
  {
    id: 9,
    title: 'Annual Blood Donation Camp',
    date: '25th September 2024',
    description: 'Join us for our annual blood donation camp to contribute to saving lives and supporting local hospitals.',
    backgroundImage: 'url(/images/bdd1.jpg)', // Ensure this URL is correct
  },
  {
    id: 10,
    title: 'Beach and Mangrove Cleanups',
    date: '21st September 2024',
    description: 'Help keep our shores pristine! Join us to remove litter and protect marine life. All are welcome—bring gloves and a love for the ocean!',
    backgroundImage: 'url(/images/beach10.jpg)', // Ensure this URL is correct
  },
  {
    id: 11,
    title: 'Rural Development Outreach',
    date: 'December 10, 2024',
    description: 'Be a part of our rural outreach program, where we conduct health camps and educational activities in adopted villages.',
    backgroundImage: 'url(/images/photo4.jpg)', // Ensure this URL is correct
  },
  {
    id: 12,
    title: 'Another Event Title',
    date: 'January 20, 2025',
    description: 'Details about another event.',
    backgroundImage: 'url(/images/photo1.jpg)', // Ensure this URL is correct
  },
  // Your events array here
  // Add more events as needed
];

export default function AllEventsPage() {
  return (
    <section className="bg-gray-100 text-gray-900 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 animate__animated animate__fadeIn">All Events</h2>
          <p className="text-lg text-gray-700 mb-8 animate__animated animate__fadeIn animate__delay-1s">
            Explore all our upcoming and past events. Find out how you can participate and contribute to our community efforts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {events.map((event) => (
            <div
              key={event.id}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl hover:rotate-1"
              style={{ backgroundImage: event.backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center', height: '350px' }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 transition-opacity duration-500 hover:opacity-80"></div>
              <div className="relative p-6 text-white z-10">
                <h3 className="text-2xl font-bold mb-2 animate__animated animate__fadeIn">{event.title}</h3>
                <p className="text-lg mb-4 animate__animated animate__fadeIn animate__delay-1s">{event.date}</p>
                <p className="text-sm mb-4 animate__animated animate__fadeIn animate__delay-2s">{event.description}</p>
                <Link
                  to={`/events/${event.id}`}
                  className="inline-block bg-red-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition-transform transform hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
