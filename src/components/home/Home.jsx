import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import ContactForm from "../form/ContactForm.jsx";
import Card from "../card/Card.jsx";
import IC from "../../assets/IC.png";
import WPRFE from "../../assets/WPRFE.png";
import NewValue from "../../assets/NewValue.png";
import ToquenElDOM from "../../assets/ToquenElDOM.png";
import RaquelLoresMay from "../../assets/RaquelLoresMay.png";
import flags from 'emoji-flags';



const Home = () => {
  const location = useLocation();
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  const currentPath = location.pathname.replace("/portfolio", "");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContentLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center px-10">
        <div className="text-left lg:w-3/5 md:w-2/3 sm:w-full w-full">
          {/* Render content based on the current path */}
          {currentPath === "/" && (
            <>
              {!isContentLoaded ? (
                <p className="text-gray-400 text-lg">Loading content...</p>
              ) : (
                <>
                  <p className="text-gray-400 text-base md:text-lg sm:text-sm font-medium tracking-[0.05rem] mb-4 mt-10 leading-relaxed">
                    Meet a Front-End Developer 👩🏻‍💻,
                  </p>
                  <h1 className="text-slate-100 text-4xl md:text-5xl lg:text-6xl font-black">
                    Raquel Lores Casalinas
                  </h1>
                  <h2 className="text-green-400 text-2xl md:text-3xl lg:text-4xl font-black mt-1.5">
                    I create things for the web.
                  </h2>
                  <p className="text-gray-100 text-base md:text-lg lg:text-xl font-medium tracking-[0.05rem] mb-4 leading-relaxed mt-2.5 max-w-2xl">
                    I'm a software developer specializing in building and designing great digital experiences.
                  </p>
                  <p className="text-gray-100 text-base md:text-lg lg:text-xl font-medium tracking-[0.05rem] leading-relaxed max-w-2xl">
                    I am actively practicing algorithms and data structures, with a strong interest in accessibility.
                  </p>

                  <div className="flex items-center justify-center w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[320px] overflow-hidden relative">
                    {!isSplineLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                        <p className="text-gray-400 text-sm">Loading 3D Scene...</p>
                      </div>
                    )}
                    <div className="w-full h-full flex items-center justify-center">
                      <Spline
                        scene="https://prod.spline.design/kBQxPSiE3D55bn6W/scene.splinecode"
                        showControls={false}
                        onLoad={() => setIsSplineLoaded(true)}
                      />
                    </div>
                  </div>
                </>
              )}
            </>
          )}
          {currentPath === "/about" && (
            <>
              <h1 className="flex items-center text-green-500 text-lg md:text-xl lg:text-2xl font-medium tracking-[0.05rem] leading-relaxed max-w-2xl mb-3">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img
                    src={RaquelLoresMay}
                    alt="Raquel Lores Casalinas"
                    className="w-full h-full object-cover"
                  />
                </div>
                Raquel Lores Casalinas.
              </h1>
              <p className="text-gray-100 text-lg md:text-xl lg:text-2xl font-medium tracking-[0.05rem] leading-relaxed max-w-2xl">
                I'm a problem solver who uses coding as a superpower to tackle business challenges.
                <div className="mb-0.1">
                  With a customer-centric approach, I design applications and interfaces that enhance the user experience.
                </div>
                <br />
                I specialise in building dynamic websites and reusable software components that are easy to maintain and scale.
                <br />
                When I'm not coding, you'll find me spending time with my husband and kids or cycling around Madrid, soaking up the sunshine 🌞
              </p><div className="mt-6">
                <span className="block text-slate-300 text-lg font-semibold mb-2">Download my CV:</span>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/portfolio/publicAssets/CV Raquel Lores EN.pdf"
                    className="flex items-center text-slate-400 text-xl font-normal hover:text-green-400 active:text-green-400 focus:outline-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-2">{flags.GB.emoji}</span> English CV
                  </a>
                  <a
                    href="/portfolio/publicAssets/CV Raquel Lores SP.pdf"
                    className="flex items-center text-slate-400 text-xl font-normal hover:text-green-400 active:text-green-400 focus:outline-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-2">{flags.ES.emoji}</span> CV en Español
                  </a>
                </div>
              </div>

            </>
          )}
          {currentPath === "/projects" && (
            <>
              <h2 className="text-green-400 text-3xl font-bold mb-6">Recent Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card
                  imageSrc={IC}
                  description="Feb 2025: I designed and developed the Analysts' Platform Home Page for Edison Next using reusable components."
                  buttonText="Corporate Repo"
                />
                <Card
                  imageSrc={WPRFE}
                  description="Dec 2024: Created React component to visualise custom trees from different models within an Edison Next Big Data project."
                  buttonText="Corporate Repo"
                />
                <Card
                  imageSrc={NewValue}
                  description="May 2024: I developed a News Management Application as part of a Scrum team for the NewValue website."
                  buttonText="View Project"
                  buttonLink="https://newvalue-actualidad.vercel.app/"
                />
                <Card
                  imageSrc={ToquenElDOM}
                  description="January 2024: I designed and developed a website with an interactive piano, using vanilla JavaScript, HTML, CSS and Bootstrap."
                  buttonText="View Project"
                  buttonLink="https://toquen-el-dom-raquellores-projects.vercel.app/"
                />


              </div>
            </>
          )}
          {currentPath === "/contact" && (
            <div className="text-gray-100 max-w-2xl">
              <p className="text-base md:text-lg font-medium tracking-[0.05rem] leading-relaxed mb-4">
                Drop me a line:
              </p>
              <ContactForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;