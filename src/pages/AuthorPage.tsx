import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { Shield, Cpu, Terminal, Github, ExternalLink, Award, BookOpen, Wrench, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/site';

interface AuthorPageProps {
  onNavigate: (path: string) => void;
}

export const AuthorPage: React.FC<AuthorPageProps> = ({ onNavigate }) => {
  const tocItems = [
    { id: 'author-intro', title: 'Srivishnuvardhan P', level: 1 },
    { id: 'core-interests', title: 'Core Areas of Interest', level: 1 },
    { id: 'research-lab', title: 'Research Laboratory Project', level: 1 },
    { id: 'research-approach', title: 'Research-Driven Approach', level: 1 },
    { id: 'open-source-phil', title: 'Open-Source Philosophy', level: 1 },
    { id: 'ai-infra', title: 'AI + Infrastructure Research', level: 1 },
    { id: 'professional-identity', title: 'Professional Identity', level: 1 },
  ];

  return (
    <DocLayout
      currentPath="/author"
      onNavigate={onNavigate}
      title="Srivishnuvardhan P — Author & Researcher"
      category="Project"
      description="Technology Researcher and Systems Builder specializing in Cybersecurity, Cloud Infrastructure, Linux Systems, AI Agents, Automation, and Experimental Systems Research."
      tocItems={tocItems}
    >
      <section id="author-intro" className="space-y-4 pt-2">
        <div className="flex items-center gap-4 p-6 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/30 via-slate-900 to-slate-950">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
            <Shield className="h-8 w-8" />
          </div>
          <div>
            <h1 className="font-display text-xl sm:text-2xl font-bold text-slate-100">
              Srivishnuvardhan P
            </h1>
            <p className="text-emerald-400 font-mono text-xs sm:text-sm mt-1">
              Technology Researcher & AI/Cloud Infrastructure Builder
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Academic Background: Digital Cyber Forensic Science
            </p>
          </div>
        </div>

        <p className="text-slate-300 leading-relaxed">
          I am a <strong>Technology Researcher and Systems Builder</strong> with an academic background in <strong>Digital Cyber Forensic Science</strong>. My primary interests are at the intersection of <strong>Cybersecurity, Cloud Infrastructure, Linux Systems, AI Agents, Automation, and Experimental Technology Research</strong>.
        </p>
        <p className="text-slate-300 leading-relaxed">
          My work focuses on understanding how modern technologies operate at the system level and transforming that knowledge into practical, measurable, and reusable solutions.
        </p>
      </section>

      {/* Core Interests */}
      <section id="core-interests" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Cpu className="h-5 w-5 text-emerald-400" />
          Core Areas of Interest
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-2">
            <div className="text-emerald-400 font-mono font-bold text-xs">🔐 Cybersecurity & AI-Assisted Red Teaming</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Security testing, Linux security, offensive security research, security automation, and the application of AI agents to cybersecurity workflows.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-2">
            <div className="text-emerald-400 font-mono font-bold text-xs">☁️ Cloud Computing & Cloud Infrastructure</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Designing and experimenting with infrastructure for compute, networking, storage, virtualization, containers, services, and distributed systems.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-2">
            <div className="text-emerald-400 font-mono font-bold text-xs">🏗️ IaaS / PaaS / SaaS</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Exploring how cloud platforms are designed and building simplified, self-hosted versions of cloud infrastructure and developer platforms.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-2">
            <div className="text-emerald-400 font-mono font-bold text-xs">🤖 AI Agents & Agentic AI</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Researching AI systems capable of using tools, interacting with infrastructure, executing workflows, reasoning over technical knowledge, and assisting with complex engineering tasks.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-2">
            <div className="text-emerald-400 font-mono font-bold text-xs">🔄 AI Workflows & Automation</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Building automated workflows that connect AI agents with Linux systems, infrastructure, development environments, security tools, and research processes.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-2">
            <div className="text-emerald-400 font-mono font-bold text-xs">🐧 Linux Infrastructure & Systems Engineering</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Strong interest in Linux internals, server infrastructure, containers, system isolation, networking, resource management, security controls, and automation.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-2">
            <div className="text-emerald-400 font-mono font-bold text-xs">🌾 Technology in Agriculture</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Exploring how software, automation, AI, cloud infrastructure, sensors, and intelligent systems can be applied to agricultural problems.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-2">
            <div className="text-emerald-400 font-mono font-bold text-xs">🧪 Experimental Technology Research</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Designing controlled experiments to evaluate technologies based on real measurements rather than relying only on theoretical comparisons or existing opinions.
            </p>
          </div>
        </div>
      </section>

      {/* Research Lab Project */}
      <section id="research-lab" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Terminal className="h-5 w-5 text-emerald-400" />
          My Research Laboratory Project
        </h2>
        <p className="text-slate-300 leading-relaxed">
          One of my major projects is the development of a <strong>programmable digital research laboratory</strong>.
        </p>
        <p className="text-slate-300 leading-relaxed">
          The goal is to build a small, private, Linux-native infrastructure platform that can function as an experimental environment for cybersecurity, cloud computing, AI agents, automation, and systems research.
        </p>

        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900 font-mono text-xs text-emerald-400 space-y-1">
          <div className="font-bold text-slate-200">Experimental Lifecycle:</div>
          <div>DEFINE → PROVISION → BUILD → DEPLOY → TEST → MONITOR → COLLECT → ANALYZE → DECIDE → DESTROY / PROMOTE / MODIFY</div>
        </div>

        <p className="text-slate-300 leading-relaxed">
          The laboratory is built around technologies such as Linux / Debian / Ubuntu Server, Docker, Sysbox, Podman, LXD, containers, MicroVM concepts, Linux namespaces, cgroups v2, seccomp, capabilities, nftables, PostgreSQL, RabbitMQ, Python, WebSockets, MCP, and local AI models.
        </p>
      </section>

      {/* Research-Driven Approach */}
      <section id="research-approach" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-emerald-400" />
          Research-Driven Approach
        </h2>
        <blockquote className="border-l-2 border-emerald-400 pl-4 py-2 font-mono text-xs text-emerald-300 bg-emerald-950/20 rounded-r-lg">
          "Build it → Test it → Measure it → Analyze it → Learn from it."
        </blockquote>
        <p className="text-slate-300 leading-relaxed">
          This approach turns the laboratory into an empirical research knowledge base where hardware, configurations, workloads, resource consumption, failures, and security implications are systematically measured and recorded.
        </p>
      </section>

      {/* Open Source Philosophy */}
      <section id="open-source-phil" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Github className="h-5 w-5 text-emerald-400" />
          Open-Source Philosophy
        </h2>
        <p className="text-slate-300 leading-relaxed">
          I prefer open-source solutions because they provide the ability to understand how systems work internally, inspect and modify source code, avoid vendor lock-in, experiment freely, and extend technology itself.
        </p>
      </section>

      {/* AI + Infrastructure */}
      <section id="ai-infra" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Cpu className="h-5 w-5 text-emerald-400" />
          AI + Infrastructure Research
        </h2>
        <p className="text-slate-300 leading-relaxed">
          Another major direction of my work is combining AI agents with infrastructure. My long-term vision is an environment where:
        </p>
        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900 font-mono text-xs text-slate-200">
          Human Researcher → AI Agent → Infrastructure → Experiment → Data → Analysis → Knowledge
        </div>
      </section>

      {/* Professional Identity */}
      <section id="professional-identity" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Award className="h-5 w-5 text-emerald-400" />
          Professional Identity
        </h2>
        <div className="p-4 rounded-xl border border-slate-800 bg-slate-950 font-mono text-xs text-slate-300 leading-relaxed">
          Technology Researcher | Cybersecurity & AI-Assisted Red Teaming | Cloud & Linux Infrastructure | IaaS/PaaS/SaaS | AI Agents & Automation | Open-Source Technology | Experimental Systems Research
        </div>
      </section>
    </DocLayout>
  );
};
