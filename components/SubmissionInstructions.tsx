const SubmissionInstructions = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Submission Instructions</h2>
      
      <div className="max-w-4xl mx-auto prose prose-blue">
        <p className="text-gray-700 leading-relaxed">
          All papers must be original and not simultaneously submitted to another journal or conference. Full/Regular Paper submissions should follow the IEEE template for conference proceedings. Authors should submit papers, written in English, electronically in PDF format, and may not exceed 8 letter-size pages in length, including all figures, tables, and references. Apart from regular papers, authors may also submit short papers and extended abstracts for posters. All manuscripts will be reviewed and judged on originality, technical strength, significance, presentation, and relevance to the conference by at least three reviewers. Papers may be submitted online at <a target="_blank" href="https://easychair.org/my/conference?conf=icfec2026" className="text-blue-600 hover:text-blue-800 transition-colors">EasyChair</a>.
        </p>
        
        <p className="text-gray-700 leading-relaxed">
          Papers that are accepted for publication may be accepted as REGULAR papers (8 pages), SHORT papers (4 pages), or extended abstracts for POSTER (2 pages), depending on the reviewers&apos; recommendations. Accepted regular, short, and poster papers will be included in the conference proceedings that will be published through the IEEE Computer Society Conference Publishing Services.          
        </p>
      </div>
    </div>
  );
};

export default SubmissionInstructions; 