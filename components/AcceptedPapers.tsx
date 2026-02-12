import { CONFERENCE_DAY, SESSIONS, type Session } from '@/data/accepted-papers';

const SessionCard = ({ session }: { session: Session }) => (
  <div className="mb-12 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
    <div className="bg-blue-800 text-white p-4">
      <h4 className="text-lg font-medium">[{session.time}] {session.title}</h4>
      <p className="text-sm mt-1">Session Chair: {session.chair}</p>
    </div>
    <div className="p-5 space-y-4">
      {session.papers.map((paper, idx) => (
        <div key={idx}>
          <p className="font-medium">{idx + 1}. {paper.title}</p>
          <p className="text-sm text-gray-600 italic">Authors: {paper.authors}</p>
        </div>
      ))}
    </div>
  </div>
);

const AcceptedPapers = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Accepted Papers and Preliminary Program</h2>

      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-8 text-center">{CONFERENCE_DAY}</h3>

        {SESSIONS.map((session) => (
          <SessionCard key={session.time} session={session} />
        ))}

        <div className="mt-8 text-gray-700 text-sm leading-relaxed">
          <p>All accepted papers will be published by IEEE Computer Society Press (EI-Index) and included in the IEEE Digital Library. For publication, each accepted paper is required to be registered by one of its authors, and at least one author is required to attend and present the paper at the conference for the paper to be included in the final technical program and the IEEE Digital Library.</p>
        </div>
      </div>
    </div>
  );
};

export default AcceptedPapers;
