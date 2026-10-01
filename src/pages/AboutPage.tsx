import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { Shield, Github, ExternalLink, Terminal, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/site';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const tocItems = [
    { id: 'about-overview', title: 'About PSV Linux Security Auditor', level: 1 },
    { id: 'mission', title: 'Mission & Philosophy', level: 1 },
    { id: 'open-source', title: 'Open Source Community', level: 1 },
  ];

  return (
    <DocLayout
      currentPath="/about"
      onNavigate={onNavigate}
      title="About PSV Linux Security Auditor"
      category="Project"
      description="Project overview, engineering mission, security philosophy, and open-source foundation."
      tocItems={tocItems}
    >
      <section id="about-overview" className="space-y-4 pt-2">
        <p>
          <strong>PSV Linux Security Auditor</strong> is a production-oriented cybersecurity platform designed to automate Linux security auditing and configuration compliance.
        </p>
        <p>
          It connects to authorized Linux systems over SSH, collects security-relevant facts, evaluates them against deterministic YAML rules, generates evidence-backed findings, detects drift over time, and provides approval-gated remediation.
        </p>
      </section>

      <section id="mission" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Shield className="h-5 w-5 text-emerald-400" />
          Mission & Design Philosophy
        </h2>

        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900 font-mono text-xs text-slate-200 space-y-2">
          <div>• Collect facts cleanly.</div>
          <div>• Evaluate deterministically without hallucinated scores.</div>
          <div>• Preserve forensic evidence paths.</div>
          <div>• Change configurations carefully with explicit approval.</div>
          <div>• Verify resulting state.</div>
        </div>
      </section>

      <section id="open-source" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Github className="h-5 w-5 text-emerald-400" />
          Open Source Foundation
        </h2>
        <p>
          The complete PSV platform is open source. You can inspect source code, review rules, or contribute enhancements on GitHub.
        </p>

        <div className="pt-2 flex gap-3">
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition"
          >
            <Github className="h-4 w-4" />
            <span>Open GitHub Repository</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </section>
    </DocLayout>
  );
};
