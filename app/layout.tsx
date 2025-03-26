import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoFont = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
})

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
        className={`${interSans.variable} ${robotoFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
