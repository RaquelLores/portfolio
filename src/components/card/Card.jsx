import { useState } from "react";

const Card = ({ imageSrc, description, buttonText, buttonLink }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden group w-96">
      <div className="card-image overflow-hidden">
        <img
          src={imageSrc}
          alt="Card"
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="card-body p-4">
        {/* Show full description if expanded, otherwise truncate */}
        <p className={`card-text text-gray-300 text-sm mb-4 ${isExpanded ? "" : "line-clamp-3"}`}>
          {description}
        </p>
        <button
          onClick={toggleDescription}
          className="text-green-400 text-sm hover:underline focus:outline-none"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>

      <div className="card-footer p-4">
        <a
          href={buttonLink}
          className="btn bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Card;