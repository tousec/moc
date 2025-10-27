
"use client";

import React, { useState, useEffect, useMemo, useRef } from 'react';

// Define a type for the ReactQuill component loaded from the CDN
type ReactQuillComponent = React.ComponentType<any>;

const CustomToolbar = () => (
    <div id="toolbar" className="p-2 rounded-t-lg bg-gray-900/30 border-b border-white/20 text-white flex flex-wrap items-center gap-2">
      <select className="ql-header bg-transparent" defaultValue="">
        <option value="1">Heading 1</option>
        <option value="2">Heading 2</option>
        <option value="3">Heading 3</option>
        <option value="4">Heading 4</option>
        <option value="5">Heading 5</option>
        <option value="6">Heading 6</option>
        <option value="">Normal</option>
      </select>
      <button className="ql-bold"></button>
      <button className="ql-italic"></button>
      <button className="ql-underline"></button>
      <button className="ql-strike"></button>
      <button className="ql-list" value="ordered"></button>
      <button className="ql-list" value="bullet"></button>
      <select className="ql-align bg-transparent"></select>
      <button className="ql-direction" value="rtl"></button>
      <button className="ql-link"></button>
      <button className="ql-image"></button>
    </div>
);

interface EditorProps {
    value: string;
    onChange: (value: string) => void;
}

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
    const [Quill, setQuill] = useState<ReactQuillComponent | null>(null);
    const quillRef = useRef<any>(null);

    useEffect(() => {
        if ((window as any).ReactQuill) {
            setQuill(() => (window as any).ReactQuill);
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/react-quill@2.0.0/dist/react-quill.js';
        script.async = true;
        script.onload = () => {
            if ((window as any).ReactQuill) {
                setQuill(() => (window as any).ReactQuill);
            } else {
                console.error("ReactQuill loaded but was not found on the window object.");
            }
        };
        document.body.appendChild(script);

        return () => {
            // Check if the script is still in the body before trying to remove it
            if (script.parentNode) {
                document.body.removeChild(script);
            }
        }
    }, []);

    const imageHandler = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            if (input.files) {
                const file = input.files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                    const base64Image = e.target?.result;
                    if (quillRef.current) {
                        const quill = quillRef.current.getEditor();
                        const range = quill.getSelection(true);
                        quill.insertEmbed(range.index, 'image', base64Image);
                    }
                };
                reader.readAsDataURL(file);
            }
        };
    };

    const modules = useMemo(() => ({
        toolbar: {
            container: '#toolbar',
            handlers: { 'image': imageHandler }
        },
    }), []);

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video', 'align', 'direction'
    ];
    
    if (!Quill) {
      return <div className="p-4 flex items-center justify-center h-full">Initializing Editor...</div>;
    }

    return (
        <>
            <CustomToolbar />
            <div className="h-full overflow-y-auto text-white quill-container">
                <Quill
                    ref={quillRef}
                    theme="snow"
                    value={value}
                    onChange={onChange}
                    modules={modules}
                    formats={formats}
                    className="h-full border-none"
                    placeholder="Start designing your page..."
                />
            </div>
        </>
    );
}

export default Editor;
