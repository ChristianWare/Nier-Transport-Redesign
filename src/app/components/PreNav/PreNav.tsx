import styles from "./PreNav.module.css";

const PreNav = () => {
  return (
    <div className={styles.preNav}>
      Book via our website and receive a 10% discount. Use Promo code{" "}
      <span className={styles.code}>10BELOW</span>
    </div>
  );
};
export default PreNav;
