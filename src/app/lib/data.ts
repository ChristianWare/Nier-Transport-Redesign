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
import Saftey from "../../../public/icons/saftey.png";
import Punctuality from "../../../public/icons/punctual.png";
import Luxury from "../../../public/icons/luxury.png";
import Customer from "../../../public/icons/customer.png";
import Airport from "../../../public/images/airport.png";
import Event2 from "../../../public/images/event.png";
import Party2 from "../../../public/images/party.png";
import Long from "../../../public/images/long.png";
import Golf2 from "../../../public/images/golf.png";
import Corporate from "../../../public/images/corporate.png";
import Hourly from "../../../public/images/hourly.png";
import repeat from "../../../public/images/repeat.png";

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
      "Have something to celebrate? Celebrate in style with our party bus services.",
  },
  {
    id: 4,
    icon: Reoccurring,
    service: "Reoccurring Rides",
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
    id: 144,
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
    id: 145,
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

export const footer = [
  {
    id: 1,
    heading: "About",
    section: [
      {
        id: 2,
        name: "Terms of Use",
      },
      {
        id: 3,
        name: "Privacy Poilicy",
      },
      {
        id: 4,
        name: "Accessibility Policy",
      },
      {
        id: 5,
        name: "California Disclosures",
      },
    ],
  },
  {
    id: 6,
    heading: "Services",
    section: [
      {
        id: 7,
        name: "Airport Transfers",
      },
      {
        id: 8,
        name: "Long Distance",
      },
      {
        id: 9,
        name: "Party Bus",
      },
      {
        id: 10,
        name: "Special Events",
      },
    ],
  },
  {
    id: 11,
    heading: "Booking",
    section: [
      {
        id: 12,
        name: "24/7",
      },
      {
        id: 13,
        name: "Phoenix",
      },
      {
        id: 146,
        name: "Scottsdale",
      },
      {
        id: 15,
        name: "West Valle",
      },
    ],
  },
  {
    id: 16,
    heading: "Contact",
    section: [
      {
        id: 17,
        name: "Phone",
      },
      {
        id: 18,
        name: "Email",
      },
      {
        id: 19,
        name: "Address",
      },
      {
        id: 20,
        name: "LinkedIn",
      },
    ],
  },
] as const;

export const commitment = [
  {
    id: 46,
    icon: Saftey,
    title: "Safety",
    desc: "Your safety is our top priority. We adhere to the highest safety standards, regularly maintain our vehicles, and ensure that our chauffeurs are trained to deliver a secure and comfortable ride.",
  },
  {
    id: 47,
    icon: Punctuality,
    title: "Punctuality",
    desc: "We understand the importance of your time. Count on us for prompt and reliable service that keeps you on schedule. We will get you where you need to go in a secure and timely manner.",
  },
  {
    id: 48,
    icon: Luxury,
    title: "Luxury",
    desc: "Experience the epitome of luxury and comfort with our premium vehicles and courteous chauffeurs. Our commitment to excellence ensures an unforgettable experience.",
  },
  {
    id: 49,
    icon: Customer,
    title: "Customer Satisfaction",
    desc: "We're dedicated to making every trip exceptional. Your satisfaction is our measure of success. We always strive for excellence and make your journeys truly memorable.",
  },
] as const;

export const servicesPage = [
  {
    id: 50,
    src: Airport,
    title: "Airport Transfers",
    desc: "Our black car services extend to seamless airport transfers for your convenience, covering Scottsdale Airport, Phoenix Sky Harbor International Airport, and Phoenix-Mesa Gateway. Whether you're arriving or departing, our dedicated chauffeurs ensure punctual and stress-free transportation to and from these key airports, allowing you to focus on your journey while we take care of the rest. Experience the epitome of luxury and reliability with us.",
  },
  {
    id: 51,
    src: Event2,
    title: "Special Events",
    desc: "Elevate your special event experience with our premium black car services, catering to a wide range of occasions including the Waste Management Open, PGA Tour, Super Bowl, Spring Training, and much more. From sporting events to cultural festivals, our chauffeurs are committed to ensuring your transportation is as memorable as the event itself. Count on us to provide luxurious and reliable transportation for all your special occasions.",
  },
  {
    id: 52,
    src: Party2,
    title: "Party Bus",
    desc: "Turn any occasion into an unforgettable celebration with our party bus services. Our party buses are designed to enhance the excitement and fun. With spacious interiors, entertainment systems, and a professional chauffeur at the helm, our party buses are the perfect choice for your next big event. Make your journey as memorable as the destination with our party bus services.",
  },
  {
    id: 53,
    src: repeat,
    title: "Reoccurring Rides",
    desc: "Streamline your regular transportation needs with our dependable recurring ride services. Whether it's a daily commute to work, weekly appointments, or monthly outings, we offer a hassle-free solution for your ongoing travel requirements. Our dedicated chauffeurs and flexible scheduling ensure that you have a dependable and convenient transportation partner for all your recurring journeys, making your life easier and more efficient.",
  },
  {
    id: 54,
    src: Long,
    title: "Long Distance Drives",
    desc: "Embark on comfortable and stress-free long-distance journeys with our specialized long-distance drive services. Whether you're traveling to another city or state for business or leisure, our experienced chauffeurs and well-maintained vehicles ensure a smooth and enjoyable ride. Sit back, relax, and let us handle the miles, providing you with a safe and convenient travel experience, so you can arrive at your destination refreshed and ready to go.",
  },
  {
    id: 55,
    src: Golf2,
    title: "Golf Course Transfers",
    desc: "Enjoy a seamless and stylish journey with our specialized golf course transfer services to renowned destinations such as Scottsdale TPC, Troon Golf Course, Grayhawk, and We-Ko-Pa golf courses. Whether you're hitting the links for a round of golf or attending events at these prestigious venues, our chauffeurs guarantee on-time and comfortable transportation, allowing you to fully relish your golfing experience. Count on us to elevate your time on the fairways and greens.",
  },
  {
    id: 56,
    src: Corporate,
    title: "Corporate Transportation",
    desc: "Elevate your corporate travel experience with our exceptional corporate transfer services. We prioritize professionalism and convenience above all else, guaranteeing that every aspect of your business transportation is seamlessly executed. Our highly trained chauffeurs not only prioritize punctuality but also offer a level of professionalism that sets the standard for corporate travel.",
  },
  {
    id: 57,
    src: Hourly,
    title: "Hourly Charters",
    desc: "With our hourly charters, you're in control of your schedule, allowing you to maximize your time and productivity while enjoying the comfort and style of our premium vehicles. Our dedicated chauffeurs are at your service, ensuring you reach each destination promptly and in the utmost comfort.",
  },
];

export const options = [
  {
    id: 58,
    city: "Vehicle Options",
    desc: "Choose from our diverse fleet, including spacious SUVs, sprinter vans, and more. Our vehicles are equipped with modern amenities for your comfort and enjoyment.",
  },
  {
    id: 59,
    city: "Amenities",
    desc: "Select vehicles come with a range of amenities, such as Wi-Fi, refreshments, and entertainment systems, ensuring a delightful journey.",
  },
  {
    id: 60,
    city: "Customization",
    desc: "We understand that every client is unique. That's why we offer customization options to meet your specific preferences and requirements.",
  },
  {
    id: 61,
    city: "Payment Options",
    desc: "For your convenience, we offer secure online payment options for those who wish to pay in advance. We accept major payment methods, including credit cards and PayPal.",
  },
];
