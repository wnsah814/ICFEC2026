const KeynotePapers = () => {
    return (
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Keynote and Accepted Papers</h2>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Keynote</h3>
          
          <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
            <div className="w-full md:w-1/3 bg-gray-200 rounded-lg overflow-hidden">
              <div className="aspect-square relative">
                {/* Placeholder for keynote speaker image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                  <span className="text-gray-500">Speaker Photo</span>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <h4 className="text-xl font-medium mb-2">Dr. Researcher Name</h4>
              <p className="text-blue-600 mb-4">Principal Engineer, Tech Company</p>
              
              <h5 className="font-semibold text-lg mb-2">Title: 5G Architecture and Emergence of the Edge</h5>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Among the many areas of impact 5G will have is the nature of &quot;edge&quot;. As recently as ten years ago, with LTE and prior wireless
                generations, it was common to build networks with highly centralized service nodes. With LTE, we expect the traditional network
                morphology to flip on its heels with the emergence of a top-heavy &quot;edge&quot;. In this presentation, we discuss the interpretation and causes of
                this inversion and highlight some of the most immediate consequences.
              </p>
              
              <div className="mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center">
                  <span>Watch the presentation</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold mb-6">Accepted Papers</h3>
          
          <div className="space-y-6">
            {/* Example of accepted papers - you would replace these with actual papers */}
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h4 className="font-medium mb-1">Optimizing Resource Allocation in Fog Computing for IoT Applications</h4>
              <p className="text-sm text-gray-600">Authors: Jane Doe, John Smith, University of Technology</p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h4 className="font-medium mb-1">Secure and Privacy-Preserving Data Processing at the Edge</h4>
              <p className="text-sm text-gray-600">Authors: Alice Johnson, Bob Brown, Research Institute</p>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h4 className="font-medium mb-1">Energy-Efficient Scheduling for Fog Computing Environments</h4>
              <p className="text-sm text-gray-600">Authors: Charlie Evans, Diana Ford, Global University</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default KeynotePapers;