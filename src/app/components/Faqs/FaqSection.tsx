import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./FaqSection.module.css";

const FaqSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <h2>FAQ&#39;s</h2>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default FaqSection;
