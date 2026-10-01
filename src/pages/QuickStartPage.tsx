import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { CodeBlock } from '../components/CodeBlock';
import { Terminal, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

interface QuickStartPageProps {
  onNavigate: (path: string) => void;
}

export const QuickStartPage: React.FC<QuickStartPageProps> = ({ onNavigate }) => {
  const tocItems = [
    { id: 'qs-steps', title: 'Quick Start Sequence', level: 1 },
    { id: 'step-1-install', title: '1. Install PSV', level: 2 },
    { id: 'step-2-verify', title: '2. Verify Installation', level: 2 },
    { id: 'step-3-register', title: '3. Register Local Host', level: 2 },
    { id: 'step-4-audit', title: '4. Run First Audit', level: 2 },
    { id: 'step-5-findings', title: '5. Inspect Findings', level: 2 },
  ];

  return (
    <DocLayout
      currentPath="/quick-start"
      onNavigate={onNavigate}
      title="Quick Start Guide"
      category="Getting Started"
      description="Get PSV Linux Security Auditor running and perform your first security assessment in under 5 minutes."
      tocItems={tocItems}
    >
      <section id="qs-steps" className="space-y-4 pt-2">
        <p>
          This guide assumes you are installing PSV on a supported Linux host (Ubuntu 22.04/24.04 or Debian 11/12).
        </p>

        <CodeBlock
          title="Complete Installation to First Audit Sequence"
          code={`# 1. Clone repository
git clone https://github.com/psv-security/psv-linux-security-auditor
cd psv-linux-security-auditor

# 2. Execute automated production setup
sudo ./install.sh --mode production --with-systemd

# 3. Verify environment diagnostics
psv doctor
psv server status

# 4. Auto-discover and register local Linux machine
psv host add-local

# 5. Test SSH connectivity
psv host test local-linux

# 6. Run assessment against local target using 'server' profile
psv audit run local-linux --profile server

# 7. Check assessment progress
psv audit list

# 8. Inspect generated findings
psv finding list`}
        />
      </section>

      <section id="step-1-install" className="space-y-3 pt-6 border-t border-slate-800">
        <h3 className="font-mono text-sm font-bold text-emerald-400">1. Install PSV</h3>
        <p>Running <code className="text-emerald-400 font-mono">./install.sh</code> sets up the Python virtual environment, installs backend dependencies, initializes PostgreSQL database schemas, and configures systemd background services.</p>
      </section>

      <section id="step-2-verify" className="space-y-3 pt-6 border-t border-slate-800">
        <h3 className="font-mono text-sm font-bold text-emerald-400">2. Verify Installation</h3>
        <p><code className="text-emerald-400 font-mono">psv doctor</code> performs a quick health audit across API, PostgreSQL, RabbitMQ, and active worker processes.</p>
      </section>

      <section id="step-3-register" className="space-y-3 pt-6 border-t border-slate-800">
        <h3 className="font-mono text-sm font-bold text-emerald-400">3. Register Local Host</h3>
        <p><code className="text-emerald-400 font-mono">psv host add-local</code> auto-detects local host IP, SSH port, and system hostname for authorized local auditing.</p>
      </section>

      <section id="step-4-audit" className="space-y-3 pt-6 border-t border-slate-800">
        <h3 className="font-mono text-sm font-bold text-emerald-400">4. Run First Security Audit</h3>
        <p><code className="text-emerald-400 font-mono">psv audit run local-linux --profile server</code> triggers an asynchronous assessment job. The worker collects facts via AsyncSSH and evaluates against the 60 YAML security rules.</p>
      </section>

      <section id="step-5-findings" className="space-y-3 pt-6 border-t border-slate-800">
        <h3 className="font-mono text-sm font-bold text-emerald-400">5. Inspect Findings & Evidence</h3>
        <p><code className="text-emerald-400 font-mono">psv finding list</code> displays findings sorted by severity. Use <code className="text-emerald-400 font-mono">psv finding show FINDING_ID</code> to examine specific evidence paths and expected baseline values.</p>

        <div className="pt-4">
          <button
            onClick={() => onNavigate('/quick-start/local-audit')}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition"
          >
            <span>Read Detailed Local Linux Audit Workflow</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </section>
    </DocLayout>
  );
};
