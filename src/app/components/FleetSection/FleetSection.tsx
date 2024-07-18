import { fleet } from "@/app/lib/data";
import styles from "./FleetSection.module.css";
import Image from "next/image";
import Button from "../Button/Button";

const FleetSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.bottom}>
          {fleet.map((x) => (
            <div key={x.id} className={styles.imgContainer}>
              <Image
                src={x.src}
                alt='img description'
                fill
                className={styles.img}
              />
            </div>
          ))}
        </div>
        <div className={styles.btnContainer}>
          <Button
            href='https://bookridesonline.com/book/?dbaid=L4JAaOi0gExXw5xek9dmgQ%3d%3d'
            target='_blank'
            text='Book Now'
            btnType='primary'
          />
        </div>
      </div>
    </section>
  );
};
export default FleetSection;
