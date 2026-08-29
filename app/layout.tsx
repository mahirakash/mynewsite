import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mahir Akash — Designer & Developer',
  description: 'Independent designer and developer crafting thoughtful, distinctive digital experiences.',
  openGraph: { title: 'Mahir Akash — Designer & Developer', description: 'Independent designer and developer crafting thoughtful, distinctive digital experiences.', type: 'website', images: [{ url: '/og.png', width: 1731, height: 909, alt: 'Mahir Akash — Designer & Developer' }] },
  twitter: { card: 'summary_large_image', title: 'Mahir Akash — Designer & Developer', description: 'Independent designer and developer crafting thoughtful, distinctive digital experiences.', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
