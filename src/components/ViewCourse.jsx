import React from "react";

export const ViewCourse = (props) => {
  const data = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/300",
      title: "Card 1",
      description: "Description for card 1",
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/300",
      title: "Card 2",
      description: "Description for card 2",
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/300",
      title: "Card 3",
      description: "Description for card 3",
    },
    {
      id: 4,
      imageUrl: "https://via.placeholder.com/300",
      title: "Card 4",
      description: "Description for card 4",
    },
    {
      id: 5,
      imageUrl: "https://via.placeholder.com/300",
      title: "Card 5",
      description: "Description for card 5",
    },
    {
      id: 6,
      imageUrl: "https://via.placeholder.com/300",
      title: "Card 6",
      description: "Description for card 6",
    },
  ];

  function Card({ imageUrl, title, description }) {
    return (
      <div className="w-[450px] rounded overflow-hidden shadow-lg p-5 m-2">
        <img className="w-[400px] h-[275px]" src={imageUrl} alt={title} />
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
      <div className="flex flex-wrap justify-center">
        {data.map((cardData) => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </div>
    </div>
  );
};
