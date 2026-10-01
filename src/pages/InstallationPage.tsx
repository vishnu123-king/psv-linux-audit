import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { CodeBlock } from '../components/CodeBlock';
import { Wrench, Terminal, CheckCircle2, Server, Database, Layers, Shield } from 'lucide-react';

interface InstallationPageProps {
  onNavigate: (path: string) => void;
}

export const InstallationPage: React.FC<InstallationPageProps> = ({ onNavigate }) => {
  const tocItems = [
    { id: 'prerequisites', title: 'System Requirements', level: 1 },
    { id: 'automated-install', title: 'Automated Installer (`install.sh`)', level: 1 },
    { id: 'installer-options', title: 'Installer Flags & Modes', level: 2 },
    { id: 'manual-install', title: 'Manual Installation Step-by-Step', level: 1 },
    { id: 'verification-scripts', title: 'Installation Verification', level: 1 },
  ];

  return (
    <DocLayout
      currentPath="/installation"
      onNavigate={onNavigate}
      title="Installation Guide"
      category="Operations"
      description="Official installation instructions for PSV Linux Security Auditor using automated production scripts or step-by-step manual deployment."
      tocItems={tocItems}
    >
      {/* Prerequisites */}
      <section id="prerequisites" className="space-y-4 pt-2">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Server className="h-5 w-5 text-emerald-400" />
          System Requirements & Prerequisites
        </h2>
        <p>Supported Linux Operating Systems: <strong>Ubuntu 22.04 LTS / 24.04 LTS</strong> or <strong>Debian 11 / 12</strong>.</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs my-4">
          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900">
            <div className="text-emerald-400 font-bold">Python</div>
            <div className="text-slate-400">3.12 or newer</div>
          </div>
          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900">
            <div className="text-emerald-400 font-bold">PostgreSQL</div>
            <div className="text-slate-400">v14+ database</div>
          </div>
          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900">
            <div className="text-emerald-400 font-bold">RabbitMQ</div>
            <div className="text-slate-400">Server & AMQP</div>
          </div>
          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900">
            <div className="text-emerald-400 font-bold">Node.js</div>
            <div className="text-slate-400">v20+ & npm</div>
          </div>
        </div>
      </section>

      {/* Automated Install */}
      <section id="automated-install" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Terminal className="h-5 w-5 text-emerald-400" />
          Automated Production Installation (`install.sh`)
        </h2>
        <p>
          The primary installer configures Python virtual environments, database migrations, systemd services, and dependencies.
        </p>

        <CodeBlock
          title="Production Installation with Systemd Services"
          code={`# Clone the repository
git clone https://github.com/psv-security/psv-linux-security-auditor
cd psv-linux-security-auditor

# Grant execution permissions
chmod +x install.sh

# Execute production installation
sudo ./install.sh --mode production --with-systemd`}
        />

        <div id="installer-options" className="space-y-3 pt-4">
          <h3 className="font-mono text-sm font-bold text-slate-200">Useful Installer Options & Flags</h3>
          <CodeBlock
            title="Installer Command Options"
            code={`# Production + Nginx reverse proxy integration
sudo ./install.sh --mode production --with-systemd --with-nginx

# Dry run (pre-flight check without making changes)
./install.sh --dry-run

# Non-interactive automated deployment
sudo ./install.sh --mode production --with-systemd --non-interactive

# Development mode installation
sudo ./install.sh --mode development`}
          />
        </div>
      </section>

      {/* Manual Install */}
      <section id="manual-install" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Wrench className="h-5 w-5 text-emerald-400" />
          Manual Installation Step-by-Step
        </h2>
        <p>
          If you prefer to configure system components manually without running <code className="text-emerald-400 font-mono">install.sh</code>:
        </p>

        <CodeBlock
          title="Manual Step-by-Step Deployment"
          code={`# 1. Create Python virtual environment
python3.12 -m venv .venv
source .venv/bin/activate

# 2. Install backend dependencies
pip install -e .

# 3. Install CLI tool
pip install -e ./cli

# 4. Configure environment variables
cp .env.example .env

# 5. Run Alembic database migrations
alembic upgrade head

# 6. Start FastAPI Control Plane backend
uvicorn backend.app.main:app --host 127.0.0.1 --port 8000

# 7. Start Assessment Worker in another terminal
python -m backend.app.workers.assessment_worker

# 8. Install and run frontend Web Console
cd frontend
npm ci
npm run dev`}
        />
      </section>

      {/* Verification */}
      <section id="verification-scripts" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-emerald-400" />
          Installation Verification
        </h2>
        <p>
          Once installed, run the built-in validation scripts to verify that prerequisites, database schemas, rule packs, and production configurations are correct:
        </p>

        <CodeBlock
          title="Running Verification Diagnostics"
          code={`# Run CLI installer diagnostic
psv doctor

# Verify core components and dependencies
python scripts/verify_installation.py

# Detect unsafe production configurations
python scripts/verify_production_config.py

# Validate all 60 YAML security rules
python scripts/validate_rules.py`}
        />
      </section>
    </DocLayout>
  );
};
