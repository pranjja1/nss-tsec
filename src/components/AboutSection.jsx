import React from 'react';

export default function AboutSection() {
  return (
    <section className="bg-gray-100 text-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">About NSS TSEC</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            The National Service Scheme (NSS) unit of Thadomal Shahani Engineering College (TSEC) is a platform for students to work for social causes and serve the community, while also developing leadership and personal skills.
          </p>
        </div>

        {/* Vision and Mission */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-red-600">Our Vision</h2>
            <p className="mt-4 text-gray-700">
              To build a socially conscious, responsible, and empathetic generation of engineers who understand the value of service, collaboration, and innovation for societal betterment.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-red-600">Our Mission</h2>
            <p className="mt-4 text-gray-700">
              To actively engage students in community service, empowering them to address societal challenges, contribute to the welfare of society, and develop a sense of responsibility and empathy.
            </p>
          </div>
        </div>

        {/* Activities Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900">Our Key Activities</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Activity 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-red-600">Blood Donation Camps</h3>
              <p className="mt-4 text-gray-700">
                NSS TSEC organizes annual blood donation drives, collecting hundreds of pints of blood to help save lives and support hospitals in the city.
              </p>
            </div>

            {/* Activity 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-red-600">Environmental Awareness</h3>
              <p className="mt-4 text-gray-700">
                We conduct tree plantation drives, cleanliness campaigns, and workshops on sustainable living to promote environmental consciousness.
              </p>
            </div>

            {/* Activity 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-red-600">Rural Development Programs</h3>
              <p className="mt-4 text-gray-700">
                NSS TSEC adopts villages, organizing health camps, educational programs, and infrastructure improvements to contribute to rural development.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Join Us in Making a Difference</h2>
          <p className="mt-4 text-lg text-gray-700">
            Be part of a movement that strives to bring positive change in society. Together, we can make a meaningful impact.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block bg-red-600 text-white text-lg font-medium px-6 py-3 rounded-lg hover:bg-red-700 transition"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
}
