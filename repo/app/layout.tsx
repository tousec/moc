
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glass Morphism Page Designer',
  description: 'A responsive, Canva-like page design editor and viewer with a sleek glass morphism interface.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/react-quill@2.0.0/dist/quill.snow.css" rel="stylesheet" />
      </head>
      <body>
        <main className="min-h-screen w-full bg-gray-900 bg-cover bg-center text-white p-4 sm:p-6 lg:p-8" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?grayscale&blur=5')` }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 container mx-auto">
              <nav className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 mb-8 flex justify-between items-center">
                  <h1 className="text-xl font-bold text-white">Page Designer</h1>
                  <div className="flex gap-4">
                      <Link href="/" className="px-4 py-2 rounded-md text-sm font-medium hover:bg-white/20 transition-colors">Editor</Link>
                      <Link href="/view" className="px-4 py-2 rounded-md text-sm font-medium hover:bg-white/20 transition-colors">View Page</Link>
                  </div>
              </nav>
              {children}
          </div>
        </main>
      </body>
    </html>
  )
}
