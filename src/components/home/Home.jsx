import React from 'react'

import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
      <div className="hero_img lg:px-32 md:px-16 sm:px-10 px-10 relative">
        <div className="lg:w-2/4 md:w-2/3 sm:w-full w-full lg:mt-8 md:mt-5 sm:mt-1 mt-0">
          <p className="text-gray-400 lg:text-2xl md:text-xl sm:text-xl text-xl font-medium tracking-[0.05rem] mb-4">
            Meet a Front-End Developer 👩🏻‍💻,
          </p>
          <h1 className="text-slate-100 lg:text-3xl md:text-6xl text-5xl font-black">
          Raquel Lores Casalinas
          </h1>
        </div>
      </div >
    </>
  );
};
export default Home;