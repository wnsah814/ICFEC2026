import { ChevronDown, Calendar, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CONFERENCE } from '@/constants/conference';
import { HERO_IMAGES } from '@/data/hero';

const Hero = ({ handleNavClick }: { handleNavClick: (id: string) => void }) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [HERO_IMAGES.length]);

    return (
        <div id="hero" className="relative h-dvh flex items-center justify-center text-white overflow-hidden">
            {/* Image Carousel */}
            <div className="absolute inset-0">
                {HERO_IMAGES.map((image, index) => (
                    <div
                        key={image}
                        className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat overflow-hidden transition-opacity duration-1000 ${
                            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ backgroundImage: `url(${image})` }}
                    />
                ))}
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="container mx-auto px-4 z-10 text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg tracking-tight">
                    <span className="text-white">10th IEEE International Conference</span><br />
                    <span className="text-white">on Fog and Edge Computing</span>
                </h1>

                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10 mb-14 md:mb-20 max-w-3xl mx-auto text-lg">
                    <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <Calendar className="w-5 h-5 mr-2" />
                        <span>{CONFERENCE.dates}</span>
                    </div>
                    <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <MapPin className="w-5 h-5 mr-2" />
                        <span>{CONFERENCE.location}</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-5 mb-12">
                    <button 
                        onClick={() => handleNavClick('call-for-papers')}
                        className="cursor-pointer bg-white hover:bg-white/90 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
                    >
                        Submit a Paper
                    </button>
                </div>

                <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
                    <button 
                        onClick={() => handleNavClick('about')}
                        className="cursor-pointer text-white opacity-80 hover:opacity-100 transition-opacity px-4 py-2 rounded-lg"
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