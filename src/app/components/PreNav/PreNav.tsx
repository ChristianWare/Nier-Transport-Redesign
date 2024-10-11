import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./PreNav.module.css";

const PreNav = () => {
  return (
    <LayoutWrapper>
      <ContentPadding>
        <div className={styles.preNav}>
          Book via our website and receive a 10% discount. Use Promo code -
          10BELOW
        </div>
      </ContentPadding>
    </LayoutWrapper>
  );
};
export default PreNav;
