const CallForPapers = () => {
    const topics = [
        'Hardware architectures and devices for fog and edge computing',
        'Software architectures, programming models, network protocols, storage and data management platforms, middlewares, and runtime systems for fog computing, edge computing, or the edge-fog-cloud continuum/compute continuum',
        'Federated learning algorithms, architectures, and protocols in and for the compute continuum',
        'Resource management, task scheduling, and capacity planning solutions',
        'Simulation toolkits for fog computing, edge computing, or the compute continuum',
        'Performance monitoring and metering of infrastructures along the compute continuum',
        'Security, privacy, trust, and provenance issues and solutions for the compute continuum',
        'Energy-efficient and environmentally-aware computing in the compute continuum',
        'Domain-specific applications, such as in smart manufacturing, mobility, healthcare, and agriculture',
        'Emerging trends such as edge computing in space, quantum computing at the edge, edge digital twins, and sustainable fog/edge computing',
        'Practical experience in developing, deploying, and evaluating fog/edge computing systems, applications, and services'
    ];
  
    return (
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Call for Papers</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 leading-relaxed">
            ICFEC 2026 takes a broad view of fog and edge computing and aims to publish high-quality research contributions and experience reports related to system designs, end-to-end architectures, enabling technologies, and domain-specific applications within these emerging computing paradigms. Some representative topics of interest include, but are not limited to:
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