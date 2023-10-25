import { sanitize } from "isomorphic-dompurify";
import { Collapse } from "react-collapse";
import Arrow from "public/arrow.svg";

interface Image {
  url: string;
}

interface DataItem {
  title: string;
  description: string;
  image: Image;
  object_id: string | number;
}

const AccordionItem = ({
  accordion,
  open,
  setOpen,
}: {
  accordion: DataItem;
  open: boolean;
  setOpen: () => void;
}) => {
  return (
    <article className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h2
          className="font-arboria-medium text-2xl cursor-pointer"
          onClick={setOpen}
        >
          {accordion.title}
        </h2>
        <span className={`transition-all ${open ? "rotate-180" : ""}`}>
          <Arrow />
        </span>
      </div>
      <Collapse isOpened={open}>
        <div
          className="text-gray-200"
          dangerouslySetInnerHTML={{ __html: sanitize(accordion.description) }}
        ></div>
      </Collapse>
      <hr className="h-px bg-gray-700 border-0" />
    </article>
  );
};
export default AccordionItem;
