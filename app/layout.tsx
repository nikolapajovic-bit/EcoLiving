import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import ThemeProvider from "../components/ThemeProvider";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Fraunces — a warm, organic serif with soft, hand-shaped curves. Replaces
// Roboto (previously imported but unused) as the display face; it's the
// typographic equivalent of the organic-blob visual language used site-wide.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "EcoLiving",
  description: "Simple Steps to a Greener Tomorrow",
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} ${fraunces.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}