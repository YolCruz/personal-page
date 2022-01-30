import DOMPurify from "isomorphic-dompurify";
import Markdown from "markdown-it";
import hljs from "highlight.js";
import { useEffect, useState } from "react";
import styles from "styles/websites/markdown-previewer.module.scss"

interface Props {
  text: string;
}

export default function Renderer({ text }: Props) {
  const md = Markdown({
    highlight: (str: string, lang: string): string => {
      const code: string =
        lang && hljs.getLanguage(lang)
          ? hljs.highlight(str, {
              language: lang,
              ignoreIllegals: true,
            }).value
          : md.utils.escapeHtml(str);
          return `<pre class="hljs"><code>${code}</code></pre>`;
    },
  });
  const [parsed, setParsed] = useState(DOMPurify.sanitize(md.render(text)));
  useEffect(() => {
    setParsed(() => {
      return DOMPurify.sanitize(md.render(text));
    });
  }, [text, md]);
  return (
    <div className="bg-white p-4 border-2 border-black rounded-lg shadow-md">
      <div id="preview" className={`${styles.renderer}`} dangerouslySetInnerHTML={{ __html: parsed }} />
    </div>
  );
}
