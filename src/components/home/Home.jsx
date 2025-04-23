import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import ContactForm from "../form/ContactForm.jsx";
import Card from "../card/Card.jsx";
import IC from "../../assets/IC.png";
import WPRFE from "../../assets/WPRFE.png";
import NewValue from "../../assets/NewValue.png";

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
                    I'm currently acquiring in-depth knowledge in key areas of AI.
                  </p>

                  <div className="flex items-center justify-center w-full h-[300px] sm:h-[250px] md:h-[350px] lg:h-[400px]">
                    {!isSplineLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                        <p className="text-gray-400 text-sm">Loading 3D Scene...</p>
                      </div>
                    )}
                    <Spline
                      scene="https://prod.spline.design/kBQxPSiE3D55bn6W/scene.splinecode"
                      showControls={false}
                      onLoad={() => setIsSplineLoaded(true)}
                    />
                  </div>
                </>
              )}
            </>
          )}
          {currentPath === "/about" && (
            <>
              <h1 className="text-green-500 text-lg md:text-xl lg:text-2xl font-medium tracking-[0.05rem] leading-relaxed max-w-2xl mb-4">
                Raquel Lores Casalinas
              </h1>
              <p className="text-gray-100 text-lg md:text-xl lg:text-2xl font-medium tracking-[0.05rem] leading-relaxed max-w-2xl">
                I create clean, maintainable code for user interfaces with a
                thoughtful design, focusing on performance and usability.
                <br />
                I develop dynamic, reusable software components that are maintainable.
                <br />
                In my spare time, I enjoy hanging out with my husband and kids or
                cycling around Madrid, soaking up the 🌞
              </p><a
                href="/portfolio/publicAssets/CV Raquel Lores EN.pdf"
                className="text-slate-400 text-xl font-normal hover:text-green-400 active:text-green-400 focus:outline-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <br />
                View and Download My CV
              </a>
              <a
                href="/portfolio/publicAssets/CV Raquel Lores SP.pdf"
                className="text-slate-400 text-xl font-normal hover:text-green-400 active:text-green-400 focus:outline-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <br />
                View and Download My CV in Spanish🥘
              </a>
            </>
          )}
          {currentPath === "/projects" && (
            <>
              <h2 className="text-green-400 text-3xl font-bold mb-6">Recent Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
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