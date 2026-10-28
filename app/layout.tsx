import type { Metadata } from "next";
import { Bowlby_One, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import Providers from "@/components/Providers";
import Loader from "@/components/Loader";
import NavPill from "@/components/NavPill";
import Footer from "@/components/Footer";
import "./globals.css";

const bowlby = Bowlby_One({ variable: "--font-bowlby", weight: "400", subsets: ["latin"] });
const instrument = Instrument_Sans({ variable: "--font-instrument", weight: ["400", "500", "600", "700"], subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Manish S P · Software Engineer", template: "%s · Manish S P" },
  description:
    "Manish S P is a computer science student at Dayananda Sagar University in Bengaluru, building across the full stack and learning AI and LLMs.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bowlby.variable} ${instrument.variable} ${jetbrains.variable}`}>
      <body className="font-sans">
        <Providers>
          <Loader />
          <NavPill />
          <div className="overflow-x-clip">
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
