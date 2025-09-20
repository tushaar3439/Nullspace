import { FaArrowRight } from "react-icons/fa";

const Services = () => {
    return(
        <div className="bg-gradient-to-br from-[#000000] via-[#180020] to-[#2A002F] text-white min-h-screen">



        <div className="">
        <div className="text-5xl font-bold text-center mb-9 pt-9">Our Services</div>
        <div className="px-12 w-full flex flex-col justify-center items-center gap-6">
            <div className="max-w-4xl text-center">
            At Nullspace, we are dedicated to empowering athletes and sports enthusiasts by providing a comprehensive platform that connects talent with opportunities. Our services are designed to support your journey, whether you're looking to compete, train, or advance your career in the sports industry.
            </div>
            <div className="pt-3 hover:scale-105 transition-transform duration-300 ease-in-out flex justify-center items-center ">
            <a href="/Opportunities" className="ml-4 px-4 py-2 rounded-2xl bg-gradient-to-r from-[#FF007F] to-[#9C27FF] shadow-lg hover:bg-gradient-to-r hover:from-[#9C27FF] hover:to-[#FF007F] transition-colors duration-300 ease-in-out">
            Join Now
            </a>
            </div>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12 py-12">

        <div className="flex flex-col justify-center items-center bg-black/60 backdrop-blur-md rounded-lg p-6 shadow-lg hover:bg-gradient-to-br hover:from-gray-900 hover:via-black hover:to-gray-800 ease-in-out">
        <div className="text-2xl font-bold mb-4">Personal Training</div>
        <div className="">One-on-one sessions tailored to your fitness goals.</div>
        <a href="#" className="text-blue-400 hover:underline flex items-center gap-2">Learn More<FaArrowRight/></a>
        </div>
        

        <div className="flex flex-col justify-center items-center bg-black/60 backdrop-blur-md rounded-lg p-6 shadow-lg hover:bg-gradient-to-br hover:from-gray-900 hover:via-black hover:to-gray-800 ease-in-out">
        <div className="text-2xl font-bold mb-4">Group Fitness Classes</div>
        <div className="">High-energy workouts to stay motivated with.</div>
        <a href="#" className="text-blue-400 hover:underline flex items-center gap-2">Learn More<FaArrowRight/></a>
        </div>
        

         <div className="flex flex-col justify-center items-center bg-black/60 backdrop-blur-md rounded-lg p-6 shadow-lg hover:bg-gradient-to-br hover:from-gray-900 hover:via-black hover:to-gray-800 ease-in-out">
        <div className="text-2xl font-bold mb-4">Nutrition Coaching</div>
        <div className="">Customized diet & meals.</div>
        <a href="#" className="text-blue-400 hover:underline flex items-center gap-2">Learn More<FaArrowRight/></a>
        </div>

         <div className="flex flex-col justify-center items-center bg-black/60 backdrop-blur-md rounded-lg p-6 shadow-lg hover:bg-gradient-to-br hover:from-gray-900 hover:via-black hover:to-gray-800 ease-in-out">
        <div className="text-2xl font-bold mb-4">Strength & Conditioning</div>
        <div className="">Build power, endurance, speed, and promo.</div>
        <a href="#" className="text-blue-400 hover:underline flex items-center gap-2">Learn More<FaArrowRight/></a>
        </div>

         <div className="flex flex-col justify-center items-center bg-black/60 backdrop-blur-md rounded-lg p-6 shadow-lg hover:bg-gradient-to-br hover:from-gray-900 hover:via-black hover:to-gray-800 ease-in-out">
        <div className="text-2xl font-bold mb-4">Yoga & Flexibility</div>
        <div className="">Mind-body balance through training.</div>
        <a href="#" className="text-blue-400 hover:underline flex items-center gap-2">Learn More<FaArrowRight/></a>
        </div>

         <div className="flex flex-col justify-center items-center bg-black/60 backdrop-blur-md rounded-lg p-6 shadow-lg hover:bg-gradient-to-br hover:from-gray-900 hover:via-black hover:to-gray-800 ease-in-out">
        <div className="text-2xl font-bold mb-4">Online Coaching</div>
        <div className="">Virtual training + progress tracking anytime.</div>
        <a href="#" className="text-blue-400 hover:underline flex items-center gap-2">Learn More<FaArrowRight/></a>
        </div>


        </div>


        </div>
    )
}
export default Services