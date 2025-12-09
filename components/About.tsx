// import { Server, Cloud, Network } from 'lucide-react';

const About = () => {
    return (
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full mb-3">About the Conference</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">ICFEC 2026</h2>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <p className="text-gray-700 mb-6 leading-relaxed">
          The 10th IEEE International Conference on Fog and Edge Computing (ICFEC 2026) is a premier forum that brings together researchers, practitioners, industry experts, and technologists to discuss and explore the latest developments, trends, and innovations in fog and edge computing. ICFEC 2026 will be held in conjunction with the 26th International Symposium on Cluster, Cloud and Internet Computing (<a href="https://ccgrid2026.org" target="_blank" className="text-blue-600 hover:text-blue-800 transition-colors">CCGrid 2026</a>) in Sydney, Australia.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
          As alternatives to traditional cloud computing, new paradigms such as fog computing, edge computing, and the edge-fog-cloud continuum have been proposed and are increasingly being deployed. These approaches aim to bring computational resources closer to data sources, thereby reducing network latency and data traffic at the core of the network. Use cases for fog and edge computing range from smart factories over smart grids to autonomous vehicles, just to name a few examples. New methods and mechanisms are essential for effectively managing software, infrastructure, and network aspects impacted by the adoption of these emerging computing paradigms.
          </p>
        </div>
      </div>
    );
  };

export default About;