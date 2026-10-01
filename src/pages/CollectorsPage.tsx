import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { CodeBlock } from '../components/CodeBlock';
import { Cpu, Shield, Key, Lock, HardDrive, Network, Flame, Activity, Terminal, Layers, FileText, Box } from 'lucide-react';

interface CollectorsPageProps {
  onNavigate: (path: string) => void;
}

export const CollectorsPage: React.FC<CollectorsPageProps> = ({ onNavigate }) => {
  const tocItems = [
    { id: 'collectors-list', title: '12 Linux Security Collectors', level: 1 },
    { id: 'col-sys', title: '1. System Collector', level: 2 },
    { id: 'col-id', title: '2. Identity Collector', level: 2 },
    { id: 'col-ssh', title: '3. SSH Collector', level: 2 },
    { id: 'col-sudo', title: '4. Sudo Collector', level: 2 },
    { id: 'col-fs', title: '5. Filesystem Collector', level: 2 },
    { id: 'col-net', title: '6. Networking Collector', level: 2 },
    { id: 'col-fw', title: '7. Firewall Collector', level: 2 },
    { id: 'col-svc', title: '8. Services Collector', level: 2 },
    { id: 'col-kern', title: '9. Kernel Collector', level: 2 },
    { id: 'col-pam', title: '10. PAM Collector', level: 2 },
    { id: 'col-log', title: '11. Logging Collector', level: 2 },
    { id: 'col-ctr', title: '12. Container Collector', level: 2 },
  ];

  return (
    <DocLayout
      currentPath="/collectors"
      onNavigate={onNavigate}
      title="12 Modular Linux Security Collectors"
      category="Core Concepts"
      description="Detailed technical breakdown of the 12 modular Linux collectors that gather security-relevant system facts over SSH."
      tocItems={tocItems}
    >
      <section id="collectors-list" className="space-y-4 pt-2">
        <p>
          Collectors collect facts — they do not decide whether a configuration is secure. Fact collection is strictly separated from rule evaluation.
        </p>

        {/* Collector 1 */}
        <div id="col-sys" className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono text-base">
            <Cpu className="h-4 w-4" />
            <h3>1. System Collector</h3>
          </div>
          <p className="text-sm text-slate-300">
            Collects OS distribution release, kernel version, hostname, architecture, hardware info, and uptime.
          </p>
        </div>

        {/* Collector 2 */}
        <div id="col-id" className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono text-base">
            <Shield className="h-4 w-4" />
            <h3>2. Identity Collector</h3>
          </div>
          <p className="text-sm text-slate-300">
            Audits user accounts, groups, UID/GID 0 root accounts, login shells, password shadow configuration, and password age rules.
          </p>
        </div>

        {/* Collector 3 */}
        <div id="col-ssh" className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono text-base">
            <Key className="h-4 w-4" />
            <h3>3. SSH Collector</h3>
          </div>
          <p className="text-sm text-slate-300">
            Examines <code className="text-slate-200 font-mono">/etc/ssh/sshd_config</code> for PermitRootLogin, PasswordAuthentication, PubkeyAuthentication, X11Forwarding, MaxAuthTries, ClientAliveInterval, and SSH config file permissions.
          </p>
        </div>

        {/* Collector 4 */}
        <div id="col-sudo" className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono text-base">
            <Lock className="h-4 w-4" />
            <h3>4. Sudo Collector</h3>
          </div>
          <p className="text-sm text-slate-300">
            Audits <code className="text-slate-200 font-mono">/etc/sudoers</code> and included directives for NOPASSWD entries, excessive user privileges, wildcard execution, use_pty, env_reset, and secure_path.
          </p>
        </div>

        {/* Collector 5 */}
        <div id="col-fs" className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono text-base">
            <HardDrive className="h-4 w-4" />
            <h3>5. Filesystem Collector</h3>
          </div>
          <p className="text-sm text-slate-300">
            Audits filesystem mount options (nodev, nosuid, noexec on /tmp, /var/tmp, /dev/shm), SUID/SGID executable binaries, world-writable files, and core dump restrictions.
          </p>
        </div>

        {/* Collector 6 */}
        <div id="col-net" className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono text-base">
            <Network className="h-4 w-4" />
            <h3>6. Networking Collector</h3>
          </div>
          <p className="text-sm text-slate-300">
            Audits active listening TCP/UDP sockets, IP forwarding, ICMP redirects, TCP SYN cookies, and network interface configurations.
          </p>
        </div>

        {/* Collector 7 */}
        <div id="col-fw" className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono text-base">
            <Flame className="h-4 w-4" />
            <h3>7. Firewall Collector</h3>
          </div>
          <p className="text-sm text-slate-300">
            Audits UFW firewall state, default incoming policies, active iptables, and nftables rulesets.
          </p>
        </div>

        {/* Collector 8 */}
        <div id="col-svc" className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono text-base">
            <Activity className="h-4 w-4" />
            <h3>8. Services Collector</h3>
          </div>
          <p className="text-sm text-slate-300">
            Audits running systemd services, daemons enabled on boot, legacy insecure services (telnet, rsh, tftp), and NTP time synchronization.
          </p>
        </div>

        {/* Collector 9 */}
        <div id="col-kern" className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono text-base">
            <Terminal className="h-4 w-4" />
            <h3>9. Kernel Collector</h3>
          </div>
          <p className="text-sm text-slate-300">
            Audits sysctl security parameters: ASLR level, kptr_restrict, dmesg_restrict, protected_symlinks, protected_hardlinks, and kernel pointer restrictions.
          </p>
        </div>

        {/* Collector 10 */}
        <div id="col-pam" className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono text-base">
            <Layers className="h-4 w-4" />
            <h3>10. PAM Collector</h3>
          </div>
          <p className="text-sm text-slate-300">
            Examines Pluggable Authentication Modules (PAM) configuration for password complexity, minimum length, password reuse restrictions, and account lockout policies.
          </p>
        </div>

        {/* Collector 11 */}
        <div id="col-log" className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono text-base">
            <FileText className="h-4 w-4" />
            <h3>11. Logging Collector</h3>
          </div>
          <p className="text-sm text-slate-300">
            Audits auditd daemon status, audit rules configuration, systemd journald persistence, and log file permissions.
          </p>
        </div>

        {/* Collector 12 */}
        <div id="col-ctr" className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono text-base">
            <Box className="h-4 w-4" />
            <h3>12. Container Collector</h3>
          </div>
          <p className="text-sm text-slate-300">
            Audits container security configuration: Docker daemon config, user namespace remapping, live-restore, no-new-privileges, and inter-container communication controls.
          </p>
        </div>

      </section>
    </DocLayout>
  );
};
