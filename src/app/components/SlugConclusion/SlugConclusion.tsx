import Image from "next/image";
import styles from "./SlugConclusion.module.css";
import Person from "../../../../public/icons/person.png";

const SlugConclusion = ({ copy }: { copy: string }) => {
  return (
    <div className={styles.copyContainer}>
      <p className={styles.copy}>{copy}</p>
      <div className={styles.personBox}>
        <Image
          src={Person}
          alt='person'
          title='person'
          width={50}
          height={50}
          className={styles.personImage}
        />
        <div className={styles.reviewer}>Barry LaNier</div>
        <span className={styles.title}>CEO</span>
      </div>
    </div>
  );
};
export default SlugConclusion;
