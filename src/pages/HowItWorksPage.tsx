import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { CodeBlock } from '../components/CodeBlock';
import { AuditLifecycleDiagram } from '../components/Diagrams';
import { Clock, Shield, Search, Cpu, Layers, FileCode2, FileCheck2, Database, Sliders, CheckCircle2 } from 'lucide-react';

interface HowItWorksPageProps {
  onNavigate: (path: string) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate }) => {
  const tocItems = [
    { id: 'lifecycle-overview', title: 'Audit Pipeline Overview', level: 1 },
    { id: 'step-connect', title: '1. Connect & SSH Handshake', level: 2 },
    { id: 'step-discover', title: '2. Target Discovery', level: 2 },
    { id: 'step-collect', title: '3. Data Collection', level: 2 },
    { id: 'step-normalize', title: '4. Observation Normalization', level: 2 },
    { id: 'step-evaluate', title: '5. Rule Evaluation', level: 2 },
    { id: 'step-findings', title: '6. Finding Generation', level: 2 },
    { id: 'step-evidence', title: '7. Evidence Storage', level: 2 },
    { id: 'step-report', title: '8. Reporting', level: 2 },
    { id: 'step-remediate', title: '9. Approval Remediation', level: 2 },
    { id: 'step-verify', title: '10. Verification', level: 2 },
  ];

  return (
    <DocLayout
      currentPath="/how-it-works"
      onNavigate={onNavigate}
      title="How PSV Linux Security Auditor Works"
      category="Architecture & Flow"
      description="An in-depth guide to the complete end-to-end security assessment pipeline from initial SSH connection to verified remediation."
      tocItems={tocItems}
    >
      <section id="lifecycle-overview" className="space-y-4 pt-2">
        <p>
          PSV transforms manual Linux security checks into a structured, repeatable, and evidence-backed 10-stage assessment pipeline.
        </p>

        <AuditLifecycleDiagram />
      </section>

      {/* Stage 1 */}
      <section id="step-connect" className="space-y-3 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-base">
          <Shield className="h-4 w-4" />
          <h3>1. Connect (SSH Handshake & Target Validation)</h3>
        </div>
        <p>
          The PSV worker initiates a secure AsyncSSH connection to the authorized Linux host. The platform validates SSH host-key fingerprints, credentials, and network address restrictions (SSRF validation).
        </p>
        <CodeBlock
          title="Testing Host SSH Connection"
          code={`psv host test local-linux`}
        />
      </section>

      {/* Stage 2 */}
      <section id="step-discover" className="space-y-3 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-base">
          <Search className="h-4 w-4" />
          <h3>2. Discover (Target Environment Inspection)</h3>
        </div>
        <p>
          Discovers distribution parameters (Ubuntu 22.04 / 24.04, Debian 11 / 12), kernel release, architecture, systemd presence, and available security tools (UFW, nftables, auditd, Docker).
        </p>
      </section>

      {/* Stage 3 */}
      <section id="step-collect" className="space-y-3 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-base">
          <Cpu className="h-4 w-4" />
          <h3>3. Collect (12 Security Collectors)</h3>
        </div>
        <p>
          The worker invokes predefined, read-only commands from the command registry to capture current security state across all 12 domains without executing arbitrary shell scripts.
        </p>
      </section>

      {/* Stage 4 */}
      <section id="step-normalize" className="space-y-3 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-base">
          <Layers className="h-4 w-4" />
          <h3>4. Normalize (Raw Output → Structured Observations)</h3>
        </div>
        <p>
          Raw text outputs (e.g. <code className="text-slate-200 font-mono">PasswordAuthentication yes</code> in <code className="text-slate-200 font-mono">/etc/ssh/sshd_config</code>) are parsed and converted into normalized structured observations:
        </p>
        <CodeBlock
          language="json"
          title="Normalized Observation Data Structure"
          code={`{
  "control": "ssh.password_authentication",
  "value": true,
  "source": "/etc/ssh/sshd_config",
  "collector": "ssh_collector",
  "timestamp": "2026-10-01T12:18:53Z"
}`}
        />
      </section>

      {/* Stage 5 */}
      <section id="step-evaluate" className="space-y-3 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-base">
          <FileCode2 className="h-4 w-4" />
          <h3>5. Evaluate (Deterministic YAML Policy Engine)</h3>
        </div>
        <p>
          The rule engine matches normalized observations against the active profile's YAML security rules using explicit comparison logic.
        </p>
      </section>

      {/* Stage 6 */}
      <section id="step-findings" className="space-y-3 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-base">
          <FileCheck2 className="h-4 w-4" />
          <h3>6. Generate Findings</h3>
        </div>
        <p>
          When a rule evaluation yields <code className="text-red-400 font-mono">FAIL</code> or <code className="text-amber-400 font-mono">WARN</code>, a detailed finding is created containing actual state, expected baseline, severity level, source file, and remediation steps.
        </p>
      </section>

      {/* Stage 7 */}
      <section id="step-evidence" className="space-y-3 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-base">
          <Database className="h-4 w-4" />
          <h3>7. Store Evidence</h3>
        </div>
        <p>
          Saves complete evidence records to PostgreSQL for auditability and historical drift comparison. Sensitive credentials and tokens are redacted prior to persistence.
        </p>
      </section>

      {/* Stage 8 */}
      <section id="step-report" className="space-y-3 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-base">
          <FileCheck2 className="h-4 w-4" />
          <h3>8. Report</h3>
        </div>
        <p>
          Generates human-readable HTML/PDF reports or machine-readable JSON exports.
        </p>
        <CodeBlock
          title="Generating Assessment Report"
          code={`psv report generate 42`}
        />
      </section>

      {/* Stage 9 */}
      <section id="step-remediate" className="space-y-3 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-base">
          <Sliders className="h-4 w-4" />
          <h3>9. Approval-Gated Remediation</h3>
        </div>
        <p>
          Generates a dry-run plan, awaits explicit administrator approval via CLI or Web Console, creates file backups, applies changes, and prepares for verification.
        </p>
      </section>

      {/* Stage 10 */}
      <section id="step-verify" className="space-y-3 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-base">
          <CheckCircle2 className="h-4 w-4" />
          <h3>10. Verification</h3>
        </div>
        <p>
          Re-collects state from the target machine and re-evaluates rules to confirm that the security baseline is now satisfied. Returns <code className="text-emerald-400 font-mono">VERIFIED</code>, <code className="text-red-400 font-mono">VERIFICATION_FAILED</code>, or <code className="text-amber-400 font-mono">VERIFICATION_UNKNOWN</code>.
        </p>
        <CodeBlock
          title="Verifying Remediation Result"
          code={`psv verify 101`}
        />
      </section>
    </DocLayout>
  );
};
