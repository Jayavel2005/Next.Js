"use client";
import Image from "next/image";
import Link from "next/link";
import Print_Forge_logo from "../../public/printforge-logo.svg";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <div className="relative">
          {/* Desktop logo */}
          <Link href="/">
            <Image
              src={Print_Forge_logo}
              width={100}
              height={50}
              alt="PrintForge Logo"
              className="w-[60px]  max-md:hidden"
            />
          </Link>
          {/* Mobile logo */}
          <img
            src="/printforge-logo.svg"
            alt="PrintForge Logo"
            className="w-[40px] h-auto block md:hidden"
          />
        </div>
        <ul className="flex items-center gap-2.5">
          <Link href="/3d-models" className={`uppercase hover:text-orange-400 ${pathName.startsWith("/3d-models") ? "text-orange-400  underline underline-offset-7" : ""}`}>
            3D Models
          </Link>

          <Link href="/about" className={`uppercase hover:text-orange-400 ${pathName.startsWith("/about") ? "text-orange-400 underline underline-offset-7" : ""}`}>
            ABOUT
          </Link>
        </ul>
      </nav>
    </header>
  );
}
