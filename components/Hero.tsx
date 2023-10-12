interface Video {
  provider: string;
  url: string;
  embed_video: string;
  title: string;
  thumb_url: string;
  description: string;
  preview: string;
}

interface DataItem {
  title: string;
  subtitle: string;
  video: Video;
  object_id: number;
}

const Hero = ({ items }: { items: DataItem[] }) => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center">
      <video
        loop
        autoPlay
        muted
        src={`https://testapi.einzelwerk.io/${items[0].video.url}`}
        className="absolute -z-10"
      ></video>
      <h1>{items[0].title}</h1>
      <p>{items[0].subtitle}</p>
    </section>
  );
};
export default Hero;
