import React, { useState, useEffect } from 'react';
import { Shield, Search, Github, Menu, X, Terminal, Command, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/site';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global Cmd+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onOpenSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenSearch]);

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-slate-800/80 shadow-lg shadow-black/30'
          : 'bg-slate-950 border-slate-800/50'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        
        {/* Zone 1: Brand title (single text element wordmark) */}
        <button
          onClick={() => handleNav('/')}
          className="flex items-center gap-2.5 text-left focus:outline-none group"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <span className="font-display font-bold text-base sm:text-lg text-slate-100 tracking-tight block">
              PSV Linux Security Auditor
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          {siteConfig.nav.map((item) => {
            const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));
            return (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                className={`transition-colors py-1 relative hover:text-white ${
                  isActive ? 'text-emerald-400 font-semibold' : 'text-slate-300'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2.5">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-400 hover:border-slate-700 hover:text-slate-200 transition focus:outline-none"
            title="Search documentation (Cmd+K)"
          >
            <Search className="h-3.5 w-3.5 text-slate-400" />
            <span className="hidden sm:inline">Search...</span>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded bg-slate-800 px-1.5 py-0.5 text-[10px] font-mono text-slate-400 border border-slate-700/50">
              <Command className="h-2.5 w-2.5" />K
            </kbd>
          </button>

          {/* GitHub Link */}
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-slate-700 hover:text-white transition"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>

          {/* Get Started CTA */}
          <button
            onClick={() => handleNav('/quick-start')}
            className="hidden xs:flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-1.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition whitespace-nowrap shadow-sm shadow-emerald-500/20"
          >
            <Terminal className="h-3.5 w-3.5" />
            <span>Get Started</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex lg:hidden p-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Collapsible Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950 px-4 py-4 space-y-2 animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-1">
            {siteConfig.nav.map((item) => {
              const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));
              return (
                <button
                  key={item.path}
                  onClick={() => handleNav(item.path)}
                  className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition ${
                    isActive
                      ? 'bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => handleNav('/quick-start')}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition"
            >
              <Terminal className="h-4 w-4" />
              <span>Get Started</span>
            </button>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition"
            >
              <Github className="h-4 w-4" />
              <span>View Repository on GitHub</span>
              <ExternalLink className="h-3.5 w-3.5 text-slate-500" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
