import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { stampDutyRates } from '@/data/stampDutyRates';
import { StampDutyCalculator } from '@/components/StampDutyCalculator';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Info } from 'lucide-react';

interface Props {
  params: Promise<{
    state: string;
  }>;
}

export async function generateStaticParams() {
  return stampDutyRates.map((state) => ({
    state: state.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const stateData = stampDutyRates.find((s) => s.slug === stateSlug);

  if (!stateData) {
    return {
      title: 'State Not Found',
    };
  }

  return {
    title: `Stamp Duty Calculator for ${stateData.state} (2026) - IndiStamp`,
    description: `Calculate stamp duty and registration charges for property purchases in ${stateData.state}. ${stateData.notes}`,
    keywords: [
      'IndiStamp',
      stateData.state,
      'registration charges',
      'property tax',
      'real estate India',
    ],
    openGraph: {
      title: `Stamp Duty Calculator for ${stateData.state} (2026) - IndiStamp`,
      description: `Calculate your stamp duty and registration charges instantly for ${stateData.state}.`,
      url: `https://stamp-duty-calculator.vercel.app/stamp-duty-calculator/${stateSlug}`,
      type: 'website',
    },
  };
}

export default async function StampDutyPage({ params }: Props) {
  const { state: stateSlug } = await params;
  const stateData = stampDutyRates.find((s) => s.slug === stateSlug);

  if (!stateData) {
    notFound();
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is the stamp duty rate in ${stateData.state}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The current stamp duty rate in ${stateData.state} is ${stateData.stampDutyRate}% of the property value for 2026.`,
        },
      },
      {
        '@type': 'Question',
        name: `How is registration charge calculated in ${stateData.state}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Registration charges in ${stateData.state} are calculated as ${stateData.registrationRate}% of the property value.`,
        },
      },
      {
        '@type': 'Question',
        name: `Are there concessions available for women buyers in ${stateData.state}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: stateData.womenConcession
            ? `Yes, women buyers in ${stateData.state} may be eligible for a ${stateData.womenConcession}% concession on stamp duty.`
            : `Stamp duty concessions for women buyers may not be applicable in ${stateData.state}. Check with your local registration office.`,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Back Navigation */}
        <div className="border-b border-border bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 sm:py-16 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-sm font-medium text-primary">{stateData.state}</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 tracking-tight">
                Stamp Duty Calculator for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{stateData.state}</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-2">
                2026 Rates & Real-time Calculations
              </p>

              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {stateData.notes ||
                  `Get accurate estimates for stamp duty and registration charges when purchasing property in ${stateData.state}. Our calculator uses the latest rates for 2026.`}
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <StampDutyCalculator stateData={stateData} />
          </div>
        </section>

        {/* Information Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Stamp Duty Details */}
              <div className="rounded-xl border border-border bg-card p-8 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Info className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Stamp Duty Details</h2>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Rate:</strong>
                      <p className="text-muted-foreground">
                        {stateData.stampDutyRate}% of property value
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Purpose:</strong>
                      <p className="text-muted-foreground">
                        Government tax on property transfer
                      </p>
                    </div>
                  </li>
                  {stateData.womenConcession && (
                    <li className="flex items-start gap-3 p-4 rounded-lg bg-secondary/20 border border-secondary/40">
                      <span className="inline-block w-2 h-2 bg-secondary-foreground rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Women's Concession:</strong>
                        <p className="text-muted-foreground">
                          {stateData.womenConcession}% reduction for women buyers
                        </p>
                      </div>
                    </li>
                  )}
                </ul>
              </div>

              {/* Registration Charges */}
              <div className="rounded-xl border border-border bg-card p-8 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Info className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Registration Charges</h2>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Rate:</strong>
                      <p className="text-muted-foreground">
                        {stateData.registrationRate}% of property value
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Purpose:</strong>
                      <p className="text-muted-foreground">
                        Registration office fee for recording the transaction
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Note:</strong>
                      <p className="text-muted-foreground">
                        Rates may vary based on property type and location
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Ad Slot */}
            <div className="mt-16">
              <div
                id="ad-slot"
                className="p-8 bg-muted border-2 border-dashed border-border rounded-xl text-center text-muted-foreground"
              >
                <p className="text-sm">Advertisement Space</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
