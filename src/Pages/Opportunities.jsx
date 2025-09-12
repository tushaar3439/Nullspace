import Spline from '@splinetool/react-spline';
import { HiOutlineTrophy } from "react-icons/hi2";
import { IoBriefcaseSharp } from "react-icons/io5";
import { FaDumbbell, FaGraduationCap } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";

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
   
       <div className="w-full h-[130vh] relative top-[-120px] left-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
       
       <div className="py-8 mb-10 w-full flex justify-center items-center text-5xl font-bold border-r-0 border-l-0 border-gray-700 border-1 bg-black/60 backdrop-blur-md">
       Opportunities to Level Up
       </div>

       <div className="px-12 w-full flex justify-center items-center">
        
        <div className="justify-evenly grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">


        <div className=" rounded-md shadow-md shadow-gray-500/50 p-4 flex flex-col items-center justify-center transition-all duration-500 ease-in-out
  hover:bg-gradient-to-b hover:from-black hover:via-[#180020] hover:to-[#2a002f]">
        <div className="text-[50px]"><HiOutlineTrophy/></div>
        <div className="text-[28px] font-bold px-4">Events & Tournaments</div>
        <div className="text-[20px] text-center">"Stay Ahead with the Latest Sports Events"</div>
        <div className="">Never miss a chance to compete. Browse local, national, and international sports tournaments. Register directly, showcase your skills.</div>
        
        </div>
       <div className=" rounded-md shadow-md shadow-gray-500/50 p-4 flex flex-col items-center justify-center transition-all duration-500 ease-in-out
  hover:bg-gradient-to-b hover:from-black hover:via-[#180020] hover:to-[#2a002f]">
       <div className="text-[50px]"><IoBriefcaseSharp/></div>
       <div className="text-[24px] font-bold text-center px-4">Jobs & Career Openings</div>
       <div className="text-[20px] text-center">"Kickstart or Grow Your Sports Career"</div>
        <div className="">Explore exclusive career opportunities in the sports industry. From coaching roles and fitness training jobs to internships with top clubs and organizations, find the right path for your journey.</div>
       
       </div>
       <div className=" rounded-md shadow-md shadow-gray-500/50 p-4 flex flex-col items-center justify-center transition-all duration-500 ease-in-out
  hover:bg-gradient-to-b hover:from-black hover:via-[#180020] hover:to-[#2a002f]">
       <div className="text-[50px]"><FaDumbbell/></div>
       <div className="text-[24px] font-bold text-center py-4">Training Programs</div>
       <div className="text-[20px] text-center">"Stay Ahead with the Latest Sports Events"</div>
        <div className="">Never miss a chance to compete. Browse local, national, and international sports tournaments. Register directly, showcase your skills.</div>
       
       </div>
       <div className=" rounded-md shadow-md shadow-gray-500/50 p-4 flex flex-col items-center justify-center transition-all duration-500 ease-in-out
  hover:bg-gradient-to-b hover:from-black hover:via-[#180020] hover:to-[#2a002f]">
       <div className="text-[50px]"><FaGraduationCap/></div>
       <div className="text-[24px] font-bold text-center py-4">Scholarships & Sponsorships</div>
       <div className="text-[20px] text-center">"Stay Ahead with the Latest Sports Events"</div>
        <div className="">Never miss a chance to compete. Browse local, national, and international sports tournaments. Register directly, showcase your skills.</div>
       
       </div>
       <div className=" rounded-md shadow-md shadow-gray-500/50 p-4 flex flex-col items-center justify-center transition-all duration-500 ease-in-out
  hover:bg-gradient-to-b hover:from-black hover:via-[#180020] hover:to-[#2a002f]">
       <div className="text-[50px]"><FaHandshake/></div>
       <div className="text-[24px] font-bold text-center py-4">Networking & Collaborations</div>
       <div className="text-[20px] text-center">"Stay Ahead with the Latest Sports Events"</div>
        <div className="">Never miss a chance to compete. Browse local, national, and international sports tournaments. Register directly, showcase your skills.</div>
       
       </div>
       <div className=" rounded-md shadow-md shadow-gray-500/50 p-4 flex flex-col items-center justify-center transition-all duration-500 ease-in-out
  hover:bg-gradient-to-b hover:from-black hover:via-[#180020] hover:to-[#2a002f]">
       <div className="text-[50px]"><GiStairsGoal/></div>
       <div className="text-[24px] font-bold text-center py-4">Success Stories & Spotlights</div>
       <div className="text-[20px] text-center">"Stay Ahead with the Latest Sports Events"</div>
        <div className="">Never miss a chance to compete. Browse local, national, and international sports tournaments. Register directly, showcase your skills.</div>
       
       </div>

       </div>



</div>


       </div>

       </div>
        </>
    )
}
export default Opportunities;