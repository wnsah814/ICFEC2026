import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full mb-3">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contact Us</h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-3 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Send a Message</h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input type="email" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea rows={4} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                  </div>
                  <button type="submit" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    <Send size={16} className="mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-blue-600 text-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Conference Information</h3>
                <div className="space-y-4">
                  <div className="flex">
                    <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-blue-100">Seoul, South Korea</p>
                    </div>
                  </div>
                  <div className="flex">
                    <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@icfec2026.org" className="text-blue-100 hover:text-white transition-colors">
                        info@icfec2026.org
                      </a>
                    </div>
                  </div>
                  <div className="flex">
                    <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-blue-100">+82 123 456 7890</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Program Chairs</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-900">Professor Name 1</p>
                    <p className="text-gray-600">chair1@university.edu</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Professor Name 2</p>
                    <p className="text-gray-600">chair2@university.edu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z" />
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  };

export default Contact;