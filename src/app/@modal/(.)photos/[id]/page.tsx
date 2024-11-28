import Frame from "@/components/frame";
import Modal from "@/components/modal";
import { photos } from "@/data/photos";
import React from "react";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo = photos.find((photo) => photo.id === Number(id))!;
  return (
    <>
      <Modal>
        <Frame photo={photo} />
      </Modal>
    </>
  );
}
