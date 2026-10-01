import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { CodeBlock } from '../components/CodeBlock';
import { Server, Database, Layers, Terminal, Shield, Cpu } from 'lucide-react';

interface TechnologyStackPageProps {
  onNavigate: (path: string) => void;
}

export const TechnologyStackPage: React.FC<TechnologyStackPageProps> = ({ onNavigate }) => {
  const tocItems = [
    { id: 'backend-tech', title: 'Backend Framework & Async Execution', level: 1 },
    { id: 'db-msg-tech', title: 'Database & Messaging Broker', level: 1 },
    { id: 'frontend-tech', title: 'Frontend Web Console', level: 1 },
    { id: 'infra-tech', title: 'Infrastructure & System Services', level: 1 },
  ];

  return (
    <DocLayout
      currentPath="/about/technology"
      onNavigate={onNavigate}
      title="Technology Stack Specification"
      category="Project"
      description="Comprehensive specification of all technologies, libraries, frameworks, and infrastructure used by PSV Linux Security Auditor."
      tocItems={tocItems}
    >
      {/* Backend */}
      <section id="backend-tech" className="space-y-4 pt-2">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Server className="h-5 w-5 text-emerald-400" />
          Backend Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
          <div className="p-3 rounded bg-slate-900 border border-slate-800">
            <span className="text-emerald-400 font-bold block">Python 3.12+</span>
            <span className="text-slate-400">Core Runtime</span>
          </div>
          <div className="p-3 rounded bg-slate-900 border border-slate-800">
            <span className="text-emerald-400 font-bold block">FastAPI</span>
            <span className="text-slate-400">REST & WebSockets</span>
          </div>
          <div className="p-3 rounded bg-slate-900 border border-slate-800">
            <span className="text-emerald-400 font-bold block">Uvicorn</span>
            <span className="text-slate-400">ASGI Web Server</span>
          </div>
          <div className="p-3 rounded bg-slate-900 border border-slate-800">
            <span className="text-emerald-400 font-bold block">AsyncSSH</span>
            <span className="text-slate-400">Non-blocking SSH</span>
          </div>
          <div className="p-3 rounded bg-slate-900 border border-slate-800">
            <span className="text-emerald-400 font-bold block">Typer</span>
            <span className="text-slate-400">Python CLI Framework</span>
          </div>
          <div className="p-3 rounded bg-slate-900 border border-slate-800">
            <span className="text-emerald-400 font-bold block">PyYAML</span>
            <span className="text-slate-400">Rule Parsing</span>
          </div>
        </div>
      </section>

      {/* Database & Messaging */}
      <section id="db-msg-tech" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Database className="h-5 w-5 text-cyan-400" />
          Database & Messaging Stack
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
          <div className="p-3 rounded bg-slate-900 border border-slate-800">
            <span className="text-cyan-400 font-bold block">PostgreSQL + SQLAlchemy + Alembic</span>
            <span className="text-slate-400">Relational Database & Migration Engine</span>
          </div>
          <div className="p-3 rounded bg-slate-900 border border-slate-800">
            <span className="text-teal-400 font-bold block">RabbitMQ + aio-pika</span>
            <span className="text-slate-400">Async AMQP Message Queue</span>
          </div>
        </div>
      </section>

      {/* Frontend */}
      <section id="frontend-tech" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Terminal className="h-5 w-5 text-emerald-400" />
          Frontend Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
          <div className="p-3 rounded bg-slate-900 border border-slate-800">
            <span className="text-emerald-400 font-bold block">React 19</span>
            <span className="text-slate-400">UI Component Library</span>
          </div>
          <div className="p-3 rounded bg-slate-900 border border-slate-800">
            <span className="text-emerald-400 font-bold block">TypeScript</span>
            <span className="text-slate-400">Type Safety</span>
          </div>
          <div className="p-3 rounded bg-slate-900 border border-slate-800">
            <span className="text-emerald-400 font-bold block">Vite</span>
            <span className="text-slate-400">Build Tooling</span>
          </div>
          <div className="p-3 rounded bg-slate-900 border border-slate-800">
            <span className="text-emerald-400 font-bold block">Tailwind CSS</span>
            <span className="text-slate-400">Utility Styling</span>
          </div>
          <div className="p-3 rounded bg-slate-900 border border-slate-800">
            <span className="text-emerald-400 font-bold block">WebSockets</span>
            <span className="text-slate-400">Real-time Streaming</span>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section id="infra-tech" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Cpu className="h-5 w-5 text-emerald-400" />
          Infrastructure Stack
        </h2>
        <p className="text-sm text-slate-300">
          Ubuntu 22.04/24.04 LTS, Debian 11/12, systemd init, Nginx web server, SSH protocol.
        </p>
      </section>
    </DocLayout>
  );
};
