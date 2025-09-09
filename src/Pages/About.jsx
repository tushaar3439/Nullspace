const About = () => {
    return(
        <>
        <div className="min-h-screen flex items-center justify-center text-white p-6 pb-[70px]">
        <div className="max-w-4xl bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4">About Nullspace</h1>
          <p className="text-lg mb-6">
            Nullspace is a cutting-edge platform designed to connect athletes, coaches, and sports professionals from around the world. Our mission is to empower individuals in the sports industry by providing them with the tools and resources they need to showcase their talents, network with peers, and advance their careers.
          </p>
          <h2 className="text-2xl font-semibold mb-3">Our Features</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li><strong>Comprehensive Profiles:</strong> Create detailed profiles highlighting your skills, achievements, and experience.</li>
            <li><strong>Networking Opportunities:</strong> Connect with other athletes, coaches, and sports professionals to expand your network.</li>
            <li><strong>Job Listings:</strong> Access exclusive job opportunities in the sports industry.</li>
            <li><strong>Events and Tournaments:</strong> Stay updated on upcoming events and tournaments to showcase your talent.</li>
            <li><strong>Resources and Articles:</strong> Gain insights from expert articles and resources to help you grow professionally.</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-3">Our Team</h2>
          <p className="text-lg mb-6">
            Our team is composed of passionate individuals with a deep understanding of the sports industry. We are committed to creating a platform that meets the needs of athletes and sports professionals worldwide.
          </p>
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p className="text-lg">
            We would love to hear from you! If you have any questions, feedback, or suggestions, please feel free to reach out to us at <a href="mailto:tuusshhar@gmail.com" className="text-blue-400 underline"></a>
            </p>
        </div>
      </div>
        </>
    )
}
export default About;