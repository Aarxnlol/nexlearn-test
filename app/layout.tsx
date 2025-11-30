// app/layout.tsx
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: {
    default: 'NexLearn – Online Exam Platform',
    template: '%s | NexLearn',
  },
  description:
    'NexLearn is a modern online examination platform built with Next.js—featuring secure authentication, responsive UI, real-time evaluation, and seamless exam experience.',
  keywords: [
    'Online Exam Platform',
    'Next.js Exam System',
    'NexLearn',
    'Online Test App',
    'Exam Portal',
    'Responsive Exam UI',
    'JWT Authentication App',
    'Next.js Machine Test',
  ],
  authors: [
    { name: 'Noviindus Technologies' },
  ],
  creator: 'Noviindus Technologies',
  publisher: 'NexLearn',
  metadataBase: new URL('https://your-domain.com'), // change when live
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'NexLearn – Online Examination Platform',
    description:
      'A modern, responsive, and secure exam platform created using Next.js and Tailwind.',
    siteName: 'NexLearn',
    images: [
      {
        url: '/og-image.png', // place an image in /public
        width: 1200,
        height: 630,
        alt: 'NexLearn – Exam Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexLearn – Online Examination Platform',
    description:
      'A modern, responsive web-based exam platform built with Next.js.',
    images: ['/og-image.png'],
    creator: '@yourhandle',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
