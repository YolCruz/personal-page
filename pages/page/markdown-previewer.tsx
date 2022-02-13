import { Website } from "components/layouts";
import React, { useState } from "react";
import Editor from "components/markdown-previewer/editor";
import Renderer from "components/markdown-previewer/renderer";
import Script from "next/script";

export default function MarkownPreviewer() {
  const [markdownText, setMarkdownText] = useState(
    "# Markdown editor\nWrite markdown text and see it load in real time\n\n## Add images, links and even code!\n![Dogs](https://i.ibb.co/8D2nKzB/ts1jpcw2gvr01.jpg)\nCheck out my [Github profile](https://github.com/YolCruz \"my github profile\")\n\nInsert code anywere. Inline `console.log(\"Hello there\") and code blocks`\n```html\n\t<div class=\"example\">\n\t\t<h1>Hello there</h1>\n\t</div>\n```\n\n## Emphatize text\nEither **bold** or *italic*\n\n## Create lists \n- Unordered\n- list\n\n1. Ordered\n2. List\n\n> This is an amazing page\n"
  );
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownText(e.target.value);
  };

  return (
    <Website
      title="Markdown Previewer"
      description="Write Markdown and see it render as you type it"
    >
      <Script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js" />
      <div className="bg-purple-800 w-screen min-h-screen max-w-full sm:px-5 md:px-10 pt-24 flex flex-col gap-10">
        <Editor text={markdownText} handleUpdate={handleInput} />
        <Renderer text={markdownText} />
      </div>
    </Website>
  );
}
