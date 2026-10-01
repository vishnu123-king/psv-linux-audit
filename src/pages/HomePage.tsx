import React from 'react';
import {
  Shield,
  Terminal,
  ArrowRight,
  CheckCircle2,
  Lock,
  GitCompare,
  Sliders,
  Cpu,
  Layers,
  FileCheck2,
  AlertTriangle,
  Github,
  ExternalLink,
  ChevronRight,
  FileCode2,
  Wrench,
  Server,
  Activity,
} from 'lucide-react';
import { siteConfig } from '../config/site';
import { CodeBlock } from '../components/CodeBlock';
import { ProductArchitectureDiagram } from '../components/Diagrams';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 lg:pt-20 pb-12 border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono text-emerald-400">
                <Shield className="h-3.5 w-3.5 text-emerald-400" />
                <span>Open Source Linux Security & Compliance Platform</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-[1.15]">
                Automated Linux Security Auditing <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  & Configuration Compliance
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
                Collect real Linux security state. Evaluate it using deterministic policies. Generate evidence-backed findings. Track configuration drift. Remediate with explicit approval. Verify the result.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('/quick-start')}
                  className="flex items-center gap-2.5 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/20"
                >
                  <Terminal className="h-4 w-4" />
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-200 hover:border-slate-700 hover:text-white transition"
                >
                  <Github className="h-4 w-4" />
                  <span>View on GitHub</span>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-500" />
                </a>

                <button
                  onClick={() => onNavigate('/quick-start/local-audit')}
                  className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-emerald-400 transition px-2 py-1"
                >
                  <span>Audit your local Linux host →</span>
                </button>
              </div>

              {/* Verified Features Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80 text-xs font-mono text-slate-400">
                <div>
                  <span className="text-emerald-400 font-bold block text-base">12</span>
                  <span>Modular Collectors</span>
                </div>
                <div>
                  <span className="text-emerald-400 font-bold block text-base">60</span>
                  <span>YAML Rules</span>
                </div>
                <div>
                  <span className="text-emerald-400 font-bold block text-base">Fail-Closed</span>
                  <span>UNKNOWN State</span>
                </div>
                <div>
                  <span className="text-emerald-400 font-bold block text-base">Gated</span>
                  <span>Remediation Plans</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Banner Image & Quick Terminal */}
            <div className="lg:col-span-5 space-y-4">
              <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-2xl relative group">
                <img
                  src={siteConfig.heroImage}
                  alt="PSV Linux Security Auditor Banner"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-slate-300 bg-slate-950/80 px-3 py-1.5 rounded border border-slate-800 backdrop-blur-sm">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    PSV CLI Ready
                  </span>
                  <span>psv audit run --profile server</span>
                </div>
              </div>

              {/* Quick CLI Snippet */}
              <CodeBlock
                title="Quick Assessment Execution"
                code={`# Install PSV in production mode
sudo ./install.sh --mode production --with-systemd

# Register local host & run assessment
psv host add-local
psv audit run local-linux --profile server
psv finding list`}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Architecture Visual */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ProductArchitectureDiagram />
      </section>

      {/* Core Design & Differentiation Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            Core Design Principles
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-100">
            What Makes PSV Linux Security Auditor Different
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Engineered for security teams, system administrators, and DevSecOps practitioners who require reproducible, evidence-backed security assessments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Modular Collectors */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-3 hover:border-slate-700 transition">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-100">
              12 Modular Linux Collectors
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Audits System, Identity, SSH, Sudo, Filesystem, Networking, Firewall, Services, Kernel, PAM, Logging, and Containers via safe, predefined commands.
            </p>
            <button
              onClick={() => onNavigate('/collectors')}
              className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1 pt-1"
            >
              <span>Explore 12 Collectors</span>
              <ChevronRight className="h-3 w-3" />
            </button>
          </div>

          {/* Card 2: Deterministic YAML Rules */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-3 hover:border-slate-700 transition">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <FileCode2 className="h-5 w-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-100">
              60 Deterministic YAML Rules
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Policy evaluation uses explicit mathematical and comparison operators (`equals`, `regex`, `contains`, `in`, `AND`, `OR`, `NOT`) — zero AI hallucinations or ambiguous outputs.
            </p>
            <button
              onClick={() => onNavigate('/rules')}
              className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1 pt-1"
            >
              <span>View Rule Pack Spec</span>
              <ChevronRight className="h-3 w-3" />
            </button>
          </div>

          {/* Card 3: Fail-Closed UNKNOWN State */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-3 hover:border-slate-700 transition">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-100">
              Fail-Closed Security Model
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              If a collector command fails or evidence is unavailable, rule evaluation explicitly outputs <code className="text-amber-300 font-mono">UNKNOWN</code> instead of incorrectly reporting <code className="text-emerald-400 font-mono">PASS</code>.
            </p>
            <button
              onClick={() => onNavigate('/security')}
              className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1 pt-1"
            >
              <span>Read Fail-Closed Model</span>
              <ChevronRight className="h-3 w-3" />
            </button>
          </div>

          {/* Card 4: Configuration Drift */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-3 hover:border-slate-700 transition">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <GitCompare className="h-5 w-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-100">
              Configuration Drift Tracking
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Compares historical assessment snapshots over time to highlight new open ports, added users, SSH parameter alterations, and modified firewall rules.
            </p>
            <button
              onClick={() => onNavigate('/drift')}
              className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1 pt-1"
            >
              <span>Learn Drift Comparison</span>
              <ChevronRight className="h-3 w-3" />
            </button>
          </div>

          {/* Card 5: Approval-Gated Remediation */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-3 hover:border-slate-700 transition">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Sliders className="h-5 w-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-100">
              Approval-Gated Remediation
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Requires dry-run plan generation, explicit administrator authorization, automated backup, validation, apply, and re-verification before changing critical configs.
            </p>
            <button
              onClick={() => onNavigate('/remediation')}
              className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1 pt-1"
            >
              <span>View Remediation Flow</span>
              <ChevronRight className="h-3 w-3" />
            </button>
          </div>

          {/* Card 6: CLI + Web Console */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-3 hover:border-slate-700 transition">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Terminal className="h-5 w-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-100">
              Unified CLI & Web Console
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Both interfaces communicate through the same FastAPI control plane backend. Supports JSON formatted output for automated CI/CD security gating.
            </p>
            <button
              onClick={() => onNavigate('/cli')}
              className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1 pt-1"
            >
              <span>CLI Command Reference</span>
              <ChevronRight className="h-3 w-3" />
            </button>
          </div>

        </div>
      </section>

      {/* Local Audit CTA Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-950 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              Ready to Audit Your Machine?
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-100">
              Run a Security Assessment Against Your Local Linux Host in Minutes
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Follow our step-by-step onboarding guide to register your system, verify SSH connectivity, execute a security profile, and inspect evidence-backed findings.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('/quick-start/local-audit')}
                className="flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition"
              >
                <span>Local Audit Guide</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => onNavigate('/installation')}
                className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-medium text-slate-200 hover:text-white transition"
              >
                <span>Full Installation Guide</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
