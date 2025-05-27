import { Server, Cloud, Network } from 'lucide-react';

const About = () => {
    return (
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full mb-3">About the Conference</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">ICFEC 2026</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Server className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Edge Computing</h3>
            <p className="text-gray-600">
              Exploring the latest advancements in edge computing architectures and systems that bring computation closer to data sources.
            </p>
          </div>
          
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Cloud className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Fog Computing</h3>
            <p className="text-gray-600">
              Investigating fog computing paradigms that extend cloud computing capabilities to the edge of the network for improved efficiency.
            </p>
          </div>
          
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Network className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">IoT Integration</h3>
            <p className="text-gray-600">
              Addressing challenges in connecting billions of IoT devices while maintaining performance and real-time operations.
            </p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <p className="text-gray-700 mb-6 leading-relaxed">
          The 10th IEEE International Conference on Fog and Edge Computing (ICFEC 2026) is a leading forum to disseminate and discuss research activities and results on a broad range of topics in the fields of fog and edge computing. ICFEC 2026 will take place in conjunction with The 26th International Symposium on Cluster, Cloud and Internet Computing (CCGrid 2026).
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
          Fog and edge computing have received much attention by both the research community and the industry in recent years, and are today seen as an alternative to the utilization of cloud-based computational resources. Especially, this is the case in scenarios where large amounts of data are produced in distributed settings, e.g., in the Internet of Things (IoT), where data needs to be processed in (near) real time, or where suboptimal network connectivity hampers the upload of very large amounts of data to the cloud. Use cases for fog and edge computing range from smart factories over smart grids to autonomous vehicles, to name just some examples.
          </p>
          <p className="text-gray-700 leading-relaxed">
          While tremendous progress has already been made in the research fields of fog and edge computing, there are still numerous challenges which need to be solved. New abstractions and extensions to current programming and storage models are necessary to allow developers to design novel applications that can benefit from massively distributed fog and edge systems. Addressing security, privacy, and trust is of paramount importance while managing the resources and context of mobile, transient and hardware-constrained resources. Fog and edge computing can also help to process very large amounts of data, both for batch processing and data streams. The integration of novel communication protocols and communication patterns with fog and edge computing also brings both new opportunities and unique challenges. Recently, the utilization of fog and edge resources in order to realize distributed machine learning in the form of federated learning has also gained much traction, since it allows to learn from local data without sharing raw data with any centralized entity.
          </p>
        </div>
      </div>
    );
  };

export default About;