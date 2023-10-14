"use client";

import { useState } from "react";
import AccordionItem from "./AccordionItem";
import Image from "next/image";

interface Image {
  url: string;
}

interface DataItem {
  title: string;
  description: string;
  image: Image;
  object_id: string | number;
}

const AccordionChunkContent = ({
  accordionData,
}: {
  accordionData: DataItem[];
}) => {
  const [openItem, setOpenItem] = useState(0);
  return (
    <div className="grid md: grid-cols-2 gap-20">
      <div className="flex flex-col gap-10">
        {accordionData.map((accordion, index) => (
          <AccordionItem
            accordion={accordion}
            key={accordion.object_id}
            open={openItem === index}
            setOpen={() => setOpenItem(openItem === index ? openItem : index)}
          />
        ))}
      </div>
      <div className="relative">
        <Image
          className="rounded-3xl"
          layout="fill"
          objectFit="cover"
          src={`https://testapi.einzelwerk.io/${accordionData[openItem].image.url}`}
          alt={"image_placeholder"}
        />
      </div>
    </div>
  );
};
export default AccordionChunkContent;
