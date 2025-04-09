import React from "react";

const Card = ({ imageSrc, description, buttonText, buttonLink }) => {
  return (
    <div className="card bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden group w-96"> {/* Adjusted width */}
      <div className="card-image overflow-hidden">
        <img
          src={imageSrc}
          alt="Card"
          className="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-110" 
        />
      </div>

      <div className="card-body p-4">
        {/* Limit the description to 3 lines */}
        <p className="card-text text-gray-300 text-sm mb-4 line-clamp-3">
          {description}
        </p>
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