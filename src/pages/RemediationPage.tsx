import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { CodeBlock } from '../components/CodeBlock';
import { Sliders, Shield, AlertTriangle, CheckCircle2, RotateCcw } from 'lucide-react';

interface RemediationPageProps {
  onNavigate: (path: string) => void;
}

export const RemediationPage: React.FC<RemediationPageProps> = ({ onNavigate }) => {
  const tocItems = [
    { id: 'rem-philosophy', title: 'Controlled Remediation Philosophy', level: 1 },
    { id: 'rem-flow', title: '6-Stage Approval Flow', level: 1 },
    { id: 'rem-cli', title: 'CLI Remediation Commands', level: 1 },
    { id: 'rem-rollback', title: 'Backup & Rollback Procedures', level: 1 },
  ];

  return (
    <DocLayout
      currentPath="/remediation"
      onNavigate={onNavigate}
      title="Approval-Gated Remediation Architecture"
      category="Core Concepts"
      description="Learn how PSV enforces dry-run planning, explicit administrator authorization, automated file backups, and verification to safely remediate security findings."
      tocItems={tocItems}
    >
      <section id="rem-philosophy" className="space-y-4 pt-2">
        <div className="p-4 rounded-xl border border-amber-900/40 bg-amber-950/10 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold font-mono text-sm">
            <AlertTriangle className="h-4 w-4" />
            <span>CRITICAL SAFETY NOTICE</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Automated, autonomous modification of SSH, firewall, PAM, sudoers, or network parameters can cause catastrophic administrator lockouts or service outages. PSV enforces explicit authorization gates and recorded config backups.
          </p>
        </div>
      </section>

      {/* 6 Stage Flow */}
      <section id="rem-flow" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Sliders className="h-5 w-5 text-emerald-400" />
          The 6-Stage Remediation Workflow
        </h2>

        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900 font-mono text-xs text-slate-200 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold">1. FINDING</div>
          <p className="font-sans text-slate-400 text-xs">Identified policy violation with evidence path and expected baseline.</p>

          <div className="flex items-center gap-2 text-emerald-400 font-bold pt-2">2. DRY-RUN PLAN</div>
          <p className="font-sans text-slate-400 text-xs"><code>psv remediation plan FINDING_ID</code> creates a dry-run proposal displaying current state, desired state, backup target, and validation commands without modifying the system.</p>

          <div className="flex items-center gap-2 text-emerald-400 font-bold pt-2">3. ADMINISTRATOR APPROVAL</div>
          <p className="font-sans text-slate-400 text-xs"><code>psv remediation approve REMEDIATION_ID</code> requires <code>ADMIN</code> role authorization.</p>

          <div className="flex items-center gap-2 text-emerald-400 font-bold pt-2">4. BACKUP & VALIDATION</div>
          <p className="font-sans text-slate-400 text-xs">Creates timestamped configuration backup snapshots before applying changes.</p>

          <div className="flex items-center gap-2 text-emerald-400 font-bold pt-2">5. APPLY</div>
          <p className="font-sans text-slate-400 text-xs"><code>psv remediation execute REMEDIATION_ID</code> executes approved changes.</p>

          <div className="flex items-center gap-2 text-emerald-400 font-bold pt-2">6. VERIFY</div>
          <p className="font-sans text-slate-400 text-xs"><code>psv verify FINDING_ID</code> re-collects state and re-evaluates rule to confirm compliance.</p>
        </div>
      </section>

      {/* CLI Commands */}
      <section id="rem-cli" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Shield className="h-5 w-5 text-emerald-400" />
          Remediation CLI Commands
        </h2>

        <CodeBlock
          title="CLI Remediation Execution Sequence"
          code={`# Create dry-run remediation plan
psv remediation plan 101

# Authorize plan
psv remediation approve 101

# Apply remediation
psv remediation execute 101

# Verify new security state
psv verify 101`}
        />
      </section>

      {/* Rollback */}
      <section id="rem-rollback" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <RotateCcw className="h-5 w-5 text-emerald-400" />
          Config Backup & Rollback
        </h2>
        <p>
          If a remediation causes unintended behavior, execute a rollback using the recorded backup snapshot:
        </p>

        <CodeBlock
          title="Rolling Back Remediation"
          code={`psv remediation rollback 101`}
        />
      </section>
    </DocLayout>
  );
};
