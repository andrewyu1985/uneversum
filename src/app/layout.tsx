import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Uneversum — платформа психологической трансформации",
    template: "%s | Uneversum",
  },
  description:
    "Персональные маршруты саморазвития, диагностика и работа с психологами. Не курсы — системная работа с собой.",
  keywords: ["психология", "саморазвитие", "трансформация", "терапия", "программы"],
  authors: [{ name: "Uneversum" }],
  openGraph: {
    title: "Uneversum",
    description: "Платформа психологической трансформации",
    type: "website",
    locale: "ru_RU",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAFAF8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${cormorant.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
