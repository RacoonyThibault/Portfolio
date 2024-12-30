import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full p-4 sm:p-5 z-50 bg-transparent">
      <div className="container mx-auto flex justify-between items-center">

        <Link href="/">
          <h1 className="text-2xl sm:text-6xl font-bold cursor-pointer bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-transform duration-300 hover:scale-110 hover:opacity-80">
            Thibault.
          </h1>
        </Link>
        <nav aria-label="Main navigation">
          <div className="transition-transform duration-300 hover:scale-110">
            <Link
              href="/about"
              className="text-xl sm:text-3xl gradient-bg bg-clip-text text-transparent transition-transform duration-300 hover:scale-125 hover:opacity-80"
            >
              About
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}