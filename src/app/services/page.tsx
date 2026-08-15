import { Wrench, Shield, Home, Droplets, HeartPulse, Settings } from "lucide-react";

const servicesList = [
  {
    title: "Professional Installation",
    description: "Our certified technicians ensure your water purifier is installed perfectly, optimizing its performance and longevity.",
    icon: Home,
  },
  {
    title: "Annual Maintenance Contract (AMC)",
    description: "Comprehensive maintenance plans covering periodic check-ups, filter replacements, and priority support.",
    icon: Shield,
  },
  {
    title: "Filter Replacement & Upgrades",
    description: "Genuine OEM filters and membrane replacements to maintain the highest purity levels.",
    icon: Droplets,
  },
  {
    title: "Commercial RO Servicing",
    description: "Heavy-duty maintenance for commercial and industrial water treatment plants to minimize downtime.",
    icon: Settings,
  },
  {
    title: "Water Quality Testing",
    description: "Advanced testing for TDS, pH levels, hardness, and biological contaminants before and after installation.",
    icon: HeartPulse,
  },
  {
    title: "On-Demand Repair",
    description: "Fast and reliable troubleshooting and repair services for any operational issues.",
    icon: Wrench,
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="bg-surface-soft py-16">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-4">Our <span className="text-primary">Services</span></h1>
          <p className="body-text max-w-2xl mx-auto">
            Comprehensive support and maintenance to ensure your purification systems perform at their absolute best.
          </p>
        </div>
      </div>
      
      <div className="container-custom mt-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-border shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">{service.title}</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="text-primary font-medium flex items-center gap-2 group-hover:text-primary-dark transition-colors">
                Learn More
                <span className="w-6 h-px bg-primary block group-hover:w-8 transition-all"></span>
              </button>
            </div>
          ))}
        </div>

        {/* AMC Call to Action */}
        <div className="mt-20 bg-slate-900 rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 bg-primary/20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>
          <div className="relative z-10 p-12 md:p-16 text-center max-w-4xl mx-auto text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Need Immediate Assistance?</h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Our expert technicians are just a call away. Get reliable service, genuine parts, and complete peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+18001234567" className="bg-accent text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-white transition-colors">
                Call +1 (800) 123-4567
              </a>
              <a href="/contact" className="bg-transparent border border-slate-700 hover:border-slate-500 text-white px-8 py-4 rounded-full font-bold transition-colors">
                Book a Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
