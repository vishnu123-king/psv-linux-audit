import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { CodeBlock } from '../components/CodeBlock';
import { Wrench, AlertTriangle, Terminal, CheckCircle2, Server, Database, Layers } from 'lucide-react';

interface TroubleshootingPageProps {
  onNavigate: (path: string) => void;
}

export const TroubleshootingPage: React.FC<TroubleshootingPageProps> = ({ onNavigate }) => {
  const tocItems = [
    { id: 'tb-diagnostics', title: 'Diagnostic Verification Commands', level: 1 },
    { id: 'tb-api-worker', title: 'API & Worker Troubleshooting', level: 1 },
    { id: 'tb-postgres', title: 'PostgreSQL Issues', level: 1 },
    { id: 'tb-rabbitmq', title: 'RabbitMQ Message Queue Issues', level: 1 },
    { id: 'tb-ssh', title: 'SSH Target Connection Failures', level: 1 },
    { id: 'tb-rules', title: 'Rule Pack Validation Issues', level: 1 },
  ];

  return (
    <DocLayout
      currentPath="/troubleshooting"
      onNavigate={onNavigate}
      title="Troubleshooting & Diagnostics FAQ"
      category="Operations"
      description="Step-by-step diagnostic workflows for resolving API, systemd, database, RabbitMQ queue, SSH connection, and rule evaluation issues."
      tocItems={tocItems}
    >
      {/* Quick Diagnostics */}
      <section id="tb-diagnostics" className="space-y-4 pt-2">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Wrench className="h-5 w-5 text-emerald-400" />
          First Diagnostic Steps
        </h2>
        <p>Always start by running the built-in diagnostic commands:</p>

        <CodeBlock
          title="Built-in Diagnostics"
          code={`# CLI diagnostic doctor
psv doctor

# Control plane server status
psv server status

# Validate YAML rule syntax
python scripts/validate_rules.py

# Verify installation prerequisites
python scripts/verify_installation.py`}
        />
      </section>

      {/* API & Worker */}
      <section id="tb-api-worker" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Server className="h-5 w-5 text-emerald-400" />
          API (`psv-api`) or Worker (`psv-worker`) Failures
        </h2>
        <p>If the API control plane or worker process fails to start, inspect systemd service logs:</p>

        <CodeBlock
          title="Inspecting systemd Service Status & Logs"
          code={`# Check API service status
sudo systemctl status psv-api

# View API journalctl logs
sudo journalctl -u psv-api -n 100 --no-pager

# Check worker service status
sudo systemctl status psv-worker

# View worker journalctl logs
sudo journalctl -u psv-worker -n 100 --no-pager

# Restart services
sudo systemctl restart psv-api psv-worker`}
        />
      </section>

      {/* PostgreSQL */}
      <section id="tb-postgres" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Database className="h-5 w-5 text-cyan-400" />
          PostgreSQL Database Troubleshooting
        </h2>

        <CodeBlock
          title="PostgreSQL Service Diagnostics"
          code={`# Check PostgreSQL service status
sudo systemctl status postgresql

# Test database connection and migration state
alembic current
alembic upgrade head`}
        />
      </section>

      {/* RabbitMQ */}
      <section id="tb-rabbitmq" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Layers className="h-5 w-5 text-teal-400" />
          RabbitMQ Message Queue Troubleshooting
        </h2>

        <CodeBlock
          title="RabbitMQ Diagnostics"
          code={`# Check RabbitMQ service status
sudo systemctl status rabbitmq-server
sudo rabbitmqctl status

# List active queues and message counts
sudo rabbitmqctl list_queues`}
        />
      </section>

      {/* SSH */}
      <section id="tb-ssh" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Terminal className="h-5 w-5 text-emerald-400" />
          SSH Connection & Host Test Failures
        </h2>

        <CodeBlock
          title="Diagnosing SSH Connection Issues"
          code={`# Test host connection with PSV CLI
psv host test local-linux

# Manual SSH verification
ssh -p 22 psv-auditor@127.0.0.1`}
        />
      </section>

      {/* Rule Pack */}
      <section id="tb-rules" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-emerald-400" />
          Rule Pack & Python Source Validation
        </h2>

        <CodeBlock
          title="Validating Python Syntax & Security Tests"
          code={`# Compile Python bytecode
python -m compileall backend cli scripts

# Validate 60 YAML rules
python scripts/validate_rules.py

# Run security test suite
pytest tests/test_fail_closed.py -v
pytest tests/test_ssrf_validation.py -v
pytest tests/test_command_injection.py -v`}
        />
      </section>
    </DocLayout>
  );
};
