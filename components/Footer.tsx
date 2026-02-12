import { Mail, Calendar } from 'lucide-react';
import { IMPORTANT_DATES } from '@/constants/dates';
import { CONFERENCE } from '@/constants/conference';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-950 to-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white px-2 py-1 rounded mr-2 text-sm font-bold">IEEE</div>
              <h3 className="text-xl font-bold">{CONFERENCE.name}</h3>
            </div>
            <p className="text-gray-300 mb-5 pr-4">
              {CONFERENCE.description}
            </p>
            <div className="widget">
              <h5 className="widget-title text-lg font-bold mb-4 uppercase tracking-wider">SHARE ON SOCIAL MEDIA</h5>
              <ul className="footer-social flex space-x-3">
                <li>
                  <a 
                    className="facebook bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors" 
                    href="https://www.facebook.com/sharer/sharer.php?u=https://icfec2026.hanyang.ac.kr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a 
                    className="twitter bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors" 
                    href="http://twitter.com/share?text=IEEE%20Int.%20Conf.%20on%20Fog%20and%20Edge%20Computing%202026&amp;url=https://icfec2026.hanyang.ac.kr/&amp;hashtags=computing,edge,distributedsystems,cloud,computerscience,edgeai,edgecomputing,fogcomputing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a 
                    className="linkedin bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors" 
                    href="https://www.linkedin.com/sharing/share-offsite/?url=https://icfec2026.hanyang.ac.kr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Important Dates</h3>
            <ul className="space-y-3 text-gray-300">
              {IMPORTANT_DATES.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <Calendar className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">{item.label}</p>
                    {item.oldDate && (
                      <p className="text-sm text-gray-500 line-through">{item.oldDate}</p>
                    )}
                    <p className={`text-sm ${item.oldDate ? 'text-red-400 font-semibold' : 'text-gray-400'}`}>
                      {item.date}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex">
                <Mail className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p>Conference Email</p>
                  <p className="text-sm text-gray-400">{CONFERENCE.email}</p>
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