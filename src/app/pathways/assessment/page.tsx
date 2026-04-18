"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "Что сейчас происходит в вашей жизни?",
    options: [
      { id: "a", text: "Тревога, навязчивые мысли, трудно расслабиться" },
      { id: "b", text: "Что-то не так в отношениях с близкими" },
      { id: "c", text: "Нет смысла или направления в работе / жизни" },
      { id: "d", text: "Повторяю одни и те же ошибки" },
    ],
  },
  {
    id: 2,
    question: "Как давно это продолжается?",
    options: [
      { id: "a", text: "Недавно — несколько недель или месяцев" },
      { id: "b", text: "Давно — несколько лет" },
      { id: "c", text: "Всю жизнь, насколько помню" },
      { id: "d", text: "Волнами — то лучше, то хуже" },
    ],
  },
  {
    id: 3,
    question: "Пробовали ли вы уже что-то?",
    options: [
      { id: "a", text: "Читал книги, смотрел видео — помогает мало" },
      { id: "b", text: "Ходил к психологу, но было не то" },
      { id: "c", text: "Проходил курсы, но эффект не держится" },
      { id: "d", text: "Нет, это первый раз" },
    ],
  },
  {
    id: 4,
    question: "Что для вас важно в работе со специалистом?",
    options: [
      { id: "a", text: "Научный подход, без эзотерики" },
      { id: "b", text: "Тепло и поддержка" },
      { id: "c", text: "Конкретные инструменты и техники" },
      { id: "d", text: "Глубокое понимание причин" },
    ],
  },
  {
    id: 5,
    question: "Как вы предпочитаете работать?",
    options: [
      { id: "a", text: "Индивидуально — один на один" },
      { id: "b", text: "В группе с похожими людьми" },
      { id: "c", text: "Комбинация — и то, и другое" },
      { id: "d", text: "Самостоятельно с поддержкой куратора" },
    ],
  },
  {
    id: 6,
    question: "Сколько времени готовы вкладывать в неделю?",
    options: [
      { id: "a", text: "1–2 часа — минимальный режим" },
      { id: "b", text: "3–5 часов — умеренный ритм" },
      { id: "c", text: "Более 5 часов — интенсивная работа" },
      { id: "d", text: "Пока не знаю" },
    ],
  },
  {
    id: 7,
    question: "Каким был бы для вас успех через 3 месяца?",
    options: [
      { id: "a", text: "Тревоги стало заметно меньше" },
      { id: "b", text: "Понял что-то важное про себя" },
      { id: "c", text: "Изменились отношения с близкими" },
      { id: "d", text: "Появилось ощущение направления" },
    ],
  },
];

const results = {
  mind: {
    pathway: "Мышление",
    color: "var(--pathway-mind)",
    title: "Маршрут «Мышление»",
    desc: "Судя по вашим ответам, в центре запроса — работа с внутренними паттернами: тревога, самокритика, повторяющиеся реакции. Маршрут строится на когнитивно-поведенческих и психодинамических подходах.",
    programs: [
      "Управление тревогой: от понимания к практике",
      "Работа с самокритикой",
      "Групповая программа по эмоциональной регуляции",
    ],
  },
  relations: {
    pathway: "Отношения",
    color: "var(--pathway-relations)",
    title: "Маршрут «Отношения»",
    desc: "Ваши ответы указывают на запрос в сфере близости и связей. Работаем с паттернами привязанности, границами и динамикой отношений.",
    programs: [
      "Паттерны в отношениях: откуда они и как меняются",
      "Границы без конфликтов",
      "Программа для пар",
    ],
  },
  work: {
    pathway: "Профессия",
    color: "var(--pathway-work)",
    title: "Маршрут «Профессия»",
    desc: "Ваши ответы говорят о поиске смысла, идентичности и профессиональной ориентации. Работаем с ценностями, выгоранием и вопросом «кто я».",
    programs: [
      "Выгорание: диагностика и восстановление",
      "Профессиональная идентичность",
      "Смысл и направление",
    ],
  },
};

function getResult(answers: Record<number, string>) {
  const vals = Object.values(answers);
  const counts = { mind: 0, relations: 0, work: 0 };
  vals.forEach((v) => {
    if (v === "a") counts.mind++;
    else if (v === "b") counts.relations++;
    else if (v === "c") counts.work++;
    else counts.mind++;
  });
  if (counts.mind >= counts.relations && counts.mind >= counts.work) return "mind";
  if (counts.relations >= counts.work) return "relations";
  return "work";
}

export default function AssessmentPage() {
  const [step, setStep] = useState(0); // 0 = intro, 1-7 = questions, 8 = result
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selected, setSelected] = useState<string | null>(null);

  const currentQ = questions[step - 1];
  const isResult = step === questions.length + 1;
  const resultKey = isResult ? getResult(answers) : null;
  const result = resultKey ? results[resultKey] : null;

  function handleSelect(optId: string) {
    setSelected(optId);
  }

  function handleNext() {
    if (step === 0) {
      setStep(1);
      return;
    }
    if (selected) {
      setAnswers((prev) => ({ ...prev, [step]: selected }));
      setSelected(null);
      setStep((s) => s + 1);
    }
  }

  function handleBack() {
    if (step === 0) return;
    setStep((s) => s - 1);
    setSelected(answers[step - 1] ?? null);
  }

  const progress = step === 0 ? 0 : Math.round((step / questions.length) * 100);

  if (isResult && result) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] flex flex-col">
        {/* Progress bar full */}
        <div className="progress-bar fixed top-0 left-0 right-0 z-50">
          <div className="progress-bar-fill" style={{ width: "100%" }} />
        </div>

        <div className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="w-full max-w-lg">
            <p className="text-caption text-[var(--text-muted)] uppercase tracking-widest mb-6">
              Ваш контекст
            </p>

            {/* Result card */}
            <div
              className="card-base p-8 mb-6"
              style={{ borderColor: result.color, borderWidth: "2px" }}
            >
              <span
                className="tag mb-4 inline-flex"
                style={{ borderColor: result.color, color: result.color }}
              >
                {result.title}
              </span>
              <p className="text-body text-[var(--text-secondary)] leading-relaxed">
                {result.desc}
              </p>
            </div>

            {/* Recommended programs */}
            <p className="text-small font-[500] text-[var(--text-primary)] mb-3">
              Рекомендуемые программы
            </p>
            <div className="flex flex-col gap-2 mb-8">
              {result.programs.map((prog) => (
                <div
                  key={prog}
                  className="flex items-start gap-3 p-4 rounded-xl border border-[var(--border-default)] bg-[var(--card-bg)]"
                >
                  <Check size={16} className="text-[var(--accent-warm)] mt-0.5 shrink-0" />
                  <span className="text-small text-[var(--text-primary)]">{prog}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <Link
                href={`/pathways/${resultKey}`}
                className="btn-primary w-full justify-center"
              >
                Записаться на вводную встречу
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/programs"
                className="btn-ghost w-full justify-center"
              >
                Смотреть все программы маршрута
              </Link>
            </div>

            {/* Email */}
            <div className="mt-6 pt-6 border-t border-[var(--border-default)]">
              <p className="text-caption text-[var(--text-muted)] mb-3">
                Получить результат на почту
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="ваш@email.ru"
                  className="flex-1 h-11 px-4 rounded-xl border border-[var(--border-default)] bg-[var(--card-bg)] text-small text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-warm)] transition-colors"
                />
                <button className="btn-primary px-5 py-0 h-11 text-sm">
                  Отправить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex flex-col">
      {/* Progress bar */}
      <div className="progress-bar fixed top-0 left-0 right-0 z-50">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Back button */}
      {step > 0 && (
        <div className="pt-6 px-4 max-w-lg mx-auto w-full">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-small text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors py-2"
          >
            <ArrowLeft size={16} />
            Назад
          </button>
        </div>
      )}

      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-lg">
          {step === 0 ? (
            /* Intro */
            <div className="text-center">
              <p className="tag inline-flex mb-6">Диагностика</p>
              <h1 className="text-h1 text-[var(--text-primary)] mb-4">
                Подбор маршрута
              </h1>
              <p className="text-body text-[var(--text-secondary)] mb-8 max-w-sm mx-auto leading-relaxed">
                7 вопросов — без тестов на тип личности. Только то, что происходит
                прямо сейчас. Займёт около 3 минут.
              </p>
              <button onClick={handleNext} className="btn-primary mx-auto">
                Начать
                <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            /* Question */
            <div>
              <p className="text-caption text-[var(--text-muted)] uppercase tracking-widest mb-6">
                Вопрос {step} из {questions.length}
              </p>
              <h2 className="text-h2 text-[var(--text-primary)] mb-8">
                {currentQ.question}
              </h2>
              <div className="flex flex-col gap-3 mb-8">
                {currentQ.options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(opt.id)}
                    className="text-left p-5 rounded-xl border transition-all duration-150"
                    style={{
                      borderColor: selected === opt.id ? "var(--accent-warm)" : "var(--border-default)",
                      background: selected === opt.id ? "var(--accent-subtle)" : "var(--card-bg)",
                      borderWidth: "1.5px",
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors"
                        style={{
                          borderColor: selected === opt.id ? "var(--accent-warm)" : "var(--border-default)",
                          background: selected === opt.id ? "var(--accent-warm)" : "transparent",
                        }}
                      >
                        {selected === opt.id && <Check size={11} color="white" strokeWidth={3} />}
                      </span>
                      <span className="text-body text-[var(--text-primary)]">{opt.text}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Mobile sticky nav */}
              <div className="sticky bottom-4 md:static md:bottom-auto">
                <button
                  onClick={handleNext}
                  disabled={!selected}
                  className="btn-primary w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {step === questions.length ? "Получить результат" : "Далее"}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
