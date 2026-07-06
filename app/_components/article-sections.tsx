import React from 'react';
interface ReactChildren {
  children: React.ReactNode;
}

const SubtitleH3 = ({ children }: ReactChildren) => {
  return <h3 className="text-custom-secondary mb-3 text-2xl">{children}</h3>;
};
const Paragraph = ({ children }: ReactChildren) => {
  return <p className="font-oxygen leading-10 text-white">{children}</p>;
};
const ArticleSections = ({ children }: ReactChildren) => {
  return (
    <section className="my-4">
      <article>{children}</article>
    </section>
  );
};

export { ArticleSections, SubtitleH3, Paragraph };
