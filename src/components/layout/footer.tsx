import Link from "next/link";

const footerLinks = {
  platform: {
    label: "Платформа",
    links: [
      { href: "/pathways", label: "Маршруты" },
      { href: "/programs", label: "Программы" },
      { href: "/schedule", label: "Расписание" },
      { href: "/pathways/assessment", label: "Диагностика" },
    ],
  },
  company: {
    label: "Компания",
    links: [
      { href: "/about", label: "Подход" },
      { href: "/about#specialists", label: "Специалисты" },
      { href: "/about#evidence", label: "Доказательность" },
    ],
  },
  support: {
    label: "Поддержка",
    links: [
      { href: "/faq", label: "Частые вопросы" },
      { href: "/contact", label: "Контакты" },
      { href: "/privacy", label: "Конфиденциальность" },
      { href: "/terms", label: "Условия" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-default)] bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="font-[family-name:var(--font-cormorant)] text-xl font-400 text-[var(--text-primary)]"
            >
              Uneversum
            </Link>
            <p className="mt-3 text-sm text-[var(--text-muted)] max-w-[220px] leading-relaxed">
              Платформа психологической трансформации. Не курсы — системная работа с собой.
            </p>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.label}>
              <p className="text-xs font-500 tracking-widest uppercase text-[var(--text-muted)] mb-4">
                {section.label}
              </p>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border-default)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} Uneversum. Все права защищены.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Работаем с вами — не за вас
          </p>
        </div>
      </div>
    </footer>
  );
}
