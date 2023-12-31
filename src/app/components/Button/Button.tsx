import { FC } from "react";

import Link from "next/link";
import styles from "./Button.module.css";
import { Button } from "@/app/lib/interface";

const Button: FC<Button> = ({
  href = "",
  text,
  btnType,
  icon,
  target = "",
}) => {
  return (
    <button className={styles.container}>
      <Link
        href={href}
        className={`${styles.btn} ${styles[btnType]}`}
        target={target}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        {text}
      </Link>
    </button>
  );
};
export default Button;
