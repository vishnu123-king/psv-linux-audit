import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Command, Terminal, Shield, Wrench, BookOpen, ChevronRight, FileText } from 'lucide-react';
import { searchIndex, SearchItem } from '../data/searchData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults(searchIndex.slice(0, 6)); // default suggestions
      return;
    }

    const q = query.toLowerCase().trim();
    const filtered = searchIndex.filter(item => {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchKeywords = item.keywords.some(k => k.toLowerCase().includes(q));
      const matchSnippet = item.codeSnippet?.toLowerCase().includes(q);
      return matchTitle || matchDesc || matchKeywords || matchSnippet;
    });

    setResults(filtered);
  }, [query]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const getCategoryIcon = (category: SearchItem['category']) => {
    switch (category) {
      case 'CLI Command':
        return <Terminal className="h-4 w-4 text-emerald-400" />;
      case 'Security':
        return <Shield className="h-4 w-4 text-emerald-400" />;
      case 'Installation':
      case 'Troubleshooting':
        return <Wrench className="h-4 w-4 text-cyan-400" />;
      case 'Collector':
      case 'Rule Engine':
        return <FileText className="h-4 w-4 text-teal-400" />;
      default:
        return <BookOpen className="h-4 w-4 text-slate-400" />;
    }
  };

  const handleSelect = (path: string) => {
    onNavigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/80 text-slate-100 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-slate-800 px-4 py-3 bg-slate-950/60">
          <Search className="h-5 w-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search commands, collectors, rules, docs, troubleshooting..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-100 placeholder-slate-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-1 rounded bg-slate-800 px-2 py-0.5 text-[11px] font-mono text-slate-400">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-slate-800/40">
          {results.length > 0 ? (
            results.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item.path)}
                className="w-full flex items-start justify-between gap-3 p-3 rounded-lg text-left hover:bg-slate-800/70 transition group"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div className="p-2 rounded-md bg-slate-800/90 border border-slate-700/50 shrink-0 mt-0.5">
                    {getCategoryIcon(item.category)}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors">
                        {item.title}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/50">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                    {item.codeSnippet && (
                      <div className="mt-1.5 font-mono text-[11px] text-emerald-400 bg-slate-950/80 px-2 py-1 rounded border border-slate-800 inline-block">
                        {item.codeSnippet}
                      </div>
                    )}
                  </div>
                </div>

                <ChevronRight className="h-4 w-4 text-slate-600 group-hover:text-emerald-400 transition-colors shrink-0 mt-2" />
              </button>
            ))
          ) : (
            <div className="py-12 text-center text-slate-500 text-sm">
              No matching documentation or commands found for "{query}".
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="border-t border-slate-800 bg-slate-950/80 px-4 py-2.5 flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>Search PSV Documentation & CLI</span>
          <span className="flex items-center gap-1">
            <Command className="h-3 w-3" /> K to toggle
          </span>
        </div>
      </div>
    </div>
  );
};
