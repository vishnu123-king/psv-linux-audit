import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { CodeBlock } from '../components/CodeBlock';
import { Shield, Cpu, FileCode2, AlertTriangle, GitCompare, Sliders, Terminal, Lock, CheckCircle2, Database, Layers } from 'lucide-react';

interface FeaturesPageProps {
  onNavigate: (path: string) => void;
}

export const FeaturesPage: React.FC<FeaturesPageProps> = ({ onNavigate }) => {
  const tocItems = [
    { id: 'collectors-overview', title: '12 Linux Collectors', level: 1 },
    { id: 'rule-engine', title: '60 Deterministic Rules', level: 1 },
    { id: 'fail-closed', title: 'Fail-Closed Security Model', level: 1 },
    { id: 'drift-detection', title: 'Configuration Drift', level: 1 },
    { id: 'gated-remediation', title: 'Approval-Gated Remediation', level: 1 },
    { id: 'unified-cli-web', title: 'CLI & Web Console', level: 1 },
  ];

  return (
    <DocLayout
      currentPath="/features"
      onNavigate={onNavigate}
      title="Platform Capabilities & Features"
      category="Overview"
      description="Detailed technical breakdown of the core features and architectural pillars that power PSV Linux Security Auditor."
      tocItems={tocItems}
    >
      {/* 1. 12 Collectors */}
      <section id="collectors-overview" className="space-y-4 pt-4 border-t border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-lg">
          <Cpu className="h-5 w-5" />
          <h2>1. 12 Modular Linux Security Collectors</h2>
        </div>
        <p>
          PSV uses 12 specialized collectors to audit distinct Linux security domains. Each collector operates using strictly defined, safe read-only commands from the internal command registry.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 font-mono text-xs">
          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/80">
            <div className="text-emerald-400 font-bold mb-1">System Collector</div>
            <div className="text-slate-400">OS release, kernel version, hostname, architecture, system info.</div>
          </div>
          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/80">
            <div className="text-emerald-400 font-bold mb-1">Identity Collector</div>
            <div className="text-slate-400">Users, UID/GID 0 accounts, password policy, login shells, groups.</div>
          </div>
          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/80">
            <div className="text-emerald-400 font-bold mb-1">SSH Collector</div>
            <div className="text-slate-400">PermitRootLogin, PasswordAuth, PubkeyAuth, X11Forwarding, idle timeout.</div>
          </div>
          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/80">
            <div className="text-emerald-400 font-bold mb-1">Sudo Collector</div>
            <div className="text-slate-400">sudoers configuration, NOPASSWD entries, wildcards, secure paths, use_pty.</div>
          </div>
          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/80">
            <div className="text-emerald-400 font-bold mb-1">Filesystem Collector</div>
            <div className="text-slate-400">Mount options (nodev, nosuid, noexec), SUID/SGID, world-writable files, /tmp.</div>
          </div>
          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/80">
            <div className="text-emerald-400 font-bold mb-1">Networking Collector</div>
            <div className="text-slate-400">Listening sockets, IP forwarding, ICMP redirects, TCP SYN cookies.</div>
          </div>
          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/80">
            <div className="text-emerald-400 font-bold mb-1">Firewall Collector</div>
            <div className="text-slate-400">UFW state, default incoming policy, active iptables and nftables rulesets.</div>
          </div>
          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/80">
            <div className="text-emerald-400 font-bold mb-1">Services Collector</div>
            <div className="text-slate-400">Active services, enabled on boot, legacy insecure daemons, NTP time sync.</div>
          </div>
          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/80">
            <div className="text-emerald-400 font-bold mb-1">Kernel Collector</div>
            <div className="text-slate-400">ASLR level, kptr_restrict, dmesg_restrict, protected symlinks/hardlinks.</div>
          </div>
          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/80">
            <div className="text-emerald-400 font-bold mb-1">PAM Collector</div>
            <div className="text-slate-400">Password complexity rules, minimum length, account lockout policies.</div>
          </div>
          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/80">
            <div className="text-emerald-400 font-bold mb-1">Logging Collector</div>
            <div className="text-slate-400">auditd status, audit rules, journald persistence, system logging.</div>
          </div>
          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/80">
            <div className="text-emerald-400 font-bold mb-1">Container Collector</div>
            <div className="text-slate-400">Docker daemon config, user ns remapping, live-restore, no-new-privileges.</div>
          </div>
        </div>
      </section>

      {/* 2. Rule Engine */}
      <section id="rule-engine" className="space-y-4 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-lg">
          <FileCode2 className="h-5 w-5" />
          <h2>2. 60 Deterministic YAML Security Rules</h2>
        </div>
        <p>
          Security rules are written in explicit YAML files and evaluated mathematically against normalized collector observations.
        </p>

        <CodeBlock
          language="yaml"
          title="Sanitized Example: SSH-001 Policy Rule"
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

      {/* 3. Fail-Closed */}
      <section id="fail-closed" className="space-y-4 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-amber-400 font-mono font-bold text-lg">
          <AlertTriangle className="h-5 w-5" />
          <h2>3. Fail-Closed Security Evaluation</h2>
        </div>
        <p>
          A fundamental security flaw in many scanners is assuming <code className="text-emerald-400 font-mono">PASS</code> when a test fails to run or output cannot be read. PSV enforces a fail-closed architecture:
        </p>
        <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
          <div>Collector Error / Permission Denied</div>
          <div className="text-slate-500">↓</div>
          <div>Observation Unavailable</div>
          <div className="text-slate-500">↓</div>
          <div className="text-amber-400 font-bold">Rule Evaluation → UNKNOWN</div>
        </div>
        <p className="text-sm text-slate-400">
          This prevents technical glitches from creating false confidence or masking security vulnerabilities.
        </p>
      </section>

      {/* 4. Drift */}
      <section id="drift-detection" className="space-y-4 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-cyan-400 font-mono font-bold text-lg">
          <GitCompare className="h-5 w-5" />
          <h2>4. Configuration Drift Detection</h2>
        </div>
        <p>
          PSV compares sequential historical assessments for a host to identify changes in configuration, users, listening ports, firewall rules, and system services.
        </p>
        <CodeBlock
          title="Drift Comparison Execution"
          code={`psv drift compare local-linux`}
        />
      </section>

      {/* 5. Gated Remediation */}
      <section id="gated-remediation" className="space-y-4 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-lg">
          <Sliders className="h-5 w-5" />
          <h2>5. Approval-Gated Remediation</h2>
        </div>
        <p>
          To prevent accidental system lockouts or service disruptions, remediation follows a strict 6-step gated process requiring explicit administrator approval.
        </p>
        <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
          <div>1. FINDING → Identified policy violation</div>
          <div>2. PLAN → <code className="text-emerald-400">psv remediation plan FINDING_ID</code> (Dry-run proposal)</div>
          <div>3. APPROVE → <code className="text-emerald-400">psv remediation approve REMEDIATION_ID</code> (Admin Authorization)</div>
          <div>4. BACKUP → Automatic snapshot / config backup</div>
          <div>5. APPLY → <code className="text-emerald-400">psv remediation execute REMEDIATION_ID</code></div>
          <div>6. VERIFY → <code className="text-emerald-400">psv verify FINDING_ID</code> (Re-evaluate rule)</div>
        </div>
      </section>

      {/* 6. Unified Interfaces */}
      <section id="unified-cli-web" className="space-y-4 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-lg">
          <Terminal className="h-5 w-5" />
          <h2>6. Dual Web Console & Python CLI Interface</h2>
        </div>
        <p>
          Whether operating from a terminal in an SSH session or viewing dashboards on the React Web Console, both interfaces query the same FastAPI control plane backend.
        </p>
      </section>
    </DocLayout>
  );
};
