import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { CodeBlock } from '../components/CodeBlock';
import { Server, Database, Layers, Shield, Wrench } from 'lucide-react';

interface DeploymentPageProps {
  onNavigate: (path: string) => void;
}

export const DeploymentPage: React.FC<DeploymentPageProps> = ({ onNavigate }) => {
  const tocItems = [
    { id: 'prod-topology', title: 'Production Architecture', level: 1 },
    { id: 'systemd-mgmt', title: 'Systemd Service Management', level: 1 },
    { id: 'nginx-reverse-proxy', title: 'Nginx Reverse Proxy & TLS', level: 1 },
    { id: 'update-procedure', title: 'Update & Maintenance Workflow', level: 1 },
  ];

  return (
    <DocLayout
      currentPath="/deployment"
      onNavigate={onNavigate}
      title="Production Deployment Guide"
      category="Operations"
      description="Deploying PSV Linux Security Auditor in production with systemd, Nginx reverse proxy, PostgreSQL, RabbitMQ, and TLS."
      tocItems={tocItems}
    >
      <section id="prod-topology" className="space-y-4 pt-2">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Server className="h-5 w-5 text-emerald-400" />
          Production Stack
        </h2>
        <p>
          Production deployments run FastAPI behind an Nginx reverse proxy, PostgreSQL relational database, RabbitMQ AMQP message queue, and systemd units for process supervision.
        </p>
      </section>

      {/* Systemd */}
      <section id="systemd-mgmt" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Wrench className="h-5 w-5 text-emerald-400" />
          Systemd Commands
        </h2>

        <CodeBlock
          title="Managing PSV systemd Services"
          code={`# Check service statuses
sudo systemctl status psv-api
sudo systemctl status psv-worker

# Start or restart services
sudo systemctl restart psv-api psv-worker

# Enable on boot
sudo systemctl enable psv-api psv-worker

# View live systemd journal logs
sudo journalctl -u psv-api -f
sudo journalctl -u psv-worker -f`}
        />
      </section>

      {/* Nginx */}
      <section id="nginx-reverse-proxy" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Shield className="h-5 w-5 text-emerald-400" />
          Nginx Reverse Proxy
        </h2>
        <p>
          Installer configures Nginx reverse proxy routing <code className="text-emerald-400 font-mono">/api/</code> to FastAPI (port 8000) and static assets to web root.
        </p>

        <CodeBlock
          title="Nginx Installer Invocation"
          code={`sudo ./install.sh --mode production --with-systemd --with-nginx`}
        />
      </section>

      {/* Update */}
      <section id="update-procedure" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Wrench className="h-5 w-5 text-emerald-400" />
          Updating PSV in Production
        </h2>

        <CodeBlock
          title="Updating Installation"
          code={`# Run update script
sudo ./update.sh`}
        />
      </section>
    </DocLayout>
  );
};
