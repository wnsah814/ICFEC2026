import { Mail, Calendar, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-950 to-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white px-2 py-1 rounded mr-2 text-sm font-bold">IEEE</div>
              <h3 className="text-xl font-bold">ICFEC 2026</h3>
            </div>
            <p className="text-gray-300 mb-5 pr-4">
              The IEEE International Conference on Fog and Edge Computing (ICFEC) is the premier conference on fog and edge computing.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Conference</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#about" className="hover:text-blue-300 transition-colors inline-flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  About
                </a>
              </li>
              <li>
                <a href="#call-for-papers" className="hover:text-blue-300 transition-colors inline-flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Call for Papers
                </a>
              </li>
              <li>
                <a href="#keynote-papers" className="hover:text-blue-300 transition-colors inline-flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Keynote Papers
                </a>
              </li>
              <li>
                <a href="#organization" className="hover:text-blue-300 transition-colors inline-flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Organization
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Important Dates</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <Calendar className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Paper Submission</p>
                  <p className="text-sm text-gray-400">January 15, 2026</p>
                </div>
              </li>
              <li className="flex items-start">
                <Calendar className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Author Notification</p>
                  <p className="text-sm text-gray-400">March 1, 2026</p>
                </div>
              </li>
              <li className="flex items-start">
                <Calendar className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Camera-ready Submission</p>
                  <p className="text-sm text-gray-400">April 1, 2026</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex">
                <Mail className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p>Khalid Elgazzar</p>
                  <p className="text-sm text-gray-400">khalid.elgazzar[at]ontariotech.ca</p>
                </div>
              </li>
              <li className="flex">
                <Mail className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p>Stefan Schulte</p>
                  <p className="text-sm text-gray-400">stefan.schulte[at]tuhh.de</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-900/50 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} IEEE International Conference on Fog and Edge Computing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;