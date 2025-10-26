import { Inter, Poppins, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Md. Kawsar Ahmed - Software Engineer Portfolio",
  description: "Portfolio of Md. Kawsar Ahmed, a passionate Software Engineer with 1 year of experience and 7-time hackathon winner.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
        <body
          className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} antialiased bg-black text-white`}
        >
        {children}
          <Footer />
      </body>
    </html>
  );
}
