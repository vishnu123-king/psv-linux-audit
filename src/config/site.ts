export const siteConfig = {
  name: "PSV Linux Security Auditor",
  shortName: "PSV Auditor",
  tagline: "Automated Linux Security Auditing and Configuration Compliance Platform",
  description: "Collect real Linux security state. Evaluate it using deterministic policies. Generate evidence-backed findings. Track configuration drift. Remediate with explicit approval. Verify the result.",
  version: "1.4.2",
  docVersion: "v1.4.x",
  githubUrl: import.meta.env.VITE_GITHUB_REPOSITORY_URL || "https://github.com/psv-security/psv-linux-security-auditor",
  heroImage: "/src/assets/images/psv_hero_banner_1790882435539.jpg",
  architectureImage: "/src/assets/images/psv_architecture_preview_1790882448649.jpg",
  stats: {
    collectorsCount: 12,
    rulesCount: 60,
    domainsCount: 11,
    supportedDistros: ["Ubuntu", "Debian"],
    license: "Open Source"
  },
  nav: [
    { name: "Overview", path: "/" },
    { name: "Features", path: "/features" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Architecture", path: "/architecture" },
    { name: "Documentation", path: "/docs" },
    { name: "Installation", path: "/installation" },
    { name: "CLI Reference", path: "/cli" },
    { name: "Security Model", path: "/security" },
    { name: "Author", path: "/author" },
    { name: "About", path: "/about" },
  ],
  docsNav: [
    {
      title: "Getting Started",
      items: [
        { title: "Overview", path: "/docs" },
        { title: "Quick Start Guide", path: "/quick-start" },
        { title: "Real Local Linux Audit", path: "/quick-start/local-audit" },
        { title: "Problem Statement", path: "/problems" },
      ],
    },
    {
      title: "Core Concepts",
      items: [
        { title: "12 Linux Collectors", path: "/collectors" },
        { title: "YAML Rule Engine (60 Rules)", path: "/rules" },
        { title: "Findings & Evidence", path: "/findings" },
        { title: "Configuration Drift", path: "/drift" },
        { title: "Approval-Gated Remediation", path: "/remediation" },
        { title: "Verification Pipeline", path: "/how-it-works#verification" },
        { title: "Reports & Exports", path: "/reports" },
      ],
    },
    {
      title: "Operation & Admin",
      items: [
        { title: "CLI Command Reference", path: "/cli" },
        { title: "Installation & Setup", path: "/installation" },
        { title: "Configuration (.env)", path: "/configuration" },
        { title: "Production Deployment", path: "/deployment" },
        { title: "Testing & Validation", path: "/testing" },
        { title: "Troubleshooting & Diagnostics", path: "/troubleshooting" },
      ],
    },
    {
      title: "Architecture & Security",
      items: [
        { title: "System Architecture", path: "/architecture" },
        { title: "Security Boundary & RBAC", path: "/security" },
        { title: "Technology Stack", path: "/about/technology" },
      ],
    },
    {
      title: "Developer & Community",
      items: [
        { title: "Development Guide", path: "/development" },
        { title: "Collector Development", path: "/development#collectors" },
        { title: "Rule Development", path: "/development#rules" },
        { title: "Contributing Guide", path: "/contributing" },
        { title: "Project Story & Philosophy", path: "/about/project" },
        { title: "Author Profile", path: "/author" },
        { title: "About PSV", path: "/about" },
      ],
    },
  ],
};
