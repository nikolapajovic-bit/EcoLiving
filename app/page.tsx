"use client";

import Image from 'next/image';
import DownloadButtons from '../components/DownloadButtons';

interface SectionProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({ title, description, image, reverse }) => {
  return (
    <div
      className={`
        max-w-6xl mx-auto
        flex flex-col md:flex-row
        ${reverse ? "md:flex-row-reverse" : ""}
        items-center gap-12 md:gap-20
        py-20 px-6
      `}
    >
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="bg-transparent backdrop-blur-2xl rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]">
          <Image
            src={image}
            alt={title}
            width={350}
            height={640}
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800">
          {title}
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-green-200 via-green-100 to-blue-200 text-gray-900">
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <Image
          src="/logo.png"
          alt="EcoLiving Logo"
          width={240}
          height={240}
          className="mb-6"
        />

        <h1 className="text-5xl md:text-6xl font-extrabold text-green-800 tracking-tight">
          EcoLiving
        </h1>

        <p className="mt-6 text-xl text-gray-700 max-w-2xl">
          Simple steps toward a greener, more sustainable future.
        </p>
      </section>


      {/* Features Section */}
      <section className="py-20">
        <Section
          title="🌿 Daily Eco Tips"
          description="Receive chrated daily tips to help you adopt sustainable habits effortlessly. From reducing waste to saving energy, EcoLiving provides practical guidance you can apply immediately."
          image="/mockups/tips.png"
        />
        <Section
          title="♻️ Recycling Center Locator"
          description="Quickly locate nearby recycling centers and learn exactly which materials they accept. EcoLiving helps you recycle with confidence and avoid unnecessary waste."
          image="/mockups/centers.png"
          reverse
        />

        <Section
          title="🌍 Carbon Footprint Calculator"
          description="Understand your environmental impact by calculating your carbon footprint based on real-world data. EcoLiving provides clear insights to help you make informed, eco-friendly decisions."
          image="/mockups/carbon.png"
        />
      </section>

      <section className="py-16 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
          Start your sustainable journey today!
        </h2>
        <DownloadButtons />
      </section>
    </div>
  )
}