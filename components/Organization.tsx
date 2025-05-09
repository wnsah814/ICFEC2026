const Organization = () => {
    const committees = [
      {
        title: 'General Chairs',
        members: [
          { name: 'Professor Name 1', affiliation: 'University of Technology, Country' },
          { name: 'Professor Name 2', affiliation: 'Research Institute, Country' }
        ]
      },
      {
        title: 'Program Chairs',
        members: [
          { name: 'Professor Name 3', affiliation: 'Global University, Country' },
          { name: 'Professor Name 4', affiliation: 'Technology Institute, Country' }
        ]
      },
      {
        title: 'Steering Committee',
        members: [
          { name: 'Professor Name 5', affiliation: 'University of Science, Country' },
          { name: 'Professor Name 6', affiliation: 'Research Center, Country' },
          { name: 'Professor Name 7', affiliation: 'Institute of Technology, Country' },
          { name: 'Professor Name 8', affiliation: 'University, Country' },
          { name: 'Professor Name 9', affiliation: 'Technical University, Country' }
        ]
      },
      {
        title: 'Technical Program Committee',
        members: [
          { name: 'Professor Name 10', affiliation: 'University, Country' },
          { name: 'Professor Name 11', affiliation: 'Research Lab, Country' },
          { name: 'Professor Name 12', affiliation: 'University, Country' },
          { name: 'Professor Name 13', affiliation: 'Technical University, Country' },
          { name: 'Professor Name 14', affiliation: 'Institute, Country' },
          { name: 'Professor Name 15', affiliation: 'University, Country' }
        ]
      }
    ];
  
    return (
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Organization</h2>
        
        <div className="max-w-4xl mx-auto">
          {committees.map((committee, idx) => (
            <div key={idx} className="mb-10">
              <h3 className="text-2xl font-semibold mb-4">{committee.title}</h3>
              <div className="space-y-3">
                {committee.members.map((member, midx) => (
                  <div key={midx} className="flex flex-col sm:flex-row sm:items-center">
                    <span className="font-medium text-blue-700">{member.name}</span>
                    <span className="hidden sm:block mx-2 text-gray-400">•</span>
                    <span className="text-gray-600">{member.affiliation}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Organization;