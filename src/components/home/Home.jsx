import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import ContactForm from "../form/ContactForm.jsx";
import Card from "../card/Card.jsx";
import IC from "../../assets/IC.png";
import WPRFE from "../../assets/WPRFE.png";
import NewValue from "../../assets/NewValue.png";
import ToquenElDOM from "../../assets/ToquenElDOM.png";
import rloressmallpic from "../../assets/rloressmallpic.png";
//import flags from 'emoji-flags';



const Home = () => {
  const location = useLocation();
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  const currentPath = location.pathname.replace("/portfolio", "");

  const isHome = currentPath === "/";
  const sectionClass = isHome
  ? "flex-grow flex items-center justify-center px-4 py-6 sm:px-6 md:px-8 lg:px-10"
  : "flex-grow flex items-start justify-center px-4 py-8 sm:px-6 md:px-8 lg:px-10";


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContentLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className={sectionClass}>
        <div className="mx-auto w-full max-w-5xl text-left">
          {/* Render content based on the current path */}
          {currentPath === "/" && (
            <>
              {!isContentLoaded ? (
                <p className="text-gray-400 text-lg">Loading content...</p>
              ) : (
                <>
                  <p className="mt-4 mb-4 text-sm font-medium leading-relaxed tracking-[0.05rem] text-gray-400 sm:text-base md:text-lg">
                    Meet a Software Developer 👩🏻‍💻,
                  </p>
                  <h1 className="text-3xl font-black leading-tight text-slate-100 sm:text-4xl md:text-5xl lg:text-6xl">

                    Raquel Lores Casalinas
                  </h1>
                  <h2 className="mt-2 text-xl font-black text-green-400 sm:text-2xl md:text-3xl lg:text-4xl">
                    I create things for the web.
                  </h2>
                  <p className="max-w-2xl text-base font-medium leading-relaxed tracking-[0.05rem] text-gray-100 md:text-lg lg:text-xl">
                    I'm specializing in building and designing great digital experiences.
                  </p>
                  <p className="max-w-2xl text-base font-medium leading-relaxed tracking-[0.05rem] text-gray-100 md:text-lg lg:text-xl">
                    I am actively practicing algorithms and data structures, with a strong interest in improving User experience.
                  </p>

                  <div className="relative mx-auto mt-6 flex h-[180px] w-full max-w-2xl items-center justify-center overflow-hidden sm:h-[220px] md:h-[260px] lg:h-[320px]">
                    {!isSplineLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                        <p className="text-gray-400 text-sm">Loading 3D Scene...</p>
                      </div>
                    )}
                    <div className="flex h-full w-full items-center justify-center">
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
              <h1 className="mb-3 flex max-w-2xl items-center text-lg font-medium leading-relaxed tracking-[0.05rem] text-green-500 md:text-xl lg:text-2xl">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img
                    src={rloressmallpic}
                    alt="Raquel Lores Casalinas"
                    className="w-full h-full object-cover"
                  />
                </div>
                Raquel Lores Casalinas.
              </h1>
              <div className="max-w-2xl space-y-4 text-base font-medium leading-relaxed tracking-[0.05rem] text-gray-100 sm:text-lg md:text-xl lg:text-2xl">
                <p>I'm a problem-solver developer who uses clean, modern code to tackle business problems and make data easier to understand.</p>
                <p>With a customer-centric mindset, I design and test interfaces that improve usability and performance across devices.</p>
                <p>I specialise in building component-based web applications with React and TypeScript that are easy to maintain, test, and scale.</p>
                <p>When I'm not coding, I'm with my husband and kids or cycling around Madrid, recharging in the sunshine.</p>
              </div>

              <div className="mt-6 max-w-2xl">
                <span className="block text-slate-300 text-lg font-semibold mb-2">Download my CV:</span>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/portfolio/assets/Curriculum vitae 26UXE.pdf"
                    className="flex items-center text-base font-normal text-slate-400 hover:text-green-400 active:text-green-400 focus:outline-none sm:text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-2"></span> English CV
                  </a>
                  <a
                    href="/portfolio/assets/Curriculum vitae 26UXS.pdf"
                    className="flex items-center text-base font-normal text-slate-400 hover:text-green-400 active:text-green-400 focus:outline-none sm:text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-2"></span> Spanish CV
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
            <div className="mx-auto w-full max-w-2xl text-gray-100">
              <p className="mb-4 text-base font-medium leading-relaxed tracking-[0.05rem] md:text-lg">
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
