const SubmissionInstructions = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Submission Instructions</h2>
      
      <div className="max-w-4xl mx-auto prose prose-blue">
        <p className="text-gray-700 leading-relaxed">
          We invite original manuscripts that have neither been published elsewhere nor are under review at a different venue. 
          Papers should follow the IEEE template for conference proceedings.
        </p>
        
        <p className="text-gray-700 leading-relaxed">
          Authors should submit papers, written in English, electronically in PDF format, and may not exceed 8 letter-size 
          pages in length, including all figures, tables, and references. Apart from full papers, authors may also submit 
          poster papers, which may not exceed 2 pages in length. All manuscripts will be reviewed and judged on originality, 
          technical strength, significance, presentation, and relevance to the conference by at least three reviewers.
        </p>
        
        <p className="text-gray-700 leading-relaxed">
          Papers may be submitted online at <a href="https://easychair.org" className="text-blue-600 hover:text-blue-800 transition-colors">EasyChair</a>. 
          Papers that are accepted for publication may be accepted as REGULAR papers (8 pages), SHORT papers (5 pages) or 
          POSTER papers (2 pages), depending on the reviewers' recommendations. Accepted regular, short, and poster papers 
          will be included in the conference proceedings that will be published through the IEEE Computer Society Conference Publishing Services.
        </p>
        
        <div className="bg-blue-50 p-5 my-8 rounded-lg border border-blue-100">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Important Dates</h3>
          <ul className="space-y-3 list-disc pl-5">
            <li><span className="font-medium">January 23, 2026:</span> Paper submission deadline (Fixed!)</li>
            <li><span className="font-medium">February 28, 2026:</span> Author notification</li>
            <li><span className="font-medium">March 28, 2026:</span> Camera-ready submission</li>
            <li><span className="font-medium">May 19-22, 2026:</span> Conference (on-site in Tromsø, Norway)</li>
          </ul>
        </div>
        
        <div className="bg-yellow-50 p-5 my-8 rounded-lg border border-yellow-100">
          <h3 className="text-xl font-semibold mb-4 text-yellow-800">Submission Format</h3>
          <p className="text-gray-700">
            All submissions must use the IEEE conference proceedings templates. The templates are available in 
            <a href="https://www.ieee.org/conferences/publishing/templates.html" className="text-blue-600 hover:text-blue-800 transition-colors mx-1">Microsoft Word and LaTeX</a> 
            formats.
          </p>
          <p className="text-gray-700 mt-3">
            Please note that all deadlines are Anywhere on Earth (AoE, UTC-12 timezone).
          </p>
        </div>
        
        <div className="bg-green-50 p-5 my-8 rounded-lg border border-green-100">
          <h3 className="text-xl font-semibold mb-4 text-green-800">Paper Categories</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><span className="font-medium">Regular Paper:</span> Up to 8 pages</li>
            <li><span className="font-medium">Short Paper:</span> Up to 5 pages</li>
            <li><span className="font-medium">Poster Paper:</span> Up to 2 pages</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubmissionInstructions; 