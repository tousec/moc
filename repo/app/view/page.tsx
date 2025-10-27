
import React from 'react';
import { DEFAULT_CONTENT } from '../../lib/constants';

async function getPageDesign() {
  // This fetch call runs on the server. In a real deployment,
  // process.env.VERCEL_URL or a similar environment variable should be used.
  const baseUrl = process.env.URL || 'http://localhost:3000';
  try {
    const res = await fetch(`${baseUrl}/api/page-design`, {
      cache: 'no-store', // Fetch fresh data on every request
    });
    if (!res.ok) {
      console.error("Failed to fetch page design, status:", res.status);
      return DEFAULT_CONTENT;
    }
    const data = await res.json();
    return data.content;
  } catch (error) {
    console.error("Error fetching page design:", error);
    return DEFAULT_CONTENT;
  }
}


export default async function PublicPage() {
  const content = await getPageDesign();

  return (
    <div className="rounded-xl bg-white/90 backdrop-blur-xl border border-white/20 shadow-lg">
      <article 
        className="prose max-w-none prose-invert p-6 sm:p-8 lg:p-12 text-gray-800 prose-headings:text-gray-900 prose-strong:text-gray-800"
        dangerouslySetInnerHTML={{ __html: content }} 
      />
    </div>
  );
};
