import React from 'react';

const photos = [
  {
    id: 1,
    src: '/images/photo1.jpg', // Replace with your image path
    alt: 'Photo 1 Description',
  },
  {
    id: 2,
    src: '/images/photo6.jpg', // Replace with your image path
    alt: 'Photo 2 Description',
  },
  {
    id: 3,
    src: '/images/photo3.jpg', // Replace with your image path
    alt: 'Photo 3 Description',
  },
  {
    id: 4,
    src: '/images/photo4.jpg', // Replace with your image path
    alt: 'Photo 4 Description',
  },
  {
    id: 5,
    src: '/images/photo5.jpg', // Replace with your image path
    alt: 'Photo 4 Description',
  },
  {
    id: 6,
    src: '/images/photo6.jpg', // Replace with your image path
    alt: 'Photo 4 Description',
  },
  {
    id: 7,
    src: '/images/photo1.jpg', // Replace with your image path
    alt: 'Photo 4 Description',
  },
  {
    id: 8,
    src: '/images/photo4.jpg', // Replace with your image path
    alt: 'Photo 4 Description',
  },
  {
    id: 8,
    src: '/images/photo3.jpg', // Replace with your image path
    alt: 'Photo 4 Description',
  },
  {
    id: 10,
    src: '/images/photo4.jpg', // Replace with your image path
    alt: 'Photo 4 Description',
  },
  {
    id: 11,
    src: '/images/photo6.jpg', // Replace with your image path
    alt: 'Photo 4 Description',
  },
  {
    id: 12,
    src: '/images/photo1.jpg', // Replace with your image path
    alt: 'Photo 4 Description',
  },
  // Add more photos as needed
];

export default function Gallery() {
  return (
    <section className="bg-gray-100 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Gallery</h2>
          <p className="mt-4 text-lg text-gray-700">
            Explore our gallery to see photos from various NSS TSEC events and activities.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {photos.map((photo) => (
            <div key={photo.id} className="bg-white overflow-hidden rounded-lg shadow-lg">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
