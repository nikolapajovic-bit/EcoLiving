"use client";

import DownloadButtons from '../components/DownloadButtons';

interface SectionProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({ title, description, image, reverse }) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center justify-between gap-8 md:gap-16 py-12 px-6`}>
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={image} alt={title} className="w-3/4 md:w-full max-w-sm shadow-lg rounded-lg" />
      </div>
      <div className="w-full md:w-1/2 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700">{title}</h2>
        <p className="mt-4 text-gray-700">{description}</p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-green-200 to-blue-500 text-gray-900">
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <img src="/logo.png" alt="Logo" className='w-58 h-58' />
        <h1 className="text-4xl md:text-5xl font-bold text-green-800">EcoLiving</h1>
        <p className="text-lg mt-4 text-gray-700 max-w-2xl">
          Simple Steps to a Greener Tomorrow
        </p>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <Section
          title="Daily Eco Tips"
          description="Receive daily tips on how to live a more sustainable life and reduce your carbon footprint."
          image="/mockups/tips.png"
        />
        <Section
          title="Recycling Center Locator"
          description="Find nearby recycling centers easily with our interactive map feature."
          image="/mockups/centers.png"
          reverse
        />

        <Section
          title="Carbon Footprint Calculator"
          description="Calculate your carbon emissions based on your daily activities and learn how to reduce it."
          image="/mockups/carbon_before.png"
        />
      </section>

      <section className="py-16 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
          Download your EcoLiving App today!
        </h2>
        <DownloadButtons />
      </section>
    </div>
  )
}
