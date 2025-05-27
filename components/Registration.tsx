const Registration = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Registration</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <a 
            href="https://site.uit.no/ccgrid2025/registration/" target="_blank"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-red-600 font-medium py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            CLICK HERE TO REGISTER NOW!
          </a>
        </div>
        
        <div className="prose prose-blue mx-auto mb-10">
          <p className="text-gray-700 leading-relaxed">
            ICFEC 2026 is a physical event with the aim of bringing together the technical community in-person, and giving them the opportunity to network, communicate, share new ideas and learn new insights, ranging from research topics to diversity challenges. We do not offer a virtual option for attendance.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
          <div className="bg-blue-800 text-white p-4">
            <h3 className="text-xl font-semibold">Registration Policy</h3>
          </div>
          
          <div className="p-6 space-y-4 text-red-600">
            <ul className="space-y-4 list-disc pl-5">
              <li>
                Author registration deadline is <strong>March 20, 2026</strong>. Non-author early registration deadline is <strong>April 14, 2026</strong>.
              </li>
              <li>
                At least one author of an accepted conference/workshop/ICFEC paper must register at the <strong>IEEE member</strong> or <strong>Non-Member</strong> price by <strong>March 14</strong>, 2026. An author with multiple accepted conference papers may receive a discount of <strong>NOK 2875</strong> for each additional paper registration.
              </li>
              <li>
                Member registration rates are available for professional members of IEEE.
              </li>
              <li>
                The conference paper page limit is 8. The short paper page limit is 5.
              </li>
              <li>
                Registration can be canceled on or before <strong>April 20, 2026</strong>. An administrative fee of <strong>NOK 1000</strong> will be deducted from each refund.
              </li>
              <li>
                Registration includes access to conference and workshop rooms, proceedings, food (lunches and breaks), gala dinner, social event, goodies, and one-week bus tickets.
              </li>
              <li>
                A limited number of hotel rooms are available on the registration page.
              </li>
              <li>
                For registration questions, please email <strong><span className="text-red-600">email@icfec2026.org</span></strong>.
              </li>
            </ul>
          </div>
        </div>
        
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
            <div className="bg-blue-700 text-white p-4">
              <h3 className="text-lg font-semibold">IEEE Member Rates</h3>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex justify-between border-b pb-2">
                <span>Early Registration (until April 14)</span>
                <span className="font-semibold">NOK 7500</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Late Registration</span>
                <span className="font-semibold">NOK 9000</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Student Early Registration</span>
                <span className="font-semibold">NOK 4800</span>
              </div>
              <div className="flex justify-between">
                <span>Student Late Registration</span>
                <span className="font-semibold">NOK 5800</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
            <div className="bg-blue-700 text-white p-4">
              <h3 className="text-lg font-semibold">Non-Member Rates</h3>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex justify-between border-b pb-2">
                <span>Early Registration (until April 14)</span>
                <span className="font-semibold">NOK 9000</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Late Registration</span>
                <span className="font-semibold">NOK 10800</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Student Early Registration</span>
                <span className="font-semibold">NOK 5760</span>
              </div>
              <div className="flex justify-between">
                <span>Student Late Registration</span>
                <span className="font-semibold">NOK 6960</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Registration; 