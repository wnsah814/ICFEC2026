import { ChevronDown, Calendar, MapPin } from 'lucide-react';

const Hero = ({ handleNavClick }: { handleNavClick: (id: string) => void }) => {
    return (
      <div id="hero" className="relative h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 flex items-center justify-center text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-repeat" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-indigo-500 opacity-20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="inline-block mb-6 bg-blue-600/90 backdrop-blur-sm px-4 py-2 rounded-lg">
            <span className="font-medium text-sm tracking-wider uppercase">IEEE ICFEC 2026</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-md tracking-tight">
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">10th IEEE International Conference</span><br />
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">on Fog and Edge Computing</span>
          </h1>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10 mb-10 max-w-3xl mx-auto text-lg opacity-90">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>April 22-23, 2026</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>New York, United States</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-5 mb-12">
            <button 
              onClick={() => handleNavClick('call-for-papers')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg border border-blue-500/50"
            >
              Submit a Paper
            </button>
            <button 
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 border border-white/30 rounded-lg transition duration-300 backdrop-blur-sm"
            >
              Register Now
            </button>
          </div>
          
          <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
            <button 
              onClick={() => handleNavClick('about')}
              className="text-white opacity-80 hover:opacity-100 transition-opacity"
            >
              <span className="block text-sm mb-2 font-medium">Learn More</span>
              <ChevronDown size={24} className="mx-auto" />
            </button>
          </div>
        </div>
      </div>
    );
  };

export default Hero;