const Venue = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Conference Venue and Hotel</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-blue mx-auto mb-10">
          <p className="text-gray-700 leading-relaxed">
            The ICFEC 2026 will take place at <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">UiT The Arctic University of Norway</a> in Tromsø. The university is located close to the city center of Tromsø and can easily be reached by bus or car. To navigate around campus, we recommend using <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">MazeMap</a>. For details see the link: <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">https://site.uit.no/ccgrid2026/venue-and-stay/</a>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-lg overflow-hidden shadow-md h-full">
            <div className="aspect-video relative bg-gray-200">
              {/* Replace with actual image of Tromsø */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                <span className="text-gray-500">Tromsø City View</span>
              </div>
            </div>
            <div className="p-5 bg-white">
              <h3 className="text-xl font-semibold mb-3">About Tromsø</h3>
              <p className="text-gray-700 leading-relaxed">
                Tromsø is a city in northern Norway, located 350 kilometers north of the Arctic Circle. Despite its remote location, Tromsø is a vibrant city with rich culture, a bustling nightlife, and stunning natural surroundings. It's known as the "Gateway to the Arctic" and is a popular base for northern lights hunting, midnight sun viewing, and Arctic adventures.
              </p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md h-full">
            <div className="aspect-video relative bg-gray-200">
              {/* Replace with actual image of the University */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                <span className="text-gray-500">UiT The Arctic University of Norway</span>
              </div>
            </div>
            <div className="p-5 bg-white">
              <h3 className="text-xl font-semibold mb-3">Conference Facilities</h3>
              <p className="text-gray-700 leading-relaxed">
                The conference will be held at modern facilities in UiT The Arctic University of Norway. The venue offers state-of-the-art auditoriums, meeting rooms, and social areas to facilitate productive discussions and networking opportunities. Wi-Fi access will be available throughout the venue for all conference attendees.
              </p>
            </div>
          </div>
        </div>
        <div>
          <p>이쪽 부분은 지워도 됨 (자유롭게 막 추가해도 되려나??)</p>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="bg-blue-800 text-white p-4">
            <h3 className="text-xl font-semibold">Accommodation</h3>
          </div>
          
          <div className="p-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              A limited number of rooms have been reserved at special conference rates at hotels within walking distance or easy transportation to the conference venue. We recommend booking your accommodation early as May is a popular tourist season in Tromsø.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4 py-2">
                <h4 className="font-medium mb-1">Scandic Ishavshotel</h4>
                <p className="text-sm text-gray-600 mb-2">Distance to venue: 1.5 km</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">Book at conference rate →</a>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4 py-2">
                <h4 className="font-medium mb-1">Radisson Blu Hotel</h4>
                <p className="text-sm text-gray-600 mb-2">Distance to venue: 1.2 km</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">Book at conference rate →</a>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4 py-2">
                <h4 className="font-medium mb-1">Clarion Hotel The Edge</h4>
                <p className="text-sm text-gray-600 mb-2">Distance to venue: 1.0 km</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">Book at conference rate →</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-800 text-white p-4">
            <h3 className="text-xl font-semibold">Travel Information</h3>
          </div>
          
          <div className="p-6 space-y-4">
            <div>
              <h4 className="font-medium mb-2">By Air</h4>
              <p className="text-gray-700 leading-relaxed">
                Tromsø Airport (TOS) is well-connected with several daily flights from Oslo (approximately 2 hours flight time). There are also direct international flights from several European cities. From the airport, it's a 10-minute taxi or bus ride to the city center.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Local Transportation</h4>
              <p className="text-gray-700 leading-relaxed">
                Tromsø has an efficient bus system that connects the airport, city center, and university campus. Conference registration includes a one-week bus pass for all attendees.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Visa Information</h4>
              <p className="text-gray-700 leading-relaxed">
                Visitors from many countries may enter Norway without a visa. However, we recommend checking the Norwegian Directorate of Immigration website for the most up-to-date information. Invitation letters for visa purposes will be provided upon request for registered participants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue; 