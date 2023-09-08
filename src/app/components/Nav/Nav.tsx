"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";
import Link from "next/link";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      // check if body element exists:
      if (window.innerWidth <= 768 && isOpen) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    }

    const handlResize = () => setIsOpen(false);
    window.addEventListener("resize", handlResize);

    return () => {
      window.removeEventListener("resize", handlResize);
      if (body) {
        body.style.overflow = "auto";
      }
    };
  }, [isOpen]);

  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href='/'>NIER</Link>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
