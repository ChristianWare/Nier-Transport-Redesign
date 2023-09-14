"use client";

import { BlogSection, BlogData } from "@/app/lib/interface";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./BlogSection.module.css";
import { FC } from "react";
import BlogPreview from "../BlogPreview/BlogPreview";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";

const BlogSection: FC<BlogSection> = ({ blogData }) => {
  const pathname = usePathname();

  return (
    <section className={styles.continer}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.mainContent}>
            <div className={styles.top}>
              <h2 className={styles.heading}>
                {pathname.includes("blog") ? "Articles" : "Our Blog"}
              </h2>
              <p className={styles.copy}>
                Explore our blog for the latest updates, travel tips, and
                industry insights to enhance your black car service experience.
              </p>
            </div>
            <div className={styles.content}>
              {blogData.map((x: BlogData, index: number) => (
                <BlogPreview key={index} mapData={x} />
              ))}
            </div>
            <div className={styles.btnContainer}>
              {pathname !== "/blog" && (
                <Button
                  href='/blog'
                  text='See all Articles'
                  btnType='tertiary'
                />
              )}
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default BlogSection;
