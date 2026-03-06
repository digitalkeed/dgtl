import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leart Raka",
  description: "I design things",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-white text-black antialiased"
        style={{
          fontFamily: "sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
