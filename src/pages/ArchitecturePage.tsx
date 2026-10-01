import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { ProductArchitectureDiagram } from '../components/Diagrams';
import { CodeBlock } from '../components/CodeBlock';
import { Server, Database, Layers, Cpu, Shield, Terminal, Radio } from 'lucide-react';

interface ArchitecturePageProps {
  onNavigate: (path: string) => void;
}

export const ArchitecturePage: React.FC<ArchitecturePageProps> = ({ onNavigate }) => {
  const tocItems = [
    { id: 'arch-diagram', title: 'System Architecture Diagram', level: 1 },
    { id: 'backend-control-plane', title: 'FastAPI Control Plane', level: 1 },
    { id: 'database-queue', title: 'PostgreSQL & RabbitMQ', level: 1 },
    { id: 'worker-engine', title: 'Assessment Worker & AsyncSSH', level: 1 },
    { id: 'cli-web-console', title: 'Python CLI & React Console', level: 1 },
    { id: 'deployment-topologies', title: 'Deployment Topologies', level: 1 },
  ];

  return (
    <DocLayout
      currentPath="/architecture"
      onNavigate={onNavigate}
      title="System Architecture & Technology Stack"
      category="Architecture"
      description="Technical documentation of PSV's decoupled architecture, control plane, background workers, storage layer, and client interfaces."
      tocItems={tocItems}
    >
      <section id="arch-diagram" className="space-y-4 pt-2">
        <ProductArchitectureDiagram />
      </section>

      {/* Control Plane */}
      <section id="backend-control-plane" className="space-y-4 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-lg">
          <Server className="h-5 w-5" />
          <h2>1. FastAPI Control Plane Backend</h2>
        </div>
        <p>
          The core API server built with Python 3.12+ and FastAPI running on Uvicorn. Serves REST endpoints for system administration and WebSocket channels for live assessment progress streaming.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
          <li><strong>Pydantic v2:</strong> Strict request/response payload validation and schema enforcement.</li>
          <li><strong>JWT Auth & RBAC:</strong> Enforces user session security across <code>ADMIN</code>, <code>SECURITY_ANALYST</code>, <code>OPERATOR</code>, and <code>VIEWER</code> roles.</li>
          <li><strong>Secret Redaction:</strong> Automatically strips passwords, private keys, and authorization bearer tokens before storing logs or returning evidence.</li>
          <li><strong>SSRF Validation:</strong> Sanitizes host IP addresses and hostnames to prevent server-side request forgery attacks.</li>
        </ul>
      </section>

      {/* Database & Queue */}
      <section id="database-queue" className="space-y-4 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-cyan-400 font-mono font-bold text-lg">
          <Database className="h-5 w-5" />
          <h2>2. PostgreSQL Database & RabbitMQ Messaging Broker</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 font-mono text-xs">
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/90 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-bold">
              <Database className="h-4 w-4" />
              <span>PostgreSQL + Alembic</span>
            </div>
            <p className="text-slate-400 font-sans">
              Primary relational data store holding host registries, rule packs, profile definitions, historical assessment records, findings, evidence snapshots, and audit trail logs.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/90 space-y-2">
            <div className="flex items-center gap-2 text-teal-400 font-bold">
              <Layers className="h-4 w-4" />
              <span>RabbitMQ + aio-pika</span>
            </div>
            <p className="text-slate-400 font-sans">
              Asynchronous message queue distributing audit jobs from the FastAPI control plane to assessment worker processes without blocking API requests.
            </p>
          </div>
        </div>
      </section>

      {/* Worker */}
      <section id="worker-engine" className="space-y-4 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-lg">
          <Cpu className="h-5 w-5" />
          <h2>3. Assessment Worker & AsyncSSH Execution Engine</h2>
        </div>
        <p>
          The background worker process (<code>python -m backend.app.workers.assessment_worker</code>) consumes audit tasks from RabbitMQ. It establishes non-blocking SSH channels using <strong>AsyncSSH</strong> to run collector commands on target hosts.
        </p>
        <CodeBlock
          title="Starting the Assessment Worker Process"
          code={`python -m backend.app.workers.assessment_worker`}
        />
      </section>

      {/* Client Interfaces */}
      <section id="cli-web-console" className="space-y-4 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-lg">
          <Terminal className="h-5 w-5" />
          <h2>4. Python CLI (`psv`) & React Web Console</h2>
        </div>
        <p>
          Both clients access identical functionality via the FastAPI backend REST/WebSocket interface:
        </p>
        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900 font-mono text-xs text-slate-300 space-y-2">
          <div>Web Console (React + Vite + Tailwind CSS)</div>
          <div className="text-slate-500">└─→ REST / WebSockets ─→ FastAPI Control Plane</div>
          <div className="pt-2">Python CLI (psv command via Typer)</div>
          <div className="text-slate-500">└─→ REST API Client ──────→ FastAPI Control Plane</div>
        </div>
      </section>

      {/* Topologies */}
      <section id="deployment-topologies" className="space-y-4 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-lg">
          <Shield className="h-5 w-5" />
          <h2>5. Deployment Topologies</h2>
        </div>
        <p>
          PSV supports both single-server standalone local auditing and distributed multi-host infrastructure auditing.
        </p>
        <div className="p-4 rounded-xl border border-slate-800 bg-slate-950 font-mono text-xs text-slate-300 space-y-1">
          <div className="text-emerald-400 font-bold">Single-Host / Local Audit Deployment Topology:</div>
          <div>Linux Server</div>
          <div> ├── FastAPI Server (Port 8000)</div>
          <div> ├── PSV Worker</div>
          <div> ├── PostgreSQL Database</div>
          <div> ├── RabbitMQ Broker</div>
          <div> ├── React Web Console (Nginx / Port 3000)</div>
          <div> └── psv CLI</div>
        </div>
      </section>
    </DocLayout>
  );
};
