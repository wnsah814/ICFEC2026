const CallForPapers = () => {
    const topics = [
      'Data centers and infrastructures for Fog/Edge computing',
      'Middleware and runtime systems for Fog/Edge infrastructures',
      'Programming models for Fog/Edge computing',
      'Storage and data management platforms for Fog/Edge computing',
      'Scheduling for Fog/Edge infrastructures',
      'Distributed and federated machine learning on Fog/Edge',
      'Performance monitoring and metering of Fog/Edge infrastructures',
      'Legal issues and business aspects of Fog/Edge computing',
      'Security, privacy, trust and provenance issues in Fog/Edge computing',
      'Modelling and simulation of Fog/Edge environments',
      'Novel, latency-sensitive and locality-critical applications of Fog/Edge computing'
    ];
  
    return (
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Call for Papers</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            The conference seeks to attract high-quality contributions covering both theory and practice over system software and domain-specific
            applications related to next-generation distributed systems that use the edge. Some representative topics of interest include, but are not
            limited to:
          </p>
          
          <ul className="list-disc pl-6 space-y-3 mb-8">
            {topics.map((topic, index) => (
              <li key={index} className="text-gray-700">{topic}</li>
            ))}
          </ul>
          
          <div className="mt-10 text-center">
            <a 
              href="#" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 inline-flex items-center"
            >
              Download the PDF call for papers
            </a>
          </div>
        </div>
      </div>
    );
  };

export default CallForPapers;