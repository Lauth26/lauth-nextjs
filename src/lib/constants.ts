export const COMPANY = {
  name: "Lauth Investigations International",
  shortName: "Lauth Investigations",
  founder: "Thomas Lauth",
  founderTitle: "President & CEO",
  founded: "1990",
  yearsExperience: "35+",
  tagline: "Trusted Investigation Solutions Since 1990",
  description:
    "Lauth Investigations International is a premier private investigation firm headquartered in Indianapolis, Indiana, providing corporate and personal investigation services nationwide since 1990.",
  phone: "(317) 951-1100",
  phoneClean: "3179511100",
  email: "hirelauth@lauthinvestigations.com",
  textPhone: "(317) 759-1004",
  address: {
    street: "201 North Illinois Street, 16th Floor",
    street2: "South Tower",
    city: "Indianapolis",
    state: "Indiana",
    stateAbbr: "IN",
    zip: "46204",
    country: "US",
    full: "201 North Illinois Street, 16th Floor, South Tower Indianapolis, IN 46204",
  },
  geo: {
    latitude: 39.7465,
    longitude: -86.1601,
  },
  social: {
    facebook: "https://www.facebook.com/lauthinvestigationsinternational",
    linkedin: "https://www.linkedin.com/company/lauth-investigations-international/",
    youtube: "https://www.youtube.com/@lauthinvestigations",
    instagram: "https://www.instagram.com/lauth.investigations/",
  },
  url: "https://lauthinvestigations.com",
  wpApiBase: "https://lauthinvestigations.com/wp-json/wp/v2",
} as const;

export const COLORS = {
  navy: "#212838",
  gold: "#FFBA60",
  dark: "#0F0F0F",
  white: "#FFFFFF",
  gray: "#d4d7de",
  grayMuted: "#7e87a1",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "#",
    children: [
      {
        category: "Corporate",
        items: [
          { label: "Corporate Culture Audit", href: "/corporate-culture-audit" },
          { label: "Corporate Investigations", href: "/corporate" },
          { label: "Due Diligence", href: "/due-diligence" },
          { label: "Embezzlement", href: "/embezzlement" },
          { label: "Intellectual Property Theft", href: "/intellectual-property-theft" },
          { label: "Insurance Fraud", href: "/insurance-fraud" },
          { label: "FMLA Abuse", href: "/fmla-abuse" },
          { label: "Workers Compensation Fraud", href: "/workers-compensation-fraud" },
        ],
      },
      {
        category: "Personal",
        items: [
          { label: "Personal Client Services", href: "/personal" },
          { label: "Child Custody", href: "/child-custody" },
          { label: "Infidelity", href: "/infidelity" },
          { label: "Missing Persons", href: "/missing-persons" },
          { label: "Catfishing", href: "/catfishing" },
          { label: "Bug Sweeps", href: "/bug-sweeps" },
          { label: "Background Checks", href: "/background-checks" },
        ],
      },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES_CORPORATE = [
  {
    title: "Corporate Culture Audit",
    slug: "corporate-culture-audit",
    description: "Comprehensive assessment of your organization's internal culture and integrity.",
    icon: "building",
  },
  {
    title: "Due Diligence",
    slug: "due-diligence",
    description: "Thorough investigation of business entities before major decisions.",
    icon: "search",
  },
  {
    title: "Embezzlement",
    slug: "embezzlement",
    description: "Investigation and documentation of financial misconduct.",
    icon: "dollar",
  },
  {
    title: "Intellectual Property Theft",
    slug: "intellectual-property-theft",
    description: "Protecting your proprietary information and trade secrets.",
    icon: "shield",
  },
  {
    title: "Insurance Fraud",
    slug: "insurance-fraud",
    description: "Detection and investigation of fraudulent insurance claims.",
    icon: "file",
  },
  {
    title: "FMLA Abuse",
    slug: "fmla-abuse",
    description: "Investigating misuse of Family and Medical Leave Act benefits.",
    icon: "alert",
  },
  {
    title: "Workers Compensation Fraud",
    slug: "workers-compensation-fraud",
    description: "Detecting fraudulent workers compensation claims.",
    icon: "activity",
  },
] as const;

export const SERVICES_PERSONAL = [
  {
    title: "Child Custody",
    slug: "child-custody",
    description: "Evidence gathering for child custody and welfare cases.",
    icon: "users",
  },
  {
    title: "Infidelity",
    slug: "infidelity",
    description: "Discreet investigation of suspected unfaithfulness.",
    icon: "heart",
  },
  {
    title: "Missing Persons",
    slug: "missing-persons",
    description: "Professional search and locate services for missing individuals.",
    icon: "map",
  },
  {
    title: "Catfishing",
    slug: "catfishing",
    description: "Verification of online identities and digital deception.",
    icon: "monitor",
  },
  {
    title: "Bug Sweeps",
    slug: "bug-sweeps",
    description: "Technical surveillance countermeasures to detect listening devices.",
    icon: "wifi",
  },
  {
    title: "Background Checks",
    slug: "background-checks",
    description: "Comprehensive background investigations for informed decisions.",
    icon: "check",
  },
] as const;

export const WP_CONFIG = {
  apiBase: "https://lauthinvestigations.com/wp-json/wp/v2",
  uploadsBase: "https://lauthinvestigations.com/wp-content/uploads",
  postsPerPage: 9,
  topPostsCount: 50,
  revalidateSeconds: 3600,
  pageIds: {
    homepage: 167072,
    about: 170312,
    corporate: 167076,
    personal: 167078,
    contact: 167074,
  },
} as const;
