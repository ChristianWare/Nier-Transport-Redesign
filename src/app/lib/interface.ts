import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface Button {
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
    // Add other properties if needed
  };
  slug: string;
}

export interface BlogPreview {
  mapData: BlogData;
  key: number;
}

export interface BlogSection {
  blogData: any;
}

export interface PageIntroProps {
  heading: string;
  copy: string;
  src: StaticImageData;
}

export interface SlugIntroProps {
  title: string;
  description: string;
  date: string;
  src: StaticImageData;
}

export interface IndivServiceProps {
  src: StaticImageData;
  title: string;
  desc: string;
  mapData: any;
}
