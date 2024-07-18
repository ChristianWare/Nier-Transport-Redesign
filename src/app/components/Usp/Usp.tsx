import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Usp.module.css";
import Airport from "../../../../public/icons/airport.svg";

const data = [
  {
    id: 1,
    usp: "Unwavering commitment to excellence",
    icon: <Airport className={styles.icon} width={60} height={60} />,
  },
  {
    id: 2,
    usp: "Meticulously maintained fleet of luxury vehicles",
    icon: <Airport className={styles.icon} width={60} height={60} />,
  },
  {
    id: 3,
    usp: "Desire to go above and beyond to exceed your expectations",
    icon: <Airport className={styles.icon} width={60} height={60} />,
  },
];

const Usp = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.top}>
              <h2 className={styles.heading}>What sets us apart</h2>
              <p className={styles.copy}>What sets us apart is our...</p>
            </div>
            <div className={styles.bottom}>
              {data.map((x) => (
                <div key={x.id} className={styles.card}>
                 
                  {x.icon}
                  <h3 className={styles.usp}>{x.usp}</h3>
                </div>
              ))}
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default Usp;
