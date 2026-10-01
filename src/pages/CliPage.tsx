import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { CodeBlock } from '../components/CodeBlock';
import { Terminal, Server, Shield, FileCheck2, Sliders, GitCompare, Wrench, CheckCircle2 } from 'lucide-react';

interface CliPageProps {
  onNavigate: (path: string) => void;
}

export const CliPage: React.FC<CliPageProps> = ({ onNavigate }) => {
  const tocItems = [
    { id: 'cli-overview', title: 'PSV CLI Overview & Syntax', level: 1 },
    { id: 'server-commands', title: 'Server Commands (`status`, `doctor`)', level: 1 },
    { id: 'host-commands', title: 'Host Management Commands', level: 1 },
    { id: 'profile-commands', title: 'Profile Commands', level: 1 },
    { id: 'audit-commands', title: 'Audit Assessment Commands', level: 1 },
    { id: 'finding-commands', title: 'Finding Management Commands', level: 1 },
    { id: 'rule-commands', title: 'Rule & Policy Commands', level: 1 },
    { id: 'drift-commands', title: 'Drift Comparison Commands', level: 1 },
    { id: 'report-commands', title: 'Report Generation Commands', level: 1 },
    { id: 'remediation-commands', title: 'Approval Remediation Commands', level: 1 },
    { id: 'verification-commands', title: 'Verification Commands', level: 1 },
    { id: 'config-commands', title: 'Config & JSON Output Options', level: 1 },
  ];

  return (
    <DocLayout
      currentPath="/cli"
      onNavigate={onNavigate}
      title="PSV CLI Command Reference"
      category="Reference"
      description="Complete command-line interface documentation for `psv` including host registration, assessment execution, findings triage, drift comparison, and remediation."
      tocItems={tocItems}
    >
      {/* Overview */}
      <section id="cli-overview" className="space-y-4 pt-2">
        <p>
          The primary command-line tool is <code className="text-emerald-400 font-mono">psv</code>. The CLI communicates exclusively with the FastAPI control plane REST API — it never bypasses authorization or directly alters database states.
        </p>

        <CodeBlock
          title="General Syntax & Help Commands"
          code={`# Display general help and command list
psv --help

# Display command-specific help
psv <command> --help

# Display CLI version
psv version`}
        />
      </section>

      {/* Server Commands */}
      <section id="server-commands" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Server className="h-5 w-5 text-emerald-400" />
          Server Diagnostic Commands
        </h2>

        <CodeBlock
          title="psv server status"
          code={`psv server status`}
          caption="Output check: API: ONLINE, Database: CONNECTED, RabbitMQ: CONNECTED, Authentication: OK"
        />

        <CodeBlock
          title="psv doctor"
          code={`psv doctor`}
          caption="Performs comprehensive environment checks across Python, CLI, API, PostgreSQL, RabbitMQ, Worker, Rule Pack, and .env configuration."
        />
      </section>

      {/* Host Commands */}
      <section id="host-commands" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Shield className="h-5 w-5 text-emerald-400" />
          Host Registration & Verification Commands
        </h2>

        <CodeBlock
          title="List, Add, Test and Remove Targets"
          code={`# List all registered Linux target hosts
psv host list

# Auto-discover and register local machine
psv host add-local

# Add a remote authorized Linux host
psv host add \\
  --name local-linux \\
  --address 192.168.1.20 \\
  --port 22 \\
  --username psv-auditor

# Show detailed host information
psv host show 1

# Test SSH connection and host-key verification
psv host test local-linux

# Disable or remove a host target
psv host remove 1`}
        />
      </section>

      {/* Profile Commands */}
      <section id="profile-commands" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <FileCheck2 className="h-5 w-5 text-emerald-400" />
          Security Profile Commands
        </h2>

        <CodeBlock
          title="psv profile list & show"
          code={`# List available security assessment profiles
psv profile list

# Available profiles: general-linux, server, web-server, database-server, container-host, research-lab

# Show profile rule breakdown and details
psv profile show server`}
        />
      </section>

      {/* Audit Commands */}
      <section id="audit-commands" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Terminal className="h-5 w-5 text-emerald-400" />
          Assessment Audit Commands
        </h2>

        <CodeBlock
          title="Running and Tracking Assessments"
          code={`# Trigger a security assessment against a target host
psv audit run local-linux --profile server

# View status of an ongoing assessment (Job states: QUEUED, CONNECTING, DISCOVERING, COLLECTING, NORMALIZING, EVALUATING, COMPLETED, FAILED)
psv audit status 42

# List historical assessments with optional filtering
psv audit list --host local-linux --status COMPLETED --limit 20

# Cancel an active running assessment
psv audit cancel 42`}
        />
      </section>

      {/* Finding Commands */}
      <section id="finding-commands" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <FileCheck2 className="h-5 w-5 text-emerald-400" />
          Security Finding Commands
        </h2>

        <CodeBlock
          title="List, Inspect and Triage Findings"
          code={`# List findings filtered by severity
psv finding list --severity HIGH

# List findings for a specific host
psv finding list --host local-linux

# Show detailed finding evidence (Actual vs Expected state, source file)
psv finding show 101

# Acknowledge, resolve, or suppress findings
psv finding acknowledge 101
psv finding resolve 101
psv finding suppress 101`}
        />
      </section>

      {/* Rule Commands */}
      <section id="rule-commands" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <FileCheck2 className="h-5 w-5 text-emerald-400" />
          YAML Rule Engine Commands
        </h2>

        <CodeBlock
          title="psv rule list & show"
          code={`# List all 60 YAML security rules in active rule pack
psv rule list

# Inspect specific rule definition and expected conditions
psv rule show SSH-001`}
        />
      </section>

      {/* Drift Commands */}
      <section id="drift-commands" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <GitCompare className="h-5 w-5 text-cyan-400" />
          Drift Comparison Commands
        </h2>

        <CodeBlock
          title="psv drift compare"
          code={`# Compare historical assessment snapshots for a host
psv drift compare local-linux`}
          caption="Reports new users, removed accounts, changed SSH settings, new listening ports, and firewall/kernel rule modifications."
        />
      </section>

      {/* Report Commands */}
      <section id="report-commands" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <FileCheck2 className="h-5 w-5 text-emerald-400" />
          Report Generation Commands
        </h2>

        <CodeBlock
          title="psv report generate"
          code={`# Generate formatted audit report for an assessment
psv report generate 42`}
        />
      </section>

      {/* Remediation Commands */}
      <section id="remediation-commands" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Sliders className="h-5 w-5 text-emerald-400" />
          Approval-Gated Remediation Commands
        </h2>

        <CodeBlock
          title="Planning, Approving, Executing and Rolling Back Remediation"
          code={`# 1. Create dry-run proposal plan
psv remediation plan 101

# 2. Authorize remediation plan (Admin required)
psv remediation approve 101

# 3. Execute approved remediation with automatic config backup
psv remediation execute 101

# 4. Rollback to pre-remediation backup if required
psv remediation rollback 101`}
        />
      </section>

      {/* Verification Commands */}
      <section id="verification-commands" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-emerald-400" />
          Remediation Verification Commands
        </h2>

        <CodeBlock
          title="psv verify"
          code={`# Re-collect state and re-evaluate rule
psv verify 101`}
          caption="Outputs: VERIFIED, VERIFICATION_FAILED, or VERIFICATION_UNKNOWN"
        />
      </section>

      {/* Config & JSON */}
      <section id="config-commands" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Wrench className="h-5 w-5 text-emerald-400" />
          CLI Configuration & Machine-Readable JSON Output
        </h2>

        <CodeBlock
          title="Configuring API Endpoint & JSON Format Flag"
          code={`# Inspect CLI configuration
psv config show

# Set custom control plane API URL
psv config set server.url http://127.0.0.1:8000

# Machine-readable JSON output for automation / CI/CD
psv host list --format json
psv audit list --format json
psv finding list --format json
psv audit status 42 --format json`}
        />
      </section>
    </DocLayout>
  );
};
