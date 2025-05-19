import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import "./globals.scss";
import { Noto_Sans_Georgian } from 'next/font/google';

const notoSansGeorgian = Noto_Sans_Georgian({
  subsets: ['georgian'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={notoSansGeorgian.className}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
