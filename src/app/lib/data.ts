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
  {
    id: 14,
    city: "Casa Grande",
    desc: "Casa Grande, home of Lucid Motors, boasts a rich history, including the iconic Casa Grande Ruins National Monument, and offers a warm and inviting atmosphere for both residents and visitors to enjoy.",
  },
  {
    id: 15,
    city: "Maricopa",
    desc: "Maricopa, located in Pinal County, is a thriving city known for its rapid growth, family-friendly atmosphere, and proximity to the natural beauty of the Sonoran Desert, making it an ideal place to reside in the heart of Arizona.",
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
  // {
  //   id: 18,
  //   src: Sprinter3,
  // },
] as const;

export const reviews = [
  {
    id: 7,
    review:
      "Nier Transportation provided the best, outstanding quality of service for at least 20-25 family members for memorial services for my dear father. We required multiple stops, and wait times, and they were first of all affordable, on time, professional, and extremely kind. I would 1000% recommend using them for any transportation needs for personal and business purposes.",
    reviewer: "Linda R.",
    company: "Gilbert, AZ",
    person: Person,
  },
  {
    id: 8,
    review:
      "Barry provides great reliable service in comfortable luxury. I travel out 1-2 times/month and I can schedule ahead. Barry will always verify the day before in the event anything changes (which it can with my job). I feel safer having someone I know pick me up sometimes at 4a. Thank you Barry!",
    reviewer: "Sheryl G.",
    company: "Scottsdale, AZ",
    person: Person,
  },
  {
    id: 9,
    review:
      "I use Nier Transportation weekly for business travel and occasionally for personal trips.  They are always timely, super friendly, and helpful, all at reasonable rates.  I highly recommend them!",
    reviewer: "Jeff G.",
    company: "Sausalito, CA",
    person: Person,
  },
  {
    id: 11,
    review:
      "We have used this car service 4 times in the last few months. Booking a pick-up/drop-off time is very easy and seamless. Barry, the owner is very professional, friendly, and prompt as was one of his other drivers. We have flown in and out of Phoenix all 4 times with our dog and his kennel and Barry was very attentive to ensuring our dog (while in his kennel) was comfortable and safe before we left.Pricing is competitive but the service is better and good value for what you get. Cars are very roomy and spotless. Highly recommend this car service.",
    reviewer: "Cheryl C.",
    company: "Northwest Calgary, Canada",
    person: Person,
  },
  {
    id: 12,
    review:
      "We first rode with Barry over one year ago.We were so impressed with his level of pride, professional bearing, situational awareness, and meticulous attention to detail in all mannersrelating to our safety and satisfaction that we made the decision to use him exclusively for all our transportation needs.Nier Transportation has afforded us the luxury of worry-free rides with absolute dependability. They monitor our arrival and departure schedules in real time and adjust accordingly, with no excuses, cancellations, or surprises.Their level of service and the peace of mind it gives is priceless.",
    reviewer: "Jim & Connie A.",
    company: "Phoenix, AZ,",
    person: Person,
  },
  {
    id: 13,
    review:
      "We used Nier Transportation to start and end our European vacation. It was the BEST decision! Our driver was professional, friendly, and timely. We also felt as though we were riding in luxury, the vehicle was new, fresh, and comfortable! An extra thanks for being at the airport waiting for us when we arrived back home at 1:30 a.m.!",
    reviewer: "Lynn B",
    company: "Tempe, AZ",
    person: Person,
  },
  {
    id: 145,
    review:
      "Have used this service multiple times. The drivers are great. Always very professional and prompt. You can tell they care about safety and a great customer experience, would definitely recommend it.",
    reviewer: "Illeana L.",
    company: "Mesa, AZ",
    person: Person,
  },
  {
    id: 146,
    review:
      "I just started utilizing Nier Transportation a couple of months ago and have never used a driving service before. I was surprised to see how easy it was to schedule and use as I wasn't sure how it would work in relation to price timeliness, and reliability. I travel almost weekly and Barry, the owner made it very simple by asking for my flight itinerary, and pick-up times. I have used his service a few times so far and have had numerous changes to my plans and he has come through every time. He even made a special trip to pick up a backpack for my daughter when I was in Hawaii so when we returned, we wouldn't have to make a special trip. Vehicles are nice and clean, and Barry is a good man. His pricing is competitive and you get great value with all the things I stated above. Highly Recommended",
    reviewer: "Adam B.",
    company: "Phoenix, AZ",
    person: Person,
  },
] as const;

export const homePageFaqs = [
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

export const aboutPageFaqs = [
  {
    id: 46,
    question: "What services do you offer?",
    answer:
      "Nier Transportation offers luxury transportation services. Some services offered are private chauffeurs, airport transfers, and corporate transportation. They also offer event transportation and VIP experiences.",
  },
  {
    id: 47,
    question: "What is the quality of the vehicles in your fleet?",
    answer:
      "The fleet at Nier Transportation has sleek and stylish vehicles. These include sedans and SUVs that are well-maintained. They offer plush interiors, advanced entertainment systems, and many comforts for a top-notch travel experience.",
  },
  {
    id: 48,
    question: "How are the drivers at Nier Transportation trained and vetted?",
    answer:
      "All our employees go through extensive training and background checks. They aim to provide top-notch customer service and ensure passengers' safety and comfort.",
  },
  {
    id: 49,
    question: "Can you accommodate large groups or special events?",
    answer:
      "Yes, they can. Nier Transportation can handle large groups and special events. This includes weddings, corporate functions, and night-outs. They offer a fleet of vehicles and coordinate transportation to make your event a hit.",
  },
  {
    id: 50,
    question: "Do you offer airport transfer services?",
    answer:
      "Yes, we do. We will greet you at the airport, assist with your bags, and guarantee a seamless journey to and from the airport.",
  },
  {
    id: 51,
    question: "How can I book a reservation with Nier Transportation?",
    answer:
      "Booking a reservation with us is easy. You can visit their website, call their customer service, or contact them directly. They'll work with you to understand your needs and offer a customized solution.",
  },
  {
    id: 52,
    question: "Do you offer specialized wedding transportation services?",
    answer:
      "Yes, we provide specialized wedding transportation services to ensure your special day runs smoothly. Our services include luxury vehicles for the bridal party, guest shuttles, and customized transportation plans to fit your wedding schedule and needs.",
  },
] as const;

export const servicesPageFaqs = [
  {
    id: 1,
    question:
      "What advantages does Nier Transportation offer over traditional shuttles or ride-shares?",
    answer:
      "We give you luxury, comfort, and reliability. They have professional drivers, high-end cars, and fit your schedule and likes.",
  },
  {
    id: 2,
    question: "How can Nier Transportation enhance my Phoenix to Sedona drive?",
    answer:
      "We make your drive luxurious and classy. You get leather seats and climate control. The drivers know the best spots in Sedona and Scottsdale.",
  },
  {
    id: 3,
    question: "Is your booking process complex?",
    answer:
      "No, our booking process is easy and stress-free. You can use online platforms or mobile apps for quick reservations and tracking.",
  },
  {
    id: 4,
    question:
      "What transportation options do you offer between Phoenix and Tucson?",
    answer:
      "We give you many options, like black SUVs for a private ride or buses for a budget-friendly trip.",
  },
  {
    id: 5,
    question: "Can you accommodate group travel?",
    answer:
      "Yes, we can handle groups and individual travelers. Everyone gets to travel in comfort and style.",
  },
  {
    id: 6,
    question:
      "How does using a town car service near me impact my travel experience?",
    answer:
      "This makes traveling better since you get luxury and convenience with a professional driver. It cuts down on traffic and parking stress.",
  },
  {
    id: 7,
    question:
      "What should I look for when finding the best town car or airport limo service near me?",
    answer:
      "Make sure they have a great fleet, good reviews, and options that fit your travel needs.",
  },
  {
    id: 8,
    question: "Do you provide shuttle services from Tucson to Phoenix airport?",
    answer:
      "Yes, we do! We provide shuttle transportation from Tucson to Phoenix airport, offering a convenient way to get to your flight.",
  },
  {
    id: 9,
    question: "Are there any services similar to Super Shuttle in Phoenix?",
    answer:
      "While Super Shuttle is well-known, many other transportation companies now offer top-quality airport transport in Phoenix.",
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
        href: "/terms",
      },
      {
        id: 3,
        name: "Privacy Policy",
        href: "/privacy",
      },
      {
        id: 4,
        name: "Accessibility Policy",
        href: "/accessibility",
      },
      {
        id: 5,
        name: "California Disclosures",
        href: "/california",
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
        href: "/services",
      },
      {
        id: 8,
        name: "Long Distance",
        href: "/services",
      },
      {
        id: 9,
        name: "Party Bus",
        href: "/services",
      },
      {
        id: 10,
        name: "Special Events",
        href: "/services",
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
        href: "/contact",
      },
      {
        id: 13,
        name: "Phoenix",
        href: "/contact",
      },
      {
        id: 146,
        name: "Scottsdale",
        href: "/contact",
      },
      {
        id: 15,
        name: "West Valley",
        href: "/contact",
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
        href: "/contact",
      },
      {
        id: 18,
        name: "Email",
        href: "/contact",
      },
      {
        id: 19,
        name: "Address",
        href: "/contact",
      },
      {
        id: 20,
        name: "Phone",
        href: "/contact",
      },
    ],
  },
] as const;

export const commitment = [
  {
    id: 46,
    icon: Saftey,
    title: "Safety",
    desc: "Your safety is our top priority",
  },
  {
    id: 47,
    icon: Punctuality,
    title: "Punctuality",
    desc: "Count on us for prompt service",
  },
  {
    id: 48,
    icon: Luxury,
    title: "Luxury",
    desc: "Ride in luxury and comfort",
  },
  {
    id: 49,
    icon: Customer,
    title: "Satisfaction",
    desc: "Making every trip exceptional",
  },
] as const;

export const servicesPage = [
  {
    id: 50,
    src: Airport,
    title: "Airport Transfers",
    desc: "Our black car services provide seamless airport transfers to Scottsdale Airport, Phoenix Sky Harbor International Airport, and Phoenix-Mesa Gateway, ensuring punctual and stress-free transportation with dedicated chauffeurs.",
    desc2: "Scottsdale Airport (SCF)",
    desc3: "Phoenix Sky Harbor International Airport (PHX)",
    desc4: "Phoenix-Mesa Gateway (AZA)",
  },
  {
    id: 51,
    src: Event2,
    title: "Special Events",
    desc: "Transportation to special events ensures attendees arrive safely and on time, offering reliable options from luxury vehicles to shuttle buses for various group sizes and preferences.",
    desc2: "weddings, concerts, sports games, and conferences",
    desc3: "Eliminates concerns about parking, traffic, and directions",
    desc4:
      "Provides a range of transportation options to suit different needs.",
  },
  {
    id: 52,
    src: Party2,
    title: "Party Bus",
    desc: "Turn any occasion into an unforgettable celebration with our party bus services. Our party buses are designed to enhance the excitement and fun. With spacious interiors, entertainment systems, and a professional chauffeur at the helm, our party buses are the perfect choice for your next big event. Make your journey as memorable as the destination with our party bus services.",
    desc2: "Enhances excitement and fun for any event.",
    desc3: "Features spacious interiors and entertainment systems.",
    desc4: "Includes a professional chauffeur for a seamless experience.",
  },
  {
    id: 53,
    src: repeat,
    title: "Reoccurring Rides",
    desc: "Providing transportation for recurring business travel ensures convenience and reliability. Whether for airport transfers or business meetings, scheduled rides guarantee timely arrivals without the worries of typical ride-share providers. We offer peace of mind, ensuring our guests' transportation needs are met professionally and promptly.",
    desc2: "Punctual and stress-free transportation",
    desc3: "Luxury and reliability with us",
    desc4: "Convenience and peace of mind",
  },
  {
    id: 54,
    src: Long,
    title: "Long Distance Drives",
    desc: "Embark on comfortable and stress-free long-distance journeys with our specialized long-distance drive services. Whether you're traveling to another city or state for business or leisure, our experienced chauffeurs and well-maintained vehicles ensure a smooth and enjoyable ride. Sit back, relax, and let us handle the miles, providing you with a safe and convenient travel experience, so you can arrive at your destination refreshed and ready to go.",
    desc2: "Punctual and stress-free transportation",
    desc3: "Luxury and reliability with us",
    desc4: "Safe and convenient travel experience",
  },
  {
    id: 55,
    src: Golf2,
    title: "Golf Outings",
    desc: "Heading to TPC, We-Ko Pa, Troon, Grayhawk, or Gold Canyon? We offer seamless transportation to the golf course, allowing you to focus on your game. Our wide range of vehicles can accommodate any group size, ensuring comfortable travel. Our experienced drivers know the local courses, ensuring efficient and timely arrivals. Whether it's a small outing or a large tournament, we enhance your golfing experience with our reliable transportation solutions.",
    desc2: "Punctual and stress-free transportation",
    desc3: "Luxury and reliability with us",
    desc4: "Efficient and timely arrivals",
  },
  {
    id: 56,
    src: Corporate,
    title: "Corporate Transportation",
    desc: "Elevate your corporate travel experience with our exceptional corporate transfer services. We prioritize professionalism and convenience above all else, guaranteeing that every aspect of your business transportation is seamlessly executed. Our highly trained chauffeurs not only prioritize punctuality but also offer a level of professionalism that sets the standard for corporate travel.",
    desc2: "Punctual and stress-free transportation",
    desc3: "Luxury and reliability with us",
    desc4: "Professionalism and convenience",
  },
  {
    id: 57,
    src: Hourly,
    title: "Hourly Charters",
    desc: "With our hourly charters, you're in control of your schedule, allowing you to maximize your time and productivity while enjoying the comfort and style of our premium vehicles. Our dedicated chauffeurs are at your service, ensuring you reach each destination promptly and in the utmost comfort.",
    desc2: "Punctual and stress-free transportation",
    desc3: "Luxury and reliability with us",
    desc4: "Maximize time and productivity",
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
] as const;

// Additioanl info map data

export const aboutPageAdditionalInfo = [
  {
    value:
      "Our team of drivers is dedicated to providing you with top-notch service.",
  },
  {
    value:
      "They're trained in safe driving and know the roads well. This means you get a smooth and safe trip, so you can relax.",
  },
  {
    value:
      "Need airport transfers, corporate travel, or event transport? We've got you covered!",
  },
] as const;

export const servicesPageAdditionalInfo = [
  {
    value:
      'When you need to be on time and want style, we are the best option. Our reputation is built on our high-end transportation and attentive care. Your trip to or from the airport will be flawless. Forget about crowded shuttles or the ups and downs of ride-sharing. Experience tranquility and reliability with our expert town solutions, conveniently located by searching for "town car service near me".',
  },
  {
    value:
      "A sleek black ride parked outside a terminal with a private driver waiting by the open door. The headlights are on, casting a warm glow on the glossy exterior. The driver, dressed in a professional suit, holds a sign with the company's logo. Luggage is visible in the trunk, ready for departure. The backdrop features a busy scene with airplanes and passengers in the distance.",
  },
  {
    value:
      "We fit your schedule, whether you're flying early in the morning or late at night. Say hello to hassle-free travel with just a few clicks. For bigger groups or those who love extra room, our super shuttle phoenix option offers luxury and space.",
  },
  {
    value:
      "For travelers seeking an airport limo near me, we're your top choice. Our fleet of high-end rides and dedicated chauffeurs ensure your safety and satisfaction. Choosing us means you get a worry-free journey from the city to the terminal.",
  },
] as const;
