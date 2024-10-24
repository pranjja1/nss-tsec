
// EventDetailPage.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const events = [
  {
    id: 1,
    title: 'Annual Blood Donation Camp',
    date: '25th September 2024',
    description: 'Join us for our annual blood donation camp to contribute to saving lives and supporting local hospitals.',
    backgroundImage: 'url(/images/bdd10.jpg)',
    additionalInfo: 'NSS TSEC, in partnership with Tata Memorial Hospital, organizes impactful blood donation drives that significantly contribute to local healthcare needs. These events are pivotal in ensuring a steady blood supply for critical cases. With dedicated participation from students and community members, NSS TSEC plays a crucial role in supporting public health and saving lives through these well-coordinated drives.',
    images: [
      '/images/photo8.jpg',
      '/images/bdd2.jpg',
      '/images/bdd3.jpg',
      '/images/bdd4.jpg',
      '/images/bdd5.jpg',
      '/images/bdd6.jpg',
      '/images/bdd7.jpg',
    ],
  },
  {
    id: 2,
    title: 'Beach Cleanups',
    date: '21st September 2024',
    description: 'Help keep our shores pristine! Join us to remove litter and protect marine life. All are welcome—bring gloves and a love for the ocean!',
    backgroundImage: 'url(/images/beach10.jpg)',
    additionalInfo: 'NSS TSEC proudly organizes beach cleanups at Carter Road, Bandra, in collaboration with ConnectFor, MyGreen Society, and various NSS units. Our efforts are instrumental in preserving this beautiful coastline. Over the years, we’ve conducted more than 50 cleanups, rallying over 100 volunteers each time. Our commitment to Carter Road is unwavering, and we’re dedicated to making a substantial environmental impact. Join us in our mission to keep our beaches clean and contribute to a cleaner, greener Mumbai.',
    images: [
      '/images/beach8.jpg',
      '/images/beach7.jpg',
      '/images/beach6.jpg',
      '/images/beach5.jpg',
      '/images/beach4.jpg',
      '/images/beach3.jpg',
      '/images/beach2.jpg',
    ],
    formLink: 'https://forms.gle/5zro5QkzhB6BPthP9',
  },
  {
    id: 3,
    title: 'Beach Cleanups',
    date: '21st September 2024',
    description: 'Help keep our shores pristine! Join us to remove litter and protect marine life. All are welcome—bring gloves and a love for the ocean!',
    backgroundImage: 'url(/images/photo4.jpg)',
    additionalInfo: 'Our outreach includes health check-ups and educational seminars.',
    images: [
      '/images/bdd1.jpg',
      '/images/bdd2.jpg',
      '/images/bdd3.jpg',
      '/images/bdd4.jpg',
      '/images/bdd5.jpg',
      '/images/bdd6.jpg',
      '/images/bdd7.jpg',
    ],
  },
  {
    id: 4,
    title: 'Another Event Title',
    date: 'January 20, 2025',
    description: 'Details about another event.',
    backgroundImage: 'url(/images/photo1.jpg)',
    additionalInfo: 'More details will be announced soon.',
    images: [
      '/images/photo1.jpg',
      '/images/photo2.jpg',
    ],
  },
  // other events
  // Add other events here...
  // Add other events here...
];

export default function EventDetailPage() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const event = events.find(event => event.id === parseInt(id, 10));

  if (!event) {
    return <div className="text-center py-16 text-xl text-red-500">Event not found</div>;
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="bg-gray-50 text-gray-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="relative mb-12" style={{ height: '500px' }}>
          <div className="absolute inset-0 bg-cover bg-center rounded-lg" style={{ backgroundImage: event.backgroundImage }}></div>
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex flex-col justify-center items-center p-6">
            <h2 className="text-5xl font-extrabold text-white mb-4 text-center">{event.title}</h2>
            <p className="text-xl text-white mb-6 text-center">{event.date}</p>
            <p className="text-lg text-white text-center">{event.description}</p>
            {event.formLink && (
              <a
                href={event.formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-red-600 text-white text-lg font-medium px-8 py-3 rounded-lg shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105"
              >
                Register Here
              </a>
            )}
          </div>
        </div>

        {/* Additional Information */}
        {event.additionalInfo && (
          <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">Additional Information</h3>
            <p className="text-gray-700">{event.additionalInfo}</p>
          </div>
        )}

        {/* Images Gallery */}
        {event.images && (
          <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
            <h3 className="text-3xl font-semibold text-gray-900 mb-4">More Images</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {event.images.map((image, index) => (
                <div key={index} className="relative group">
                  <img
                    src={image}
                    alt={`Event Image ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg shadow-md cursor-pointer transition-transform transform group-hover:scale-105"
                    onClick={() => handleImageClick(image)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal for Expanded Image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={handleCloseModal}>
            <div className="relative max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg" onClick={e => e.stopPropagation()}>
              <button
                className="absolute top-4 right-4 text-gray-900 text-3xl font-bold"
                onClick={handleCloseModal}
              >
                &times;
              </button>
              <img
                src={selectedImage}
                alt="Expanded View"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
