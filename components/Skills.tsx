interface Button {
  caption: string;
  type: string;
  file: string;
  href: string;
  name: string;
  attr: string;
  resource: string;
  value: string;
  classes: string;
  published: string;
  disabled: string;
  target_blank: string;
}

interface Video {
  provider?: string;
  url: string;
  title?: string;
}

interface InnerDataItem {
  title: string;
  description: string;
  object_id: string | number;
}

interface DataItem {
  title: string;
  items: InnerDataItem[];
  object_id: string | number;
}

interface Values {
  title: string;
  video: Video;
  cta_title: string;
  cta_description: string;
  cta_button: Button;
  items: DataItem[];
}

const Skills = ({ values }: { values: Values }) => {
  //TODO: Append CTA card to cards array before mapping
  return (
    <section>
      <h1>{values.title}</h1>
      <div>
        {values.items.map((tab, idx) => (
          <button key={idx}>{tab.title}</button>
        ))}
      </div>
      <div>
        {values.items[0].items.map(
          (
            card,
            idx //TODO: create a tab system to show cards according with chosen card
          ) => (
            <article key={idx}>
              <h2>{card.title}</h2>
              {card.description}
            </article>
          )
        )}
      </div>
    </section>
  );
};
export default Skills;
