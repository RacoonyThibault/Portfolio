import Link from "next/link";

export default function Header() {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed flex justify-between items-center p-4 bg-slate-800 w-full"
    >
      <Link href="/"></Link>
      <div className="transition-all duration-350 hover:text-slate-300">
        <Link href="#" className="text-lg sm:text-lg">
          About
        </Link>
      </div>
    </nav>
  );
}
