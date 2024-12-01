import Frame from "@/components/frame";
import { photos } from "@/data/photos";
import React from "react";

async function Photos({ params }: { params: { id: string } }) {
  const { id } = params;
  console.log(id);
  const photo = photos.find((photo) => photo.id === Number(id))!;
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-cyan-500">
        <Frame photo={photo} />
      </div>
    </div>
  );
}

export default Photos;
