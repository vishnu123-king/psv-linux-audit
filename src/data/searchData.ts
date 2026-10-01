export interface SearchItem {
  id: string;
  title: string;
  category: "CLI Command" | "Collector" | "Rule Engine" | "Installation" | "Architecture" | "Troubleshooting" | "Security" | "Guide";
  description: string;
  path: string;
  keywords: string[];
  codeSnippet?: string;
}

export const searchIndex: SearchItem[] = [
  // CLI Commands
  {
    id: "cli-psv-doctor",
    title: "psv doctor",
    category: "CLI Command",
    description: "Performs diagnostic health checks on Python, CLI, API, PostgreSQL, RabbitMQ, Worker, Rule pack, and configuration.",
    path: "/cli#psv-doctor",
    keywords: ["doctor", "health", "diagnose", "check", "debug"],
    codeSnippet: "psv doctor"
  },
  {
    id: "cli-psv-server-status",
    title: "psv server status",
    category: "CLI Command",
    description: "Checks whether the PSV API control plane, database, RabbitMQ, and authentication service are online and reachable.",
    path: "/cli#psv-server-status",
    keywords: ["server", "status", "api", "health", "online"],
    codeSnippet: "psv server status"
  },
  {
    id: "cli-psv-host-add-local",
    title: "psv host add-local",
    category: "CLI Command",
    description: "Convenience command for auto-discovering and registering the local Linux machine where PSV is installed.",
    path: "/cli#psv-host-add-local",
    keywords: ["host", "add-local", "register", "localhost", "local"],
    codeSnippet: "psv host add-local"
  },
  {
    id: "cli-psv-host-test",
    title: "psv host test",
    category: "CLI Command",
    description: "Tests SSH connectivity, host-key verification, and target authentication for a registered Linux host.",
    path: "/cli#psv-host-test",
    keywords: ["host", "test", "ssh", "connectivity", "verify"],
    codeSnippet: "psv host test local-linux"
  },
  {
    id: "cli-psv-audit-run",
    title: "psv audit run",
    category: "CLI Command",
    description: "Triggers a new security assessment against a registered Linux target using a specified profile.",
    path: "/cli#psv-audit-run",
    keywords: ["audit", "run", "scan", "assessment", "profile"],
    codeSnippet: "psv audit run local-linux --profile server"
  },
  {
    id: "cli-psv-audit-status",
    title: "psv audit status",
    category: "CLI Command",
    description: "Displays the real-time execution status and phase of an ongoing assessment.",
    path: "/cli#psv-audit-status",
    keywords: ["audit", "status", "progress", "state", "job"],
    codeSnippet: "psv audit status 42"
  },
  {
    id: "cli-psv-finding-list",
    title: "psv finding list",
    category: "CLI Command",
    description: "Lists security findings filtered by severity (CRITICAL, HIGH, MEDIUM, LOW) or target host.",
    path: "/cli#psv-finding-list",
    keywords: ["finding", "list", "severity", "vulnerability", "violations"],
    codeSnippet: "psv finding list --severity HIGH"
  },
  {
    id: "cli-psv-drift-compare",
    title: "psv drift compare",
    category: "CLI Command",
    description: "Compares historical assessments for a host to detect configuration drift and unexpected changes.",
    path: "/cli#psv-drift-compare",
    keywords: ["drift", "compare", "changes", "history", "diff"],
    codeSnippet: "psv drift compare local-linux"
  },
  {
    id: "cli-psv-remediation-plan",
    title: "psv remediation plan",
    category: "CLI Command",
    description: "Generates a dry-run remediation plan with current/desired state, backup targets, and validation steps without modifying the system.",
    path: "/cli#psv-remediation-plan",
    keywords: ["remediation", "plan", "dry-run", "fix", "proposal"],
    codeSnippet: "psv remediation plan 101"
  },
  {
    id: "cli-psv-remediation-approve",
    title: "psv remediation approve",
    category: "CLI Command",
    description: "Approves a dry-run remediation plan for execution. Requires administrator privileges.",
    path: "/cli#psv-remediation-approve",
    keywords: ["remediation", "approve", "authorization", "gate"],
    codeSnippet: "psv remediation approve 101"
  },
  {
    id: "cli-psv-verify",
    title: "psv verify",
    category: "CLI Command",
    description: "Re-collects state and re-evaluates rules to verify if a remediation successfully brought the target into compliance.",
    path: "/cli#psv-verify",
    keywords: ["verify", "re-collect", "compliance", "check"],
    codeSnippet: "psv verify 101"
  },

  // Collectors
  {
    id: "col-ssh",
    title: "SSH Collector",
    category: "Collector",
    description: "Examines sshd_config for PermitRootLogin, PasswordAuthentication, PubkeyAuthentication, X11Forwarding, MaxAuthTries, timeouts.",
    path: "/collectors#ssh",
    keywords: ["ssh", "sshd_config", "root login", "password authentication", "keys"]
  },
  {
    id: "col-sudo",
    title: "Sudo Collector",
    category: "Collector",
    description: "Audits sudoers configuration, NOPASSWD directives, excessive user privileges, wildcard permissions, use_pty, and secure paths.",
    path: "/collectors#sudo",
    keywords: ["sudo", "sudoers", "nopasswd", "privilege escalation"]
  },
  {
    id: "col-kernel",
    title: "Kernel Collector",
    category: "Collector",
    description: "Audits ASLR, kptr_restrict, dmesg_restrict, protected symlinks/hardlinks, and sysctl security parameters.",
    path: "/collectors#kernel",
    keywords: ["kernel", "sysctl", "aslr", "kptr_restrict", "dmesg_restrict"]
  },
  {
    id: "col-firewall",
    title: "Firewall Collector",
    category: "Collector",
    description: "Audits UFW status, incoming default policies, active iptables and nftables rulesets.",
    path: "/collectors#firewall",
    keywords: ["firewall", "ufw", "iptables", "nftables", "incoming policy"]
  },
  {
    id: "col-container",
    title: "Container Collector",
    category: "Collector",
    description: "Audits Docker daemon configuration, user namespace remapping, live-restore, no-new-privileges, and ICC.",
    path: "/collectors#container",
    keywords: ["container", "docker", "namespaces", "live-restore", "no-new-privileges"]
  },

  // Rule Engine
  {
    id: "rule-yaml-engine",
    title: "YAML Security Policy Engine",
    category: "Rule Engine",
    description: "60 deterministic rules across 11 domains using explicit operators (equals, contains, regex, in, AND, OR, NOT).",
    path: "/rules",
    keywords: ["rules", "yaml", "policy", "operators", "deterministic", "evaluator"]
  },
  {
    id: "rule-fail-closed",
    title: "Fail-Closed Security Model & UNKNOWN state",
    category: "Security",
    description: "When evidence is unavailable or collector fails, rule evaluation outputs UNKNOWN instead of false PASS.",
    path: "/security#fail-closed",
    keywords: ["fail-closed", "unknown", "false confidence", "collector error"]
  },

  // Installation
  {
    id: "inst-quick",
    title: "Automated Production Installation",
    category: "Installation",
    description: "Runs ./install.sh with --mode production --with-systemd to configure services, PostgreSQL, RabbitMQ, and permissions.",
    path: "/installation",
    keywords: ["install", "install.sh", "production", "systemd", "quickstart"],
    codeSnippet: "sudo ./install.sh --mode production --with-systemd"
  },
  {
    id: "inst-manual",
    title: "Manual Step-by-Step Installation",
    category: "Installation",
    description: "Manual setup for virtualenv, backend FastAPI, Alembic migrations, assessment worker, and React frontend.",
    path: "/installation#manual",
    keywords: ["manual", "alembic", "virtualenv", "uvicorn", "pip"]
  },

  // Troubleshooting
  {
    id: "tb-api",
    title: "Troubleshooting API & Worker Failures",
    category: "Troubleshooting",
    description: "Inspect systemd services psv-api and psv-worker via systemctl status and journalctl logs.",
    path: "/troubleshooting#systemd-logs",
    keywords: ["troubleshooting", "systemctl", "journalctl", "api failed", "worker logs"],
    codeSnippet: "sudo journalctl -u psv-api -n 100"
  },
  {
    id: "tb-rule-val",
    title: "Validate Rules & Production Config",
    category: "Troubleshooting",
    description: "Run validate_rules.py, verify_installation.py, and verify_production_config.py to detect errors.",
    path: "/troubleshooting#validation-scripts",
    keywords: ["validate_rules", "verify_installation", "verify_production_config", "pytest"],
    codeSnippet: "python scripts/validate_rules.py"
  }
];
