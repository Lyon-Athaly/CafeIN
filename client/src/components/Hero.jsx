


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Main Background */}
      <div className="absolute inset-0">
        <img
          src="/images/bg-hero.webp"
          alt="Cafe Image"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Text */}
      <div className="relative z-10 container mx-auto px-6 text-white text-center">
        <h3 className="font-bold tracking-tight text-6xl font-sans m-6">
          Selamat Datang di <span className="text-primary">CafeIN</span>
        </h3>
        <p className="font-normal font-sans text-2xl">Nikmati secangkir kopi terbaik dengan suasana nyaman dan tenang.</p>
        <br />

        <button className="bg-primary m-5 px-10 py-4 font-semibold rounded-xl">
            <a href="#menu" className="text-black font-bold text-xl">Lihat Menu</a>
        </button>
      
      </div>
    </section>
  );
};

export default Hero;