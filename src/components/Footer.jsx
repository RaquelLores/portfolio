
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-850 text-white py-4">
      <div className="container mx-auto flex flex-col items-center space-y-2">
        <div className="flex space-x-8">
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/raquellores/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-500 transition duration-300"
          >
            <FaLinkedin size={34} />
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/RaquelLores"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-500 transition duration-300"
          >
            <FaGithub size={34} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;