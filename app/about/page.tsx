import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { CheckCircle, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About - Stamp Duty Calculator India',
  description: 'Learn about our free stamp duty and registration charge calculator for Indian properties.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 tracking-tight">
              About Our Calculator
            </h1>
            <p className="text-lg text-muted-foreground">
              A trusted, free tool for calculating property stamp duty and registration charges across India.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Mission */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stamp Duty Calculator India is a free, open-access tool designed to help property buyers,
                sellers, and investors quickly calculate stamp duty and registration charges across all
                Indian states and union territories. We believe in transparency and making financial
                planning accessible to everyone.
              </p>
            </div>

            {/* What We Offer */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">What We Offer</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Instant calculations for all Indian states and UTs',
                  'Up-to-date stamp duty and registration rates for 2026',
                  'Special concessions for women buyers and joint ownership holders',
                  'Mobile-friendly calculator interface',
                  'No signup required – completely free and anonymous',
                  '100% accurate calculations based on latest government rates',
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 items-start p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-all">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="rounded-xl border-2 border-destructive/20 bg-destructive/5 p-8">
              <div className="flex gap-4 items-start">
                <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Important Disclaimer</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    This calculator provides estimates based on standard rates. Actual stamp duty and
                    registration charges may vary based on:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-destructive">•</span>
                      <span>Property type (residential, commercial, agricultural)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-destructive">•</span>
                      <span>Property location and municipal jurisdiction</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-destructive">•</span>
                      <span>Applicable exemptions and special schemes</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-destructive">•</span>
                      <span>State-specific rules and amendments</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Always consult with your local sub-registrar office or a property tax expert for precise
                    calculations before finalizing any purchase.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-xl border border-border bg-card p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-3">Ready to Calculate?</h3>
              <p className="text-muted-foreground mb-6">
                Return to the home page and select your state to get started.
              </p>
              <Link
                href="/"
                className="inline-flex px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                Go to Calculator
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
