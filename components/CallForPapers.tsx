const CallForPapers = () => {
    const topics = [
      'Data centers and infrastructures along the compute continuum',
      'Mobility management along the compute continuum',
      'Federated learning and distributed machine learning in and for the compute continuum',
      '5G/6G for the compute continuum',
      'Middleware and runtime systems for the compute continuum',
      'Programming models for the compute continuum',
      'Storage and data management platforms along the compute continuum',
      'Scheduling and resource management for the compute continuum',
      'Security, privacy, trust, and provenance issues for the compute continuum',
      'Distributed consensus and blockchains in the compute continuum',
      'Modeling and simulation for and in the compute continuum',
      'Performance monitoring and metering of infrastructures along the compute continuum',
      '(Big) Data processing in the compute continuum',
      'Energy-efficient computing in the compute continuum'
    ];
  
    return (
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Call for Papers</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
          The conference seeks to attract high-quality contributions covering both theory and practice over systems research and emerging domain-specific applications related to next-generation distributed systems that cover different parts of the cloud-edge compute continuum. This covers different computing models, including mist computing, edge computing, multi-access edge computing, fog computing, and mobile cloud computing. Some representative topics of interest include, but are not limited to:
          </p>
          
          <ul className="list-disc pl-6 space-y-3 mb-8">
            {topics.map((topic, index) => (
              <li key={index} className="text-gray-700">{topic}</li>
            ))}
          </ul>
          
          <div className="mt-10 text-center">
            <a 
              href="#" 
              className="bg-blue-600 hover:bg-blue-700 text-red-600 font-bold py-3 px-6 rounded-lg transition duration-300 inline-flex items-center"
            >
              Download the PDF call for papers
            </a>
          </div>
        </div>
      </div>
    );
  };

export default CallForPapers;