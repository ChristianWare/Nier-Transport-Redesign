import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./BookingProcess.module.css";
import Car from "../../../../public/icons/car.svg";
import Date from "../../../../public/icons/calendar.svg";
import Success from "../../../../public/icons/success.svg";
import Select from "../../../../public/icons/select.svg";
import Button from "../Button/Button";
import Image from "next/image";
import Img from "../../../../public/images/img6.png";

const data = [
  {
    id: 1,
    icon: <Select width={40} height={40} className={styles.icon} />,
    title: "Select Your Service",
  },
  {
    id: 1,
    icon: <Car width={40} height={40} className={styles.icon} />,
    title: "Choose Your Vehicle",
  },
  {
    id: 1,
    icon: <Date width={40} height={40} className={styles.icon} />,
    title: "Choose date/time",
  },
  {
    id: 1,
    icon: <Success width={40} height={40} className={styles.icon} />,
    title: "Reserve Your Ride",
  },
];

const BookingProcess = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.parent}>
            <div className={styles.top}>
              <h2 className={styles.heading}>Booking Process</h2>
              <p className={styles.copy}>
                Your journey begins here. Book a ride with Nier Transportation
                with these four easy steps:
              </p>
            </div>
            <div className={styles.content}>
              <div className={styles.left}>
                <div className={styles.imgContainer}>
                  <Image src={Img} alt='image' fill className={styles.img} />
                </div>
              </div>
              <div className={styles.right}>
                {data.map((x) => (
                  <div key={x.id} className={styles.card}>
                    {x.icon}
                    <h3 className={styles.step}>{x.title}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.btnContainer}>
              <Button
                href='https://bookridesonline.com/book/?dbaid=L4JAaOi0gExXw5xek9dmgQ%3d%3d'
                target='_blank'
                text='Book Now'
                btnType='primary'
              />
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default BookingProcess;
