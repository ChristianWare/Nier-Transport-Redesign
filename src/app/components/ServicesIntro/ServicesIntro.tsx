import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./ServicesIntro.module.css";

const ServicesIntro = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.top}>
            <p className={styles.copy}>
              When you need to be on time and want style, we are the best
              option. Our reputation is built on our high-end transportation and
              attentive care. Your trip to or from the airport will be flawless.
              Forget about crowded shuttles or the ups and downs of
              ride-sharing. Experience tranquility and reliability with our
              expert town solutions, conveniently located by searching for
              &quot;town car service near me&quot;.
            </p>
            <p className={styles.copy}>
              A sleek black ride parked outside a terminal with a private driver
              waiting by the open door. The headlights are on, casting a warm
              glow on the glossy exterior. The driver, dressed in a professional
              suit, holds a sign with the company&apos;s logo. Luggage is
              visible in the trunk, ready for departure. The backdrop features a
              busy scene with airplanes and passengers in the distance.
            </p>
            <p className={styles.copy}>
              We fit your schedule, whether you&apos;re flying early in the
              morning or late at night. Say hello to hassle-free travel with
              just a few clicks. For bigger groups or those who love extra room,
              our super shuttle phoenix option offers luxury and space.
            </p>
            <p className={styles.copy}>
              For travelers seeking an airport limo near me, we&apos;re your top
              choice. Our fleet of high-end rides and dedicated chauffeurs
              ensure your safety and satisfaction. Choosing us means you get a
              worry-free journey from the city to the terminal.
            </p>
          </div>
          <div className={styles.content}></div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default ServicesIntro;
