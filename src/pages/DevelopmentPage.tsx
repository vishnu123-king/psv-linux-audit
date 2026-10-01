import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { CodeBlock } from '../components/CodeBlock';
import { FileCode2, Cpu, Wrench, Shield } from 'lucide-react';

interface DevelopmentPageProps {
  onNavigate: (path: string) => void;
}

export const DevelopmentPage: React.FC<DevelopmentPageProps> = ({ onNavigate }) => {
  const tocItems = [
    { id: 'repo-structure', title: 'Repository Directory Structure', level: 1 },
    { id: 'collector-dev', title: 'Collector Development Guide', level: 1 },
    { id: 'rule-dev', title: 'YAML Rule Development Guide', level: 1 },
  ];

  return (
    <DocLayout
      currentPath="/development"
      onNavigate={onNavigate}
      title="Developer Guide & Architecture Extension"
      category="Development"
      description="Learn how to navigate the PSV codebase, write custom Linux collectors, and contribute new YAML security policy rules."
      tocItems={tocItems}
    >
      <section id="repo-structure" className="space-y-4 pt-2">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <FileCode2 className="h-5 w-5 text-emerald-400" />
          Repository Directory Tree
        </h2>

        <CodeBlock
          title="PSV Project Layout"
          code={`psv-linux-security-auditor/
├── backend/               # FastAPI control plane, database models, workers
│   ├── app/
│   │   ├── api/           # REST & WebSocket route handlers
│   │   ├── core/          # Security, auth, redaction, SSRF validation
│   │   ├── models/        # SQLAlchemy ORM database models
│   │   ├── collectors/    # 12 modular Linux security collectors
│   │   ├── rules/         # Rule engine evaluator & YAML loader
│   │   └── workers/       # RabbitMQ assessment worker process
├── cli/                   # Python Typer CLI application ('psv')
├── frontend/              # React + Vite + Tailwind CSS Web Console
├── rules/                 # 60 YAML security rules across 11 domains
├── scripts/               # Validation, verification & installation scripts
│   ├── validate_rules.py
│   ├── verify_installation.py
│   └── verify_production_config.py
├── tests/                 # Pytest test suite (security, fail-closed, SSRF)
├── install.sh             # Production/dev installer script
└── update.sh              # Update & migration script`}
        />
      </section>

      {/* Collector Dev */}
      <section id="collector-dev" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Cpu className="h-5 w-5 text-emerald-400" />
          Adding a Custom Linux Collector
        </h2>
        <p>
          Collectors inherit from the base collector class and register read commands in the predefined command registry.
        </p>

        <CodeBlock
          language="python"
          title="Example Custom Collector Interface"
          code={`from backend.app.collectors.base import BaseCollector

class CustomSecurityCollector(BaseCollector):
    name = "custom_collector"
    
    async font_collect(self, ssh_session) -> dict:
        # Predefined safe command execution
        raw_output = await ssh_session.run_command("cat /etc/custom_config.conf")
        
        # Parse into normalized observation
        return {
            "control": "custom.setting_enabled",
            "value": "enabled" in raw_output,
            "source": "/etc/custom_config.conf"
        }`}
        />
      </section>

      {/* Rule Dev */}
      <section id="rule-dev" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Wrench className="h-5 w-5 text-emerald-400" />
          Adding a New YAML Rule
        </h2>

        <CodeBlock
          language="yaml"
          title="Adding Rule Definition"
          code={`id: EXAMPLE-001
name: Example Security Control Check
version: 1.0.0
category: example
severity: medium

control: example.control

condition:
  operator: equals
  actual:
    observation: example.control
  expected: true`}
        />

        <CodeBlock
          title="Validating New Rule Pack"
          code={`python scripts/validate_rules.py`}
        />
      </section>
    </DocLayout>
  );
};
