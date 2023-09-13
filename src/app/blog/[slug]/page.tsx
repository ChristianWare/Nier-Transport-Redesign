import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import LayoutWrapper from "@/app/components/LayoutWrapper/LayoutWrapper";
import ContentPadding from "@/app/components/ContentPadding/ContentPadding";
import PageIntro from "@/app/components/PageIntro/PageIntro";
import SlugImage from "@/app/components/SlugImage/SlugImage";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blogs"));

  const paths = files.map((filename) => {
    slug: filename.replace(".mdx", "");
  });

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("blogs", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

const components = { SlugImage }

export default function Page({ params }: any) {
  const props = getPost(params);

  return (
    <main>
      <PageIntro
        heading={props.frontMatter.title}
        copy={props.frontMatter.description}
        src={props.frontMatter.thumbnaillUrl}
      />
      <LayoutWrapper>
        <ContentPadding>
          <article>
            <MDXRemote source={props.content} components={components} />
          </article>
        </ContentPadding>
      </LayoutWrapper>
    </main>
  );
}
