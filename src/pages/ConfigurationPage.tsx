import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { CodeBlock } from '../components/CodeBlock';
import { Wrench, Lock, Database } from 'lucide-react';

interface ConfigurationPageProps {
  onNavigate: (path: string) => void;
}

export const ConfigurationPage: React.FC<ConfigurationPageProps> = ({ onNavigate }) => {
  const tocItems = [
    { id: 'env-file', title: 'Environment Configuration (.env)', level: 1 },
    { id: 'config-categories', title: 'Configuration Variables', level: 1 },
  ];

  return (
    <DocLayout
      currentPath="/configuration"
      onNavigate={onNavigate}
      title="Environment & System Configuration (.env)"
      category="Operations"
      description="Reference guide for configuring PostgreSQL, RabbitMQ, JWT authentication secrets, CORS origins, and logging options."
      tocItems={tocItems}
    >
      <section id="env-file" className="space-y-4 pt-2">
        <p>
          PSV uses standard environment variables loaded from <code className="text-emerald-400 font-mono">.env</code> file.
        </p>

        <div className="p-4 rounded-xl border border-red-900/40 bg-red-950/10 text-xs text-red-300 font-mono">
          SECURITY WARNING: Never commit actual secret keys or credentials to public Git repositories.
        </div>
      </section>

      <section id="config-categories" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Wrench className="h-5 w-5 text-emerald-400" />
          Example .env Template
        </h2>

        <CodeBlock
          title=".env.example Configuration Parameters"
          code={`# Application Environment
APP_ENV=production
DEBUG=false
SECRET_KEY=<generate-secure-random-secret>
JWT_SECRET=<generate-secure-jwt-secret>

# Database Settings
DATABASE_URL=postgresql://psv_user:psv_pass@localhost:5432/psv_db

# Message Queue Settings
RABBITMQ_URL=amqp://guest:guest@localhost:5672//

# CORS Security Settings
CORS_ORIGINS=https://psv.yourdomain.com

# SSH Connection Defaults
SSH_DEFAULT_PORT=22
SSH_TIMEOUT_SECONDS=30`}
        />
      </section>
    </DocLayout>
  );
};
