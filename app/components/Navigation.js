"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/finetune", label: "Fine-Tune" },
    { href: "/docs", label: "Docs" },
  ];

  return (
    <nav className="border-b border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-lg font-bold text-white">
              ModelForge
            </Link>
            <div className="hidden md:flex gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/finetune"
              className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              New Model
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
