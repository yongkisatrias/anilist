import Image from "next/image";
import React from "react";

const AnimeList = ({ title, images }) => {
  return (
    <div className="bg-indigo-500">
      <Image src={images} alt="anime" width={600} height={600} />
      <h3>{title}</h3>
    </div>
  );
};

export default AnimeList;
