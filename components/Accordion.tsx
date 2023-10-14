import Image from "next/image";
import AccordionChunkContent from "./AccordionChunkContent";

interface Image {
  url: string;
}

interface DataItem {
  title: string;
  description: string;
  image: Image;
  object_id: string | number;
}

interface Values {
  title: string;
  items: DataItem[];
  object_id: string | number;
}

const Accordion = ({ values }: { values: Values }) => {
  return (
    <section className="bg-gray-900 flex flex-col items-center gap-16 font-arboria-book py-16 px-4 md:px-16 text-white">
      <h1 className="font-arboria-medium text-5xl text-center bg-accordion-text bg-clip-text text-transparent max-w-lg">
        {values.title}
      </h1>
      <AccordionChunkContent accordionData={values.items} />
    </section>
  );
};
export default Accordion;
