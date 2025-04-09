import React from "react";

const Card = ({ imageSrc, description, buttonText, buttonLink }) => {
  return (
    <div
      className="card bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden"
      style={{ width: "18rem" }}
    >
      <div className="card-image">
        <img src={imageSrc} alt="Card" className="w-full h-48 object-cover" />
      </div>

      <div className="card-body p-4">
        <p className="card-text text-gray-300 text-sm mb-4">{description}</p>
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
