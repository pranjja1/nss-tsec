import React from 'react';

const forumThreads = [
  {
    id: 1,
    title: 'Volunteering Opportunities',
    author: 'Ananya Sharma',
    date: 'September 20, 2024',
    summary: 'Discuss various volunteering opportunities available through NSS TSEC and share experiences.',
    image: '/images/volunteering.jpg', // Replace with your image path
  },
  {
    id: 2,
    title: 'Upcoming Events Planning',
    author: 'Rohit Patel',
    date: 'September 25, 2024',
    summary: 'Join the conversation about planning and organizing upcoming NSS events. Share your ideas and suggestions.',
    image: '/images/events.jpg', // Replace with your image path
  },
  {
    id: 3,
    title: 'Environmental Initiatives',
    author: 'Priya Desai',
    date: 'October 2, 2024',
    summary: 'Discuss initiatives and projects related to environmental conservation that NSS TSEC is involved in or planning.',
    image: '/images/environment.png', // Replace with your image path
  },
  // Add more threads as needed
];

export default function CommunityForum() {
  return (
    <section className="bg-gray-100 text-gray-900 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Community Forum</h2>
          <p className="mt-4 text-lg text-gray-700">
            Explore our community forum to discuss various topics, share ideas, and engage with fellow NSS TSEC members.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {forumThreads.map((thread) => (
            <div key={thread.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={thread.image}
                alt={thread.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-red-600">{thread.title}</h3>
                <div className="mt-2 text-sm text-gray-500">
                  <span>Posted by {thread.author}</span> - <span>{thread.date}</span>
                </div>
                <p className="mt-4 text-gray-700">{thread.summary}</p>
                <a
                  href="#"
                  className="mt-4 inline-block bg-red-600 text-white text-lg font-medium px-6 py-3 rounded-lg hover:bg-red-700 transition"
                >
                  Join the Discussion
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
