"use client"

import React, { JSX, useState } from 'react';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface ReactIconProps {
  size?: number;
}
const ReactIcon: React.FC<ReactIconProps> = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <path
      d="M2 12C2 7.58172 6.47715 4 12 4C17.5228 4 22 7.58172 22 12C22 16.4183 17.5228 20 12 20C6.47715 20 2 16.4183 2 12Z"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>
);

interface MenuItem {
  id: number | string;
  slNo?: number;
  name: string;
  link?: string;
  icon?: React.ReactNode;
  subMenu?: MenuItem[];
}

const initialData: MenuItem[] = [
  { id: 100, slNo: 1, name: 'About', link: '/about', icon: <ReactIcon /> },
  { id: 101, slNo: 2, name: 'Contact', link: '/contact', icon: <ReactIcon /> },
  {
    id: 102,
    slNo: 3,
    name: 'Service',
    link: '/',
    icon: <ReactIcon />,
    subMenu: [
      { id: 201, slNo: 1, name: 'Spoken', link: '/service/spoken', icon: <ReactIcon /> },
      { id: 202, slNo: 2, name: 'PTE', link: '/service/pte', icon: <ReactIcon /> },
      {
        id: 203,
        slNo: 3,
        name: 'IELTS',
        link: '/service/ielts',
        icon: <ReactIcon />,
        subMenu: [
          { id: 301, slNo: 1, name: 'Reading', link: '/service/ielts/reading', icon: <ReactIcon /> },
          { id: 302, slNo: 2, name: 'Writing', link: '/service/ielts/writing', icon: <ReactIcon /> },
          { id: 303, slNo: 3, name: 'Listening', link: '/service/ielts/listening', icon: <ReactIcon /> },
          { id: 304, slNo: 4, name: 'Speaking', link: '/service/ielts/speaking', icon: <ReactIcon /> },
        ],
      },
    ],
  },
  { id: 103, slNo: 4, name: 'Course', link: '/course', icon: <ReactIcon /> },
];

const uid = (): string => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

interface SortableItemProps {
  item: MenuItem;
  depth: number;
  onEdit: (id: number | string, newName: string) => void;
  onAdd: (id: number | string) => void;
  onDelete: (id: number | string) => void;
}

const SortableItem: React.FC<SortableItemProps> = ({ item, depth, onEdit, onAdd, onDelete }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: String(item.id) });
  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="mb-3">
      <div
        className={`flex items-center justify-between p-3 rounded-2xl glass shadow-sm hover:scale-[1.01] transition-transform duration-150`}
        style={{ paddingLeft: depth * 12 + 12 }}
      >
        <div className="flex items-center gap-3">
          <span {...listeners} {...attributes} className="cursor-grab p-1 rounded-md">
            ☰
          </span>
          <span className="w-6 h-6 flex items-center justify-center text-sm">{item.icon}</span>
          <input
            value={item.name}
            onChange={(e) => onEdit(item.id, e.target.value)}
            className="bg-transparent outline-none text-sm md:text-base w-36 md:w-64"
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onAdd(item.id)}
            className="text-xs px-2 py-1 rounded-md border border-white/20 hover:bg-white/5"
            title="Add submenu"
          >
            +Sub
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className="text-xs px-2 py-1 rounded-md border border-red-300/30 hover:bg-red-400/10"
            title="Delete"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

interface MenuEditorProps {
  data?: MenuItem[];
}

const MenuEditor: React.FC<MenuEditorProps> = ({ data = initialData }) => {
  const [menu, setMenu] = useState<MenuItem[]>(data);
  const [activeId, setActiveId] = useState<string | null>(null);
  const sensors = useSensors(useSensor(PointerSensor));

  const topIds = menu.map((m) => String(m.id));

    const handleDragEnd = (event: { active: { id: string }; over: { id: string } | null }): void => {
    const { active, over } = event  
    if (!over) return;
    if (active.id !== over.id) {
      const oldIndex = topIds.indexOf(String(active.id));
      const newIndex = topIds.indexOf(String(over.id));
      if (oldIndex !== -1 && newIndex !== -1) {
        setMenu((prev) => arrayMove(prev, oldIndex, newIndex));
      }
    }
    setActiveId(null);
  };

  const editName = (id: number | string, newName: string): void => {
    const recurse = (list: MenuItem[]): MenuItem[] =>
      list.map((it) => {
        if (it.id === id) return { ...it, name: newName };
        if (it.subMenu) return { ...it, subMenu: recurse(it.subMenu) };
        return it;
      });
    setMenu((m) => recurse(m));
  };

  const deleteItem = (id: number | string): void => {
    const recurse = (list: MenuItem[]): MenuItem[] =>
      list
        .filter((it) => it.id !== id)
        .map((it) => (it.subMenu ? { ...it, subMenu: recurse(it.subMenu) } : it));
    setMenu((m) => recurse(m));
  };

  const addSubMenu = (parentId: number | string): void => {
    const newItem: MenuItem = { id: uid(), name: 'New Item', link: '/', icon: <ReactIcon /> };
    const recurse = (list: MenuItem[]): MenuItem[] =>
      list.map((it) => {
        if (it.id === parentId) {
          const nextSub = it.subMenu ? [...it.subMenu, newItem] : [newItem];
          return { ...it, subMenu: nextSub };
        }
        if (it.subMenu) return { ...it, subMenu: recurse(it.subMenu) };
        return it;
      });
    setMenu((m) => recurse(m));
  };

  const addTopMenu = (): void => {
    const newItem: MenuItem = { id: uid(), name: 'New Menu', link: '/', icon: <ReactIcon /> };
    setMenu((m) => [...m, newItem]);
  };

  const renderList = (items: MenuItem[], depth = 0): JSX.Element => (
    <div className="space-y-1">
      {items.map((it) => (
        <div key={String(it.id)}>
          <SortableItem item={it} depth={depth} onEdit={editName} onAdd={addSubMenu} onDelete={deleteItem} />
          {it.subMenu && it.subMenu.length > 0 && (
            <div className="ml-4 md:ml-6 border-l border-white/5 pl-3">{renderList(it.subMenu, depth + 1)}</div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg md:text-2xl font-semibold">Menu Editor</h2>
        <div className="flex gap-2">
          <button onClick={addTopMenu} className="px-3 py-2 rounded-lg border border-white/20 hover:bg-white/5">
            + Add Top Menu
          </button>
        </div>
      </div>

      <div className="glass-panel p-4 rounded-3xl">
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd} onDragStart={(e) => setActiveId(String(e.active.id))}>
          <SortableContext items={topIds} strategy={verticalListSortingStrategy}>
            {renderList(menu)}
          </SortableContext>
          <DragOverlay>{activeId ? <div className="p-3 rounded-2xl glass w-64">Dragging...</div> : null}</DragOverlay>
        </DndContext>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-medium mb-2">Preview (mobile/tablet/desktop)</h3>
        <div className="border rounded-2xl p-3">
          <nav className="flex flex-col md:flex-row gap-2 md:gap-6">
            {menu.map((m) => (
              <div key={String(m.id)} className="group relative">
                <a href={m.link} className="px-3 py-2 rounded-md block glass-nav hover:scale-105 transition-transform">
                  <span className="inline-flex items-center gap-2">
                    <span className="w-4 h-4">{m.icon}</span>
                    <span className="text-sm md:text-base">{m.name}</span>
                  </span>
                </a>
                {m.subMenu && (
                  <div className="absolute left-0 mt-2 hidden group-hover:block z-20">
                    <div className="p-2 rounded-lg shadow-lg bg-white/5">
                      {m.subMenu.map((s) => (
                        <a key={String(s.id)} href={s.link} className="block px-3 py-2 rounded-md hover:bg-white/5">
                          {s.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      <style jsx>{`
        .glass {
          background: linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
          backdrop-filter: blur(8px) saturate(120%);
          -webkit-backdrop-filter: blur(8px) saturate(120%);
          border: 1px solid rgba(255,255,255,0.06);
        }
        .glass-panel { @apply glass; }
        .glass-nav {
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          border: 1px solid rgba(255,255,255,0.04);
        }
      `}</style>
    </div>
  );
};

export default MenuEditor;


