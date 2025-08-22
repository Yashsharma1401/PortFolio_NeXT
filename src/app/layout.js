// app/layout.js

import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Yash Sharma - React.js Developer',
  description: 'React.js Developer — Frontend Engineer — MERN Stack',
  openGraph: {
    title: 'Yash Sharma - React.js Developer',
    description: 'React.js Developer — Frontend Engineer — MERN Stack',
    url: 'https://',
    siteName: 'Yash Sharma Portfolio',
    images: [
      {
        url: '/14.jpg',
        width: 1200,
        height: 630,
        alt: 'Yash Sharma Portfolio Preview',
      },
    ],
    type: 'website',
  },
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
