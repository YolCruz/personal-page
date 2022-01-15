import fs from "fs";
import path from "path";
import matter from "gray-matter";

const websitesDirectory = path.join(process.cwd(), "posts/websites");

export function getSortedWebsitesData() {
  const fileNames = fs.readdirSync(websitesDirectory);
  const allWebsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(websitesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as {
        title: string;
        picture: string;
        date: string;
        description: string;
        descriptionLong: string;
        alt: string;
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
