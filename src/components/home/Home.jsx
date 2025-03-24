import React from 'react';

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-6">
      <div className="text-left lg:w-3/5 md:w-2/3 sm:w-full w-full">
        <p className="text-gray-400 lg:text-2xl md:text-xl sm:text-lg text-base font-medium tracking-[0.05rem] mb-4 leading-relaxed">
          Meet a Front-End Developer 👩🏻‍💻,
        </p>
        <h1 className="text-slate-100 text-5xl md:text-6xl lg:text-7xl font-black">
          Raquel Lores Casalinas
        </h1>
        <h2 className="text-green-400 text-3xl md:text-4xl lg:text-5xl font-black mt-2">
          I create things for the web.
        </h2>
        <p className="text-gray-100 text-lg md:text-xl lg:text-2xl font-medium tracking-[0.05rem] mb-4 leading-relaxed mt-4 max-w-2xl">
          I'm a software developer specializing in building and designing great digital experiences.  
        </p>
        <p className="text-gray-100 text-lg md:text-xl lg:text-2xl font-medium tracking-[0.05rem] leading-relaxed max-w-2xl">
          I'm currently focused on coding accessible products.
        </p>
      </div>
    </div>
  );
};

export default Home;
