import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { Shield, BookOpen, Cpu } from 'lucide-react';

interface ProjectStoryPageProps {
  onNavigate: (path: string) => void;
}

export const ProjectStoryPage: React.FC<ProjectStoryPageProps> = ({ onNavigate }) => {
  const tocItems = [
    { id: 'story-philosophy', title: 'Engineering & Research Philosophy', level: 1 },
    { id: 'research-cycle', title: 'System Engineering Research Cycle', level: 1 },
  ];

  return (
    <DocLayout
      currentPath="/about/project"
      onNavigate={onNavigate}
      title="Project Research & Engineering Story"
      category="Project"
      description="The research principles and security engineering methodology behind PSV Linux Security Auditor."
      tocItems={tocItems}
    >
      <section id="story-philosophy" className="space-y-4 pt-2">
        <p>
          PSV was designed as an engineering research platform to address fundamental gaps in Linux compliance testing. By enforcing deterministic rule evaluation, explicit evidence paths, and fail-closed state mechanics, PSV establishes a reliable security baseline.
        </p>
      </section>

      <section id="research-cycle" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Cpu className="h-5 w-5 text-emerald-400" />
          Broad System Engineering Life Cycle
        </h2>

        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900 font-mono text-xs text-slate-300 space-y-1">
          <div>DEFINE → PROVISION → BUILD → DEPLOY → TEST → MONITOR → COLLECT → ANALYZE → DECIDE → DESTROY / PROMOTE</div>
        </div>
      </section>
    </DocLayout>
  );
};
