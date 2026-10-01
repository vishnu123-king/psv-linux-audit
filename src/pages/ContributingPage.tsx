import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { CodeBlock } from '../components/CodeBlock';
import { Github, FileCode2, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/site';

interface ContributingPageProps {
  onNavigate: (path: string) => void;
}

export const ContributingPage: React.FC<ContributingPageProps> = ({ onNavigate }) => {
  const tocItems = [
    { id: 'contrib-guidelines', title: 'Contribution Principles', level: 1 },
    { id: 'contrib-workflow', title: 'Pull Request Workflow', level: 1 },
  ];

  return (
    <DocLayout
      currentPath="/contributing"
      onNavigate={onNavigate}
      title="Contributing Guide"
      category="Development"
      description="Guidelines for open-source contributors, bug reporting, code formatting, and pull request submissions."
      tocItems={tocItems}
    >
      <section id="contrib-guidelines" className="space-y-4 pt-2">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Github className="h-5 w-5 text-emerald-400" />
          Open Source Guidelines
        </h2>
        <p>
          We welcome contributions to PSV Linux Security Auditor! Please ensure all pull requests maintain deterministic rule evaluation, fail-closed security guarantees, and secret sanitization.
        </p>
      </section>

      <section id="contrib-workflow" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-emerald-400" />
          Pre-PR Checklist
        </h2>

        <CodeBlock
          title="Pre-Submission Commands"
          code={`# 1. Validate rule pack
python scripts/validate_rules.py

# 2. Run full test suite
pytest -v

# 3. Check Python syntax
python -m compileall backend cli scripts

# 4. Check frontend linting
cd frontend && npm run lint`}
        />
      </section>
    </DocLayout>
  );
};
