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
import Person from "../../../public/icons/person.png";

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

export const reviews = [
  {
    id: 7,
    review:
      "I rely on Nier Transportation for all my business trips. Their professionalism, punctuality, and luxurious vehicles make every journey a breeze. Highly recommended!",
    reviewer: "John S.",
    company: "Business Traveler",
    person: Person,
  },
  {
    id: 8,
    review:
      "Our wedding day was made even more special with Nier Transportation. The elegant black car service added a touch of sophistication to our celebration. Thank you for making it unforgettable!",
    reviewer: "Sara M.",
    company: "Wedding Party",
    person: Person,
  },
  {
    id: 9,
    review:
      "As a frequent traveler, I've tried many car services, but Nier Transportation stands out. Their consistency and top-notch service keep me coming back every time.",
    reviewer: "David R.",
    company: "Frequent Traveler",
    person: Person,
  },
  {
    id: 10,
    review:
      "I always choose Nier Transportation for airport transfers. They've never let me down, and the peace of mind knowing they'll be waiting, even if my flight is delayed, is priceless.",
    reviewer: "Emily R.",
    company: "Airport Transfer",
    person: Person,
  },
  {
    id: 11,
    review:
      "We celebrated our anniversary with Nier Transportation, and it was a romantic and unforgettable experience. The luxurious ride and attentive driver made it truly special.",
    reviewer: "Mark and Lisa H.",
    company: "Anniversary Celebration",
    person: Person,
  },
  {
    id: 12,
    review:
      "I regularly book Nier Transportation for our corporate events. Their professionalism, reliability, and attention to detail have been instrumental in our event's success.",
    reviewer: "Jessica M.",
    company: " Event Coordinator,",
    person: Person,
  },
  {
    id: 13,
    review:
      "I recently used Nier Transportation for a long-distance trip, and it was a comfortable and stress-free journey. Their spacious vehicles and courteous drivers made the miles fly by.",
    reviewer: "Michael B. ",
    company: "Long-Distance Travel",
    person: Person,
  },
  {
    id: 14,
    review:
      "Our family vacation was made easier with Nier Transportation. Their friendly and accommodating service ensured our family's comfort throughout our trip. We'll definitely book again!",
    reviewer: "Linda T. ",
    company: "Family Vacation",
    person: Person,
  },
] as const;

export const faqs = [
  {
    id: 36,
    question:
      "What types of vehicles do you offer for your black car services?",
    answer:
      "We provide a fleet of premium vehicles, including luxury sedans, SUVs, and executive vans, all designed for your comfort and style.",
  },
  {
    id: 37,
    question: " How do I book a black car service with your company?",
    answer:
      "Booking is easy! You can make a reservation through our website, mobile app, or by calling our customer service team.",
  },
  {
    id: 39,
    question: " Is your service available 24/7?",
    answer:
      "Yes, we operate 24/7, 365 days a year to meet your transportation needs, including holidays and late-night pickups.",
  },
  {
    id: 40,
    question: "Are your drivers professional and experienced?",
    answer:
      "Absolutely. Our drivers are highly trained, licensed, and have years of experience in providing safe and reliable transportation.",
  },
  {
    id: 41,
    question: "Can I request a specific driver for my ride?",
    answer:
      "While we can't guarantee a specific driver, we can note your preferences, and we always strive to provide consistent and exceptional service.",
  },
  {
    id: 42,
    question:
      "Are your rates competitive, and do you offer any discounts or packages?",
    answer:
      " We offer competitive rates for our premium black car services. We also have special packages and discounts available for frequent travelers and corporate clients.",
  },
  {
    id: 43,
    question: "Can I make changes to my reservation or cancel it if necessary?",
    answer:
      "Yes, you can modify or cancel your reservation up to a certain time before your scheduled pick-up. Our customer service team can assist you with any changes.",
  },
  {
    id: 44,
    question:
      "Do you provide airport transportation, and do you track flight arrivals?",
    answer:
      "Yes, we offer airport transfers, and we monitor flight arrivals to ensure timely pickups, even if your flight is delayed.",
  },
  {
    id: 45,
    question:
      " Is gratuity included in the fare, or should I tip the driver separately",
    answer:
      "Gratuity is not included in the fare. Tipping is at your discretion, but it's customary to tip the driver for excellent service.",
  },
] as const;
