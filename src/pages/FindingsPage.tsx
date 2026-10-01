import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { CodeBlock } from '../components/CodeBlock';
import { FileCheck2, AlertTriangle, Shield } from 'lucide-react';

interface FindingsPageProps {
  onNavigate: (path: string) => void;
}

export const FindingsPage: React.FC<FindingsPageProps> = ({ onNavigate }) => {
  const tocItems = [
    { id: 'findings-structure', title: 'Anatomy of a Finding', level: 1 },
    { id: 'finding-severities', title: 'Severity Levels', level: 1 },
    { id: 'finding-cli', title: 'Managing Findings via CLI', level: 1 },
  ];

  return (
    <DocLayout
      currentPath="/findings"
      onNavigate={onNavigate}
      title="Security Findings & Evidence Model"
      category="Core Concepts"
      description="Understand how PSV constructs evidence-backed security findings with exact actual vs expected values, source files, and verification criteria."
      tocItems={tocItems}
    >
      <section id="findings-structure" className="space-y-4 pt-2">
        <p>
          Unlike tools that simply mark a test as "FAIL" without explanation, every PSV finding preserves full forensic evidence context.
        </p>

        <CodeBlock
          language="json"
          title="Complete Finding Object Data Structure"
          code={`{
  "id": 101,
  "rule_id": "SSH-001",
  "title": "SSH Password Authentication Enabled",
  "severity": "HIGH",
  "status": "OPEN",
  "host": "local-linux",
  "control": "ssh.password_authentication",
  "actual_value": "yes",
  "expected_value": "no",
  "evidence_path": "/etc/ssh/sshd_config",
  "first_seen": "2026-10-01T12:00:00Z",
  "last_seen": "2026-10-01T12:18:53Z"
}`}
        />
      </section>

      <section id="finding-severities" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-emerald-400" />
          Severity Classification
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs my-4">
          <div className="p-3 rounded bg-red-950/40 border border-red-900/50 text-red-300 font-bold">CRITICAL</div>
          <div className="p-3 rounded bg-orange-950/40 border border-orange-900/50 text-orange-300 font-bold">HIGH</div>
          <div className="p-3 rounded bg-amber-950/40 border border-amber-900/50 text-amber-300 font-bold">MEDIUM</div>
          <div className="p-3 rounded bg-slate-900 border border-slate-800 text-slate-300 font-bold">LOW</div>
        </div>
      </section>

      <section id="finding-cli" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <FileCheck2 className="h-5 w-5 text-emerald-400" />
          Managing Findings via CLI
        </h2>

        <CodeBlock
          title="Listing & Inspecting Findings"
          code={`# List HIGH severity findings
psv finding list --severity HIGH

# Show specific finding details
psv finding show 101

# Acknowledge, resolve, or suppress finding
psv finding acknowledge 101
psv finding resolve 101
psv finding suppress 101`}
        />
      </section>
    </DocLayout>
  );
};
