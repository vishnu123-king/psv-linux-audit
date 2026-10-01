import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { siteConfig } from '../config/site';
import { Terminal, Shield, FileCheck2, Cpu, ExternalLink } from 'lucide-react';

interface ConsoleScreenshotsPageProps {
  onNavigate: (path: string) => void;
}

export const ConsoleScreenshotsPage: React.FC<ConsoleScreenshotsPageProps> = ({ onNavigate }) => {
  const tocItems = [
    { id: 'kali-terminal', title: '1. Kali Linux Terminal & FastAPI', level: 1 },
    { id: 'security-dashboard', title: '2. Security Operations Dashboard', level: 1 },
    { id: 'audit-profiles', title: '3. Compliance Audit Profiles', level: 1 },
    { id: 'audit-reports', title: '4. Executive Compliance Reports', level: 1 },
  ];

  return (
    <DocLayout
      currentPath="/console"
      onNavigate={onNavigate}
      title="Web Console & Kali Linux Execution Gallery"
      category="Overview"
      description="Visual showcase of PSV Linux Security Auditor running live in Kali Linux terminal and React web console."
      tocItems={tocItems}
    >
      {/* 1. Terminal */}
      <section id="kali-terminal" className="space-y-4 pt-2">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Terminal className="h-5 w-5 text-emerald-400" />
          1. Kali Linux Terminal Control Plane Startup
        </h2>
        <p className="text-sm text-slate-300">
          Starting the PSV FastAPI control plane backend and React Vite frontend from the Kali Linux workspace environment.
        </p>
        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-xl">
          <img
            src={siteConfig.terminalConsoleImage}
            alt="Kali Linux Terminal Control Plane Startup"
            className="w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* 2. Dashboard */}
      <section id="security-dashboard" className="space-y-4 pt-8 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Shield className="h-5 w-5 text-emerald-400" />
          2. Security Operations Dashboard
        </h2>
        <p className="text-sm text-slate-300">
          The central web console dashboard displaying compliance index metrics (46.2%), managed targets, critical findings breakdown, active YAML rules (60 policies), and priority triage.
        </p>
        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-xl">
          <img
            src={siteConfig.dashboardConsoleImage}
            alt="Security Operations Dashboard"
            className="w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* 3. Profiles */}
      <section id="audit-profiles" className="space-y-4 pt-8 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Cpu className="h-5 w-5 text-emerald-400" />
          3. Compliance Audit Profiles
        </h2>
        <p className="text-sm text-slate-300">
          Curated assessment profile collections mapping rules to standards such as <code className="text-emerald-400 font-mono">cis-linux-server</code>, <code className="text-emerald-400 font-mono">cis-linux-workstation</code>, <code className="text-emerald-400 font-mono">essential-eight-hardened</code>, and <code className="text-emerald-400 font-mono">minimal-audit</code>.
        </p>
        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-xl">
          <img
            src={siteConfig.profilesConsoleImage}
            alt="Compliance Audit Profiles"
            className="w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* 4. Reports */}
      <section id="audit-reports" className="space-y-4 pt-8 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <FileCheck2 className="h-5 w-5 text-emerald-400" />
          4. Executive Compliance Reports
        </h2>
        <p className="text-sm text-slate-300">
          Exporting formal security assessment summaries with executive pass/fail metrics, evidence artifacts, and HTML/JSON report formats.
        </p>
        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-xl">
          <img
            src={siteConfig.reportsConsoleImage}
            alt="Executive Compliance Reports"
            className="w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="pt-6 flex items-center gap-4">
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition"
          >
            <span>View GitHub Repository</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <button
            onClick={() => onNavigate('/quick-start')}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-5 py-2.5 text-xs font-medium text-slate-200 hover:text-white transition"
          >
            <span>Quick Start Guide</span>
          </button>
        </div>
      </section>
    </DocLayout>
  );
};
