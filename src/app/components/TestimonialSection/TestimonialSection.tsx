import Image from "next/image";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./TestimonialSection.module.css";
import { reviews } from "@/app/lib/data";

const TestimonialSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <h2 className={styles.heading}>Testimonials</h2>
            <p>Read What Our Clients Have to Say About Their Journey with Us</p>
            <div className={styles.bottom}>
              <div className={styles.cardContainer1}>
                {reviews.slice(0, 4).map((x) => (
                  <div key={x.id} className={styles.card}>
                    <p className={styles.review}>&rdquo;{x.review}&rdquo;</p>
                    <div className={styles.personBox}>
                      <Image
                        src={x.person}
                        alt='person'
                        title='person'
                        width={50}
                        height={50}
                        className={styles.personImage}
                      />
                      <p className={styles.reviewer}>
                        {x.reviewer}
                        <span className={styles.company}>{x.company}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.cardContainer2}>
                {reviews.slice(4, 9).map((x) => (
                  <div key={x.id} className={styles.card}>
                    <p className={styles.review}>&rdquo;{x.review}&rdquo;</p>
                    <div className={styles.personBox}>
                      <Image
                        src={x.person}
                        alt='person'
                        title='person'
                        width={50}
                        height={50}
                        className={styles.personImage}
                      />
                      <p className={styles.reviewer}>
                        {x.reviewer}
                        <span className={styles.company}>{x.company}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default TestimonialSection;
