import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Mail, MessageSquare, BookUser, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | IndiStamp',
  description: 'Have questions, feedback, or need support? Contact the IndiStamp team. We are here to help you with any inquiries.',
  keywords: ['contact', 'support', 'feedback', 'stamp duty calculator help', 'contact us'],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | IndiStamp',
    description: 'Get in touch with us for support, feedback, or any questions about our stamp duty calculator.',
    url: 'https://stamp-duty-calculator.vercel.app/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contact IndiStamp',
    'description': 'Contact page for support, feedback, and inquiries about the stamp duty calculator.',
    'url': 'https://stamp-duty-calculator.vercel.app/contact',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': 'https://stamp-duty-calculator.vercel.app/contact'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'IndiStamp',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://stamp-duty-calculator.vercel.app/icon.svg'
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
        />

        {/* Hero */}
        <section className="py-12 sm:py-16 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in fade-in duration-500">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 animate-in fade-in slide-in-from-top-4 duration-700">Contact Us</h1>
            <p className="text-lg text-muted-foreground animate-in fade-in slide-in-from-top-4 duration-700 delay-150">
              Have questions or feedback? We'd love to hear from you!
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 sm:py-16 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-1 gap-8">
              {/* Contact Form */}
              <div className="rounded-xl border border-border bg-card p-8 shadow-sm animate-in fade-in slide-in-from-left-8 duration-700">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-foreground">Send us a Message</h2>
                </div>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-base font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 text-base bg-background border-2 border-border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-base font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 text-base bg-background border-2 border-border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-base font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 text-base bg-background border-2 border-border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-base font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 text-base bg-background border-2 border-border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
                <p className="text-xs text-muted-foreground mt-4">
                  Note: This is a demo contact form. For inquiries, please use the email address provided.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 mt-12 animate-in fade-in slide-in-from-right-8 duration-700 delay-150">
                {/* Support */}
                <div className="rounded-xl border border-border bg-card p-8 text-center hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">Support</h3>
                  </div>
                  <p className="text-muted-foreground mb-2">For any questions, please email us at:</p>
                  <a
                    href="mailto:contact@mearksoft.in"
                    className="text-primary hover:text-accent transition-colors font-medium"
                  >
                    contact@mearksoft.in
                  </a>
                  <p className="text-sm text-muted-foreground mt-3">
                    We'll respond to your inquiries within 24 hours.
                  </p>
                </div>

                {/* Info Box */}
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 text-center hover:border-primary/50 transition-colors">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Get Help Faster</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Check out our FAQ or explore related topics before reaching out.
                  </p>
                  <div className="flex flex-col items-center gap-3 text-sm">
                    <a href="/about" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors">
                      <BookUser className="w-4 h-4" />
                      <span>
                        About Us
                      </span>
                    </a>
                    <a href="/privacy-policy" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors">
                      <ShieldCheck className="w-4 h-4" />
                      <span>
                        Privacy Policy
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>

  );
}
