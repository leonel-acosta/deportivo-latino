import type { FC, JSX, ReactNode } from "react";

interface HtmlBlockProps {
  content: JSX.Element | JSX.Element[];
}

const HtmlBlock = ({ content }: HtmlBlockProps) => {
  return <div className="primary">{content}</div>;
};
export default HtmlBlock;
