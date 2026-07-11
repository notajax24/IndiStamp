import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { Lock, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - Stamp Duty Calculator India',
  description: 'Privacy policy for Stamp Duty Calculator India.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-12 sm:py-16 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-8 h-8 text-primary" />
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm font-medium text-primary">Your Privacy Matters</span>
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">Privacy Policy</h1>
            <p className="text-muted-foreground mt-4">
              Last updated: {new Date().getFullYear()}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Introduction</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stamp Duty Calculator India (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the
                stamp-duty-calculator website. This page informs you of our policies regarding the collection,
                use, and disclosure of personal data when you use our service.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="rounded-xl border border-border bg-card p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Information We Collect</h2>
              <div className="space-y-4">
                <div className="pb-4 border-b border-border last:border-0">
                  <h3 className="font-semibold text-foreground mb-2">No Personal Information</h3>
                  <p className="text-muted-foreground">
                    Our calculator does not require you to provide any personal information. All calculations
                    are performed entirely on your device (client-side).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Cookies & Analytics</h3>
                  <p className="text-muted-foreground">
                    We may collect non-identifying information such as browser type, IP address, and pages
                    visited for analytics purposes to improve our service.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use */}
            <div className="rounded-xl border border-border bg-card p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">How We Use Your Information</h2>
              <ul className="space-y-3">
                {[
                  'To analyze how our calculator is being used',
                  'To improve and optimize the user experience',
                  'To prevent fraud and ensure service security',
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Data Security */}
            <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-8">
              <div className="flex gap-4 items-start">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The security of your data is important to us. All calculations are performed locally in
                    your browser and are not stored on our servers. We use industry-standard security measures
                    to protect any aggregated analytics data.
                  </p>
                </div>
              </div>
            </div>

            {/* Changes */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by
                posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-xl border border-border bg-muted/50 p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-3">Questions?</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about this Privacy Policy, please get in touch.
              </p>
              <Link
                href="/contact"
                className="inline-flex px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
