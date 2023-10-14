import SkillsTabs from "./SkillsTabs";

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
  return (
    <section className="flex flex-col gap-16 justify-center items-center py-16 px-4 md:px-16 bg-gray-100 text-gray-950 font-arboria-book">
      <h1 className="flex flex-wrap max-w-4xl justify-center items-center font-arboria-medium text-4xl md:text-5xl text-center">
        {values.title.split(" ").slice(0, 2).join(" ")}
        <div className="inline-block flex-shrink-0 w-24 h-24 p-1 rounded-full overflow-hidden mx-4 border-2 border-dotted border-blue-600 ">
          <video
            className="w-full h-full rounded-full object-cover"
            autoPlay
            loop
            muted
          >
            <source
              src={`https://testapi.einzelwerk.io/${values.video.url}`}
              type="video/mp4"
            />
          </video>
        </div>
        {values.title.split(" ").slice(2).join(" ")}
      </h1>
      <SkillsTabs values={values} />
    </section>
  );
};
export default Skills;
