import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StatsSection } from '@/components/StatsSection';
import { FeatureCard } from '@/components/FeatureCard';
import { HomeStampDutyCalculator } from '../app/stamp-duty-calculator/[state]/HomeStampDutyCalculator';
import { Zap, CheckCircle, Gift, Search, ArrowDown } from 'lucide-react';

export const metadata = {
  title: 'IndiStamp - Free Online Stamp Duty Calculator India 2026',
  description:
    'IndiStamp: Calculate stamp duty and registration charges for Indian property purchases across all states and union territories. Fast, accurate, and completely free.',
  keywords:
    'IndiStamp, stamp duty calculator, registration charges, property tax India, real estate calculator',
  openGraph: {
    title: 'IndiStamp - Free Online Stamp Duty Calculator India 2026',
    description: 'IndiStamp: Calculate stamp duty and registration charges for any Indian state instantly.',
    type: 'website',
  },
};

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-primary">IndiStamp Property Calculator</span>
              </div>

              <h1 className="text-5xl sm:text-7xl font-bold text-foreground mb-6 tracking-tight">
                Calculate Stamp Duty <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Instantly</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
                Get accurate stamp duty and registration charges for property purchases across all Indian states and union territories.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <Link
                  href="#calculator"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  Start Calculating
                  <ArrowDown className="w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-3 rounded-lg border border-border bg-card hover:bg-card/80 text-foreground font-semibold transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <StatsSection
              stats={[
                {
                  value: '31+',
                  label: 'States & UTs',
                  icon: <Search className="w-6 h-6 text-primary" />,
                },
                {
                  value: 'Instant',
                  label: 'Real-time Results',
                  icon: <Zap className="w-6 h-6 text-accent" />,
                },
                {
                  value: '100%',
                  label: 'Completely Free',
                  icon: <Gift className="w-6 h-6 text-secondary-foreground" />,
                },
              ]}
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Why Use Our Calculator?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fast, accurate, and completely free property calculations powered by up-to-date rates.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard
                icon={<Zap className="w-6 h-6 text-primary" />}
                title="Instant Results"
                description="Get accurate stamp duty and registration charge calculations in real-time without any delays."
              />
              <FeatureCard
                icon={<CheckCircle className="w-6 h-6 text-primary" />}
                title="Up-to-Date Rates"
                description="Latest stamp duty rates and registration charges for 2026 across all states and union territories."
              />
              <FeatureCard
                icon={<Gift className="w-6 h-6 text-primary" />}
                title="Special Concessions"
                description="Automatically applies concessions for women buyers and joint ownership holders where available."
              />
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16 sm:py-24 bg-muted/30" id="calculator">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                IndiStamp Calculator
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Select your state to instantly calculate stamp duty and registration charges.
              </p>
            </div>
            <HomeStampDutyCalculator />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-10" />
              <div className="relative z-10 p-8 sm:p-12 text-center border border-primary/20">
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                  Ready to Calculate?
                </h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
                  Our easy-to-use calculator is right on this page. Get started with instant stamp duty calculations.
                </p>
                <p className="text-sm text-muted-foreground">
                  All calculations are performed locally on your device. No data is stored or shared.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
