"use client";

import Image from 'next/image';
import DownloadButtons from '../components/DownloadButtons';
import PhoneMockup from '../components/PhoneMockup';

interface SectionProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  accent: 'moss' | 'clay' | 'sky';
  reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({ eyebrow, title, description, image, accent, reverse }) => {
  return (
    <div
      className={`
        max-w-5xl mx-auto
        flex flex-col md:flex-row
        ${reverse ? "md:flex-row-reverse" : ""}
        items-center gap-12 md:gap-20
        py-16 px-6
      `}
    >
      <div className="w-full md:w-1/2 flex justify-center relative">
        <div
          className="field-blob"
          style={{
            width: '20vw',
            height: '20vw',
            maxWidth: '260px',
            maxHeight: '260px',
            background: `var(--${accent})`,
            opacity: 0.22,
            top: '10%',
            [reverse ? 'right' : 'left']: '-6%',
          }}
        />
        <PhoneMockup src={image} alt={title} />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <span className={`eyebrow eyebrow-${accent}`}>{eyebrow}</span>
        <h2
          className="mt-3 text-3xl md:text-4xl leading-tight"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}
        >
          {title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--ink)' }} className="relative overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-6">
        <div className="field-blob" style={{ width: '46vw', height: '46vw', background: 'var(--sage)', opacity: 0.4, top: '-14vw', left: '-14vw' }} />
        <div className="field-blob" style={{ width: '38vw', height: '38vw', background: 'var(--clay)', opacity: 0.24, bottom: '-10vw', right: '-10vw' }} />
        <div className="field-blob" style={{ width: '24vw', height: '24vw', background: 'var(--sky)', opacity: 0.2, top: '8vw', right: '4vw' }} />

        <div className="relative z-10 flex flex-col items-center">
          <Image
            src="/logo.png"
            alt="EcoLiving Logo"
            width={140}
            height={140}
            className="mb-8"
          />

          <span className="eyebrow mb-4">Small habits, real impact</span>

          <h1
            className="text-5xl md:text-7xl leading-[1.05]"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}
          >
            EcoLiving
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-xl" style={{ color: 'var(--ink-soft)' }}>
            Simple steps toward a greener, more sustainable everyday life.
          </p>
        </div>
      </section>

      {/* wavy divider between hero and features */}
      <svg className="wave-divider relative z-10" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none">
        <path d="M0 30 C 240 60, 480 0, 720 30 C 960 60, 1200 0, 1440 30 L1440 60 L0 60 Z" fill="var(--bg-soft)" />
      </svg>

      {/* FEATURES */}
      <section style={{ background: 'var(--bg-soft)' }} className="relative">
        <Section
          eyebrow="Every day"
          title="Daily eco tips"
          description="Curated daily tips to help you adopt sustainable habits effortlessly. From reducing waste to saving energy, EcoLiving gives you practical guidance you can apply immediately."
          image="/mockups/tips.png"
          accent="moss"
        />
        <Section
          eyebrow="Nearby"
          title="Recycling center locator"
          description="Quickly locate nearby recycling centers and learn exactly which materials they accept. Recycle with confidence and avoid unnecessary waste."
          image="/mockups/centers.png"
          accent="clay"
          reverse
        />
        <Section
          eyebrow="Your impact"
          title="Carbon footprint calculator"
          description="Understand your environmental impact by calculating your carbon footprint based on real-world data — clear insights to help you make informed, eco-friendly decisions."
          image="/mockups/carbon.png"
          accent="sky"
        />
      </section>

      {/* CTA */}
      <section className="relative py-24 flex flex-col items-center text-center px-6 overflow-hidden" style={{ background: 'var(--bg-soft)' }}>
        <div className="field-blob" style={{ width: '34vw', height: '34vw', background: 'var(--moss)', opacity: 0.14, top: '-6vw', left: '50%', transform: 'translateX(-50%)' }} />

        <div className="relative z-10">
          <h2
            className="text-3xl md:text-4xl mb-4"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}
          >
            Start your sustainable journey today
          </h2>
          <p className="mb-8 max-w-md mx-auto" style={{ color: 'var(--ink-soft)' }}>
            Free to download. No account needed to get started.
          </p>
          <DownloadButtons />
        </div>
      </section>
    </div>
  )
}