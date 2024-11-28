import { Photo } from "@/data/photos";
import Image from "next/image";
import React from "react";
function Frame({ photo }: { photo: Photo }) {
  console.log(photo);
  return (
    <>
      <Image
        src={photo.imageSrc}
        alt=""
        width={600}
        height={600}
        className="w-full object-cover aspect-square"
      />
      <div className="bg-white p-4 px-6">
        <h3>{photo.name}</h3>
        <p>Taken by @{photo.username}</p>
      </div>
    </>
  );
}

export default Frame;
