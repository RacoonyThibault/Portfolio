import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thibault - Web Dev",
  description: "Portfolio of Thibault Fregier, Web Developer",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!children) {
    return (
      <html
        lang="fr"
        className={`${inter.variable} ${poppins.variable} w-full h-full`}
      >
        <body className="antialiased bg-black text-white flex flex-col">
          <main className="flex-grow flex items-center justify-center pt-20">
            <div className="text-center text-red-500">
              Oops! Something went wrong. Please try reloading the page.
            </div>
          </main>
        </body>
      </html>
    );
  }

  return (
    <html
      lang="fr"
      className={`${inter.variable} ${poppins.variable} w-screen h-full overflow-x-hidden`}
    >
      <body className="antialiased bg-gray-900 text-white flex flex-col min-h-screen">
        <noscript>
          <div className="bg-red-500 text-white p-3 text-center">
            JavaScript is disabled in your browser. Please enable it for the
            best experience.
          </div>
        </noscript>
        <main>{children}</main>
      </body>
    </html>
  );
}
