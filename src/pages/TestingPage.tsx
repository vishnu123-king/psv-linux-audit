import React from 'react';
import { DocLayout } from '../components/DocLayout';
import { CodeBlock } from '../components/CodeBlock';
import { CheckCircle2, Shield, Wrench } from 'lucide-react';

interface TestingPageProps {
  onNavigate: (path: string) => void;
}

export const TestingPage: React.FC<TestingPageProps> = ({ onNavigate }) => {
  const tocItems = [
    { id: 'unit-tests', title: 'Pytest Suite', level: 1 },
    { id: 'security-tests', title: 'Security-Focused Test Suite', level: 1 },
    { id: 'rule-validation-scripts', title: 'Rule & Installation Verification Scripts', level: 1 },
  ];

  return (
    <DocLayout
      currentPath="/testing"
      onNavigate={onNavigate}
      title="Testing & Security Validation"
      category="Operations"
      description="Documentation on running unit, integration, and security-focused test suites."
      tocItems={tocItems}
    >
      <section id="unit-tests" className="space-y-4 pt-2">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-emerald-400" />
          Pytest Test Execution
        </h2>

        <CodeBlock
          title="Executing Pytest Suite"
          code={`# Run all tests with verbose output
pytest -v`}
        />
      </section>

      <section id="security-tests" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Shield className="h-5 w-5 text-emerald-400" />
          Security-Focused Test Modules
        </h2>

        <CodeBlock
          title="Executing Security Specific Tests"
          code={`# Fail-closed state evaluation tests
pytest tests/test_fail_closed.py -v

# SSRF host address validation tests
pytest tests/test_ssrf_validation.py -v

# Command injection prevention tests
pytest tests/test_command_injection.py -v

# Auth hardening & IDOR authorization tests
pytest tests/test_auth_hardening.py -v
pytest tests/test_authorization_idor.py -v

# Remediation safety & XSS sanitization tests
pytest tests/test_remediation_safety.py -v
pytest tests/test_xss_sanitization.py -v`}
        />
      </section>

      <section id="rule-validation-scripts" className="space-y-4 pt-6 border-t border-slate-800">
        <h2 className="font-display text-lg font-bold text-slate-100 flex items-center gap-2">
          <Wrench className="h-5 w-5 text-emerald-400" />
          Validation Scripts
        </h2>

        <CodeBlock
          title="Running Verification Scripts"
          code={`# Validate 60 YAML rules across 11 files
python scripts/validate_rules.py

# Verify installation prerequisites
python scripts/verify_installation.py

# Detect unsafe production configurations
python scripts/verify_production_config.py`}
        />
      </section>
    </DocLayout>
  );
};
