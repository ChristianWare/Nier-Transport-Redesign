import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./BookingProcess.module.css";
import Car from "../../../../public/icons/car.svg";
import Date from "../../../../public/icons/date.svg";
import Success from "../../../../public/icons/success.svg";
import Select from "../../../../public/icons/select.svg";
import Button from "../Button/Button";
import Image from "next/image";
import Img from "../../../../public/images/img2.png";

const BookingProcess = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
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
              <div className={styles.card}>
                <Select width={50} height={50} />
                <h3 className={styles.step}>Select Your Service</h3>
              </div>
              <div className={styles.card}>
                <Car width={40} height={40} />
                <h3 className={styles.step}>Choose Your Vehicle</h3>
              </div>
              <div className={styles.card}>
                <Date width={40} height={40} />
                <h3 className={styles.step}>Pick your date and Time</h3>
              </div>
              <div className={styles.card}>
                <Success width={40} height={40} />
                <h3 className={styles.step}>Reserve Your Ride</h3>
              </div>
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
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default BookingProcess;
