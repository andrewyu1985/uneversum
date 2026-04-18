"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/pathways", label: "Маршруты" },
  { href: "/programs", label: "Программы" },
  { href: "/schedule", label: "Расписание" },
  { href: "/about", label: "Подход" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border-default)] bg-[var(--bg-primary)]/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-[family-name:var(--font-cormorant)] text-xl font-400 text-[var(--text-primary)] tracking-wide"
          >
            Uneversum
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/auth/login"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-150"
            >
              Войти
            </Link>
            <Link href="/pathways/assessment" className="btn-primary text-sm py-2 px-5">
              Начать
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label="Меню"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--border-default)] bg-[var(--bg-primary)]">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 px-4 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-[var(--border-default)] flex flex-col gap-2">
              <Link
                href="/auth/login"
                className="btn-ghost w-full text-center text-sm"
                onClick={() => setOpen(false)}
              >
                Войти
              </Link>
              <Link
                href="/pathways/assessment"
                className="btn-primary w-full text-center text-sm"
                onClick={() => setOpen(false)}
              >
                Начать
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
