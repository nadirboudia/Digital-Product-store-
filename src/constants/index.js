import { facebook, instagram , twitter } from "../assets/icons";
import { digital1, digital2, digital3, customer1, customer2} from "../assets/images";


export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about-us", label: "About Us" },
  { id: "products", label: "Products" },
  { id: "Contact-us", label: "Contact Us" },
];


export const product = [
    {
        thumbnail: digital1,
        bigShoe: digital1,
    },
    {
        thumbnail: digital2,
        bigShoe: digital2,
    },
    {
        thumbnail: digital3,
        bigShoe: digital3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];



export const services = [
  {
    icon: "bi bi-cloud-download",
    label: "Instant Digital Delivery",
    subtext: "Access your purchased digital products immediately after checkout, no waiting required."
  },
  {
    icon: "bi bi-shield-lock",
    label: "Trusted & Secure",
    subtext: "We ensure safe transactions and data protection with top-tier security standards."
  },
  {
    icon: "bi bi-headset",
    label: "24/7 Customer Support",
    subtext: "Our team is always available to answer questions and provide reliable assistance."
  },
];


export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
   {
  title: "Services",
  links: [
    { name: "Business Consulting", link: "/" },
    { name: "Project Management", link: "/" },
    { name: "Software Solutions", link: "/" },
    { name: "Marketing Strategy", link: "/" },
    { name: "Data Analysis", link: "/" },
    { name: "Customer Support", link: "/" },
  ],
},

    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "Terms", link: "/terms" },
            { name: "Privacy policy", link: "/privacy" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
