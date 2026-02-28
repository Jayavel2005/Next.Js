"use client";
import Link from "next/link";
import type { NavLinkProps } from "@/app/types";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }: NavLinkProps) {
  const pathName = usePathname();

  return (
    <li className="text-sm uppercase">
      <Link
        href={href}
        className={`px-4 py-2 text-gray-700 transition-colors rounded-md cursor-pointer hover:text-orange-400 group-hover: ${pathName === href ? "text-orange-400 underline underline-offset-7" : ""}`}
      >
        {children}
      </Link>
    </li>
  );
}
