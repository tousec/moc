
"use client";

import React, { useState, useEffect } from 'react';
import Editor from '../components/Editor';
import { Viewport } from '../types';

// HACK: Expose React to the window for the CDN-loaded ReactQuill UMD module.
// This is necessary because ReactQuill expects React to be in the global scope.
// We do this at the module level of a top-level client component to ensure it
// runs as early as possible on the client, before the editor script loads.
if (typeof window !== 'undefined' && !(window as any).React) {
    (window as any).React = React;
}

const ViewportIcon: React.FC<{ type: Viewport }> = ({ type }) => {
    if (type === Viewport.Desktop) return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>;
    if (type === Viewport.Tablet) return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>;
    if (type === Viewport.Mobile) return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>;
    return null;
}

export default function DashboardPage() {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isClient, setIsClient] = useState(false);
  const [activeViewport, setActiveViewport] = useState<Viewport>(Viewport.Desktop);
  const [isSaving, setIsSaving] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    // This ensures the Editor component only renders on the client,
    // after this component has mounted.
    setIsClient(true);
  }, []);

  useEffect(() => {
    fetch('/api/page-design')
      .then(res => res.json())
      .then(data => {
        setContent(data.content);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to load content", err);
        setIsLoading(false);
      });
  }, []);
  
  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const response = await fetch('/api/page-design', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content })
      });
      const result = await response.json();
      if(result.success) {
          showNotification('Content saved successfully!');
      } else {
          showNotification('Error saving content.');
      }
    } catch (error) {
        showNotification('Error saving content.');
    }
    setIsSaving(false);
  };

  const viewportStyles: Record<Viewport, { width: string; height: string }> = {
    [Viewport.Mobile]: { width: '375px', height: '667px' },
    [Viewport.Tablet]: { width: '768px', height: '1024px' },
    [Viewport.Desktop]: { width: '100%', height: '100%' },
  };

  if (isLoading) {
    return (
      <div className="rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg h-[calc(100vh-150px)] flex items-center justify-center">
        <div className="text-xl font-semibold">Loading Page...</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-150px)]">
      {notification && (
        <div className="absolute top-20 right-8 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          {notification}
        </div>
      )}
      {/* Editor Column */}
      <div className="flex flex-col rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg h-full">
         {isClient ? (
           <Editor value={content} onChange={setContent} />
         ) : (
           <div className="p-4 bg-gray-900/30 rounded-b-lg h-full text-white flex items-center justify-center">Loading Editor...</div>
         )}
      </div>

      {/* Preview Column */}
      <div className="flex flex-col rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg h-full">
        <div className="p-4 flex justify-between items-center border-b border-white/20">
          <div className="flex items-center gap-2">
            {(Object.values(Viewport) as Array<Viewport>).map(vp => (
              <button key={vp} onClick={() => setActiveViewport(vp)} className={`p-2 rounded-md ${activeViewport === vp ? 'bg-white/30' : 'hover:bg-white/20'}`}>
                <ViewportIcon type={vp} />
              </button>
            ))}
          </div>
          <button onClick={handleSave} disabled={isSaving} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors disabled:bg-gray-500">
            {isSaving ? 'Saving...' : 'Save'}
          </button>
        </div>
        <div className="p-4 flex-grow overflow-auto flex items-center justify-center">
            <div 
                className="bg-white text-gray-800 shadow-2xl transition-all duration-500 ease-in-out overflow-y-auto"
                style={{ ...viewportStyles[activeViewport] }}
            >
                <div 
                    className="p-4 prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: content }} 
                />
            </div>
        </div>
      </div>
    </div>
  );
};
