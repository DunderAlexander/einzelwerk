import About from "@/components/About";
import Accordion from "@/components/Accordion";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export async function getData(lang: string = "en") {
  const res = await fetch(
    `https://testapi.einzelwerk.io/index.php?q=api/${lang}/resource/home`
  );

  if (!res.ok) throw new Error("No data available.");

  return res.json();
}

const chunks = [Hero, About, Skills, Accordion];

export default async function Home() {
  const { blocks } = await getData();
  return (
    <>
      {blocks.map((block: any, idx: number) => {
        const Chunk = chunks[idx];
        const {
          values: { items },
        } = block;
        return <Chunk key={idx} items={items} />;
      })}
    </>
  );
}
