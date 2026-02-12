import { COMMITTEE_GROUPS, PROGRAM_COMMITTEE, type CommitteeMember } from '@/data/committees';

const MemberItem = ({ member }: { member: CommitteeMember }) => (
  <li className="break-inside-avoid">
    <a href={member.url ?? '#'} className="text-blue-600 hover:underline">{member.name}</a>
    <p className="text-sm text-gray-600">{member.affiliation}</p>
  </li>
);

const Committees = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-14 text-center">
        <span className="inline-block px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full mb-3">ICFEC 2026 Committees</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Organization</h2>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {COMMITTEE_GROUPS.slice(0, 3).map((group) => (
            <div key={group.title} className="col-span-1">
              <h4 className="text-lg font-medium mb-4 border-b border-gray-200 pb-2">{group.title}</h4>
              <ul className="space-y-3">
                {group.members.map((member) => (
                  <MemberItem key={member.name} member={member} />
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMMITTEE_GROUPS.slice(3).map((group) => (
            <div key={group.title} className="col-span-1">
              <h4 className="text-lg font-medium mb-4 border-b border-gray-200 pb-2">{group.title}</h4>
              <ul className="space-y-3">
                {group.members.map((member) => (
                  <MemberItem key={member.name} member={member} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="col-span-1 md:col-span-3">
            <h4 className="text-lg font-medium mb-4 border-b border-gray-200 pb-2">Program Committee</h4>
            <ul className="space-y-3 columns-1 sm:columns-2 lg:columns-3 xl:columns-4">
              {PROGRAM_COMMITTEE.map((member) => (
                <MemberItem key={member.name} member={member} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committees;
