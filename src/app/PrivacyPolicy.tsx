import { ArrowLeft } from 'lucide-react';
import verdenaTree from '../assets/bebf6597e16254ec6a193c4f4208d51ea66c8886.png';

// Standalone Privacy Policy page, served at /privacy.
// Styling mirrors the conventions used in App.tsx (purple #53354a, #fafafa/#1a1a1a,
// rounded cards, font-black headings) so it feels native to the site.
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] flex flex-col">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-[#e0e0e0]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-5 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <img src={verdenaTree} alt="Verdena" className="h-8 w-8 md:h-10 md:w-10 object-contain" />
            <span className="text-sm font-medium">Verdena</span>
          </a>
          <a
            href="/"
            className="text-sm font-medium hover:text-[#53354a] transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to site
          </a>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-5 md:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-3 leading-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#4a4a4a] mb-12">Last updated: 24 June 2026</p>

        <div className="space-y-10 text-[#4a4a4a] leading-relaxed">
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#53354a] mb-3">1. Who we are</h2>
            <p>
              Verdena Pte Ltd ("Verdena", "we", "us", "our") operates this website. This
              policy explains how we collect, use, and protect your personal data when you
              contact us through the website, in line with Singapore's Personal Data
              Protection Act (PDPA).
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#53354a] mb-3">2. What data we collect</h2>
            <p>When you submit the contact form, we collect the personal data you provide:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1.5">
              <li><strong className="text-[#1a1a1a]">Name</strong> — your first and last name</li>
              <li><strong className="text-[#1a1a1a]">Email address</strong></li>
              <li><strong className="text-[#1a1a1a]">Company</strong> (optional)</li>
              <li><strong className="text-[#1a1a1a]">Country</strong> (optional)</li>
              <li><strong className="text-[#1a1a1a]">Message</strong> — the content of your enquiry</li>
            </ul>
            <p className="mt-3">
              We also record the fact and time that you gave your consent when submitting the
              form.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#53354a] mb-3">3. Why we collect it (purpose)</h2>
            <p>
              We use your data solely to respond to your enquiry and for legitimate business
              contact — for example, to discuss advisory support, a project, or a potential
              collaboration. We do not sell your data, and we do not use it for unrelated
              marketing.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#53354a] mb-3">4. How your data is stored</h2>
            <p>
              Contact form submissions are sent to us by email and recorded in our customer
              relationship management (CRM) system so we can track and respond to your
              enquiry. These services are operated by trusted third-party providers acting on
              our behalf.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#53354a] mb-3">5. Lawful basis</h2>
            <p>
              We process your personal data on the basis of your <strong className="text-[#1a1a1a]">consent</strong>,
              which you give by ticking the consent box when you submit the contact form. You
              may withdraw your consent at any time (see "Your rights" below).
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#53354a] mb-3">6. Data retention</h2>
            <p>
              We retain your contact data for as long as needed to respond to your enquiry and
              maintain a reasonable record of our correspondence, after which it is deleted.
              You may request earlier deletion at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#53354a] mb-3">7. Your rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of the
              personal data we hold about you, and to withdraw your consent at any time. To
              make a request, email{' '}
              <a
                href="mailto:admin@verdena.sg"
                className="text-[#53354a] underline hover:text-[#6b4460] transition-colors"
              >
                admin@verdena.sg
              </a>
              . We will action verified requests within a reasonable period.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-[#53354a] mb-3">8. Contact</h2>
            <p>
              If you have any questions about this policy or how we handle your data, please
              email{' '}
              <a
                href="mailto:admin@verdena.sg"
                className="text-[#53354a] underline hover:text-[#6b4460] transition-colors"
              >
                admin@verdena.sg
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-12">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img src={verdenaTree} alt="Verdena" className="h-12 w-12 brightness-0 invert opacity-60" />
              <div className="text-left">
                <p className="font-bold text-sm">Verdena Pte Ltd</p>
                <p className="text-xs opacity-60">Growing businesses across APAC</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-8 text-sm opacity-75 justify-center md:justify-start">
              <a href="/" className="hover:opacity-100 transition-opacity">Home</a>
              <a href="/#contact" className="hover:opacity-100 transition-opacity">Contact</a>
              <a href="/privacy" className="hover:opacity-100 transition-opacity">Privacy</a>
            </div>

            <p className="text-xs opacity-60">© 2026 Verdena. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
