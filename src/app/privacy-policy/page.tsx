import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-slate-50 min-h-screen pt-30 pb-16">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-slate-200">
          <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-8">
            <div className="w-12 h-12 bg-[#0f3a61] flex items-center justify-center rounded-sm shrink-0">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
              <p className="text-sm text-slate-500 mt-1">Last Updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
          
          <div className="space-y-8 text-slate-600 leading-relaxed text-sm">
            <div>
              <h3 className="text-xl font-bold text-[#0f3a61] mb-3">1. Introduction</h3>
              <p>
                Smart RO ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-[#0f3a61] mb-3">2. Information We Collect</h3>
              <p className="mb-3">
                We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-slate-800">Personal Data:</strong> Name, phone number, email address, and physical address provided during inquiries or service requests.</li>
                <li><strong className="text-slate-800">Derivative Data:</strong> Information our servers automatically collect when you access the website, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the website.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0f3a61] mb-3">3. Use of Your Information</h3>
              <p className="mb-3">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the website to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Fulfill and manage installations, maintenance, and service requests.</li>
                <li>Deliver targeted advertising, newsletters, and other information regarding promotions and the website to you.</li>
                <li>Improve our services and website operations.</li>
                <li>Respond to product and customer service requests.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0f3a61] mb-3">4. Disclosure of Your Information</h3>
              <p className="mb-3">
                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-slate-800">By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
                <li><strong className="text-slate-800">Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including customer service, data analysis, email delivery, hosting services, and customer service.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0f3a61] mb-3">5. Security of Your Information</h3>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-xl font-bold text-[#0f3a61] mb-3">6. Contact Us</h3>
              <p className="mb-3">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-slate-50 p-6 border border-slate-200 rounded-sm">
                <p className="font-bold text-slate-800 text-base mb-2">Smart RO</p>
                <p>9/1, sri nagar, deepam nagar 9th Street,</p>
                <p>irugur, 641103</p>
                <p className="mt-2"><strong className="text-slate-800">Phone:</strong> 6383450508, 9790188321</p>
                <p><strong className="text-slate-800">Email:</strong> smartro0508@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
