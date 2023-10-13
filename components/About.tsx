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

const About = ({ values: { items } }: { values: { items: DataItem[] } }) => {
  return (
    <section className="flex flex-col gap-8 mx-4 md:mx-16 mb-20 text-white font-arboria-book">
      {items.map((item, idx) => (
        <article className="grid md:grid-cols-2 gap-24 items-center" key={idx}>
          <div className={`${idx % 2 === 0 ? "md:order-last" : ""}`}>
            <video
              className="rounded-2xl"
              src={`https://testapi.einzelwerk.io/${item.video.url}`}
              loop
              autoPlay
              muted
            ></video>
          </div>
          <div className="relative flex flex-col gap-4">
            <img
              className={`hidden md:block absolute -top-6 ${
                idx % 2 === 0 ? "-left-6" : "-right-6 rotate-90"
              }`}
              src="/angle.svg"
            />
            <h1 className="text-3xl font-arboria-medium">{item.title}</h1>
            <p>{item.description}</p>
            <button className="bg-about-button text-transparent bg-clip-text flex items-center gap-2">
              {item.button.caption}
              <img src="/about_button_arrow.svg" />
            </button>
            <img
              className={`hidden md:block absolute -bottom-10 ${
                idx % 2 === 0 ? "-right-6 rotate-180" : "-left-6 -rotate-90"
              }`}
              src="/angle.svg"
            />
          </div>
        </article>
      ))}
    </section>
  );
};
export default About;
