import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Impact Plumbing",
    tagline: "Expert Plumbing. Always There.",
    phone: "(702) 745-5987",
    phoneHref: "tel:+17027455987",
    email: "info@justcallimpact.com",
    address: "4710 W Dewey Dr, Suite 114 Las Vegas, NV 89118",
    city: "Las Vegas",
    serviceAreas: ["Las Vegas", "Paradise", "Spring Valley", "Winchester", "Enterprise", "Henderson", "North Las Vegas", "Sunrise Manor", "Whitney"],
    license: "NV Lic #000000",
    since: "2005",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "navy",
    niche: "plumbing",
  },

  services: [
    { icon: "wrench", title: "General Plumbing", desc: "Comprehensive plumbing solutions for all your home and business needs.", urgent: false },
    { icon: "thermometer", title: "Water Heater Services", desc: "Installation, repair, and maintenance for traditional and tankless water heaters.", urgent: false },
    { icon: "droplets", title: "Leak Detection & Repair", desc: "Advanced technology to find and fix leaks quickly, preventing further damage.", urgent: true },
    { icon: "truck", title: "Sewer & Drain Services", desc: "Hydro jetting, sewer line repair, and replacement to keep your drains clear.", urgent: true },
    { icon: "home", title: "Repiping Services", desc: "Full or partial repiping to upgrade your plumbing system for better performance.", urgent: false },
    { icon: "briefcase", title: "Commercial Plumbing", desc: "Reliable plumbing services tailored for businesses and commercial properties.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah M.", location: "Las Vegas, NV", stars: 5, text: "Impact Plumbing saved us! Our water heater burst on a Saturday morning. Their technician arrived within an hour, assessed the damage, and had a new tankless unit installed by the afternoon. Professional, quick, and the price was fair. Highly recommend their emergency service!" },
    { name: "David L.", location: "Henderson, NV", stars: 5, text: "We had a persistent slow drain that other plumbers couldn't fix. Impact Plumbing used hydro jetting and cleared it completely. The technician was knowledgeable, explained everything, and left the area spotless. Finally, no more standing water!" },
    { name: "Emily R.", location: "Spring Valley, NV", stars: 5, text: "Called Impact Plumbing for a main water line inspection. They were thorough, honest, and didn't try to upsell me. They found a small issue and fixed it before it became a major problem. Their upfront pricing was a huge plus, no surprises." }
  ],

  trustBadges: [
    "NATE Certified", "GAF Master Elite", "5-Star Rated", "24/7 Emergency", "Licensed & Insured", "Same-Day Service"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1200, label: "Jobs Done", suffix: "+", decimals: 0 },
    { value: 18, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We arrive quickly, especially for urgent plumbing issues, minimizing disruption." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Clear, honest pricing before any work begins, so you know exactly what to expect." },
    { icon: "award", title: "Certified Pros", desc: "Our technicians are highly trained, certified, and experienced in all plumbing aspects." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand by our work, ensuring you're completely happy with our service." },
    { icon: "phone", title: "AI Reception 24/7", desc: "Our AI assistant is always ready to help schedule appointments or answer questions." },
    { icon: "truck", title: "Fully Equipped", desc: "Our vans are stocked with the right tools and parts for efficient, on-the-spot repairs." }
  ],

  formServiceOptions: ["General Plumbing", "Water Heater Services", "Leak Detection & Repair", "Sewer & Drain Services", "Repiping Services", "Commercial Plumbing"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!