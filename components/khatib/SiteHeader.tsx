'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Locale } from '@/lib/tokens';
import type { Dictionary } from '@/lib/i18n';
import { Wordmark } from './Wordmark';
import { LanguageToggle } from './LanguageToggle';
import { Monogram } from './Monogram';

const NAV_KEYS = [
  'about',
  'services',
  'patents',
  'publications',
  'editorial',
  'speaking',
  'contact',
] as const;

export function SiteHeader({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const home = locale === 'en' ? '/' : '/ar';
  const prefix = locale === 'en' ? '' : '/ar';

  return (
    <header className="sticky top-0 z-50 border-b border-warm-gray/15 bg-deep-navy/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8 md:py-4">
        <Link
          href={home}
          className="flex items-center gap-3"
          aria-label={dict.meta.shortName}
          onClick={() => setOpen(false)}
        >
          <Monogram size={36} ariaLabel={dict.meta.shortName} />
          <Wordmark lang={locale === 'en' ? 'en' : 'ar'} className="hidden md:inline-flex" />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-tracked text-warm-gray">
            {NAV_KEYS.map((key) => (
              <li key={key}>
                <Link href={`${prefix}/${key}`} className="transition-colors hover:text-gold">
                  {dict.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle locale={locale} dict={dict} />
          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center border border-warm-gray/30 text-gold md:hidden"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <path d="M3 3 L13 13" />
                  <path d="M13 3 L3 13" />
                </>
              ) : (
                <>
                  <path d="M2 4 L14 4" />
                  <path d="M2 8 L14 8" />
                  <path d="M2 12 L14 12" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <nav
        id="mobile-nav"
        aria-label="Primary mobile"
        className={`md:hidden ${open ? 'block' : 'hidden'} border-t border-warm-gray/15 bg-deep-navy/95 backdrop-blur-md`}
      >
        <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
          {NAV_KEYS.map((key) => (
            <li key={key}>
              <Link
                href={`${prefix}/${key}`}
                onClick={() => setOpen(false)}
                className="block px-2 py-3 font-mono text-xs uppercase tracking-tracked text-warm-gray transition-colors hover:text-gold"
              >
                {dict.nav[key]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
