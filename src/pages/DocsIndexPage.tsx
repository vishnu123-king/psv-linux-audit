import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { siteConfig } from '../config/site';
import { BookOpen, Terminal, Wrench, Shield, Cpu, FileCode2, Sliders, GitCompare, ArrowRight, Search } from 'lucide-react';

interface DocsIndexPageProps {
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export const DocsIndexPage: React.FC<DocsIndexPageProps> = ({ onNavigate, onOpenSearch }) => {
  const tocItems = [
    { id: 'docs-portal', title: 'Documentation Index', level: 1 },
    { id: 'getting-started-section', title: 'Getting Started', level: 1 },
    { id: 'core-concepts-section', title: 'Core Concepts', level: 1 },
    { id: 'operations-section', title: 'Operations & Reference', level: 1 },
    { id: 'developer-section', title: 'Developer & Community', level: 1 },
  ];

  return (
    <DocLayout
      currentPath="/docs"
      onNavigate={onNavigate}
      title="PSV Documentation Portal"
      category="Documentation"
      description="Official technical documentation, CLI command reference, architecture specifications, and onboarding guides for PSV Linux Security Auditor."
      tocItems={tocItems}
    >
      <section id="docs-portal" className="space-y-4 pt-2">
        {/* Search trigger banner */}
        <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2">
              <Search className="h-5 w-5 text-emerald-400" />
              Need quick command or topic lookup?
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-emerald-400 font-mono">Cmd+K</kbd> or click Search to instantly search all 60 rules, 12 collectors, CLI commands, and troubleshooting guides.
            </p>
          </div>
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition shrink-0"
          >
            <span>Search Documentation</span>
          </button>
        </div>
      </section>

      {/* Category Groups */}
      <section id="getting-started-section" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-emerald-400" />
          1. Getting Started
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate('/quick-start')}
            className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 hover:border-emerald-500/50 text-left transition group space-y-1"
          >
            <div className="font-mono text-sm font-bold text-slate-100 group-hover:text-emerald-400 flex items-center justify-between">
              <span>Quick Start Guide</span>
              <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-emerald-400" />
            </div>
            <p className="text-xs text-slate-400">Get PSV installed and execute your first audit in under 5 minutes.</p>
          </button>

          <button
            onClick={() => onNavigate('/quick-start/local-audit')}
            className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 hover:border-emerald-500/50 text-left transition group space-y-1"
          >
            <div className="font-mono text-sm font-bold text-slate-100 group-hover:text-emerald-400 flex items-center justify-between">
              <span>Real Local Linux Audit Guide</span>
              <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-emerald-400" />
            </div>
            <p className="text-xs text-slate-400">Step-by-step instructions for auditing your local Linux machine.</p>
          </button>

          <button
            onClick={() => onNavigate('/problems')}
            className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 hover:border-emerald-500/50 text-left transition group space-y-1"
          >
            <div className="font-mono text-sm font-bold text-slate-100 group-hover:text-emerald-400 flex items-center justify-between">
              <span>Problem Statement & PSV Solution</span>
              <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-emerald-400" />
            </div>
            <p className="text-xs text-slate-400">Why manual security auditing fails and how PSV automates compliance.</p>
          </button>
        </div>
      </section>

      <section id="core-concepts-section" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Cpu className="h-5 w-5 text-emerald-400" />
          2. Core Concepts & Engine
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate('/collectors')}
            className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 hover:border-emerald-500/50 text-left transition group space-y-1"
          >
            <div className="font-mono text-sm font-bold text-slate-100 group-hover:text-emerald-400 flex items-center justify-between">
              <span>12 Linux Collectors</span>
              <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-emerald-400" />
            </div>
            <p className="text-xs text-slate-400">Detailed breakdown of fact collection across SSH, Sudo, Kernel, PAM, containers.</p>
          </button>

          <button
            onClick={() => onNavigate('/rules')}
            className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 hover:border-emerald-500/50 text-left transition group space-y-1"
          >
            <div className="font-mono text-sm font-bold text-slate-100 group-hover:text-emerald-400 flex items-center justify-between">
              <span>60 Deterministic YAML Rules</span>
              <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-emerald-400" />
            </div>
            <p className="text-xs text-slate-400">Schema specification and supported operators for deterministic policies.</p>
          </button>

          <button
            onClick={() => onNavigate('/drift')}
            className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 hover:border-emerald-500/50 text-left transition group space-y-1"
          >
            <div className="font-mono text-sm font-bold text-slate-100 group-hover:text-emerald-400 flex items-center justify-between">
              <span>Configuration Drift Detection</span>
              <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-emerald-400" />
            </div>
            <p className="text-xs text-slate-400">Comparing historical assessment snapshots over time.</p>
          </button>

          <button
            onClick={() => onNavigate('/remediation')}
            className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 hover:border-emerald-500/50 text-left transition group space-y-1"
          >
            <div className="font-mono text-sm font-bold text-slate-100 group-hover:text-emerald-400 flex items-center justify-between">
              <span>Approval-Gated Remediation</span>
              <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-emerald-400" />
            </div>
            <p className="text-xs text-slate-400">6-stage gated dry-run planning, backup, execution, and verification.</p>
          </button>
        </div>
      </section>

      <section id="operations-section" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Terminal className="h-5 w-5 text-emerald-400" />
          3. Operations & Reference
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate('/cli')}
            className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 hover:border-emerald-500/50 text-left transition group space-y-1"
          >
            <div className="font-mono text-sm font-bold text-slate-100 group-hover:text-emerald-400 flex items-center justify-between">
              <span>CLI Command Reference</span>
              <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-emerald-400" />
            </div>
            <p className="text-xs text-slate-400">Full reference for `psv` commands, options, and `--format json` flag.</p>
          </button>

          <button
            onClick={() => onNavigate('/installation')}
            className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 hover:border-emerald-500/50 text-left transition group space-y-1"
          >
            <div className="font-mono text-sm font-bold text-slate-100 group-hover:text-emerald-400 flex items-center justify-between">
              <span>Installation & Setup Guide</span>
              <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-emerald-400" />
            </div>
            <p className="text-xs text-slate-400">Automated `install.sh` flags and manual step-by-step deployment.</p>
          </button>

          <button
            onClick={() => onNavigate('/troubleshooting')}
            className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 hover:border-emerald-500/50 text-left transition group space-y-1"
          >
            <div className="font-mono text-sm font-bold text-slate-100 group-hover:text-emerald-400 flex items-center justify-between">
              <span>Troubleshooting & FAQ</span>
              <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-emerald-400" />
            </div>
            <p className="text-xs text-slate-400">Diagnosing systemd, PostgreSQL, RabbitMQ, and SSH target issues.</p>
          </button>
        </div>
      </section>

      <section id="developer-section" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Wrench className="h-5 w-5 text-emerald-400" />
          4. Developer & Community
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate('/development')}
            className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 hover:border-emerald-500/50 text-left transition group space-y-1"
          >
            <div className="font-mono text-sm font-bold text-slate-100 group-hover:text-emerald-400 flex items-center justify-between">
              <span>Development Guide</span>
              <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-emerald-400" />
            </div>
            <p className="text-xs text-slate-400">Codebase layout, collector development, and rule pack extension.</p>
          </button>

          <button
            onClick={() => onNavigate('/testing')}
            className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 hover:border-emerald-500/50 text-left transition group space-y-1"
          >
            <div className="font-mono text-sm font-bold text-slate-100 group-hover:text-emerald-400 flex items-center justify-between">
              <span>Testing & Security Verification</span>
              <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-emerald-400" />
            </div>
            <p className="text-xs text-slate-400">Running pytest suites, fail-closed validation, and SSRF tests.</p>
          </button>
        </div>
      </section>
    </DocLayout>
  );
};
