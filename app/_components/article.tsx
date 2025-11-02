import React, { ReactNode } from 'react';
interface SubtitleProps {
  firstWord: string;
  secoundtWord: string;
}
export const Subtitle = ({ firstWord, secoundtWord }: SubtitleProps) => {
  return (
    <h2 className="text-center">
      <span className="font-sans text-3xl font-light text-neutral-100">
        {firstWord}
      </span>
      <span className="font-oxygen text-2xl font-black text-emerald-500">
        {secoundtWord}
      </span>
    </h2>
  );
};
export const Paragraph = ({ children }: { children: ReactNode }) => {
  return <p className="font-oxygen mt-4 text-lg tracking-wide">{children}</p>;
};
export const Article = ({ children }: { children: ReactNode }) => {
  return <article>{children}</article>;
};
