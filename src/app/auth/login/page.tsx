import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <Link
          href="/"
          className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--text-primary)] block text-center mb-10"
        >
          Uneversum
        </Link>

        <div className="card-base p-8">
          <h1 className="text-h2 text-[var(--text-primary)] mb-1">Войти</h1>
          <p className="text-small text-[var(--text-muted)] mb-8">
            Нет аккаунта?{" "}
            <Link href="/auth/register" className="text-[var(--accent-warm)] hover:underline">
              Зарегистрироваться
            </Link>
          </p>

          <form className="flex flex-col gap-5">
            <div>
              <label className="block text-small font-[500] text-[var(--text-primary)] mb-1.5">
                Email
              </label>
              <input
                type="email"
                autoComplete="email"
                placeholder="ваш@email.ru"
                className="w-full h-11 px-4 rounded-xl border border-[var(--border-default)] bg-[var(--card-bg)] text-small text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-warm)] transition-colors"
              />
            </div>

            <div>
              <div className="flex justify-between mb-1.5">
                <label className="text-small font-[500] text-[var(--text-primary)]">
                  Пароль
                </label>
                <Link
                  href="/auth/forgot"
                  className="text-caption text-[var(--text-muted)] hover:text-[var(--accent-warm)] transition-colors"
                >
                  Забыли пароль?
                </Link>
              </div>
              <input
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full h-11 px-4 rounded-xl border border-[var(--border-default)] bg-[var(--card-bg)] text-small text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-warm)] transition-colors"
              />
            </div>

            <button type="submit" className="btn-primary w-full justify-center mt-1">
              Войти
              <ArrowRight size={16} />
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-[var(--border-default)]">
            <p className="text-caption text-[var(--text-muted)] text-center mb-4">или</p>
            <button className="btn-ghost w-full justify-center text-sm gap-2.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Войти через Google
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-caption text-[var(--text-muted)]">
          Продолжая, вы соглашаетесь с{" "}
          <Link href="/terms" className="hover:text-[var(--accent-warm)] transition-colors">
            условиями
          </Link>{" "}
          и{" "}
          <Link href="/privacy" className="hover:text-[var(--accent-warm)] transition-colors">
            политикой конфиденциальности
          </Link>
        </p>
      </div>
    </div>
  );
}
