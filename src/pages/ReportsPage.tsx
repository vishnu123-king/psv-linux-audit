import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { CodeBlock } from '../components/CodeBlock';
import { FileCheck2, Download, Terminal } from 'lucide-react';

interface ReportsPageProps {
  onNavigate: (path: string) => void;
}

export const ReportsPage: React.FC<ReportsPageProps> = ({ onNavigate }) => {
  const tocItems = [
    { id: 'reports-overview', title: 'Audit Report Exports', level: 1 },
    { id: 'report-formats', title: 'Supported Formats (JSON, HTML, PDF)', level: 1 },
    { id: 'report-cli', title: 'Generating Reports via CLI', level: 1 },
  ];

  return (
    <DocLayout
      currentPath="/reports"
      onNavigate={onNavigate}
      title="Audit Reports & Compliance Exports"
      category="Core Concepts"
      description="Documentation on generating HTML audit summaries, PDF compliance reports, and machine-readable JSON exports."
      tocItems={tocItems}
    >
      <section id="reports-overview" className="space-y-4 pt-2">
        <p>
          Once an assessment finishes, PSV compiles findings, evidence paths, rule evaluations, and host metadata into exportable audit reports.
        </p>
      </section>

      <section id="report-formats" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Download className="h-5 w-5 text-emerald-400" />
          Supported Export Formats
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs my-4">
          <div className="p-3 rounded bg-slate-900 border border-slate-800">
            <span className="text-emerald-400 font-bold block mb-1">JSON</span>
            <span className="text-slate-400">Machine-readable format for CI/CD pipelines, SIEM ingest, and automation scripts.</span>
          </div>
          <div className="p-3 rounded bg-slate-900 border border-slate-800">
            <span className="text-emerald-400 font-bold block mb-1">HTML</span>
            <span className="text-slate-400">Self-contained responsive dashboard report for security audits and management reviews.</span>
          </div>
          <div className="p-3 rounded bg-slate-900 border border-slate-800">
            <span className="text-emerald-400 font-bold block mb-1">PDF-Ready</span>
            <span className="text-slate-400">Formatted output suitable for archiving and formal security compliance documentation.</span>
          </div>
        </div>
      </section>

      <section id="report-cli" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Terminal className="h-5 w-5 text-emerald-400" />
          Generating Reports
        </h2>

        <CodeBlock
          title="CLI Report Generation"
          code={`# Generate report for assessment #42
psv report generate 42`}
        />
      </section>
    </DocLayout>
  );
};
