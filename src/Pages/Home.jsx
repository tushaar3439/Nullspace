const Home = () => {
  return (
    <section className="h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center px-12 text-white">
  
  {/* Left Content */}
  <div className="flex-1">
    <h1 className="text-5xl font-bold mb-4">Connect, Showcase, and Grow Your Sports Career</h1>
    <p className="text-lg mb-6">Join the ultimate network for athletes, coaches, and sports professionals worldwide.</p>
    <div className="flex gap-4">
      <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg font-semibold hover:scale-105 transition-transform">
        Create Your Profile
      </button>
      <button className="px-6 py-3 border border-white rounded-lg">
        Explore Athletes
      </button>
    </div>
  </div>

  {/* Right Image */}
  <div className="flex-1 flex justify-center">
    <img src="/FitnessModel.png" alt="Fitness model" className="max-h-[500px] object-contain" />
  </div>
</section>

  )}
export default Home;
