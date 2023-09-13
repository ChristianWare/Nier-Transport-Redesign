import { FC } from "react";
import Image from "next/image";
import styles from "./IndivService.module.css";
import Img from "../../../../public/images/Sub2.png";
import { IndivServiceProps } from "@/app/lib/interface";

const IndivService: FC<IndivServiceProps> = ({ mapData }) => {
  return (
    <article className={styles.container}>
          <div className={styles.content}>
            <div className={styles.left}>
              <h3>Service Title Here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Necessitatibus in ipsam impedit nulla, quod dolore ducimus animi
                cumque dignissimos veritatis fuga, repudiandae ipsa totam
                nostrum eum quasi eos velit qui.
              </p>
            </div>
            <div className={styles.right}>
              <div className={styles.imgContainer}>
                <Image src={Img} alt='' fill className={styles.img} />
              </div>
            </div>
          </div>
    </article>
  );
};
export default IndivService;
