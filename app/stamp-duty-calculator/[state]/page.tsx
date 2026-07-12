import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { stampDutyRates } from '@/data/stampDutyRates';
import { StampDutyCalculator } from '@/components/StampDutyCalculator';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Landmark, FileSignature, FileText, ListOrdered, Check } from 'lucide-react';

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
        name: `What are the stamp duty rates in ${stateData.state} for 2026?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Stamp duty rates in ${stateData.state} for 2026 vary based on property value, location (urban/rural), and buyer category (male, female, joint). Use our calculator for precise figures.`,
        },
      },
      {
        '@type': 'Question',
        name: `How are registration charges calculated in ${stateData.state}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Registration charges in ${stateData.state} can be a percentage of the property value or a fixed fee based on value tiers. Our calculator provides detailed calculations.`,
        },
      },
      {
        '@type': 'Question',
        name: `Are there concessions available for women buyers in ${stateData.state}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Many states, including ${stateData.state}, may offer stamp duty concessions for women buyers. Our calculator automatically applies these discounts where applicable.`,
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in duration-500">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                Understanding the Process in {stateData.state}
              </h2>
              <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
                Here’s a breakdown of the charges, required documents, and the general registration process for property in {stateData.state}.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Stamp Duty Details */}
              <div className="rounded-xl border border-border bg-card p-8 hover:border-primary/50 transition-all animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Landmark className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Stamp Duty Details</h2>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Rate:</strong>
                      <p className="text-muted-foreground">Varies by property value, location, and buyer. Use the calculator for exact rates.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Purpose:</strong>
                      <p className="text-muted-foreground">Government tax on property transfer.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Concessions:</strong>
                      <p className="text-muted-foreground">Concessions may be available for female buyers or joint ownership.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Registration Charges */}
              <div className="rounded-xl border border-border bg-card p-8 hover:border-primary/50 transition-all animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <FileSignature className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Registration Charges</h2>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Rate:</strong>
                      <p className="text-muted-foreground">Typically a percentage of property value or a fixed fee.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">Purpose:</strong>
                      <p className="text-muted-foreground">
                        Registration office fee for recording the transaction
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
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

            <div className="grid md:grid-cols-2 gap-8">
              {/* Required Documents */}
              <div className="rounded-xl border border-border bg-card p-8 hover:border-primary/50 transition-all animate-in fade-in slide-in-from-bottom-4 duration-500 delay-450">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Required Documents</h2>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3"><Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span>Sale Agreement</span></li>
                  <li className="flex items-start gap-3"><Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span>Title Deed and Proof of Ownership</span></li>
                  <li className="flex items-start gap-3"><Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span>Identity Proof (Aadhaar, PAN) of all parties</span></li>
                  <li className="flex items-start gap-3"><Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span>Address Proof of all parties</span></li>
                  <li className="flex items-start gap-3"><Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span>No Objection Certificate (NOC), if applicable</span></li>
                  <li className="flex items-start gap-3"><Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span>Property Card and Building Plan</span></li>
                </ul>
                <p className="text-xs text-muted-foreground mt-4">Note: This is a general list. Document requirements may vary.</p>
              </div>

              {/* Registration Process */}
              <div className="rounded-xl border border-border bg-card p-8 hover:border-primary/50 transition-all animate-in fade-in slide-in-from-bottom-4 duration-500 delay-600">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <ListOrdered className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Registration Process</h2>
                </div>
                <ol className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3"><span className="font-bold text-accent">1.</span><span>Estimate stamp duty and registration fees using our calculator.</span></li>
                  <li className="flex items-start gap-3"><span className="font-bold text-accent">2.</span><span>Purchase e-stamp paper of the required value.</span></li>
                  <li className="flex items-start gap-3"><span className="font-bold text-accent">3.</span><span>Prepare the sale deed and get it signed by all parties.</span></li>
                  <li className="flex items-start gap-3"><span className="font-bold text-accent">4.</span><span>Book an appointment at the Sub-Registrar's Office (SRO).</span></li>
                  <li className="flex items-start gap-3"><span className="font-bold text-accent">5.</span><span>Visit the SRO with all parties, witnesses, and original documents for registration.</span></li>
                </ol>
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
