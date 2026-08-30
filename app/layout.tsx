import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mahir Abrar Akash — Product Designer',
  description: 'Product designer at Skribe turning complex workflows into clear, focused digital experiences.',
  openGraph: { title: 'Mahir Abrar Akash — Product Designer', description: 'Product designer at Skribe turning complex workflows into clear, focused digital experiences.', type: 'website', images: [{ url: 'https://mahir-akash-portfolio.mahirakash.chatgpt.site/og.png', width: 1731, height: 909, alt: 'Mahir Abrar Akash — Product Designer' }] },
  twitter: { card: 'summary_large_image', title: 'Mahir Abrar Akash — Product Designer', description: 'Product designer at Skribe turning complex workflows into clear, focused digital experiences.', images: ['https://mahir-akash-portfolio.mahirakash.chatgpt.site/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
