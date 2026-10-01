import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { CodeBlock } from '../components/CodeBlock';
import { Terminal, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

interface LocalAuditGuidePageProps {
  onNavigate: (path: string) => void;
}

export const LocalAuditGuidePage: React.FC<LocalAuditGuidePageProps> = ({ onNavigate }) => {
  const tocItems = [
    { id: 'local-audit-overview', title: 'Real Local Linux Audit Workflow', level: 1 },
    { id: 'step-1-ip', title: '1. Identify Local System Parameters', level: 2 },
    { id: 'step-2-register', title: '2. Register Machine as Target', level: 2 },
    { id: 'step-3-test', title: '3. Verify Local SSH Handshake', level: 2 },
    { id: 'step-4-profiles', title: '4. Select Security Profile', level: 2 },
    { id: 'step-5-assessment', title: '5. Execute Audit Job', level: 2 },
    { id: 'step-6-review', title: '6. Review Findings & Drift', level: 2 },
  ];

  return (
    <DocLayout
      currentPath="/quick-start/local-audit"
      onNavigate={onNavigate}
      title="Real Local Linux Audit Guide"
      category="Getting Started"
      description="Detailed step-by-step instructions on how to use PSV to audit the security posture of the local Linux machine on which it is installed."
      tocItems={tocItems}
    >
      <section id="local-audit-overview" className="space-y-4 pt-2">
        <p>
          A common use case for PSV Linux Security Auditor is self-auditing: executing security assessment rules against the host machine itself via loopback or local IP address over SSH.
        </p>
      </section>

      {/* Step 1 */}
      <section id="step-1-ip" className="space-y-3 pt-6 border-t border-slate-800">
        <h3 className="font-mono text-sm font-bold text-emerald-400">1. Identify Local System Parameters</h3>
        <p>Check local IP address and verify SSH service status:</p>
        <CodeBlock
          title="Checking System IP and SSH Service"
          code={`hostname -I
sudo systemctl status ssh`}
        />
      </section>

      {/* Step 2 */}
      <section id="step-2-register" className="space-y-3 pt-6 border-t border-slate-800">
        <h3 className="font-mono text-sm font-bold text-emerald-400">2. Register Local Machine as Target</h3>
        <p>Use the convenience command <code className="text-emerald-400 font-mono">psv host add-local</code> to register the machine:</p>
        <CodeBlock
          title="Registering Local Target"
          code={`psv host add-local`}
        />
      </section>

      {/* Step 3 */}
      <section id="step-3-test" className="space-y-3 pt-6 border-t border-slate-800">
        <h3 className="font-mono text-sm font-bold text-emerald-400">3. Verify Local SSH Handshake</h3>
        <p>Confirm that PSV's SSH connector can authenticate and establish a session:</p>
        <CodeBlock
          title="Testing Connection"
          code={`psv host test local-linux`}
        />
      </section>

      {/* Step 4 */}
      <section id="step-4-profiles" className="space-y-3 pt-6 border-t border-slate-800">
        <h3 className="font-mono text-sm font-bold text-emerald-400">4. Select Security Profile</h3>
        <p>View available security baseline profiles:</p>
        <CodeBlock
          title="Listing Profiles"
          code={`psv profile list`}
        />
      </section>

      {/* Step 5 */}
      <section id="step-5-assessment" className="space-y-3 pt-6 border-t border-slate-800">
        <h3 className="font-mono text-sm font-bold text-emerald-400">5. Execute Audit Job</h3>
        <p>Trigger the assessment using the <code className="text-emerald-400 font-mono">server</code> profile:</p>
        <CodeBlock
          title="Running Assessment"
          code={`psv audit run local-linux --profile server
psv audit status 42`}
        />
      </section>

      {/* Step 6 */}
      <section id="step-6-review" className="space-y-3 pt-6 border-t border-slate-800">
        <h3 className="font-mono text-sm font-bold text-emerald-400">6. Review Findings & Historical Drift</h3>
        <p>List findings, inspect details, and compare historical assessments:</p>
        <CodeBlock
          title="Inspecting Audit Results"
          code={`psv finding list --severity HIGH
psv finding show 101
psv drift compare local-linux
psv report generate 42`}
        />
      </section>
    </DocLayout>
  );
};
