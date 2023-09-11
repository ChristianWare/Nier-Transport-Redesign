import Plane from "../../../public/icons/plane.png";
import Event from "../../../public/icons/event.png";
import Party from "../../../public/icons/party.png";
import Reoccurring from "../../../public/icons/reoccurring.png";
import Distance from "../../../public/icons/distance.png";
import Golf from "../../../public/icons/golf.png";
import Sprinter1 from "../../../public/images/sprinter1.png";
import Sprinter2 from "../../../public/images/sprinter2.png";
import Sprinter3 from "../../../public/images/sprinter3.png";
import Sub1 from "../../../public/images/sub1.png";
import Sub2 from "../../../public/images/sub2.png";
import Sub3 from "../../../public/images/sub3.png";

export const servicesSection = [
  {
    id: 1,
    icon: Plane,
    service: "Airport Transfers",
    descr:
      "Scottsdale Airport, Phoenix Sky Harbor International Airport, Phoenix-Mesa Gateway.",
  },
  {
    id: 2,
    icon: Event,
    service: "Special Events",
    descr:
      "Waste Management Open, PGA Tour, Super Bowl, Spring Training, and much more. ",
  },
  {
    id: 3,
    icon: Party,
    service: "Party Bus",
    descr:
      "Have something to celebrate? Celebrate in stles with our party bus services.",
  },
  {
    id: 4,
    icon: Reoccurring,
    service: "Reocurring Rides",
    descr:
      "Tired of getting a different Uber driver every time? Book with us for one driver.",
  },
  {
    id: 5,
    icon: Distance,
    service: "Long Distance Drives",
    descr:
      "Need to take a long distance trip? We will get you where you need to go, however far.",
  },
  {
    id: 6,
    icon: Golf,
    service: "Golf Tournament Pickup",
    descr:
      "Scottsdale TPC, Troon Golf Course, Grayhawk, We-Ko-Pa golf courses.",
  },
] as const;

export const areas = [
  {
    id: 7,
    city: "Scottsdale",
    desc: "Scottsdale is known for its vibrant arts scene, upscale shopping, and stunning desert landscapes.",
  },
  {
    id: 8,
    city: "Phoenix",
    desc: "The state's capital and largest city, offering a diverse cultural scene, desert botanical gardens, and outdoor adventures in the nearby Sonoran Desert.",
  },
  {
    id: 9,
    city: "Mesa",
    desc: "Mesa boasts a rich history, with attractions like the Mesa Arts Center and a thriving downtown area, making it a hub for arts and culture.",
  },
  {
    id: 10,
    city: "Tempe",
    desc: "Home to Arizona State University, combines a lively college atmosphere with recreational opportunities along Tempe Town Lake.",
  },
  {
    id: 13,
    city: "West Valley",
    desc: "The West Valley is made up of Avondale, Goodyear, Buckeye, Surprise, Glendale, Tolleson, and Peoria. These cities are known for its suburban lifestyle, and access to recreational opportunities. ",
  },
] as const;

export const fleet = [
  {
    id: 14,
    src: Sub1,
  },
  {
    id: 15,
    src: Sub2,
  },
  {
    id: 14,
    src: Sub3,
  },
  {
    id: 16,
    src: Sprinter1,
  },
  {
    id: 17,
    src: Sprinter2,
  },
  {
    id: 18,
    src: Sprinter3,
  },
] as const;
