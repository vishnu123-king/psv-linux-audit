import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { CodeBlock } from '../components/CodeBlock';
import { GitCompare, Clock, Shield } from 'lucide-react';

interface DriftPageProps {
  onNavigate: (path: string) => void;
}

export const DriftPage: React.FC<DriftPageProps> = ({ onNavigate }) => {
  const tocItems = [
    { id: 'drift-concept', title: 'What is Configuration Drift?', level: 1 },
    { id: 'drift-compare', title: 'Comparing Historical Assessments', level: 1 },
    { id: 'drift-example', title: 'Drift Report Example', level: 1 },
  ];

  return (
    <DocLayout
      currentPath="/drift"
      onNavigate={onNavigate}
      title="Configuration Drift Detection"
      category="Core Concepts"
      description="Track and analyze security configuration changes over time between historical assessments."
      tocItems={tocItems}
    >
      <section id="drift-concept" className="space-y-4 pt-2">
        <p>
          Security is not a static one-time event. Over time, system updates, package installs, or administrative actions can cause a system's security configuration to drift away from its established baseline.
        </p>
      </section>

      <section id="drift-compare" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <GitCompare className="h-5 w-5 text-cyan-400" />
          Comparing Historical Assessments
        </h2>
        <p>
          PSV stores full normalized observation snapshots for every completed assessment. The drift engine compares sequential snapshots to highlight changes:
        </p>

        <CodeBlock
          title="Executing Drift Comparison"
          code={`psv drift compare local-linux`}
        />
      </section>

      <section id="drift-example" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Clock className="h-5 w-5 text-emerald-400" />
          Drift Output Example
        </h2>

        <CodeBlock
          title="Configuration Drift Detection Report"
          code={`=== CONFIGURATION DRIFT DETECTED: local-linux ===
Comparing Assessment #1 (2026-09-15) vs Assessment #2 (2026-10-01)

[+] SSH Configuration Changed:
    - PasswordAuthentication: false → true (SECURITY DEGRADATION)

[+] Listening Ports Changed:
    - New Listening Port: 8080 (Process: java)

[+] User Accounts Changed:
    - New User Added: 'dev-user' (UID: 1002, Shell: /bin/bash)`}
        />
      </section>
    </DocLayout>
  );
};
