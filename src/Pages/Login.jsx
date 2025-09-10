import Spline from '@splinetool/react-spline';

export default function Opportunities() {
  return (
    <section className="relative h-[600px] w-[500px] mx-auto my-20">
      {/* 3D Model */}
      <Spline scene="https://prod.spline.design/G4AwyXTFtbIvC2BY/scene.splinecode" />

      {/* Overlay Content */}
      <div className="absolute top-10 left-10 text-white">
        <h1 className="text-4xl font-bold">Opportunities to Level Up</h1>
        <p className="mt-2 text-lg">Explore Events, Jobs & Networking</p>
        <button className="mt-4 px-6 py-2 bg-blue-600 rounded-xl shadow-lg">
          Get Started
        </button>
      </div>
    </section>
  );
}

