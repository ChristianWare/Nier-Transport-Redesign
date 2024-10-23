import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./FleetInfo.module.css";
import Arrow from "../../../../public/icons/arrow2.svg";
import FleetSection from "../FleetSection/FleetSection";

const data = [
  {
    title: "Sleek and Stylish Vehicles",
    description:
      "Our fleet combines modern design with classic beauty. You'll find sedans, SUVs, and limousines that stand out. The plush leather seats and smooth ride make every trip unforgettable.",
  },
  {
    title: "Amenities for Ultimate Comfort",
    description:
      "Enjoy the best in travel with our premium amenities. We offer advanced entertainment and refreshments to make your trip comfortable. Our skilled drivers take care of the road, so you can relax and enjoy the luxury.",
  },
] as const;

const FleetInfo = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              Explore the Nier Transportation Fleet
            </h2>
            {/* <p className={styles.copy}>
              Having a direct booking website that facilitates direct
              communication offers several benefits for vacation rental property
              owners:
            </p> */}
          </div>
          <div className={styles.bottom}>
            {data.map((x, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.iconContainer}>
                  <Arrow className={styles.icon} width={25} height={25} />
                </div>
                <div>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.desc}>{x.description}</p>
                </div>
              </div>
            ))}
          </div>
          <FleetSection />
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default FleetInfo;
