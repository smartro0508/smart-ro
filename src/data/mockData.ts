import { Home, Factory, Building, ShieldCheck, Settings, CheckCircle2, Droplets, HeartPulse, Shield, Leaf, Wrench } from "lucide-react";

export const products = [
  {
    id: "pro-1",
    name: "Smart RO Home Ultra",
    category: "Home RO Purifiers",
    image: "https://images.unsplash.com/photo-1574492695509-5e72cc2dc122?w=500&q=80",
    description: "Advanced 7-stage RO+UV+UF purification for families.",
    technology: "RO + UV + UF + Mineralizer",
    capacity: "15 L/hr",
    suitableFor: "Municipal / Borewell Water",
  },
  {
    id: "pro-2",
    name: "AquaCommercial 50GPD",
    category: "Commercial RO Systems",
    image: "https://images.unsplash.com/photo-1550508518-a63e9f3b55c2?w=500&q=80",
    description: "High-capacity purification for offices and restaurants.",
    technology: "Commercial RO + UV",
    capacity: "50 L/hr",
    suitableFor: "High TDS Water",
  },
  {
    id: "pro-3",
    name: "Smart RO Softener Pro",
    category: "Water Softeners",
    image: "https://images.unsplash.com/photo-1606132717013-0941be200427?w=500&q=80",
    description: "Whole-house water softening system for scale prevention.",
    technology: "Ion Exchange",
    capacity: "1000 L/hr",
    suitableFor: "Hard Water",
  }
];

export const features = [
  {
    title: "Advanced RO Technology",
    description: "Our state-of-the-art membranes remove up to 99.9% of dissolved impurities.",
    icon: ShieldCheck,
  },
  {
    title: "High Purification Efficiency",
    description: "Maximum water recovery with minimal wastage compared to standard ROs.",
    icon: Droplets,
  },
  {
    title: "Energy Efficient Systems",
    description: "Designed to operate optimally with low power consumption.",
    icon: Leaf,
  },
  {
    title: "Reliable Components",
    description: "Food-grade materials and certified components for long-lasting performance.",
    icon: Settings,
  },
  {
    title: "Professional Installation",
    description: "Expert setup by certified technicians ensuring perfect operation.",
    icon: CheckCircle2,
  },
  {
    title: "Dedicated After-Sales",
    description: "24/7 support and regular maintenance reminders for peace of mind.",
    icon: Wrench,
  },
];

export const services = [
  {
    title: "Installation & Setup",
    description: "Professional installation ensuring optimal performance.",
    icon: Home,
  },
  {
    title: "Regular Servicing",
    description: "Periodic checkups to maintain water purity.",
    icon: Settings,
  },
  {
    title: "Filter Replacement",
    description: "Genuine spare parts and filter changes.",
    icon: Shield,
  },
];

export const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "25K+", label: "Happy Customers" },
  { value: "50K+", label: "Purifiers Installed" },
  { value: "99.9%", label: "Purification Efficiency" },
];

