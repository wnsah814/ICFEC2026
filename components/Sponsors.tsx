import Image from 'next/image';

const Sponsors = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Sponsors</h2>
      
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-gray-700 mb-12">
          We thank our generous sponsors.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8 flex items-center justify-center">
            <div className="h-32 flex items-center">
              {/* IEEE logo */}
              <Image 
                src="/images/ieee-logo.png" 
                alt="IEEE logo" 
                width={200}
                height={100}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 flex items-center justify-center">
            <div className="h-32 flex items-center">
              {/* IEEE Computer Society logo */}
              <Image 
                src="/images/ieee-cs-logo.png" 
                alt="IEEE Computer Society logo" 
                width={200}
                height={100}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors; 