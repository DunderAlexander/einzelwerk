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
  provider: string;
  url: string;
  embed_video: string;
}

interface DataItem {
  title: string;
  description: string;
  button: Button;
  video: Video;
  object_id: string | number;
}

const About = ({ items }: { items: DataItem[] }) => {
  return (
    <section>
      {items.map((item, idx) => (
        <article key={idx}>
          <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button>{item.button.caption}</button>
          </div>
          <div>
            <video
              src={`https://testapi.einzelwerk.io/${item.video.url}`}
              loop
              autoPlay
              muted
            ></video>
          </div>
        </article>
      ))}
    </section>
  );
};
export default About;
