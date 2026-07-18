import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StatsSection } from '@/components/StatsSection';
import { FeatureCard } from '@/components/FeatureCard';
import { HomeStampDutyCalculator } from '../app/stamp-duty-calculator/[state]/HomeStampDutyCalculator';
import { Zap, CheckCircle, Gift, Search, ArrowDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Stamp Duty Calculator India (2026) - Calculate Property Registration Charges Online',
  description:
    'Use our free stamp duty calculator for all Indian states. Instantly calculate property registration charges and other real estate taxes online. Your go-to home buyer tax calculator for 2026.',
  keywords:
    'stamp duty calculator, calculate property registration charges, property stamp duty online, home buyer tax calculator, real estate calculator India, stamp duty rates 2026',
  openGraph: {
    title: 'Stamp Duty Calculator India (2026) - Free & Accurate',
    description: 'Instantly calculate stamp duty and registration charges for property purchases across all Indian states with our free online tool.',
    url: 'https://indistamp.mearksoft.com',
    type: 'website',
    images: [
      {
        url: 'https://indistamp.mearksoft.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IndiStamp - Stamp Duty Calculator India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stamp Duty Calculator India (2026) - Free & Accurate',
    description: 'Instantly calculate stamp duty and registration charges for property purchases across all Indian states with our free online tool.',
    images: ['https://indistamp.mearksoft.com/og-image.png'],
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

        {/* SEO Content Section */}
        <section className="py-16 sm:py-24 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose lg:prose-xl max-w-none text-foreground">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 text-center">Your Ultimate Guide to Calculating Stamp Duty in India</h2>
              <p className="text-lg text-muted-foreground">
                Navigating the complexities of property acquisition in India can be a daunting task, especially when it comes to understanding the various taxes and charges involved. Two of the most significant costs every home buyer must account for are stamp duty and registration charges. These mandatory government levies can substantially increase the overall cost of your property. To simplify this crucial step, we've developed a comprehensive <strong>stamp duty calculator</strong> designed for every state and union territory in India.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">What is Stamp Duty?</h3>
              <p className="text-lg text-muted-foreground">
                Stamp duty is a state-level tax levied on property transactions. It acts as legal proof of ownership and validates the property agreement in a court of law. The rate is not uniform across the country; it varies based on the state, property value, property type (residential or commercial), and even the gender of the owner, with many states offering concessions to women buyers. Failing to pay the correct stamp duty can result in hefty penalties and legal complications. This is where an online <strong>property stamp duty calculator</strong> becomes an indispensable tool.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Understanding Registration Charges</h3>
              <p className="text-lg text-muted-foreground">
                Alongside stamp duty, buyers must also pay registration charges. This is a fee paid to the government for the service of officially recording the property transaction in your name in the public records. Similar to stamp duty, registration charges are typically a percentage of the property's market value and differ from one state to another. Our tool helps you <strong>calculate property registration charges</strong> accurately, ensuring you have a clear picture of all the costs involved.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">The Challenge for Home Buyers</h3>
              <p className="text-lg text-muted-foreground">
                For the average person, figuring out the exact amount payable can be a confusing process. You would need to research the specific rates for your state, check for any applicable concessions for female or joint ownership, and perform manual calculations that are prone to error. This lack of a single, reliable source of information often leads to uncertainty and can derail financial planning. Our <strong>home buyer tax calculator</strong> was created to solve this very problem.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">How Our Real Estate Calculator for India Works</h3>
              <p className="text-lg text-muted-foreground">
                Our platform is more than just a calculator; it's a comprehensive <strong>real estate calculator for India</strong> that provides instant and accurate results. We've consolidated the latest stamp duty and registration rates for all 31 states and major union territories into one user-friendly interface.
              </p>
              <p className="text-lg text-muted-foreground">Using the tool is simple:</p>
              <ol className="list-decimal list-inside space-y-2 text-lg text-muted-foreground">
                <li><strong>Select Your State:</strong> Choose the state where the property is located from the dropdown menu.</li>
                <li><strong>Enter Property Value:</strong> Input the market value or agreement value of the property.</li>
                <li><strong>Specify Buyer Category:</strong> If the state offers concessions, you can select the buyer type (e.g., male, female, or joint) to see if you qualify for a discount.</li>
              </ol>
              <p className="text-lg text-muted-foreground mt-4">
                Instantly, the calculator will display a detailed breakdown of the stamp duty payable, the registration charges, and the total cost. It automatically applies any relevant concessions, giving you the most precise estimate possible.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Why Use Our Free Online Stamp Duty Calculator?</h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
                <li><strong>Accuracy:</strong> We continuously monitor and update our database with the latest 2026 rates to ensure our calculations are precise.</li>
                <li><strong>Comprehensive Coverage:</strong> From Maharashtra to Mizoram, our tool covers every corner of India.</li>
                <li><strong>Speed and Convenience:</strong> Get instant results without any sign-ups or fees. You can <strong>calculate property stamp duty online</strong> from the comfort of your home.</li>
                <li><strong>Transparency:</strong> Understand exactly what you're paying for with a clear breakdown of charges.</li>
                <li><strong>Completely Free:</strong> Our mission is to empower home buyers with the information they need to make informed financial decisions.</li>
              </ul>
              <p className="text-lg text-muted-foreground mt-6">
                Planning your property purchase just got easier. Eliminate the guesswork and budget with confidence. Use our free <strong>stamp duty calculator</strong> today to take the first step towards your new home.
              </p>
            </article>
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
