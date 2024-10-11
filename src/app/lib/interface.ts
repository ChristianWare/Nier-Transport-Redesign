import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface ButtonInterface {
  href: string;
  text: string;
  btnType: string;
  target?: string;
  icon?: ReactNode;
}

export interface BlogData {
  meta: {
    category: string;
    thumbnaillUrl: string;
    date: string;
    readingTime: number;
    title: string;
    description: string;
  };
  slug: string;
}

export interface BlogPreviewProps {
  mapData: BlogData;
  key: number;
}

export interface BlogSectionProps {
  blogData: any;
}

export interface SlugIntroProps {
  title: string;
  description?: string;
  date?: string;
  src: StaticImageData;
}

export interface IndivServiceProps {
  src: StaticImageData;
  title: string;
  desc: string;
  mapData: any;
}
