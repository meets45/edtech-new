import React from "react";
import thumbnail from "../assets/thumbnail.webp";
import { Link } from "react-router-dom";
export const ViewCourse = (props) => {
  const data = [
    {
      id: 1,
      title: "Card 1",
      description: "Description for card 1",
    },
    {
      id: 2,
      title: "Card 2",
      description: "Description for card 2",
    },
    {
      id: 3,
      title: "Card 3",
      description: "Description for card 3",
    },
    {
      id: 4,
      title: "Card 4",
      description: "Description for card 4",
    },
    {
      id: 5,
      title: "Card 5",
      description: "Description for card 5",
    },
    {
      id: 6,
      title: "Card 6",
      description: "Description for card 6",
    },
  ];

  function Card({ imageUrl, title, description }) {
    return (
      <div className="w-[450px] rounded overflow-hidden shadow-lg p-5 m-2">
        <img className="w-[400px] h-[225px]" src={thumbnail} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      <span className="text-2xl self-center mt-4 font-bold">
        Course Content
      </span>
      <div className="flex flex-wrap justify-center cursor-pointer">
        {data.map((cardData) => (
          <Link to="/videoplayer">
            <Card
              key={cardData.id}
              {...cardData}
              onClick={<Link to="/videoplayer"></Link>}
              className="cursor-pointer"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
