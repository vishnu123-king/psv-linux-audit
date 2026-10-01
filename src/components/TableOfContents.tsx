import React, { useState, useEffect } from 'react';
import { AlignLeft } from 'lucide-react';

export interface TocItem {
  id: string;
  title: string;
  level?: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let i = items.length - 1; i >= 0; i--) {
        const element = document.getElementById(items[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(items[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
      setActiveId(id);
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <nav className="sticky top-24 space-y-3 font-sans text-xs">
      <div className="flex items-center gap-2 font-mono font-semibold uppercase tracking-wider text-slate-400">
        <AlignLeft className="h-3.5 w-3.5 text-emerald-400" />
        <span>On this page</span>
      </div>

      <ul className="space-y-1.5 border-l border-slate-800 pl-3">
        {items.map((item) => {
          const isActive = activeId === item.id;
          const isNested = (item.level || 1) > 1;

          return (
            <li key={item.id} className={isNested ? 'pl-3' : ''}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`block text-left transition-colors py-0.5 leading-snug ${
                  isActive
                    ? 'text-emerald-400 font-semibold -ml-[13px] pl-3 border-l-2 border-emerald-400'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
