const Venue = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Conference Venue and Hotel</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-blue mx-auto mb-10">
          <p className="text-gray-700 text-red-600 leading-relaxed">
            The ICFEC 2026 will take place at <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">UiT The Arctic University of Norway</a> in Tromsø. The university is located close to the city center of Tromsø and can easily be reached by bus or car. To navigate around campus, we recommend using <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">MazeMap</a>. For details see the link: <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">https://site.uit.no/ccgrid2026/venue-and-stay/</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Venue; 