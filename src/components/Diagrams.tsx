import React, { useState } from 'react';
import {
  Server,
  Shield,
  Database,
  Terminal,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Lock,
  GitCompare,
  FileCheck2,
  Workflow,
  Radio,
  Clock,
  Eye,
  FileCode2,
} from 'lucide-react';

export const ProductArchitectureDiagram: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>('fastapi');

  return (
    <div className="my-8 rounded-xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl shadow-black/50">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
        <div>
          <h3 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
            <Workflow className="h-5 w-5 text-emerald-400" />
            PSV High-Level Architecture
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Decoupled control plane and worker architecture with real-time WebSockets and AsyncSSH
          </p>
        </div>
        <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-800 text-emerald-400 border border-slate-700/60">
          Interactive Diagram — Click nodes for details
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Visual Flow Container */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Top Layer: Entry points */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setActiveComponent('web-console')}
              className={`p-3.5 rounded-lg border text-left transition ${
                activeComponent === 'web-console'
                  ? 'border-emerald-500 bg-emerald-500/10 shadow-md shadow-emerald-500/10'
                  : 'border-slate-800 bg-slate-950/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-200">
                <Radio className="h-4 w-4 text-emerald-400" />
                <span>Web Console</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">React + TypeScript + WebSockets</p>
            </button>

            <button
              onClick={() => setActiveComponent('cli')}
              className={`p-3.5 rounded-lg border text-left transition ${
                activeComponent === 'cli'
                  ? 'border-emerald-500 bg-emerald-500/10 shadow-md shadow-emerald-500/10'
                  : 'border-slate-800 bg-slate-950/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-200">
                <Terminal className="h-4 w-4 text-emerald-400" />
                <span>Python CLI (`psv`)</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Typer + Async HTTP Client</p>
            </button>
          </div>

          <div className="flex justify-center">
            <div className="h-6 w-0.5 bg-gradient-to-b from-emerald-500 to-slate-700"></div>
          </div>

          {/* Middle Layer: FastAPI Control Plane */}
          <button
            onClick={() => setActiveComponent('fastapi')}
            className={`w-full p-4 rounded-xl border text-left transition ${
              activeComponent === 'fastapi'
                ? 'border-emerald-500 bg-emerald-500/10 shadow-md shadow-emerald-500/10'
                : 'border-slate-800 bg-slate-950/80 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-mono font-bold text-slate-100">
                <Server className="h-5 w-5 text-emerald-400" />
                <span>FastAPI Control Plane</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                Python 3.12+ / Uvicorn
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1.5">
              Enforces Authentication, RBAC, Secret Redaction, SSRF Validation & Job Dispatch
            </p>
          </button>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex justify-center">
              <div className="h-6 w-0.5 bg-slate-700"></div>
            </div>
            <div className="flex justify-center">
              <div className="h-6 w-0.5 bg-slate-700"></div>
            </div>
          </div>

          {/* Core State Layer */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setActiveComponent('postgres')}
              className={`p-3.5 rounded-lg border text-left transition ${
                activeComponent === 'postgres'
                  ? 'border-emerald-500 bg-emerald-500/10 shadow-md shadow-emerald-500/10'
                  : 'border-slate-800 bg-slate-950/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-200">
                <Database className="h-4 w-4 text-cyan-400" />
                <span>PostgreSQL</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">SQLAlchemy + Alembic Migrations</p>
            </button>

            <button
              onClick={() => setActiveComponent('rabbitmq')}
              className={`p-3.5 rounded-lg border text-left transition ${
                activeComponent === 'rabbitmq'
                  ? 'border-emerald-500 bg-emerald-500/10 shadow-md shadow-emerald-500/10'
                  : 'border-slate-800 bg-slate-950/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-200">
                <Layers className="h-4 w-4 text-teal-400" />
                <span>RabbitMQ Queue</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">aio-pika Async Message Broker</p>
            </button>
          </div>

          <div className="flex justify-center">
            <div className="h-6 w-0.5 bg-slate-700"></div>
          </div>

          {/* Execution Layer: Worker & Target */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => setActiveComponent('worker')}
              className={`p-3.5 rounded-lg border text-left transition ${
                activeComponent === 'worker'
                  ? 'border-emerald-500 bg-emerald-500/10 shadow-md shadow-emerald-500/10'
                  : 'border-slate-800 bg-slate-950/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-200">
                <Cpu className="h-4 w-4 text-emerald-400" />
                <span>Assessment Worker</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">12 Modular Collectors + YAML Rule Engine</p>
            </button>

            <button
              onClick={() => setActiveComponent('target')}
              className={`p-3.5 rounded-lg border text-left transition ${
                activeComponent === 'target'
                  ? 'border-emerald-500 bg-emerald-500/10 shadow-md shadow-emerald-500/10'
                  : 'border-slate-800 bg-slate-950/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-200">
                <Shield className="h-4 w-4 text-emerald-400" />
                <span>Target Linux Host</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">AsyncSSH + Predefined Command Registry</p>
            </button>
          </div>

        </div>

        {/* Component Detail Sidebar Panel */}
        <div className="lg:col-span-4 rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-3 font-sans text-xs">
          {activeComponent === 'fastapi' && (
            <>
              <div className="flex items-center gap-2 text-emerald-400 font-mono font-semibold text-sm">
                <Server className="h-4 w-4" />
                FastAPI Control Plane
              </div>
              <p className="text-slate-300 leading-relaxed">
                The core API server built on FastAPI and Uvicorn. Serves both the React Web Console and the Python Typer CLI through unified REST and WebSocket endpoints.
              </p>
              <div className="border-t border-slate-800 pt-2 space-y-1 text-slate-400 font-mono text-[11px]">
                <div className="text-slate-200 font-bold">Key Responsibilities:</div>
                <div>• JWT Authentication & RBAC Enforcer</div>
                <div>• SSRF Target Host Validation</div>
                <div>• Secret Redaction Pipeline</div>
                <div>• Assessment Dispatch to RabbitMQ</div>
              </div>
            </>
          )}

          {activeComponent === 'web-console' && (
            <>
              <div className="flex items-center gap-2 text-emerald-400 font-mono font-semibold text-sm">
                <Radio className="h-4 w-4" />
                React Web Console
              </div>
              <p className="text-slate-300 leading-relaxed">
                Modern, responsive React dashboard providing full visibility into registered Linux hosts, assessment state, findings breakdown, drift comparison, and approval-gated remediation.
              </p>
              <div className="border-t border-slate-800 pt-2 space-y-1 text-slate-400 font-mono text-[11px]">
                <div>• Real-time progress via WebSockets</div>
                <div>• Audit log & report generation</div>
              </div>
            </>
          )}

          {activeComponent === 'cli' && (
            <>
              <div className="flex items-center gap-2 text-emerald-400 font-mono font-semibold text-sm">
                <Terminal className="h-4 w-4" />
                Python CLI (`psv`)
              </div>
              <p className="text-slate-300 leading-relaxed">
                Command-line application built with Typer. Operates purely by communicating with the FastAPI control plane — never bypasses authorization or writes directly to the database.
              </p>
              <div className="border-t border-slate-800 pt-2 space-y-1 text-slate-400 font-mono text-[11px]">
                <div>• Supports `--format json` for CI/CD</div>
                <div>• Built-in `psv doctor` diagnostics</div>
              </div>
            </>
          )}

          {activeComponent === 'postgres' && (
            <>
              <div className="flex items-center gap-2 text-cyan-400 font-mono font-semibold text-sm">
                <Database className="h-4 w-4" />
                PostgreSQL Database
              </div>
              <p className="text-slate-300 leading-relaxed">
                Persistent relational storage managed via SQLAlchemy ORM and Alembic schema migrations. Stores hosts, profiles, assessments, findings, evidence snapshots, and remediation logs.
              </p>
            </>
          )}

          {activeComponent === 'rabbitmq' && (
            <>
              <div className="flex items-center gap-2 text-teal-400 font-mono font-semibold text-sm">
                <Layers className="h-4 w-4" />
                RabbitMQ Message Broker
              </div>
              <p className="text-slate-300 leading-relaxed">
                Asynchronous task queue using `aio-pika`. Ensures reliable, decoupled job distribution between the API control plane and worker processes.
              </p>
            </>
          )}

          {activeComponent === 'worker' && (
            <>
              <div className="flex items-center gap-2 text-emerald-400 font-mono font-semibold text-sm">
                <Cpu className="h-4 w-4" />
                Assessment Worker
              </div>
              <p className="text-slate-300 leading-relaxed">
                Worker process consuming audit jobs. Executes 12 modular collectors over AsyncSSH, transforms raw command output into observations, and evaluates against 60 deterministic YAML rules.
              </p>
            </>
          )}

          {activeComponent === 'target' && (
            <>
              <div className="flex items-center gap-2 text-emerald-400 font-mono font-semibold text-sm">
                <Shield className="h-4 w-4" />
                Authorized Target Linux Host
              </div>
              <p className="text-slate-300 leading-relaxed">
                Remote or local Linux machine (Ubuntu, Debian). Collectors execute ONLY strictly predefined read commands from the command registry over SSH with host-key verification.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export const AuditLifecycleDiagram: React.FC = () => {
  const steps = [
    { name: 'CONNECT', desc: 'SSH host-key verification & credential handshake' },
    { name: 'DISCOVER', desc: 'Identify OS, kernel, distribution & packages' },
    { name: 'COLLECT', desc: '12 modular collectors gather security state' },
    { name: 'NORMALIZE', desc: 'Transform raw outputs into structured observations' },
    { name: 'EVALUATE', desc: 'Deterministic evaluation against 60 YAML rules' },
    { name: 'FINDINGS', desc: 'Generate evidence-backed violation records' },
    { name: 'STORE', desc: 'Persist snapshot evidence & historical records' },
    { name: 'REPORT', desc: 'Export HTML, JSON or PDF audit summary' },
    { name: 'REMEDIATE', desc: 'Approval-gated plan, backup & execution' },
    { name: 'VERIFY', desc: 'Re-collect state & re-evaluate rule status' },
  ];

  return (
    <div className="my-8 rounded-xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl shadow-black/50">
      <h3 className="font-display text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2 mb-2">
        <Clock className="h-5 w-5 text-emerald-400" />
        Complete 10-Stage Audit Lifecycle
      </h3>
      <p className="text-xs text-slate-400 mb-6">
        From initial SSH discovery to verified remediation — a predictable, reproducible security pipeline.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {steps.map((s, idx) => (
          <div
            key={s.name}
            className="p-3 rounded-lg border border-slate-800 bg-slate-950/90 hover:border-emerald-500/50 transition group"
          >
            <div className="flex items-center justify-between font-mono text-[10px] text-slate-500 mb-1">
              <span>STAGE {idx + 1}</span>
              <span className="text-emerald-400/60 font-bold group-hover:text-emerald-400">0{idx + 1}</span>
            </div>
            <div className="font-mono text-xs font-bold text-slate-200 group-hover:text-emerald-300 transition-colors">
              {s.name}
            </div>
            <p className="text-[11px] text-slate-400 mt-1 leading-tight">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SecurityBoundaryDiagram: React.FC = () => {
  return (
    <div className="my-8 rounded-xl border border-slate-800 bg-slate-900/90 p-6 shadow-xl shadow-black/50">
      <div className="flex items-center gap-2 border-b border-slate-800 pb-4 mb-6">
        <Lock className="h-5 w-5 text-emerald-400" />
        <div>
          <h3 className="font-display text-base sm:text-lg font-bold text-slate-100">
            PSV Security Boundary & Command Registry Safeguards
          </h3>
          <p className="text-xs text-slate-400">
            PSV is intentionally NOT a remote command runner. Arbitrary shell execution is strictly blocked.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Prohibited path */}
        <div className="p-4 rounded-xl border border-red-900/40 bg-red-950/10 space-y-3">
          <div className="flex items-center justify-between font-mono text-xs text-red-400 font-bold">
            <span className="flex items-center gap-1.5">
              <AlertTriangle className="h-4 w-4" /> BANNED OPERATIONS
            </span>
            <span className="px-2 py-0.5 rounded bg-red-900/40 text-[10px]">INTENTIONALLY OMITTED</span>
          </div>

          <div className="p-3 rounded bg-slate-950 border border-slate-800 font-mono text-xs text-slate-400 line-through space-y-1">
            <div>psv execute "arbitrary_command"</div>
            <div>POST /api/v1/execute-shell</div>
            <div>sudo bash -c "rm -rf /"</div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            The platform never exposes arbitrary remote shell endpoints to users or APIs. This eliminates remote command injection risks.
          </p>
        </div>

        {/* Allowed path */}
        <div className="p-4 rounded-xl border border-emerald-900/40 bg-emerald-950/10 space-y-3">
          <div className="flex items-center justify-between font-mono text-xs text-emerald-400 font-bold">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4" /> PREDEFINED COMMAND REGISTRY
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-900/40 text-[10px]">ENFORCED BY WORKER</span>
          </div>

          <div className="p-3 rounded bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 space-y-1">
            <div>SSH Collector → cat /etc/ssh/sshd_config</div>
            <div>Firewall Collector → ufw status verbose</div>
            <div>Kernel Collector → sysctl -a</div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Collectors invoke ONLY pre-approved, read-only commands from an internal command registry over secure AsyncSSH sessions.
          </p>
        </div>
      </div>
    </div>
  );
};
