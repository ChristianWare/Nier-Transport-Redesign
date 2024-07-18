import Image from "next/image";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./TestimonialSection.module.css";
import { reviews } from "@/app/lib/data";
import Button from "../Button/Button";

const TestimonialSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.bottom}>
              <div className={styles.cardContainer1}>
                {reviews.slice(0, 3).map((x, index) => (
                  <div key={index} className={styles.card}>
                    <p className={styles.review}>&rdquo;{x.review}&rdquo;</p>
                    <div className={styles.personBox}>
                      <Image
                        src={x.person}
                        alt='person'
                        title='person'
                        width={70}
                        height={70}
                        className={styles.personImage}
                      />
                      <p className={styles.reviewer}>
                        {x.reviewer}
                        <span className={styles.company}>{x.company}</span>
                        <span className={styles.starContainer}>
                          <span className={styles.star}></span>
                          <span className={styles.star}></span>
                          <span className={styles.star}></span>
                          <span className={styles.star}></span>
                          <span className={styles.star}></span>
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.top}>
              <h2 className={styles.heading}>Testimonials</h2>
              <p className={styles.copy}>
                Read What Our Clients Have to Say About Their Journey with Us
              </p>
              <div className={styles.btnContainer}>
                <Button
                  href='/testimonials'
                  text='See all reviews'
                  btnType='primary'
                />
              </div>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};

export default TestimonialSection;
