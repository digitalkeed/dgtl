import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["400", "500", "600", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Leart Raka — Creative Director",
  description:
    "Creative Director at Timeless NYC. Design & branding. Portfolio of Leart Raka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} min-h-screen bg-black text-white antialiased`}
        style={{
          fontFamily:
            "var(--font-inter), Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
