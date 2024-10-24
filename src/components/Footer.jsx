import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo and Social Links */}
          <div>
            <h2 className="text-lg font-semibold">NSS TSEC</h2>
            <p className="mt-4 text-gray-400">
              The National Service Scheme (NSS) unit of Thadomal Shahani Engineering College is dedicated to social services and student development.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="https://facebook.com" className="hover:text-red-500" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.595 0 0 .593 0 1.324V22.676c0 .73.595 1.324 1.325 1.324H12.81v-9.847H9.692V9.632h3.118V7.41c0-3.1 1.894-4.792 4.661-4.792 1.325 0 2.463.099 2.793.143v3.237h-1.917c-1.503 0-1.796.715-1.796 1.762v2.31h3.591l-.467 3.545h-3.124V24h6.127c.73 0 1.324-.593 1.324-1.324V1.324C24 .593 23.405 0 22.675 0z" />
                </svg>
              </a>
              <a href="https://instagram.com" className="hover:text-red-500" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.33 3.608 1.304.975.975 1.241 2.241 1.304 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.33 2.633-1.304 3.608-.975.975-2.241 1.241-3.608 1.304-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.33-3.608-1.304-.975-.975-1.241-2.241-1.304-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.33-2.633 1.304-3.608.975-.975 2.241-1.241 3.608-1.304C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.756 0 8.335.012 7.052.07 5.738.128 4.635.448 3.755 1.327 2.876 2.206 2.555 3.31 2.497 4.624.925 6.033.012 8.194.012 12s.912 5.967 2.485 7.376c.078 1.377.606 2.474 1.485 3.353.88.879 1.983 1.199 3.297 1.257 1.283.058 1.704.07 4.948.07s3.584-.012 4.867-.07c1.314-.058 2.418-.378 3.297-1.257.879-.879 1.407-1.976 1.485-3.353C23.088 17.967 24 15.806 24 12s-.912-5.967-2.485-7.376c-.078-1.377-.606-2.474-1.485-3.353-.88-.879-1.983-1.199-3.297-1.257-1.283-.058-1.704-.07-4.948-.07zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.162 12 18.162 18.162 15.403 18.162 12 15.403 5.838 12 5.838zm0 10.324c-2.296 0-4.162-1.866-4.162-4.162S9.704 7.838 12 7.838s4.162 1.866 4.162 4.162S14.296 16.162 12 16.162zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
                </svg>
              </a>
              <a href="https://twitter.com" className="hover:text-red-500" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.565-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.925 2.206-4.925 4.925 0 .386.044.763.128 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.576-.666 2.476 0 1.709.87 3.215 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.697 4.374 3.95 4.827-.413.112-.849.172-1.296.172-.317 0-.626-.031-.928-.089.627 1.956 2.445 3.379 4.6 3.418-1.684 1.319-3.808 2.107-6.115 2.107-.398 0-.79-.023-1.175-.068 2.179 1.398 4.768 2.213 7.548 2.213 9.057 0 14.01-7.506 14.01-14.01 0-.213-.005-.425-.014-.636.964-.696 1.8-1.562 2.462-2.549z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-red-500">About</a></li>
              <li><a href="#events" className="hover:text-red-500">Events</a></li>
              <li><a href="#community" className="hover:text-red-500">Community</a></li>
              <li><a href="#tracking" className="hover:text-red-500">Tracking</a></li>
              <li><a href="#reporting" className="hover:text-red-500">Reporting</a></li>
              <li><a href="#announcements" className="hover:text-red-500">Announcements</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>Thadomal Shahani Engineering College</li>
              <li>Bandstand, Bandra (W), Mumbai 400050</li>
              <li>Email: <a href="mailto:info@nsstsec.in" className="hover:text-red-500">info@nsstsec.in</a></li>
              <li>Phone: <a href="tel:+910000000000" className="hover:text-red-500">+91 000 0000 000</a></li>
            </ul>
          </div>

        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-400">
            © 2024 NSS TSEC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
