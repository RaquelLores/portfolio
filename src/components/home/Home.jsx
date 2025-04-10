import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import ContactForm from "../form/ContactForm.jsx";
import Card from "../card/Card.jsx";
import IC from "../../assets/IC.png";
import WPRFE from "../../assets/WPRFE.png";
import NewValue from "../../assets/NewValue.png";
import Footer from "../Footer.jsx";

const Home = () => {
  const location = useLocation();
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContentLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-10 pb-1">
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
                I develop dynamic, reusable software components that are maintainable.
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
              <h2 className="text-green-400 text-3xl font-bold mb-6">Recent Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
                <Card
                  imageSrc={IC}
                  description="Feb 2025: I designed and developed the Analysts' Platform Home Page for Edison Next using reusable components.
                  I also created a Figma prototype to showcase the design.  
                  Tech Stack: Figma, React.js, TypeScript, Remix, Tailwind CSS.
                  Key Features: Fully responsive design. I included a a dynamic greeting based on the user's name."
                  buttonText="Corporate Repo"
                />
                <Card
                  imageSrc={WPRFE}
                  description="Dec 2024: Created React component to visualise custom trees from different models within an Edison Next Big Data project. My component is currently integrated into the project's front end and serves as a key tool for analysing and interpreting the results. Tech Stack: React JS, ForceGraphs & Dagree libraries. Key Features: It works with different data models, nodes information on a dynamic card, on-right-click"
                  buttonText="Corporate Repo"
                />
                <Card
                  imageSrc={NewValue}
                  description="May 2024: I developed a News Management Application as part of a Scrum team for the NewValue website, a consultancy spin-off focused on sustainability for Metrica Consulting. I also designed a Figma prototype to present the application's user interface and functionality. 
                  Tech Stack: React.js, Vite, Cloudinary, Tailwind CSS, MySQL, Node.js.  
                  Key Features: Role-based login with different permission levels, full CRUD operations (create, read, update, delete) for managing news articles, and seamless LinkedIn integration for sharing articles. The application is fully responsive, ensuring compatibility across all devices, and supports three languages to cater to a diverse audience."
                  buttonText="View Project"
                  buttonLink="https://newvalue-actualidad.vercel.app/"
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
