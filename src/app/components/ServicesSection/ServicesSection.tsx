import styles from "./ServicesSection.module.css";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import Button from "../Button/Button";
import ContentPadding from "../ContentPadding/ContentPadding";
import Airport from "../../../../public/icons/airport.svg";
import Distance from "../../../../public/icons/distance.svg";
import Event from "../../../../public/icons/event.svg";
import PartyBus from "../../../../public/icons/partybus.svg";
import Reocurring from "../../../../public/icons/reocurring.svg";
import Golf from "../../../../public/icons/golf.svg";

const servicesSection = [
  {
    id: 1,
    icon: <Airport className={styles.icon} width={60} height={60} />,
    service: "Airport Transfers",
    descr: "Transportation to all airports in Arizona",
    // "Scottsdale Airport, Phoenix Sky Harbor International Airport, Phoenix-Mesa Gateway.",
    href: "/airport-transfers",
  },
  {
    id: 2,
    icon: <Event className={styles.icon} width={50} height={50} />,
    service: "Special Events",
    descr: "Waste Management Open, PGA Tour, Spring Training. ",
    href: "/special-events",
  },
  {
    id: 3,
    icon: <PartyBus className={styles.icon} width={50} height={50} />,
    service: "Party Bus",
    descr: "Celebrate in style with our party bus services.",
    href: "/party-bus",
  },
  {
    id: 4,
    icon: <Reocurring className={styles.icon} width={50} height={50} />,
    service: "Reoccurring Rides",
    descr: "Drive when you want, with who you want.",
    href: "/reoccurring-rides",
  },
  {
    id: 5,
    icon: <Distance className={styles.icon} width={50} height={50} />,
    service: "Long Distance Drives",
    descr: "We will get you where you need to go, however far.",
    href: "/long-distance-drives",
  },
  {
    id: 6,
    icon: <Golf className={styles.icon} width={50} height={50} />,
    service: "Golf Outing Tours",
    descr: "We'll take you to all major golf couses in all of Arizona.",
    href: "/golf-outing-tours",
    // "Scottsdale TPC, Troon Golf Course, Grayhawk, We-Ko-Pa golf courses.",
  },
] as const;
const ServicesSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <h2 className={styles.heading}>Our Services</h2>
              <p className={styles.copy}>
                Whether it&#39;s a simple airport transfer, special event, or
                girls night out, our black car service delivers the epitome of
                luxury and class. Book your next ride with us. Hare are some of
                the services we provide:
              </p>
              <div className={styles.btnContainer}>
                <Button
                  href='/services'
                  text='More Details'
                  btnType='primary'
                />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.servicesGrid}>
                {servicesSection.map((x) => (
                  <div key={x.id} className={styles.card}>
                    {x.icon}
                    <h3 className={styles.subheading}>{x.service}</h3>
                    {/* <p content={styles.desc} className={styles.desc}>
                      {x.descr}
                    </p> */}
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

export default ServicesSection;
