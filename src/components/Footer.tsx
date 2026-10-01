import React from 'react';
import { Shield, Github, ExternalLink, Terminal } from 'lucide-react';
import { siteConfig } from '../config/site';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 text-xs sm:text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Shield className="h-4 w-4" />
              </div>
              <span className="font-display font-bold text-base text-slate-100 tracking-tight">
                PSV Linux Security Auditor
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-md text-xs sm:text-sm">
              An open-source Linux security auditing and configuration compliance platform using deterministic YAML policies, evidence preservation, drift detection, and approval-gated remediation.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Release {siteConfig.version}
              </span>
              <span className="text-xs text-slate-500 font-mono">
                Docs {siteConfig.docVersion}
              </span>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-200">
              Platform
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => onNavigate('/features')} className="hover:text-emerald-400 transition">
                  Platform Features
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/how-it-works')} className="hover:text-emerald-400 transition">
                  Audit Lifecycle
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/architecture')} className="hover:text-emerald-400 transition">
                  System Architecture
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/security')} className="hover:text-emerald-400 transition">
                  Security Boundary
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/collectors')} className="hover:text-emerald-400 transition">
                  12 Security Collectors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/rules')} className="hover:text-emerald-400 transition">
                  YAML Policy Engine
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Operations & Reference */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-200">
              Documentation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => onNavigate('/installation')} className="hover:text-emerald-400 transition">
                  Installation Guide
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/quick-start')} className="hover:text-emerald-400 transition">
                  Quick Start Guide
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/quick-start/local-audit')} className="hover:text-emerald-400 transition">
                  Local Linux Audit
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/cli')} className="hover:text-emerald-400 transition">
                  CLI Command Reference
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/remediation')} className="hover:text-emerald-400 transition">
                  Approval Remediation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/troubleshooting')} className="hover:text-emerald-400 transition">
                  Troubleshooting FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Project & Community */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-200">
              Project
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => onNavigate('/about')} className="hover:text-emerald-400 transition">
                  About PSV
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about/project')} className="hover:text-emerald-400 transition">
                  Project Philosophy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/about/technology')} className="hover:text-emerald-400 transition">
                  Technology Stack
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/development')} className="hover:text-emerald-400 transition">
                  Development Guide
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/contributing')} className="hover:text-emerald-400 transition">
                  Contributing
                </button>
              </li>
              <li>
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="h-3 w-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>
            PSV Linux Security Auditor — Open-Source Linux Security Engineering
          </p>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('/docs')} className="hover:text-slate-300 transition">
              Documentation Index
            </button>
            <span>·</span>
            <button onClick={() => onNavigate('/security')} className="hover:text-slate-300 transition">
              Security Model
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
