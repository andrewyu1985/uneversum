import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const painPoints = [
  {
    title: "Читаю книги, но ничего не меняется",
    desc: "Знания есть, но они не становятся поведением. Нужна системная работа, а не информация.",
  },
  {
    title: "Не знаю, с чего начать",
    desc: "Слишком много всего: терапия, коучинг, курсы. Непонятно, что подойдёт именно вам.",
  },
  {
    title: "Начинаю и бросаю",
    desc: "Мотивация есть в начале, а потом затухает. Нужна среда и структура, которые держат.",
  },
  {
    title: "Хочу конкретики, а не общих слов",
    desc: "Устали от «полюбите себя» и расплывчатых советов. Хочется понятных шагов.",
  },
];

const pathways = [
  {
    id: "mind",
    color: "var(--pathway-mind)",
    tag: "Маршрут: Мышление",
    title: "Работа с тревогой и внутренними паттернами",
    desc: "Для тех, кто застрял в тревоге, самокритике или повторяющихся сценариях. Разбираем механизмы — меняем отклик.",
    duration: "3–6 месяцев",
    format: "Индивидуально + группа",
  },
  {
    id: "relations",
    color: "var(--pathway-relations)",
    tag: "Маршрут: Отношения",
    title: "Паттерны в отношениях и близость",
    desc: "Почему одни и те же люди, одни и те же конфликты. Работаем с привязанностью и границами.",
    duration: "2–5 месяцев",
    format: "Пары + индивидуально",
  },
  {
    id: "work",
    color: "var(--pathway-work)",
    tag: "Маршрут: Профессия",
    title: "Идентичность, смысл и профессиональное выгорание",
    desc: "Когда работа перестала давать смысл или не можете найти своё. Ищем, что важно на самом деле.",
    duration: "2–4 месяца",
    format: "Индивидуально",
  },
];

const testimonials = [
  {
    quote:
      "Я думала, что иду на очередной курс по саморазвитию. Но здесь меня встретила система, которая помогла увидеть свои паттерны — и реально изменить их.",
    name: "Анна, 34",
    context: "3 месяца в маршруте «Мышление»",
  },
  {
    quote:
      "Не было ощущения продажи. Первая встреча — это честный разговор о том, что происходит и как мы будем работать.",
    name: "Михаил, 41",
    context: "Маршрут «Профессия»",
  },
  {
    quote:
      "Наконец-то не «полюбите себя», а конкретная работа. Понял, откуда берётся тревога и что с ней делать.",
    name: "Екатерина, 29",
    context: "6 месяцев программы",
  },
];

const faqItems = [
  {
    q: "Чем Uneversum отличается от обычного психолога?",
    a: "Это не замена психотерапии, а структурированная среда для работы с собой. Маршруты объединяют индивидуальные сессии, группы и практики в единую систему с понятным прогрессом.",
  },
  {
    q: "Как проходит диагностика?",
    a: "7 вопросов о том, что происходит прямо сейчас. Без тестов на «тип личности» — только контекст, который помогает подобрать маршрут.",
  },
  {
    q: "Можно ли начать без вводной встречи?",
    a: "Да, вы можете изучить программы самостоятельно. Но вводная встреча — это 30 минут, которые экономят месяцы движения не туда.",
  },
  {
    q: "Что если я начну и пойму, что это не моё?",
    a: "Первые две недели — период адаптации. Если в это время что-то не подходит, мы перестраиваем формат или возвращаем оплату.",
  },
  {
    q: "Работаете ли вы с серьёзными запросами (депрессия, травма)?",
    a: "Часть наших специалистов работает с тяжёлыми состояниями. На диагностике мы честно скажем, если запрос требует клинической помощи.",
  },
  {
    q: "Где проходят встречи?",
    a: "Всё онлайн. Индивидуальные сессии — Zoom или Google Meet. Группы — закрытое пространство платформы.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-[var(--bg-primary)] pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="tag mb-6 inline-flex">Платформа трансформации</span>
              <h1 className="text-h1 text-[var(--text-primary)] mb-6">
                Не курсы и не советы.
                <br />
                <em>Системная работа с собой.</em>
              </h1>
              <p className="text-body-lg text-[var(--text-secondary)] mb-8 max-w-xl leading-relaxed">
                Персональный маршрут, специалисты и среда для реальных изменений.
                Для тех, кто готов работать, а не просто читать.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/pathways/assessment" className="btn-primary">
                  Подобрать маршрут
                  <ArrowRight size={16} />
                </Link>
                <Link href="/about" className="btn-ghost hidden sm:inline-flex">
                  Как мы работаем
                </Link>
              </div>
            </div>
          </div>
          <div
            className="absolute right-0 top-0 h-full w-px opacity-20"
            style={{ background: "linear-gradient(to bottom, transparent, var(--accent-warm), transparent)" }}
          />
        </section>

        {/* Pain Points */}
        <section className="bg-[var(--bg-secondary)] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-small text-[var(--text-muted)] uppercase tracking-widest font-500 mb-8">
              Узнаёте себя?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {painPoints.map((point) => (
                <div key={point.title} className="card-base p-6">
                  <h3 className="text-body font-[500] text-[var(--text-primary)] mb-3 leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-small text-[var(--text-muted)] leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pathways */}
        <section className="bg-[var(--bg-primary)] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-small text-[var(--text-muted)] uppercase tracking-widest font-500 mb-4">
                Маршруты
              </p>
              <h2 className="text-h2 text-[var(--text-primary)]">
                Три направления — <em>один принцип</em>
              </h2>
              <p className="text-body text-[var(--text-secondary)] mt-3 max-w-lg">
                Маршрут — не набор уроков. Это структура работы, заточенная под ваш запрос.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {pathways.map((p) => (
                <Link
                  key={p.id}
                  href={`/pathways/${p.id}`}
                  className="card-base p-7 flex flex-col"
                >
                  <span
                    className="tag mb-5 self-start"
                    style={{ borderColor: p.color, color: p.color }}
                  >
                    {p.tag}
                  </span>
                  <h3 className="text-h3 text-[var(--text-primary)] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-small text-[var(--text-muted)] leading-relaxed flex-1 mb-6">
                    {p.desc}
                  </p>
                  <div className="flex gap-4 text-caption text-[var(--text-muted)] border-t border-[var(--border-default)] pt-4">
                    <span>{p.duration}</span>
                    <span className="opacity-40">·</span>
                    <span>{p.format}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/pathways/assessment" className="btn-primary">
                Пройти диагностику
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-[var(--bg-secondary)] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-small text-[var(--text-muted)] uppercase tracking-widest font-500 mb-4">
                  Как это работает
                </p>
                <h2 className="text-h2 text-[var(--text-primary)] mb-6">
                  Без воронок и давления
                </h2>
                <p className="text-body text-[var(--text-secondary)] leading-relaxed">
                  Мы не продаём трансформацию. Мы создаём условия, в которых она становится возможной.
                  Каждый шаг понятен, каждый специалист выбирается под ваш запрос.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                {[
                  { n: "01", title: "Диагностика", desc: "7 вопросов — понимаем контекст и подбираем маршрут" },
                  { n: "02", title: "Вводная встреча", desc: "30 минут с куратором. Честный разговор без продаж" },
                  { n: "03", title: "Маршрут", desc: "Индивидуальные сессии, группы и практики в одной системе" },
                  { n: "04", title: "Прогресс", desc: "Видите, что меняется. Корректируем по ходу вместе" },
                ].map((step) => (
                  <div key={step.n} className="flex gap-5 items-start">
                    <span className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--accent-warm)] opacity-60 leading-none mt-0.5 min-w-[2rem]">
                      {step.n}
                    </span>
                    <div>
                      <p className="text-body font-[500] text-[var(--text-primary)]">{step.title}</p>
                      <p className="text-small text-[var(--text-muted)] mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-[var(--bg-primary)] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-small text-[var(--text-muted)] uppercase tracking-widest font-500 mb-10">
              Истории
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <blockquote key={t.name} className="card-base p-7 flex flex-col">
                  <p className="text-body text-[var(--text-primary)] leading-relaxed flex-1 mb-6">
                    «{t.quote}»
                  </p>
                  <footer>
                    <p className="text-small font-[500] text-[var(--text-primary)]">{t.name}</p>
                    <p className="text-caption text-[var(--text-muted)] mt-0.5">{t.context}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[var(--bg-secondary)] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <p className="text-small text-[var(--text-muted)] uppercase tracking-widest font-500 mb-4 text-center">
                Вопросы
              </p>
              <h2 className="text-h2 text-[var(--text-primary)] text-center mb-10">
                Часто спрашивают
              </h2>
              <div className="flex flex-col divide-y divide-[var(--border-default)]">
                {faqItems.map((item) => (
                  <details key={item.q} className="group py-5">
                    <summary className="flex justify-between items-start gap-4 cursor-pointer list-none text-body font-[500] text-[var(--text-primary)]">
                      <span>{item.q}</span>
                      <ChevronDown
                        size={18}
                        className="shrink-0 text-[var(--text-muted)] mt-0.5 transition-transform duration-200 group-open:rotate-180"
                      />
                    </summary>
                    <p className="mt-4 text-body text-[var(--text-secondary)] leading-relaxed">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[var(--text-primary)] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-h2 mb-4"
              style={{ color: "var(--bg-primary)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Начать с диагностики
            </h2>
            <p className="text-body mb-8 max-w-md mx-auto opacity-70" style={{ color: "var(--bg-primary)" }}>
              7 вопросов. 3 минуты. Понятный первый шаг без обязательств.
            </p>
            <Link
              href="/pathways/assessment"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-[500] text-sm transition-opacity hover:opacity-90"
              style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}
            >
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
