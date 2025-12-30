// Hero Section Images
export const heroImages = {
   main: "/hero/main-dashboard.png",
   leftWing: "/hero/left-feature.png",
   rightWing: "/hero/right-feature.png",
};

// Social Proof / Trusted By Logos
export const socialProofLogos = [
   { logo: "/logos/notion.png", name: "Notion" },
   { logo: "/logos/slack.png", name: "Slack" },
   { logo: "/logos/figma.png", name: "Figma" },
   { logo: "/logos/linear.png", name: "Linear" },
   { logo: "/logos/vercel.png", name: "Vercel" },
];

// Challenges Section Cards
export const challengeCards = [
   {
      title: "Manual Data Entry",
      description: "Spending hours manually inputting data into spreadsheets",
      image: "/challenges/manual-entry.png",
   },
   {
      title: "Missed Follow-ups",
      description: "Losing potential customers due to forgotten order follow-ups",
      image: "/challenges/missed-followup.png",
   },
   {
      title: "Invoice Delays",
      description: "Late invoice delivery causing delayed payments",
      image: "/challenges/invoice-delay.png",
   },
];

// Automease in Action - Testimonials
export const testimonials = [
   {
      logo: "/testimonials/bakebali.png",
      name: "BakeBali.id",
      testimonial: "We cut admin work by 70% through automated order intake by Automease! 🤩",
   },
   {
      logo: "/testimonials/warungbali.png",
      name: "WarungBali",
      testimonial: "Orders go straight into the system, no more manual input one by one!",
   },
   {
      logo: "/testimonials/coffeeshop.png",
      name: "Kopi Kita",
      testimonial: "Invoices sent automatically after order, huge help for our admin!",
   },
   {
      logo: "/testimonials/laundry.png",
      name: "CleanWash",
      testimonial: "Customers get WhatsApp notification instantly when laundry is ready.",
   },
];

// Smart Automation Left Cards Data
export const smartAutomationCards = [
   {
      title: "WhatsApp Automation",
      description: "Send automated messages to customers for order confirmation, status updates, and notifications via WhatsApp.",
      image: "/automation/whatsapp-view.svg",
   },
   {
      title: "Spreadsheet Admin",
      description: "Manage all order data in integrated Google Sheets. Changing a status automatically sends updates.",
      image: "/automation/spreadsheet-view.svg",
   },
];

// Smart Automation Slider Images - Row 1 (Light blue cards)
export const sliderImagesRow1 = [
   { image: "/slider/slide-wa-1.svg" },
   { image: "/slider/slide-sheet-1.svg" },
   { image: "/slider/slide-wa-1.svg" },
   { image: "/slider/slide-sheet-1.svg" },
   { image: "/slider/slide-wa-1.svg" },
   { image: "/slider/slide-sheet-1.svg" },
   { image: "/slider/slide-wa-1.svg" },
   { image: "/slider/slide-sheet-1.svg" },
];

// Smart Automation Slider Images - Row 2 (White cards)
export const sliderImagesRow2 = [
   { image: "/slider/slide-sheet-1.svg" },
   { image: "/slider/slide-wa-1.svg" },
   { image: "/slider/slide-sheet-1.svg" },
   { image: "/slider/slide-wa-1.svg" },
   { image: "/slider/slide-sheet-1.svg" },
   { image: "/slider/slide-wa-1.svg" },
   { image: "/slider/slide-sheet-1.svg" },
   { image: "/slider/slide-wa-1.svg" },
];

// Team Members
export const team = [
   {
      image: "/profile/sutha.jpg",
      name: "Sutha Raditya",
      role: "Head of IT Developer",
      instagram: "https://www.instagram.com/suta.radityaa/",
      objectPosition: "object-top",
   },
   {
      image: "/profile/tristan.jpg",
      name: "Tristan Putra",
      role: "CTO, Lead Engineer",
      instagram: "https://www.instagram.com/trinzxputra/",
      objectPosition: "object-center",
   },
   {
      image: "/profile/daliant.jpg",
      name: "Made Daliant",
      role: "Customer Success , QA",
      instagram: "https://www.instagram.com/muppetnoob_urbiecurbie/",
      objectPosition: "object-top",
   },
   {
      image: "/profile/alek.jpg",
      name: "Chistian Redita",
      role: "UI/UX Designer",
      instagram: "https://www.instagram.com/cristianreditaaa/",
      objectPosition: "object-bottom scale-125 origin-bottom",
   },
   {
      image: "/profile/diwa.jpg",
      name: "Wayan Diwangga",
      role: "Full-Stack Developer",
      instagram: "https://www.instagram.com/ddiwaa_/",
      objectPosition: "object-top",
   },
];

// Pricing Packages
// Pricing Packages
export const pricingPackages = [
   {
      name: "Starter",
      price: "Rp 199k",
      description: "Perfect for small businesses starting their automation journey.",
      features: [
         "Auto-save Orders to Google Sheets",
         "Basic WhatsApp Notifications",
         "Up to 100 Orders / Month",
         "Email Support",
      ],
      highlight: false,
   },
   {
      name: "Business",
      price: "Rp 499k",
      description: "Advanced automation for growing businesses with high volume.",
      features: [
         "Everything in Starter",
         "Instant WhatsApp Replies",
         "Create Invoices Automatically",
         "Status Tracking Dashboard",
         "Unlimited Orders",
         "Priority Support",
      ],
      highlight: true,
   },
   {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large scale operations.",
      features: [
         "Everything in Business",
         "Custom System Setup",
         "Dedicated Account Manager",
         "Connect External Apps",
         "Priority Reliability Guarantee",
      ],
      highlight: false,
   },
];
