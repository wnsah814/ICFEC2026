const Committees = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Organization</h2>
      
      <div className="max-w-5xl mx-auto">
        <h3 className="text-xl font-semibold mb-6 text-center">ICFEC 2026 Committees</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4 border-b border-gray-200 pb-2">General Chairs</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-600 hover:underline">Young Choon Lee</a>
                <p className="text-sm text-gray-600">Macquarie University, Australia</p>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Flavia Delicato</a>
                <p className="text-sm text-gray-600">Fluminense Federal University, Brazil</p>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Stefan Schulte</a>
                <p className="text-sm text-gray-600">Hamburg University of Technology, Germany</p>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4 border-b border-gray-200 pb-2">Program Chairs</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-600 hover:underline">Laurent Lefevre</a>
                <p className="text-sm text-gray-600">Inria, France</p>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Yu Xiao</a>
                <p className="text-sm text-gray-600">Aalto University, Finland</p>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4 border-b border-gray-200 pb-2">Steering Committee</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-600 hover:underline">Name</a>
                <p className="text-sm text-gray-600">University, Country</p>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Name</a>
                <p className="text-sm text-gray-600">University, Country</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4 border-b border-gray-200 pb-2">Poster and Demo Chairs</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-600 hover:underline">Chair Name</a>
                <p className="text-sm text-gray-600">University, Country</p>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Chair Name</a>
                <p className="text-sm text-gray-600">University, Country</p>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4 border-b border-gray-200 pb-2">Publication Chairs</h4>
            <ul className="space-y-3">
            <li>
                <a href="#" className="text-blue-600 hover:underline">Chair Name</a>
                <p className="text-sm text-gray-600">University, Country</p>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Chair Name</a>
                <p className="text-sm text-gray-600">University, Country</p>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4 border-b border-gray-200 pb-2">Publicity Chairs</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-600 hover:underline">Yipeng Zhou</a>
                <p className="text-sm text-gray-600">Macquarie University, Australia</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4 border-b border-gray-200 pb-2">Local Arrangement Chairs</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-600 hover:underline">Endrowednes Kuantama</a>
                <p className="text-sm text-gray-600">Macquarie University, Australia</p>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Ferdous Sharifi</a>
                <p className="text-sm text-gray-600">Macquarie University, Australia</p>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4 border-b border-gray-200 pb-2">Webmaster and Online Chairs</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-600 hover:underline">Sooyong Kang</a>
                <p className="text-sm text-gray-600">Hanyang University, South Korea</p>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Junmo Seong</a>
                <p className="text-sm text-gray-600">Hanyang University, South Korea</p>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Jayden King</a>
                <p className="text-sm text-gray-600">Macquarie University, Australia
                </p>
              </li>
            </ul>
          </div>

          
          
          {/* <div className="col-span-2">
            <h4 className="text-lg font-medium mb-4 border-b border-gray-200 pb-2">Program Committee</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Member Name</a>
                    <p className="text-sm text-gray-600">Affiliation, Country</p>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Member Name</a>
                    <p className="text-sm text-gray-600">Affiliation, Country</p>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Member Name</a>
                    <p className="text-sm text-gray-600">Affiliation, Country</p>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Member Name</a>
                    <p className="text-sm text-gray-600">Affiliation, Country</p>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Member Name</a>
                    <p className="text-sm text-gray-600">Affiliation, Country</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Member Name</a>
                    <p className="text-sm text-gray-600">Affiliation, Country</p>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Member Name</a>
                    <p className="text-sm text-gray-600">Affiliation, Country</p>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Member Name</a>
                    <p className="text-sm text-gray-600">Affiliation, Country</p>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Member Name</a>
                    <p className="text-sm text-gray-600">Affiliation, Country</p>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Member Name</a>
                    <p className="text-sm text-gray-600">Affiliation, Country</p>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Committees; 