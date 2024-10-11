"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import useMeasure from "react-use-measure";
import styles from "./NewReview.module.css";
import { reviews } from "@/app/lib/data";
import Image from "next/image";

const CARD_WIDTH = 350;
const CARD_HEIGHT = 550;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

type ItemType = {
  id: number;
  review: string;
  reviewer: string;
  company: string;
  person: any;
};

const NewReview = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (reviews.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className={styles.newReviewContainer} ref={ref}>
      <div className={styles.section}>
        <div className={styles.container}>
          <motion.div
            animate={{
              x: offset,
            }}
            className={styles.cardWrapper}
          >
            {reviews.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
          </motion.div>
        </div>

        <>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_LEFT ? "0%" : "-100%",
            }}
            className={styles.buttonLeft}
            onClick={shiftLeft}
          ></motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? "0%" : "100%",
            }}
            className={styles.buttonRight}
            onClick={shiftRight}
          ></motion.button>
        </>
      </div>
    </section>
  );
};

const Card = ({ review, reviewer, person, company }: ItemType) => {
  return (
    <div
      className={styles.card}
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: MARGIN,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className={styles.cardContent}>
        <p className={styles.description}>{review}</p>
        {/* <p className={styles.description}>{company}</p> */}
        <div className={styles.personBox}>
          <Image
            src={person}
            alt='person'
            title='person'
            width={70}
            height={70}
            className={styles.personImage}
          />
          <p className={styles.reviewer}>
            {reviewer}
            <span className={styles.company}>{company}</span>
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
    </div>
  );
};

export default NewReview;
