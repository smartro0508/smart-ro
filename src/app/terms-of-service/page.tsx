import { FileText } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <main className="bg-slate-50 min-h-screen pt-30 pb-16">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-slate-200">
          <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-8">
            <div className="w-12 h-12 bg-[#0f3a61] flex items-center justify-center rounded-sm shrink-0">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Terms of Service</h1>
              <p className="text-sm text-slate-500 mt-1">Last Updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
          
          <div className="space-y-8 text-slate-600 leading-relaxed text-sm">
            <div>
              <h3 className="text-xl font-bold text-[#0f3a61] mb-3">1. Agreement to Terms</h3>
              <p>
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Smart RO ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-[#0f3a61] mb-3">2. Intellectual Property Rights</h3>
              <p>
                Unless otherwise indicated, the website and services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the website (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0f3a61] mb-3">3. User Representations</h3>
              <p className="mb-3">
                By using the Site, you represent and warrant that:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                <li>You will not use the Site for any illegal or unauthorized purpose.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0f3a61] mb-3">4. Products and Services</h3>
              <p className="mb-3">
                All purchases through our website or other transactions for the sale of goods or services formed through the website, or resulting from visits made by you, are governed by our standard terms of sale, which are incorporated into these Terms of Service. We reserve the right to refuse any order placed with us.
              </p>
              <p>
                Installation, maintenance, and warranty services for RO purification systems are subject to specific Service Level Agreements (SLAs) provided at the time of procurement or deployment.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0f3a61] mb-3">5. Modifications and Interruptions</h3>
              <p>
                We reserve the right to change, modify, or remove the contents of the website at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our website. We also reserve the right to modify or discontinue all or part of the services without notice at any time.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0f3a61] mb-3">6. Governing Law</h3>
              <p>
                These conditions are governed by and interpreted following the laws of India, and the use of the United Nations Convention of Contracts for the International Sale of Goods is expressly excluded.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-xl font-bold text-[#0f3a61] mb-3">7. Contact Us</h3>
              <p className="mb-3">
                In order to resolve a complaint regarding the website or services or to receive further information regarding use of the Site, please contact us at:
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
