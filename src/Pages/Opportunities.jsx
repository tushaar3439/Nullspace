import Spline from '@splinetool/react-spline';


const Opportunities = () => {
    return(
        <>

       <div className="">
        <div className="">
        <div className="w-full h-[600px] bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center  text-white">
       
       {/* Left Content */}
         <div className="md:w-1/2 absolute top-[70px] left-10 text-white">
              <h1 className="text-5xl font-bold mb-4">Discover Exciting Opportunities to Elevate Your Sports Career</h1>
                <p className="text-lg mb-6 pr-[100px]">Explore a wide range of opportunities tailored for athletes, coaches, and sports professionals. Whether you're looking for scholarships, training programs, or job openings, we've got you covered.</p>
                <div className="flex gap-4">
                    <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg font-semibold hover:scale-105 transition-transform">
                        Find Opportunities
                    </button>
                    <button className="px-6 py-3 border border-white rounded-lg">
                        Post an Opportunity
                    </button>
                </div>
             </div>  
         {/* Right Image */}
        <section className="relative h-[600px] w-full mx-auto my-20 pl-[90px]">
      {/* 3D Model */}
      <Spline scene="https://prod.spline.design/G4AwyXTFtbIvC2BY/scene.splinecode" />
    </section>

         </div>
        </div>
   
       <div className="w-full h-screen relative top-[-120px] left-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
       
       <div className="py-8 mb-10 w-full flex justify-center items-center text-4xl font-bold border-r-0 border-l-0 border-gray-700 border-1 bg-black/60 backdrop-blur-md">
       Opportunities to Level Up
       </div>

       <div className="px-12 w-full ">
        
        <div className="flex gap-10">
        <div className="md:w-1/3 rounded-md shadow-md shadow-gray-500/50 h-[200px]">hhkuwrgkfjhkjrgi lorem*20</div>
       <div className="md:w-1/3 ">kfdjsvlkes</div>
       <div className="md:w-1/3">jlfkjleh</div>

       </div>



</div>


       </div>

       </div>
        </>
    )
}
export default Opportunities;