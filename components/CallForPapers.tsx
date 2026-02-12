import { TOPICS } from '@/data/topics';

const CallForPapers = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Call for Papers</h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-700 mb-8 leading-relaxed">
          ICFEC 2026 takes a broad view of fog and edge computing and aims to publish high-quality research contributions and experience reports related to system designs, end-to-end architectures, enabling technologies, and domain-specific applications within these emerging computing paradigms. Some representative topics of interest include, but are not limited to:
        </p>

        <ul className="list-disc pl-6 space-y-3 mb-8">
          {TOPICS.map((topic, index) => (
            <li key={index} className="text-gray-700">{topic}</li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href="/pdf/CFP-ICFEC2026.pdf"
            download="CFP-ICFEC2026.pdf"
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
