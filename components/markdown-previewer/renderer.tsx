import DOMPurify from "isomorphic-dompurify";
import Mardown from "markdown-it";
import { useEffect, useState } from "react";
import styles from "styles/websites/markdown-previewer.module.scss"

interface Props {
  text: string;
}

export default function Renderer({ text }: Props) {
  const md = Mardown();
  const [parsed, setParsed] = useState(DOMPurify.sanitize(md.render(text)));
  useEffect(() => {
    setParsed(() => {
      return DOMPurify.sanitize(md.render(text));
    });
  }, [text, md]);
  return (
    <div className="bg-white p-4 border-2 border-black rounded-lg shadow-md">
      <div className={`${styles.renderer}`} dangerouslySetInnerHTML={{ __html: parsed }} />
    </div>
  );
}
