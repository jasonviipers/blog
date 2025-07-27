import "./globals.css";
import type { Metadata } from "next";
import { Noto_Serif_SC, Inter, Noto_Sans_Arabic, Noto_Sans_JP, Noto_Sans_SC } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider";
import { defaultLocale, locales, rtlLocales } from "@/lib/i18n/config";
import { notFound } from "next/navigation";
import { getDirection, validateLocale } from "@/lib/utils";
import { translations } from "@/lib/i18n/translations";
import { I18nProvider } from "@/lib/i18n/provider";

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
})

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-japanese",
})

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-chinese",
})

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const validLocale = validateLocale(locale)

  return {
    title: {
      default: translations[validLocale].hero.title,
      template: "%s | %s",
    },
    description: translations[validLocale].hero.description,
    keywords: translations[validLocale].hero.keywords.join(", "),
    authors: [{ name: translations[validLocale].hero.author }],
    creator: translations[validLocale].hero.author,
    openGraph: {
      type: "website",
      locale: validLocale,
      url: `https://your-domain.com/${validLocale}`,
      title: translations[validLocale].hero.title,
      description: translations[validLocale].hero.description,
      siteName: translations[validLocale].hero.title,
    },
    twitter: {
      card: "summary_large_image",
      title: translations[validLocale].hero.title,
      description: translations[validLocale].hero.description,
      creator: translations[validLocale].hero.author,
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      languages: Object.fromEntries(locales.map((loc) => [loc, loc === defaultLocale ? "/" : `/${loc}`])),
    },
  }
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  const validLocale = validateLocale(locale)

  // Return 404 for invalid locales
  if (locale !== validLocale) {
    notFound()
  }

  // Get all posts for search functionality
  // const posts = await getAllPosts()
  const direction = getDirection(validLocale)
  const isRTL = rtlLocales.includes(validLocale)

  // Combine all font variables
  const fontVariables = [
    notoSerifSC.variable,
    inter.variable,
    notoSansArabic.variable,
    notoSansJP.variable,
    notoSansSC.variable,
  ].join(" ")

  return (
    <html lang={validLocale} dir={direction} className={fontVariables} suppressHydrationWarning>
      <body
        className={`min-h-screen antialiased transition-colors duration-300 ${isRTL ? "font-arabic" : "font-sans"}`}
      >
        <I18nProvider locale={validLocale}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
