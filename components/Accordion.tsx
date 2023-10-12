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

interface Values {
  title: string;
  items: DataItem[];
  object_id: string | number;
}

const Accordion = ({ values }: { values: Values }) => {
  return (
    <section>
      <h1>{values.title}</h1>
      <div>
        <div>
          {values.items.map((accordion, idx) => (
            <article key={idx}>
              <h2>{accordion.title}</h2>
              {accordion.description}
            </article>
          ))}
        </div>
        <div>
          <img
            src={`https://testapi.einzelwerk.io/${values.items[0].image.url}`}
            alt={"image_placeholder"}
          />
        </div>
      </div>
    </section>
  );
};
export default Accordion;
