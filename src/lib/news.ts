import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm'; 

const newsDirectory = path.join(process.cwd(), 'src', 'content', 'news');

export function getSortedNewsData() {
  const fileNames = fs.readdirSync(newsDirectory);
  const allNewsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(newsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as {
        date: string;
        title: string;
        description: string;
        author: string;
        imageUrl: string;
      }),
    };
  });

  return allNewsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getNewsData(slug: string) {
  const fullPath = path.join(newsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark().use(gfm).use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(matterResult.data as {
      date: string;
      title: string;
      description: string;
      author: string;
      imageUrl: string;
    }),
  };
}
