import Link from "next/link";
import { ArrowRight, Calendar, Clock, Users } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const events = [
  {
    date: "22 апреля",
    day: "Вт",
    time: "19:00 МСК",
    title: "Вводная встреча — маршрут «Мышление»",
    type: "Встреча",
    format: "Онлайн",
    spots: 3,
    pathway: "Мышление",
    pathwayColor: "var(--pathway-mind)",
    free: true,
  },
  {
    date: "23 апреля",
    day: "Ср",
    time: "18:30 МСК",
    title: "Управление тревогой — Модуль 3: Когнитивные паттерны",
    type: "Группа",
    format: "Онлайн",
    spots: 5,
    pathway: "Мышление",
    pathwayColor: "var(--pathway-mind)",
    free: false,
  },
  {
    date: "24 апреля",
    day: "Чт",
    time: "20:00 МСК",
    title: "Границы без конфликтов — Старт новой группы",
    type: "Группа",
    format: "Онлайн",
    spots: 2,
    pathway: "Отношения",
    pathwayColor: "var(--pathway-relations)",
    free: false,
  },
  {
    date: "26 апреля",
    day: "Сб",
    time: "11:00 МСК",
    title: "Открытый вебинар: Что такое выгорание и как с ним работать",
    type: "Вебинар",
    format: "Онлайн",
    spots: 40,
    pathway: "Профессия",
    pathwayColor: "var(--pathway-work)",
    free: true,
  },
  {
    date: "28 апреля",
    day: "Пн",
    time: "19:30 МСК",
    title: "Вводная встреча — маршрут «Отношения»",
    type: "Встреча",
    format: "Онлайн",
    spots: 4,
    pathway: "Отношения",
    pathwayColor: "var(--pathway-relations)",
    free: true,
  },
  {
    date: "30 апреля",
    day: "Ср",
    time: "18:00 МСК",
    title: "Профессиональная идентичность — Модуль 1: Ценности",
    type: "Группа",
    format: "Онлайн",
    spots: 6,
    pathway: "Профессия",
    pathwayColor: "var(--pathway-work)",
    free: false,
  },
];

export default function SchedulePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[var(--bg-primary)] pt-12 pb-12 md:pt-16 md:pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-caption text-[var(--text-muted)] uppercase tracking-widest mb-4">
                Расписание
              </p>
              <h1 className="text-h1 text-[var(--text-primary)] mb-4">
                Ближайшие мероприятия
              </h1>
              <p className="text-body text-[var(--text-secondary)] leading-relaxed">
                Группы, вебинары и вводные встречи. Всё онлайн.
              </p>
            </div>
          </div>
        </section>

        {/* Filter bar */}
        <section className="bg-[var(--bg-primary)] pb-16 md:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2 flex-wrap mb-8">
              {["Все", "Мышление", "Отношения", "Профессия", "Бесплатно"].map((f) => (
                <button
                  key={f}
                  className={`tag cursor-pointer hover:border-[var(--accent-warm)] hover:text-[var(--accent-warm)] transition-colors ${f === "Все" ? "tag--accent" : ""}`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Events list */}
            <div className="flex flex-col gap-3">
              {events.map((ev) => (
                <div key={ev.title} className="card-base p-5 md:p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                    {/* Date */}
                    <div className="shrink-0 w-16 text-center hidden md:block">
                      <p className="text-caption text-[var(--text-muted)] uppercase">{ev.day}</p>
                      <p className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--text-primary)] leading-none">
                        {ev.date.split(" ")[0]}
                      </p>
                      <p className="text-caption text-[var(--text-muted)]">{ev.date.split(" ")[1]}</p>
                    </div>

                    {/* Divider */}
                    <div className="w-px h-12 bg-[var(--border-default)] shrink-0 hidden md:block" />

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className="tag text-xs"
                          style={{ borderColor: ev.pathwayColor, color: ev.pathwayColor }}
                        >
                          {ev.pathway}
                        </span>
                        {ev.free && (
                          <span className="tag tag--accent text-xs">Бесплатно</span>
                        )}
                      </div>
                      <p className="text-body font-[500] text-[var(--text-primary)] mb-1 truncate">
                        {ev.title}
                      </p>
                      <div className="flex flex-wrap gap-4 text-caption text-[var(--text-muted)]">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} />
                          {ev.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={12} />
                          {ev.time}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Users size={12} />
                          Осталось {ev.spots} {ev.spots === 1 ? "место" : ev.spots < 5 ? "места" : "мест"}
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="shrink-0">
                      <Link
                        href="/pathways/assessment"
                        className={ev.free ? "btn-ghost text-sm py-2 px-5" : "btn-primary text-sm py-2 px-5"}
                      >
                        {ev.free ? "Записаться бесплатно" : "Записаться"}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No program CTA */}
            <div className="mt-12 text-center bg-[var(--bg-secondary)] rounded-2xl p-8">
              <p className="text-body font-[500] text-[var(--text-primary)] mb-2">
                Не видите подходящего?
              </p>
              <p className="text-small text-[var(--text-muted)] mb-5">
                Пройдите диагностику — подберём программу и сообщим о ближайших датах.
              </p>
              <Link href="/pathways/assessment" className="btn-primary text-sm">
                Пройти диагностику
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
