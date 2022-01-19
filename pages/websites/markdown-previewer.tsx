import { Website } from "components/layouts";
import React, { useState } from "react";
import Editor from "components/markdown-previewer/editor";
import Renderer from "components/markdown-previewer/renderer";

export default function MarkownPreviewer() {
  const [markdownText, setMarkdownText] = useState(
    "# Markdown editor\nWrite markdown text and see it load in real time\n\n## Add images\n![Dogs](https://i.ibb.co/8D2nKzB/ts1jpcw2gvr01.jpg)\n\n## Emphatize text\nEither **bold** or *italic*\n\nChange text\n\nChange the type of text of any line between normal, Header 1, 2, 3 or 4. Try changing the text \"Change text\" above to a header 2!"
  );
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownText(e.target.value);
  };

  return (
    <Website
      title="Markdown Previewer"
      description="Write Markdown and see it render as you type it"
    >
      <div className="bg-purple-800 w-screen min-h-screen max-w-full sm:px-5 md:px-10 pt-24 flex flex-col gap-10">
        <Editor text={markdownText} handleUpdate={handleInput} />
        <Renderer text={markdownText} />
      </div>
    </Website>
  );
}
