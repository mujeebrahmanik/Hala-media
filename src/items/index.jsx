
import { TrendingUp, Video, Code2 } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";



export const testimonials = [
  {
    user: "Ahmed Khan",
    company: "Stellar Solutions",
    image: user1,
    text: "We are extremely satisfied with the marketing services provided. The team was responsive, strategic, and delivered measurable results that exceeded our expectations.",
  },
  {
    user: "Sara Williams",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "We couldn’t be happier with the outcome of our campaign. Their creativity and data-driven approach played a key role in improving our brand visibility and engagement.",
  },
  {
    user: "Daniel Thomas",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this team was a great experience. Their attention to detail and commitment to delivering quality digital solutions truly set them apart.",
  },
  {
    user: "Renee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Partnering with Hala Media was a game-changer for our business. Their marketing and content strategies helped us achieve faster growth than we expected.",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "The level of professionalism and consistency shown by the team was impressive. They delivered high-quality results that aligned perfectly with our business goals.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our digital presence improved significantly. Their expertise and dedication made a real impact on our growth.",
  },
];

export const features = [
  {
    icon: <TrendingUp size={40} />,
    text: "Digital Marketing",
    description:
      "We attract the right audience and turn targeted traffic into high-quality leads",
    deliverables: [
      "Google & Meta Ads campaign",
      "SEO & conversion optimisation"
    ]
  },
  {
    icon: <Video size={40} />,
    text: "Content Creation",
    description:
      "We create high-impact visual content that captures attention and increases engagement.",
    deliverables: [
      "Short-form videos",
      "Brand storytelling ",
    ]
  },
  {
    icon: <Code2 size={40} />,
    text: "Web Development",
    description:
      "We build fast, scalable, and conversion-optimised websites that support long-term business growth.",
    deliverables: [
      "Custom website development",
      "Performance, SEO optimisation"
    ]
  }
];


export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];