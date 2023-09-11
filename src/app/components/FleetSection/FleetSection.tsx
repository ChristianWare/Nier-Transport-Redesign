import { fleet } from "@/app/lib/data";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./FleetSection.module.css";
import Image from "next/image";

const FleetSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.top}>
              <h2 className={styles.heading}>Our Fleet</h2>
              <p className={styles.copy}>
                At Nier Transportation, our commitment is not just to get you
                from point A to point B; it&#39;s to provide an exceptional,
                comfortable, and enjoyable journey. Experience the difference
                with our carefully curated fleet of vehicles that cater to your
                every need. We invite you to explore our services and reserve
                your preferred vehicle today for a transportation experience
                like no other. Travel in style with Nier Transportation - where
                luxury meets the road. Our vehicle line up includes the 2024
                Chevy Suburban, and the 2023 Ford Sprinter.
              </p>
            </div>
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
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default FleetSection;
