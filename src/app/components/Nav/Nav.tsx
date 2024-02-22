"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";
import Link from "next/link";
import Logo from "../../../../public/icons/logowhite.png";
import LogoMobile from "../../../../public/icons/newnierlogo.png";
import Image from "next/image";
import Phone from "../../../../public/icons/phone.svg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      // check if body element exists:
      if (window.innerWidth <= 910 && isOpen) {
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
          <Link href='/' className={styles.logo}>
            <Image
              src={Logo}
              alt='logo'
              width={107}
              height={107}
              className={styles.officialLogo}
            />
          </Link>
        </div>
        <ul
          className={
            isOpen === false
              ? styles.navMenu
              : styles.navMenu + " " + styles.active
          }
        >
          <li onClick={openMenu}>
            <Image
              src={LogoMobile}
              alt='logo'
              width={107}
              height={50}
              className={styles.officialLogoMobile}
            />
          </li>
          <li className={styles.navItem} onClick={openMenu}>
            <Link
              href='/'
              className={pathname === "/" ? styles.activeLink : ""}
            >
              Home
            </Link>
          </li>
          <li className={styles.navItem} onClick={openMenu}>
            <Link
              href='/about'
              className={pathname.includes("/about") ? styles.activeLink : ""}
            >
              About
            </Link>
          </li>
          <li className={styles.navItem} onClick={openMenu}>
            <Link
              href='/services'
              className={
                pathname.includes("/services") ? styles.activeLink : ""
              }
            >
              Services
            </Link>
          </li>

          <li className={styles.navItem} onClick={openMenu}>
            <Link
              href='/blog'
              className={pathname.includes("/blog") ? styles.activeLink : ""}
            >
              Blog
            </Link>
          </li>
          <li className={styles.navItem} onClick={openMenu}>
            <Link
              href='/contact'
              className={pathname.includes("/contact") ? styles.activeLink : ""}
            >
              Contact
            </Link>
          </li>
          <li className={styles.navItem} onClick={openMenu}>
            <a href='tel:+4803006003' className={styles.mobilePhone}>
              <span>
                <Phone className={styles.mobileIcon} />
              </span>
              480-300-6003
            </a>
          </li>
          <div className={styles.bottom}>
            <p className={styles.copy}>
              Copyright &copy; 2023 Nier Transportation || All Rights Reserved
              || Designed and Developed By The Chris Ware Agency
            </p>
          </div>
        </ul>
        <a href='tel:+4803006003' className={styles.phone}>
          <span>
            <Phone className={styles.icon} />
          </span>
          480-300-6003
        </a>
        <span
          className={
            isOpen === false
              ? styles.hamburger
              : styles.hamburger + " " + styles.active
          }
          onClick={openMenu}
        >
          <span className={styles.whiteBar}></span>
          <span className={styles.whiteBar}></span>
          <span className={styles.whiteBar}></span>
        </span>
      </nav>
    </header>
  );
};
export default Nav;
