import Link from "next/link";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const programs = [
  {
    id: "anxiety",
    pathway: "Мышление",
    pathwayColor: "var(--pathway-mind)",
    title: "Управление тревогой: от понимания к практике",
    desc: "Системная работа с хронической тревогой. Разбираем механизмы, строим инструменты саморегуляции.",
    duration: "8 недель",
    format: "Индивидуально",
    sessions: 16,
    level: "Для начинающих",
  },
  {
    id: "inner-critic",
    pathway: "Мышление",
    pathwayColor: "var(--pathway-mind)",
    title: "Работа с самокритикой",
    desc: "Трансформируем внутреннего критика из врага в союзника. Для тех, кто устал от перфекционизма.",
    duration: "6 недель",
    format: "Группа (8 человек)",
    sessions: 12,
    level: "Любой уровень",
  },
  {
    id: "patterns",
    pathway: "Отношения",
    pathwayColor: "var(--pathway-relations)",
    title: "Паттерны в отношениях: откуда они и как меняются",
    desc: "Понимаем, почему повторяются одни и те же сценарии. Изучаем свой тип привязанности и его влияние.",
    duration: "10 недель",
    format: "Индивидуально",
    sessions: 20,
    level: "Любой уровень",
  },
  {
    id: "boundaries",
    pathway: "Отношения",
    pathwayColor: "var(--pathway-relations)",
    title: "Границы без конфликтов",
    desc: "Как говорить «нет», не разрушая отношений. Практическая работа с границами и виной.",
    duration: "5 недель",
    format: "Группа (6 человек)",
    sessions: 10,
    level: "Для начинающих",
  },
  {
    id: "burnout",
    pathway: "Профессия",
    pathwayColor: "var(--pathway-work)",
    title: "Выгорание: диагностика и восстановление",
    desc: "Работаем с причинами, а не симптомами. Восстанавливаем ресурс и выстраиваем устойчивый ритм.",
    duration: "8 недель",
    format: "Индивидуально",
    sessions: 12,
    level: "Любой уровень",
  },
  {
    id: "identity",
    pathway: "Профессия",
    pathwayColor: "var(--pathway-work)",
    title: "Профессиональная идентичность",
    desc: "Для тех, кто задаётся вопросом «чем я хочу заниматься». Работаем с ценностями и смыслом.",
    duration: "6 недель",
    format: "Группа (8 человек)",
    sessions: 12,
    level: "Любой уровень",
  },
];

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[var(--bg-primary)] pt-12 pb-12 md:pt-16 md:pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-caption text-[var(--text-muted)] uppercase tracking-widest mb-4">
                Программы
              </p>
              <h1 className="text-h1 text-[var(--text-primary)] mb-4">
                Конкретная работа, <em>понятный результат</em>
              </h1>
              <p className="text-body text-[var(--text-secondary)] leading-relaxed">
                Каждая программа привязана к маршруту. Вы можете войти через диагностику
                или выбрать программу самостоятельно.
              </p>
            </div>
          </div>
        </section>

        {/* Filters (static) */}
        <section className="bg-[var(--bg-primary)] pb-16 md:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2 flex-wrap mb-8">
              {["Все", "Мышление", "Отношения", "Профессия", "Группа", "Индивидуально"].map((f) => (
                <button
                  key={f}
                  className={`tag cursor-pointer hover:border-[var(--accent-warm)] hover:text-[var(--accent-warm)] transition-colors ${f === "Все" ? "tag--accent" : ""}`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {programs.map((p) => (
                <Link
                  key={p.id}
                  href={`/programs/${p.id}`}
                  className="card-base p-6 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="tag text-xs"
                      style={{ borderColor: p.pathwayColor, color: p.pathwayColor }}
                    >
                      {p.pathway}
                    </span>
                    <span className="text-caption text-[var(--text-muted)]">{p.level}</span>
                  </div>
                  <h3 className="text-h3 text-[var(--text-primary)] mb-3 flex-1">
                    {p.title}
                  </h3>
                  <p className="text-small text-[var(--text-muted)] leading-relaxed mb-6">
                    {p.desc}
                  </p>
                  <div className="flex gap-4 text-caption text-[var(--text-muted)] border-t border-[var(--border-default)] pt-4">
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {p.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users size={12} />
                      {p.format}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
