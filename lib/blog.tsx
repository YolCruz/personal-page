import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Markdown from "markdown-it";
import hljs from "highlight.js";

const postsDirectory = path.join(process.cwd(), "posts/blog");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allWebsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as {
        title: string;
        date: string;
        summary: string;
      }),
    };
  });

  return allWebsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostsIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostsData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

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

  const contentHtml = md.render(matterResult.content)

  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  };
}
