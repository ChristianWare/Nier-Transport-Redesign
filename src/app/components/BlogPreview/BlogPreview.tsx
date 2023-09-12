import { BlogPreview } from "@/app/lib/interface";
import styles from "./BlogPreview.module.css";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const BlogPreview: FC<BlogPreview> = ({ mapData, key }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          {/* <Link href={`/${mapData.meta.category}/${mapData.slug}`}> */}
          {/* https://stackoverflow.com/questions/76686377/application-error-a-server-side-exception-has-occurred-next-js */}
          <Link href='/'>
            <Image
              alt='image'
              src={mapData.meta.thumbnaillUrl}
              fill
              className={styles.img}
            />
          </Link>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.dateTimeContainer}>
            <time dateTime='2023-02-02'>{mapData.meta.date}</time>
          </div>
          <Link href={`/${mapData.meta.category}/${mapData.slug}`} passHref>
            <h2 className={styles.title}>{mapData.meta.title}</h2>
          </Link>
          <p className={styles.copy}>{mapData.meta.description}</p>
        </div>
      </div>
    </div>
  );
};
export default BlogPreview;
