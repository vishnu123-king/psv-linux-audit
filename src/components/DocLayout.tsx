import React from 'react';
import { ChevronRight, BookOpen, Shield, ArrowLeft } from 'lucide-react';
import { siteConfig } from '../config/site';
import { TableOfContents, TocItem } from './TableOfContents';

interface DocLayoutProps {
  children: React.ReactNode;
  currentPath: string;
  onNavigate: (path: string) => void;
  tocItems?: TocItem[];
  title: string;
  category?: string;
  description?: string;
}

export const DocLayout: React.FC<DocLayoutProps> = ({
  children,
  currentPath,
  onNavigate,
  tocItems = [],
  title,
  category = "Documentation",
  description,
}) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        
        {/* Breadcrumb Header Bar */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 border-b border-slate-800/80 pb-4">
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-emerald-400 transition flex items-center gap-1"
          >
            PSV Auditor
          </button>
          <ChevronRight className="h-3 w-3 text-slate-600" />
          <button
            onClick={() => onNavigate('/docs')}
            className="hover:text-emerald-400 transition"
          >
            {category}
          </button>
          <ChevronRight className="h-3 w-3 text-slate-600" />
          <span className="text-emerald-400 font-semibold">{title}</span>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Sidebar Navigation */}
          <aside className="lg:col-span-3 space-y-6 hidden lg:block">
            <div className="sticky top-24 space-y-6 max-h-[80vh] overflow-y-auto pr-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-800">
                <BookOpen className="h-3.5 w-3.5 text-emerald-400" />
                <span>Documentation Tree</span>
              </div>

              {siteConfig.docsNav.map((group, gIdx) => (
                <div key={gIdx} className="space-y-2">
                  <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2">
                    {group.title}
                  </h4>
                  <ul className="space-y-0.5 border-l border-slate-800/80 ml-2">
                    {group.items.map((item) => {
                      const isActive = currentPath === item.path || (item.path.includes('#') && currentPath === item.path.split('#')[0]);
                      return (
                        <li key={item.path}>
                          <button
                            onClick={() => onNavigate(item.path)}
                            className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition font-sans ${
                              isActive
                                ? 'bg-emerald-500/10 text-emerald-400 font-semibold border-l-2 border-emerald-400 -ml-px'
                                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                            }`}
                          >
                            {item.title}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </aside>

          {/* Main Documentation Article Content */}
          <main className="lg:col-span-6 space-y-6">
            <article className="prose prose-invert max-w-none">
              
              {/* Title & Description Block */}
              <div className="space-y-2 border-b border-slate-800/80 pb-6 mb-6">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 inline-block">
                  {category}
                </span>
                <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                  {title}
                </h1>
                {description && (
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
                    {description}
                  </p>
                )}
              </div>

              {/* Main Children Page Body */}
              <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
                {children}
              </div>
            </article>
          </main>

          {/* Right Sticky Table of Contents */}
          <aside className="lg:col-span-3 hidden lg:block">
            {tocItems && tocItems.length > 0 && <TableOfContents items={tocItems} />}
          </aside>

        </div>
      </div>
    </div>
  );
};
