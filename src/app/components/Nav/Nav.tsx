"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";
import Link from "next/link";
import Logo from "../../../../public/icons/nierlogo.png";
import Image from "next/image";

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
          <Link href='/' className={styles.logo}>
            <Image
              src={Logo}
              alt='logo'
              width={107}
              height={50}
              className={styles.officialLogo}
            />
          </Link>
        </div>
        <div className={styles.menuItemsGroup}>
          <ul
            className={
              isOpen === false
                ? styles.navMenu
                : styles.navMenu + " " + styles.active
            }
          >
            <li onClick={openMenu}>
              {/* <Link href='/' className={styles.logo}>
                <Logo className={styles.officialLogoMobile} />
              </Link> */}
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
                href='/pricing'
                className={
                  pathname.includes("/pricing") ? styles.activeLink : ""
                }
              >
                Pricing
              </Link>
            </li>
            <li className={styles.navItem} onClick={openMenu}>
              <Link
                href='/faq'
                className={pathname.includes("/faq") ? styles.activeLink : ""}
              >
                FAQ
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
                className={
                  pathname.includes("/contact") ? styles.activeLink : ""
                }
              >
                Contact
              </Link>
            </li>
            <div className={styles.bottom}>
              <p className={styles.copy}>
                Copyright &copy; 2023 Chris Ware Agency || All Rights Reserved
              </p>
            </div>
          </ul>
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
        </div>
      </nav>
    </header>
  );
};
export default Nav;
