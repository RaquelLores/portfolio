import { useState } from "react";

const Card = ({ imageSrc, description, buttonText, buttonLink }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-lg bg-gray-800 text-white shadow-lg">
      <div className="card-image overflow-hidden">
        <img
          src={imageSrc}
          alt="Card"
          className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
  
      <div className="flex flex-1 flex-col p-4">
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
  
      <div className="mt-auto p-4">
        {buttonLink ? (
        <a
        href={buttonLink}
        className="inline-block rounded bg-green-500 px-4 py-2 text-white transition duration-300 hover:bg-green-600"
        target="_blank"
        rel="noopener noreferrer"
  >
        {buttonText}
      </a>
    ) : (
      <p className="text-sm text-slate-400">Private repository</p>
    )}

      </div>
    </div>
  );
};

export default Card;