import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import ContactForm from "../form/ContactForm.jsx";
import Card from "../card/Card.jsx"; // Import the Card component
import IC from "../../assets/IC.png";

const Home = () => {
  const location = useLocation();
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  useEffect(() => {
    // Simulate content loading delay (e.g., fetching data or assets)
    const timer = setTimeout(() => {
      setIsContentLoaded(true);
    }, 500); // Adjust the delay as needed (500ms in this case)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen px-10">
      <div className="text-left lg:w-3/5 md:w-2/3 sm:w-full w-full">
        {location.pathname === "/" && (
          <>
            {!isContentLoaded ? (
              <p className="text-gray-400 text-lg">Loading content...</p>
            ) : (
              <>
                <p className="text-gray-400 lg:text-2xl md:text-xl sm:text-lg text-base font-medium tracking-[0.05rem] mb-4 mt-20 leading-relaxed">
                  Meet a Front-End Developer 👩🏻‍💻,
                </p>
                <h1 className="text-slate-100 text-5xl md:text-6xl lg:text-7xl font-black">
                  Raquel Lores Casalinas
                </h1>
                <h2 className="text-green-400 text-3xl md:text-4xl lg:text-5xl font-black mt-1.5">
                  I create things for the web.
                </h2>
                <p className="text-gray-100 text-lg md:text-xl lg:text-2xl font-medium tracking-[0.05rem] mb-4 leading-relaxed mt-2.5 max-w-2xl">
                  I'm a software developer specializing in building and
                  designing great digital experiences.
                </p>
                <p className="text-gray-100 text-lg md:text-xl lg:text-2xl font-medium tracking-[0.05rem] leading-relaxed max-w-2xl">
                  I'm currently acquiring in-depth knowledge in key areas of AI.
                </p>

                {/* Spline Component with Loading Indicator */}
                <div className="flex items-center justify-center w-full h-[500px] sm:h-[300px]">
                  {!isSplineLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                      <p className="text-gray-400 text-lg">
                        Loading 3D Scene...
                      </p>
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
        {location.pathname === "/about" && (
          <>
            <h1 className="text-green-500 text-lg md:text-xl lg:text-2xl font-medium tracking-[0.05rem] leading-relaxed max-w-2xl mb-4">
              Raquel Lores Casalinas
            </h1>
            <p className="text-gray-100 text-lg md:text-xl lg:text-2xl font-medium tracking-[0.05rem] leading-relaxed max-w-2xl">
              I create clean, maintainable code for user interfaces with a
              thoughtful design, focusing on performance and usability.
              <br />
              At Edison Next, I’ve developed dynamic, reusable software
              components.
              <br />
              In my spare time, I enjoy hanging out with my husband and kids or
              cycling around Madrid, soaking up the 🌞
            </p>
            <a
              href="/assets/28325 CV Raquel Lores Programadora Frontend.pdf"
              className="text-slate-400 text-xl font-normal hover:text-green-400 active:text-green-400 focus:outline-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <br />
              View my CV in Spanish.
            </a>
          </>
        )}

{location.pathname === "/portfolio" && (
  <>
    <h2 className="text-green-400 text-3xl font-bold mb-6">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <Card
                imageSrc={IC}
                description="Project 1: Analysts Tool Home. Stack: Figma, React JS, TypeScript, Tailwind CSS. Responsive, dynamic username, reusable components."
                buttonText="Private Repo"
                buttonLink=""
              />
              <Card
                imageSrc="https://via.placeholder.com/300x200"
                description="Project 2: A brief description."
                buttonText="View Project"
                buttonLink="https://example.com/project2"
              />
              <Card
                imageSrc="https://via.placeholder.com/300x200"
                description="Project 3: A brief description."
                buttonText="View Project"
                buttonLink="https://example.com/project3"
              />
            </div>
          </>
        )}

        {location.pathname === "/contact" && (
          <div className="text-gray-100 max-w-2xl">
            <p className="text-base md:text-lg font-medium tracking-[0.05rem] leading-relaxed mb-4">
              Drop me a line:
            </p>
            <ContactForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
