import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { SecurityBoundaryDiagram } from '../components/Diagrams';
import { CodeBlock } from '../components/CodeBlock';
import { Lock, Shield, Key, EyeOff, AlertTriangle, FileCheck2, UserCheck, CheckCircle2 } from 'lucide-react';

interface SecurityPageProps {
  onNavigate: (path: string) => void;
}

export const SecurityPage: React.FC<SecurityPageProps> = ({ onNavigate }) => {
  const tocItems = [
    { id: 'sec-boundary', title: 'No Arbitrary Remote Shell', level: 1 },
    { id: 'command-registry', title: 'Predefined Command Registry', level: 1 },
    { id: 'ssh-security', title: 'SSH Host-Key Verification', level: 1 },
    { id: 'rbac-roles', title: 'RBAC Authorization Roles', level: 1 },
    { id: 'ssrf-protection', title: 'SSRF & Address Validation', level: 1 },
    { id: 'secret-redaction', title: 'Secret & Credential Redaction', level: 1 },
    { id: 'fail-closed-model', title: 'Fail-Closed Security Design', level: 1 },
  ];

  return (
    <DocLayout
      currentPath="/security"
      onNavigate={onNavigate}
      title="Security Architecture & Controls"
      category="Security"
      description="Detailed technical breakdown of the security controls, boundary enforcement, secret sanitization, and access controls built into PSV."
      tocItems={tocItems}
    >
      <section id="sec-boundary" className="space-y-4 pt-2">
        <SecurityBoundaryDiagram />
      </section>

      {/* Predefined Registry */}
      <section id="command-registry" className="space-y-4 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-lg">
          <Shield className="h-5 w-5" />
          <h2>1. Predefined Command Registry</h2>
        </div>
        <p>
          Collectors do not compose or receive arbitrary bash command strings from external input. Instead, collectors select strictly mapped read commands from an internal immutable registry:
        </p>
        <CodeBlock
          language="json"
          title="Command Registry Mapping Excerpt"
          code={`{
  "ssh_collector": [
    "cat /etc/ssh/sshd_config",
    "ls -l /etc/ssh/sshd_config"
  ],
  "firewall_collector": [
    "ufw status verbose",
    "nft list ruleset",
    "iptables -L -n -v"
  ],
  "kernel_collector": [
    "sysctl -a"
  ]
}`}
        />
      </section>

      {/* SSH Security */}
      <section id="ssh-security" className="space-y-4 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-lg">
          <Key className="h-5 w-5" />
          <h2>2. Secure SSH Transport</h2>
        </div>
        <p>
          SSH connections use AsyncSSH with strict host-key checking enabled. Connections timeout automatically if unresponsive, preventing hung worker tasks.
        </p>
      </section>

      {/* RBAC */}
      <section id="rbac-roles" className="space-y-4 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-lg">
          <UserCheck className="h-5 w-5" />
          <h2>3. Role-Based Access Control (RBAC)</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs my-4">
          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900">
            <div className="text-emerald-400 font-bold mb-1">ADMIN</div>
            <div className="text-slate-400">Full system configuration, host management, user management, remediation execution.</div>
          </div>
          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900">
            <div className="text-emerald-400 font-bold mb-1">SECURITY_ANALYST</div>
            <div className="text-slate-400">Trigger assessments, view findings, create remediation dry-run plans, export reports.</div>
          </div>
          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900">
            <div className="text-emerald-400 font-bold mb-1">OPERATOR</div>
            <div className="text-slate-400">Run scheduled audits, test host connections, view status.</div>
          </div>
          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900">
            <div className="text-emerald-400 font-bold mb-1">VIEWER</div>
            <div className="text-slate-400">Read-only view of dashboard stats, findings, and completed assessment reports.</div>
          </div>
        </div>
      </section>

      {/* SSRF */}
      <section id="ssrf-protection" className="space-y-4 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-lg">
          <Lock className="h-5 w-5" />
          <h2>4. SSRF & Target Host Sanitization</h2>
        </div>
        <p>
          Before registering or testing an audit target, the host address is validated to ensure it satisfies target policies and prevents unauthorized pivoting into unintended internal subnets.
        </p>
      </section>

      {/* Secret Redaction */}
      <section id="secret-redaction" className="space-y-4 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-lg">
          <EyeOff className="h-5 w-5" />
          <h2>5. Automatic Secret & Credential Redaction</h2>
        </div>
        <p>
          All collector outputs, evidence strings, API logs, and report exports pass through an automatic redaction filter that replaces private SSH keys, password hashes, JWT tokens, and API credentials with masked placeholders:
        </p>
        <CodeBlock
          title="Secret Masking Example"
          code={`JWT_SECRET=********
PRIVATE_KEY=[REDACTED_RSA_PRIVATE_KEY]`}
        />
      </section>

      {/* Fail-Closed */}
      <section id="fail-closed-model" className="space-y-4 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-amber-400 font-mono font-bold text-lg">
          <AlertTriangle className="h-5 w-5" />
          <h2>6. Fail-Closed Security Model</h2>
        </div>
        <p>
          If evidence collection fails due to a missing command, timeout, or permission restriction, PSV outputs <code className="text-amber-300 font-mono">UNKNOWN</code>. It never defaults to <code className="text-emerald-400 font-mono">PASS</code> under failure conditions.
        </p>
      </section>
    </DocLayout>
  );
};
