import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';
interface ReactChildren {
  children: React.ReactNode;
}
interface IImageContainer {
  path: StaticImport;
  title: string;
}
const SubtitleH3 = ({ children }: ReactChildren) => {
  return (
    <h3 className="text-custom-secondary font-oxygen mb-3 pl-4 text-2xl font-bold">
      {children}
    </h3>
  );
};
const Paragraph = ({ children }: ReactChildren) => {
  return (
    <p className="font-oxygen px-2 leading-[2rem] text-white lg:text-lg lg:leading-7">
      {children}
    </p>
  );
};
const ArticleSections = ({ children }: ReactChildren) => {
  return (
    <section className="my-4 rounded-md">
      <article>{children}</article>
    </section>
  );
};
const Article = ({ children }: ReactChildren) => {
  return <article className="space-y-3">{children}</article>;
};
const Section = ({ children }: ReactChildren) => {
  return <section className="my-4 space-y-4 rounded-md">{children}</section>;
};
const ImageContainer = ({ path, title }: IImageContainer) => {
  return (
    <div className="relative mx-auto h-[300px] w-full overflow-hidden rounded-lg">
      <div className="absolute h-full w-full bg-gradient-to-t from-neutral-950 to-transparent px-4"></div>
      <Image src={path} alt={title} className="-mt-12 lg:-mt-32" />
    </div>
  );
};

export {
  ArticleSections,
  SubtitleH3,
  Paragraph,
  Article,
  Section,
  ImageContainer,
};
