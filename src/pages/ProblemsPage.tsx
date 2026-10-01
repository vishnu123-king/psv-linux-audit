import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { AlertTriangle, CheckCircle2, Shield, ArrowRight } from 'lucide-react';

interface ProblemsPageProps {
  onNavigate: (path: string) => void;
}

export const ProblemsPage: React.FC<ProblemsPageProps> = ({ onNavigate }) => {
  const tocItems = [
    { id: 'challenges', title: 'Common Linux Security Challenges', level: 1 },
    { id: 'manual-auditing', title: '1. Manual Checking is Time-Consuming', level: 2 },
    { id: 'inconsistent-baselines', title: '2. Inconsistent Security Baselines', level: 2 },
    { id: 'security-drift', title: '3. Unnoticed Security Drift', level: 2 },
    { id: 'limited-evidence', title: '4. Lack of Evidence in Scripts', level: 2 },
    { id: 'dangerous-remediation', title: '5. Dangerous Automated Remediation', level: 2 },
    { id: 'psv-solution', title: 'The PSV Solution', level: 1 },
  ];

  return (
    <DocLayout
      currentPath="/problems"
      onNavigate={onNavigate}
      title="The Linux Security Audit Problem & PSV Solution"
      category="Overview"
      description="Understanding the core operational challenges in traditional manual Linux security auditing and how PSV solves them."
      tocItems={tocItems}
    >
      <section id="challenges" className="space-y-4 pt-2">
        <p>
          Maintaining security posture across Linux servers, cloud instances, and development environments manually is notoriously difficult due to the vast configuration surface area across SSH, sudo, firewalls, PAM, kernel parameters, and services.
        </p>

        <div className="space-y-4 my-6">
          <div id="manual-auditing" className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-1">
            <h3 className="font-mono text-sm font-bold text-red-400 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" /> 1. Manual Security Checking is Time-Consuming
            </h3>
            <p className="text-xs text-slate-300">
              Administrators must manually run dozens of disparate commands (<code className="text-slate-200">ss</code>, <code className="text-slate-200">systemctl</code>, <code className="text-slate-200">sysctl</code>, <code className="text-slate-200">nft</code>, <code className="text-slate-200">ufw</code>, <code className="text-slate-200">sshd</code>, <code className="text-slate-200">sudoers</code>, PAM files) across multiple machines.
            </p>
          </div>

          <div id="inconsistent-baselines" className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-1">
            <h3 className="font-mono text-sm font-bold text-red-400 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" /> 2. Inconsistent Security Baselines
            </h3>
            <p className="text-xs text-slate-300">
              Two servers intended for identical roles often drift into different security configurations due to ad-hoc administrative changes.
            </p>
          </div>

          <div id="security-drift" className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-1">
            <h3 className="font-mono text-sm font-bold text-red-400 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" /> 3. Unnoticed Security Drift
            </h3>
            <p className="text-xs text-slate-300">
              A system deployed securely can gradually become non-compliant as software packages are installed, services added, or rules adjusted over time.
            </p>
          </div>

          <div id="limited-evidence" className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-1">
            <h3 className="font-mono text-sm font-bold text-red-400 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" /> 4. Lack of Evidence in Simple Scripts
            </h3>
            <p className="text-xs text-slate-300">
              Basic bash scripts often output vague status strings like <code className="text-red-400">SSH: FAIL</code> without preserving evidence paths, actual values, or verification criteria.
            </p>
          </div>

          <div id="dangerous-remediation" className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-1">
            <h3 className="font-mono text-sm font-bold text-red-400 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" /> 5. Dangerous Autonomous Remediation
            </h3>
            <p className="text-xs text-slate-300">
              Uncontrolled automatic script execution can lock administrators out of SSH or disrupt live network traffic without backup or rollback options.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="psv-solution" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-emerald-400" />
          How PSV Linux Security Auditor Solves This
        </h2>
        <p>
          PSV replaces fragmented manual checking with an automated 10-stage security pipeline:
        </p>

        <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/20 font-mono text-xs text-emerald-300 space-y-2">
          <div>CONNECT → DISCOVER → COLLECT → NORMALIZE → EVALUATE → FIND → STORE EVIDENCE → REPORT → REMEDIATE → VERIFY</div>
        </div>

        <div className="pt-4">
          <button
            onClick={() => onNavigate('/how-it-works')}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition"
          >
            <span>Explore the Complete Audit Pipeline</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </section>
    </DocLayout>
  );
};
