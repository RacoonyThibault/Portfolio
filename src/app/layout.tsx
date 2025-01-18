import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Optimisation des polices
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${poppins.variable} w-screen h-full overflow-x-hidden`}
    >
      <head>
        {/* Ajout du CSS critique ici */}
        <style>{`/* CSS critique généré par critical */`}</style>

        {/* Chargement différé des styles non critiques */}
        <link
          rel="stylesheet"
          href="/globals.css"
          media="print"
          onLoad="this.media='all'"
        />
        <noscript>
          <link rel="stylesheet" href="/globals.css" />
        </noscript>
      </head>
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
