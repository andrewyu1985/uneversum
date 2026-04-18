import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const pathways = [
  {
    id: "mind",
    color: "var(--pathway-mind)",
    colorBg: "#EEF3F8",
    tag: "Мышление",
    title: "Тревога, паттерны и внутренний диалог",
    desc: "Для тех, кто застрял в тревоге, самокритике или повторяющихся сценариях. Работаем с механизмами — меняем отклик на реальность.",
    details: [
      "Понимание природы тревоги и её триггеров",
      "Работа с автоматическими мыслями",
      "Развитие эмоциональной регуляции",
      "Изменение поведенческих паттернов",
    ],
    duration: "3–6 месяцев",
    format: "Индивидуально + группа",
    sessions: "4–8 сессий в месяц",
    approach: "КПТ, психодинамический подход, ACT",
  },
  {
    id: "relations",
    color: "var(--pathway-relations)",
    colorBg: "#F8EEF2",
    tag: "Отношения",
    title: "Паттерны в отношениях и близость",
    desc: "Почему одни и те же люди, одни и те же конфликты. Работаем с типом привязанности, границами и способностью к близости.",
    details: [
      "Диагностика стиля привязанности",
      "Работа с границами и слиянием",
      "Коммуникация без защитных реакций",
      "Принятие и изменение динамики пар",
    ],
    duration: "2–5 месяцев",
    format: "Индивидуально + пары",
    sessions: "2–6 сессий в месяц",
    approach: "Attachment-based, EFT для пар, схема-терапия",
  },
  {
    id: "work",
    color: "var(--pathway-work)",
    colorBg: "#EEF2EE",
    tag: "Профессия",
    title: "Идентичность, смысл и выгорание",
    desc: "Когда работа перестала давать смысл или вы не можете найти своё место. Ищем, что важно на самом деле — и строим движение к этому.",
    details: [
      "Диагностика выгорания и его источников",
      "Работа с профессиональной идентичностью",
      "Ценности и смысл: от слов к действиям",
      "Принятие карьерных решений",
    ],
    duration: "2–4 месяца",
    format: "Индивидуально",
    sessions: "4–6 сессий в месяц",
    approach: "Нарративная терапия, ACT, коучинг",
  },
];

export default function PathwaysPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[var(--bg-primary)] pt-12 pb-16 md:pt-16 md:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-caption text-[var(--text-muted)] uppercase tracking-widest mb-4">
                Маршруты
              </p>
              <h1 className="text-h1 text-[var(--text-primary)] mb-4">
                Три пути. <em>Один принцип работы.</em>
              </h1>
              <p className="text-body text-[var(--text-secondary)] leading-relaxed max-w-lg">
                Маршрут — не набор уроков. Это структура работы с конкретным запросом,
                специалисты и среда, которые держат вас в процессе.
              </p>
            </div>
          </div>
        </section>

        {/* Pathways */}
        <section className="bg-[var(--bg-primary)] pb-16 md:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6">
              {pathways.map((p, i) => (
                <div
                  key={p.id}
                  className="card-base overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left */}
                    <div className="p-8 lg:p-10">
                      <span
                        className="tag mb-5 inline-flex"
                        style={{ borderColor: p.color, color: p.color }}
                      >
                        {p.tag}
                      </span>
                      <h2 className="text-h2 text-[var(--text-primary)] mb-4">
                        {p.title}
                      </h2>
                      <p className="text-body text-[var(--text-secondary)] leading-relaxed mb-6">
                        {p.desc}
                      </p>
                      <ul className="flex flex-col gap-2.5 mb-8">
                        {p.details.map((d) => (
                          <li key={d} className="flex items-start gap-3">
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0"
                              style={{ background: p.color }}
                            />
                            <span className="text-small text-[var(--text-secondary)]">{d}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link href={`/pathways/assessment`} className="btn-primary text-sm">
                          Начать диагностику
                          <ArrowRight size={15} />
                        </Link>
                        <Link href={`/pathways/${p.id}`} className="btn-ghost text-sm">
                          Подробнее
                        </Link>
                      </div>
                    </div>

                    {/* Right */}
                    <div
                      className="p-8 lg:p-10 flex flex-col justify-between"
                      style={{ background: p.colorBg }}
                    >
                      <div className="flex flex-col gap-6">
                        {[
                          { label: "Длительность", value: p.duration },
                          { label: "Формат", value: p.format },
                          { label: "Частота", value: p.sessions },
                          { label: "Подход", value: p.approach },
                        ].map((item) => (
                          <div key={item.label}>
                            <p className="text-caption text-[var(--text-muted)] uppercase tracking-widest mb-1">
                              {item.label}
                            </p>
                            <p className="text-body text-[var(--text-primary)]">{item.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[var(--bg-secondary)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-h2 text-[var(--text-primary)] mb-4">
              Не уверены, какой маршрут ваш?
            </h2>
            <p className="text-body text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
              Пройдите диагностику — 7 вопросов помогут понять, с чего начать.
            </p>
            <Link href="/pathways/assessment" className="btn-primary">
              Пройти диагностику
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
