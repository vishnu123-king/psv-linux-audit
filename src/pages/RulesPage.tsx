import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { CodeBlock } from '../components/CodeBlock';
import { FileCode2, CheckCircle2, Shield } from 'lucide-react';

interface RulesPageProps {
  onNavigate: (path: string) => void;
}

export const RulesPage: React.FC<RulesPageProps> = ({ onNavigate }) => {
  const tocItems = [
    { id: 'rules-overview', title: '60 YAML Rules Across 11 Domains', level: 1 },
    { id: 'yaml-schema', title: 'Rule Definition Schema', level: 1 },
    { id: 'operators', title: 'Supported Logical & Value Operators', level: 1 },
    { id: 'rule-validation', title: 'Rule Pack Validation', level: 1 },
  ];

  return (
    <DocLayout
      currentPath="/rules"
      onNavigate={onNavigate}
      title="YAML Security Policy Rule Engine"
      category="Core Concepts"
      description="Documentation of PSV's deterministic YAML security policy engine, supported condition operators, schema specification, and 60 bundled rules across 11 domains."
      tocItems={tocItems}
    >
      <section id="rules-overview" className="space-y-4 pt-2">
        <p>
          The PSV rule pack contains <strong>60 deterministic security rules</strong> across 11 YAML policy files. The rule engine evaluates normalized collector observations against defined conditions without using opaque scoring models or non-deterministic AI inference.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs my-4">
          <div className="p-3 rounded bg-slate-900 border border-slate-800">
            <span className="text-emerald-400 font-bold block text-sm">60</span>
            <span className="text-slate-400">Total Security Rules</span>
          </div>
          <div className="p-3 rounded bg-slate-900 border border-slate-800">
            <span className="text-emerald-400 font-bold block text-sm">11</span>
            <span className="text-slate-400">YAML Policy Files</span>
          </div>
          <div className="p-3 rounded bg-slate-900 border border-slate-800">
            <span className="text-emerald-400 font-bold block text-sm">0</span>
            <span className="text-slate-400">Duplicate Rule IDs</span>
          </div>
          <div className="p-3 rounded bg-slate-900 border border-slate-800">
            <span className="text-emerald-400 font-bold block text-sm">0</span>
            <span className="text-slate-400">Schema Validation Errors</span>
          </div>
        </div>
      </section>

      {/* Schema */}
      <section id="yaml-schema" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <FileCode2 className="h-5 w-5 text-emerald-400" />
          YAML Rule Definition Schema
        </h2>

        <CodeBlock
          language="yaml"
          title="Sanitized YAML Rule Example: SSH-001"
          code={`id: SSH-001
name: SSH Password Authentication Disabled
version: 1.0.0
category: ssh
severity: high

control: ssh.password_authentication

condition:
  operator: equals
  actual:
    observation: ssh.password_authentication
  expected: false

remediation:
  type: ssh_config_update
  key: PasswordAuthentication
  value: "no"
  target_file: /etc/ssh/sshd_config`}
        />
      </section>

      {/* Operators */}
      <section id="operators" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Shield className="h-5 w-5 text-emerald-400" />
          Supported Evaluation Operators
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs my-3">
          <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-200">equals</div>
          <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-200">not_equals</div>
          <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-200">contains</div>
          <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-200">not_contains</div>
          <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-200">regex</div>
          <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-200">in</div>
          <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-200">not_in</div>
          <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-200">greater_than</div>
          <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-200">less_than</div>
          <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-emerald-400 font-bold">AND</div>
          <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-emerald-400 font-bold">OR</div>
          <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-emerald-400 font-bold">NOT</div>
        </div>
      </section>

      {/* Validation */}
      <section id="rule-validation" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-emerald-400" />
          Validating Rule Packs
        </h2>

        <CodeBlock
          title="Validating Rule Schema & IDs"
          code={`python scripts/validate_rules.py`}
          caption="Validates all 60 rules across 11 YAML files for schema compliance and duplicate ID prevention."
        />
      </section>
    </DocLayout>
  );
};
