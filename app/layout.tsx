import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leart Raka",
  description: "I design things",
  metadataBase: new URL("https://dgtl-five.vercel.app"),
  openGraph: {
    title: "Leart Raka",
    description: "Minimalist / Anti Kitsch",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leart Raka",
    description: "Minimalist / Anti Kitsch",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark.svg", type: "image/svg+xml", media: "(prefers-color-scheme: dark)" },
    ],
  },
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
