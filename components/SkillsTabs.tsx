"use client";

import { Tab } from "@headlessui/react";
import { sanitize } from "isomorphic-dompurify";
import { Fragment } from "react";

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

const SkillsTabs = ({ values }: { values: Values }) => {
  return (
    <Tab.Group>
      <Tab.List
        as="div"
        className="flex flex-wrap font-arboria-medium w-full max-w-3xl gap-4"
      >
        {values.items.map((tab) => (
          <Tab as={Fragment} key={tab.object_id}>
            {({ selected }) => (
              <button
                className={`py-4 px-6 rounded-2xl border flex-1 transition-all ${
                  selected ? "bg-white border-blue-600" : "border-gray-400"
                }`}
              >
                {tab.title}
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels as={Fragment}>
        {values.items.map((tab) => (
          <Tab.Panel
            as="div"
            className="grid gap-5 md:grid-cols-3"
            key={tab.object_id}
          >
            {tab.items.map((card) => (
              <article
                className="flex flex-col gap-12 justify-between flex-1 p-7 border border-gray-400 rounded-2xl"
                key={card.object_id}
              >
                <h2 className="text-3xl font-arboria-medium">{card.title}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: sanitize(card.description),
                  }}
                ></div>
              </article>
            ))}
            <article className="flex flex-col gap-12 flex-1 p-7 border border-gray-400 rounded-2xl text-white bg-about-button justify-between">
              <h2 className="text-3xl font-arboria-medium">
                {values.cta_title}
              </h2>
              <div className="flex flex-col gap-4">
                <p>{values.cta_description}</p>
                <button className="text-gray-950 bg-white rounded-2xl py-2 px-4 w-max">
                  {values.cta_button.caption}
                </button>
              </div>
            </article>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
export default SkillsTabs;
