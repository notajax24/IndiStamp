'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/indistamp-black.png" alt="IndiStamp Logo" width={150} height={80} className="block dark:hidden" />
              <Image src="/indistamp-white.png" alt="IndiStamp Logo" width={150} height={80} className="hidden dark:block" />
            </div>
            <p className="text-sm text-muted-foreground">
              The free online tool to calculate stamp duty and registration charges for Indian properties instantly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                <a
                  href="mailto:info@stampcalculator.in"
                  className="hover:text-foreground transition-colors"
                >
                  info@stampcalculator.in
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                Available 24/7 via{' '}
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  contact form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Bottom Footer */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} IndiStamp. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground text-center">
            This calculator provides estimates. Always verify with local authorities for official calculations.
          </p>
        </div>
      </div>
    </footer>
  );
}
