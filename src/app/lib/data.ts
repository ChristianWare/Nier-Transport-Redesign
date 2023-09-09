import Plane from "../../../public/icons/plane.png";
import Event from "../../../public/icons/event.png";
import Party from "../../../public/icons/party.png";
import Reoccurring from "../../../public/icons/reoccurring.png";
import Distance from "../../../public/icons/distance.png";
import Golf from "../../../public/icons/golf.png";

export const servicesSection = [
  {
    id: 1,
    icon: Plane,
    service: "Airport Transfers",
    descr:
      "Seamless and Stress-Free Transfers to and from Scottsdale Airport and Phoenix Sky Harbor International Airport and Phoenix-Mesa Gateway.",
  },
  {
    id: 2,
    icon: Event,
    service: "Special Events",
    descr:
      "Arrive in Style and Elegance at Weddings, Parties, and Special Occasions.",
  },
  {
    id: 3,
    icon: Party,
    service: "Part Bus",
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
      "Need to take a long distance trip? We will get you where you need to go in no time. Sit back relax and enjoy the ride.",
  },
  {
    id: 6,
    icon: Golf,
    service: "Golf Tournament Pickup",
    descr: "Scottsdale TPC, Troon Golf Course, Grayhawk, We-Ko-Pa",
  },
] as const;
