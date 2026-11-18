// School Identity and Core Information
export const SCHOOL_INFO = {
  name: "Mhastar Probity College",
  motto: "Towards Academic & Moral Excellence",
  type: "Co-educational Private Secondary School",
  location: {
    address: "Gasline Bus Stop, Ijoko, Sango Ota, Ogun State, Nigeria",
    city: "Sango Ota",
    state: "Ogun State",
    country: "Nigeria",
  },
  vision:
    "To inspire a passion for higher education potential to contribute to a better global society.",
  mission:
    "To produce confident and productive future leaders using skilled human resources and state-of-the-art technology.",
} as const;

// Contact Information
export const CONTACT = {
  phones: ["+234 805 912 1271", "+234 909 997 9366", "+234 805 846 1743"],
  email: "info@mhastarprobity.edu.ng",
  address: "Gasline Bus Stop, Ijoko, Sango Ota, Ogun State, Nigeria",
  social: {
    linkedin: "https://www.linkedin.com/in/mhastar-probity-college/",
    instagram: "https://www.instagram.com/mhastar_probity/",
  },
} as const;

// Legacy export for backward compatibility
export const CONTACT_INFO = CONTACT;

// Social Media Links
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/mhastar_probity/",
  linkedin: "https://www.linkedin.com/in/mhastar-probity-college/",
} as const;

// Educational Programmes
export const PROGRAMMES = {
  jss: {
    name: "Junior Secondary School (JSS)",
    description:
      "Building strong academic foundations, developing critical thinking, and preparing students for higher education.",
    levels: ["JSS 1", "JSS 2", "JSS 3"],
  },
  sss: {
    name: "Senior Secondary School (SSS)",
    description:
      "Advanced subject development, comprehensive examination preparation, and preparation for future academic and professional opportunities.",
    levels: ["SSS 1", "SSS 2", "SSS 3"],
    examinations: ["WASSCE", "UTME/JAMB"],
  },
  day: {
    name: "Day School Programme",
    description:
      "Flexible learning option allowing students to attend classes during the day while residing at home.",
  },
  boarding: {
    name: "Boarding School Programme",
    description:
      "Structured residential learning environment with supervised student life, fostering discipline and personal responsibility.",
  },
} as const;

// School Strengths
export const STRENGTHS = [
  {
    id: "wassce-results",
    title: "Outstanding WASSCE Results",
    description:
      "Consistent excellent performance in West African Senior School Certificate Examination.",
  },
  {
    id: "utme-performance",
    title: "Strong UTME/JAMB Performance",
    description:
      "Exceptional university entrance examination preparation and results.",
  },
  {
    id: "learning-environment",
    title: "Serene Learning Environment",
    description:
      "Conducive and peaceful environment that promotes focused learning and academic success.",
  },
  {
    id: "discipline",
    title: "Discipline and Integrity",
    description:
      "Strong culture of discipline, integrity, and moral values among staff and students.",
  },
  {
    id: "community-relations",
    title: "Community Engagement",
    description:
      "Strong positive relationship with the surrounding community and stakeholders.",
  },
  {
    id: "qualified-educators",
    title: "Qualified and Committed Educators",
    description:
      "Experienced teaching staff dedicated to student success and development.",
  },
  {
    id: "holistic-development",
    title: "Academic and Moral Development",
    description:
      "Balanced approach to developing both academic excellence and strong moral character.",
  },
  {
    id: "flexible-options",
    title: "Day and Boarding Options",
    description:
      "Flexible educational programmes to suit diverse family needs and preferences.",
  },
] as const;

// School Facilities
export const FACILITIES = [
  {
    id: "science-labs",
    name: "Science Laboratories",
    description: "Equipped laboratories for practical science education.",
    icon: "FlaskConical",
  },
  {
    id: "ict-lab",
    name: "ICT Laboratory",
    description: "Modern computer facilities for technology education.",
    icon: "MonitorSmartphone",
  },
  {
    id: "library",
    name: "School Library",
    description: "Well-stocked library supporting research and reading culture.",
    icon: "BookOpen",
  },
  {
    id: "sports",
    name: "Sporting Facilities",
    description: "Facilities for physical education and sports activities.",
    icon: "Trophy",
  },
  {
    id: "boarding",
    name: "Boarding Facilities",
    description: "Comfortable residential accommodation for boarding students.",
    icon: "Home",
  },
  {
    id: "environment",
    name: "Conducive Learning Environment",
    description: "Serene and well-maintained campus promoting effective learning.",
    icon: "Trees",
  },
] as const;

// Navigation Links
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Academics" },
  { href: "/boarding", label: "Boarding" },
  { href: "/facilities", label: "Facilities" },
  { href: "/admissions", label: "Admissions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
] as const;

// Quick Links for Footer
export const QUICK_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Academic Programmes" },
  { href: "/admissions", label: "Admissions" },
  { href: "/facilities", label: "Facilities" },
  { href: "/boarding", label: "Boarding" },
  { href: "/gallery", label: "News & Gallery" },
] as const;
