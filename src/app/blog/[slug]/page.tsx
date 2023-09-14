import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "./SlugPage.module.css";
import LayoutWrapper from "@/app/components/LayoutWrapper/LayoutWrapper";
import ContentPadding from "@/app/components/ContentPadding/ContentPadding";
import PageIntro from "@/app/components/PageIntro/PageIntro";
import SlugImage from "@/app/components/SlugImage/SlugImage";
import SlugHeading from "@/app/components/SlugHeading/SlugHeading";
import SlugConclusion from "@/app/components/SlugConclusion/SlugConclusion";
import FinalCTA from "@/app/components/FinalCTA/FinalCTA";
import BlogPreview from "@/app/components/BlogPreview/BlogPreview";
import { BlogData, BlogSection } from "@/app/lib/interface";
import { FC } from "react";

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

const blogsDirectory = path.join(process.cwd(), "blogs");
const files = fs.readdirSync(blogsDirectory);

const blogs = files.map((filename: any) => {
  const fileContent = fs.readFileSync(
    path.join(blogsDirectory, filename),
    "utf-8"
  );

  const { data: frontMatter } = matter(fileContent);

  // Define the properties within the `meta` object
  const meta = {
    category: frontMatter.category,
    thumbnaillUrl: frontMatter.thumbnaillUrl,
    date: frontMatter.date,
    readingTime: frontMatter.readingTime,
    title: frontMatter.title,
    description: frontMatter.description,
  };

  return {
    meta,
    slug: filename.replace(".mdx", ""),
  };
});

const components = { SlugImage, SlugHeading, SlugConclusion };

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
          <div className={styles.container}>
            <div className={styles.left}>
              <div className={styles.tocContainer}>
                <span className={styles.tocHeadingTitle}>In This Article</span>
                {props.frontMatter.toc.map((x: any, index: number) => (
                  <div key={index}>
                    <p className={styles.heading}>{x.heading}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.mdxContent}>
              <MDXRemote source={props.content} components={components} />
            </div>
            <div className={styles.right}>
              <span className={styles.headingTitle}>You May Also Like</span>
              <div className={styles.gradient}></div>
              {blogs.slice(0, 3).map((x, index) => (
                <div key={index}>
                  <h3>{x.meta.title}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.relatedArticles}>
            {blogs.slice(0, 3).map((x: BlogData, index: number) => (
              <BlogPreview key={index} mapData={x} />
            ))}
          </div>
        </ContentPadding>
      </LayoutWrapper>
      <FinalCTA />
    </main>
  );
}
