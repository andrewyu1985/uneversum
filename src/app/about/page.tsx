import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const principles = [
  {
    n: "01",
    title: "Доказательный подход",
    desc: "Работаем только с методами, эффективность которых подтверждена исследованиями: КПТ, ACT, психодинамика, attachment-based терапия.",
  },
  {
    n: "02",
    title: "Системность, а не вспышки",
    desc: "Разовые инсайты не меняют поведение. Мы строим систему работы, которая держит прогресс и возвращает в процесс, когда он прерывается.",
  },
  {
    n: "03",
    title: "Честность без давления",
    desc: "Не продаём трансформацию. Если запрос вам не подходит, скажем об этом прямо. Вводная встреча — разговор, не воронка.",
  },
  {
    n: "04",
    title: "Специалист под запрос",
    desc: "Не назначаем первого доступного. Подбираем под ваш стиль работы, запрос и предпочтения по формату.",
  },
];

const specialists = [
  {
    name: "Мария Соколова",
    role: "Клинический психолог",
    approaches: "КПТ, ACT, работа с тревогой",
    exp: "8 лет",
  },
  {
    name: "Алексей Попов",
    role: "Психотерапевт",
    approaches: "Психодинамика, работа с травмой",
    exp: "12 лет",
  },
  {
    name: "Елена Кузнецова",
    role: "Семейный психолог",
    approaches: "EFT, системная терапия пар",
    exp: "10 лет",
  },
  {
    name: "Дмитрий Лебедев",
    role: "Коуч и психолог",
    approaches: "ACT, нарративная терапия, карьера",
    exp: "6 лет",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[var(--bg-primary)] pt-12 pb-16 md:pt-16 md:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-caption text-[var(--text-muted)] uppercase tracking-widest mb-4">
                  Подход
                </p>
                <h1 className="text-h1 text-[var(--text-primary)] mb-6">
                  Мы не учим жить.
                  <br />
                  <em>Мы создаём условия.</em>
                </h1>
                <p className="text-body text-[var(--text-secondary)] leading-relaxed">
                  Uneversum — не курс и не школа. Это структурированная среда для реальной
                  психологической работы. Наша задача — не дать вам информацию, а создать
                  пространство, где изменения становятся возможными.
                </p>
              </div>
              <div className="bg-[var(--bg-secondary)] rounded-2xl p-8 lg:p-10">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { val: "6+", label: "лет опыта" },
                    { val: "40+", label: "специалистов" },
                    { val: "3", label: "маршрута" },
                    { val: "94%", label: "продолжают после 1-го месяца" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="font-[family-name:var(--font-cormorant)] text-4xl text-[var(--text-primary)] mb-1">
                        {stat.val}
                      </p>
                      <p className="text-small text-[var(--text-muted)]">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section id="principles" className="bg-[var(--bg-secondary)] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-caption text-[var(--text-muted)] uppercase tracking-widest mb-8">
              Принципы
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {principles.map((p) => (
                <div key={p.n} className="card-base p-7">
                  <span className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--accent-warm)] opacity-60 block mb-4">
                    {p.n}
                  </span>
                  <h3 className="text-h3 text-[var(--text-primary)] mb-3">{p.title}</h3>
                  <p className="text-body text-[var(--text-secondary)] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Evidence */}
        <section id="evidence" className="bg-[var(--bg-primary)] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-caption text-[var(--text-muted)] uppercase tracking-widest mb-4">
                Доказательность
              </p>
              <h2 className="text-h2 text-[var(--text-primary)] mb-6">
                Не «авторский метод», а наука
              </h2>
              <p className="text-body text-[var(--text-secondary)] leading-relaxed mb-6">
                Каждый метод, используемый на платформе, имеет доказательную базу из
                рандомизированных клинических исследований. Мы не работаем с эзотерикой,
                соционикой или псевдонаукой.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  "Когнитивно-поведенческая терапия (КПТ)",
                  "Терапия принятия и ответственности (ACT)",
                  "Психодинамическая терапия",
                  "Эмоционально-фокусированная терапия (EFT)",
                  "Терапия на основе привязанности",
                ].map((method) => (
                  <div key={method} className="flex items-center gap-3 text-body text-[var(--text-secondary)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-warm)] shrink-0" />
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specialists */}
        <section id="specialists" className="bg-[var(--bg-secondary)] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-caption text-[var(--text-muted)] uppercase tracking-widest mb-8">
              Специалисты
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {specialists.map((s) => (
                <div key={s.name} className="card-base p-6">
                  <div
                    className="w-14 h-14 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-default)] mb-4 flex items-center justify-center"
                  >
                    <span className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--accent-warm)]">
                      {s.name[0]}
                    </span>
                  </div>
                  <p className="text-body font-[500] text-[var(--text-primary)] mb-1">{s.name}</p>
                  <p className="text-caption text-[var(--accent-warm)] mb-3">{s.role}</p>
                  <p className="text-small text-[var(--text-muted)] mb-2">{s.approaches}</p>
                  <p className="text-caption text-[var(--text-muted)]">Опыт: {s.exp}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[var(--bg-primary)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-h2 text-[var(--text-primary)] mb-4">
              Начните с честного разговора
            </h2>
            <p className="text-body text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
              Вводная встреча — 30 минут. Без давления, без продажи. Просто разберёмся, что происходит.
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
