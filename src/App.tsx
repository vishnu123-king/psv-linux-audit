import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';

// Pages
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ArchitecturePage } from './pages/ArchitecturePage';
import { SecurityPage } from './pages/SecurityPage';
import { InstallationPage } from './pages/InstallationPage';
import { ConfigurationPage } from './pages/ConfigurationPage';
import { QuickStartPage } from './pages/QuickStartPage';
import { LocalAuditGuidePage } from './pages/LocalAuditGuidePage';
import { CliPage } from './pages/CliPage';
import { RulesPage } from './pages/RulesPage';
import { CollectorsPage } from './pages/CollectorsPage';
import { RemediationPage } from './pages/RemediationPage';
import { DriftPage } from './pages/DriftPage';
import { ReportsPage } from './pages/ReportsPage';
import { FindingsPage } from './pages/FindingsPage';
import { ProblemsPage } from './pages/ProblemsPage';
import { DevelopmentPage } from './pages/DevelopmentPage';
import { ContributingPage } from './pages/ContributingPage';
import { TestingPage } from './pages/TestingPage';
import { DeploymentPage } from './pages/DeploymentPage';
import { TroubleshootingPage } from './pages/TroubleshootingPage';
import { AboutPage } from './pages/AboutPage';
import { ProjectStoryPage } from './pages/ProjectStoryPage';
import { TechnologyStackPage } from './pages/TechnologyStackPage';
import { DocsIndexPage } from './pages/DocsIndexPage';
import { AuthorPage } from './pages/AuthorPage';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [searchOpen, setSearchOpen] = useState(false);

  // Sync state with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    // Separate pathname and hash anchor if any (e.g. /cli#psv-doctor)
    const [basePath, hash] = path.split('#');
    
    if (window.location.pathname !== basePath || hash) {
      window.history.pushState({}, '', path);
    }
    
    setCurrentPath(basePath || '/');

    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const offset = 80;
          const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const renderRoute = () => {
    const normalized = currentPath.replace(/\/$/, '') || '/';

    switch (normalized) {
      case '/':
        return <HomePage onNavigate={navigate} />;
      case '/features':
        return <FeaturesPage onNavigate={navigate} />;
      case '/how-it-works':
        return <HowItWorksPage onNavigate={navigate} />;
      case '/architecture':
        return <ArchitecturePage onNavigate={navigate} />;
      case '/security':
        return <SecurityPage onNavigate={navigate} />;
      case '/installation':
        return <InstallationPage onNavigate={navigate} />;
      case '/configuration':
        return <ConfigurationPage onNavigate={navigate} />;
      case '/quick-start':
        return <QuickStartPage onNavigate={navigate} />;
      case '/quick-start/local-audit':
        return <LocalAuditGuidePage onNavigate={navigate} />;
      case '/cli':
        return <CliPage onNavigate={navigate} />;
      case '/rules':
        return <RulesPage onNavigate={navigate} />;
      case '/collectors':
        return <CollectorsPage onNavigate={navigate} />;
      case '/remediation':
        return <RemediationPage onNavigate={navigate} />;
      case '/drift':
        return <DriftPage onNavigate={navigate} />;
      case '/reports':
        return <ReportsPage onNavigate={navigate} />;
      case '/findings':
        return <FindingsPage onNavigate={navigate} />;
      case '/problems':
        return <ProblemsPage onNavigate={navigate} />;
      case '/development':
        return <DevelopmentPage onNavigate={navigate} />;
      case '/contributing':
        return <ContributingPage onNavigate={navigate} />;
      case '/testing':
        return <TestingPage onNavigate={navigate} />;
      case '/deployment':
        return <DeploymentPage onNavigate={navigate} />;
      case '/troubleshooting':
        return <TroubleshootingPage onNavigate={navigate} />;
      case '/author':
        return <AuthorPage onNavigate={navigate} />;
      case '/about':
        return <AboutPage onNavigate={navigate} />;
      case '/about/project':
        return <ProjectStoryPage onNavigate={navigate} />;
      case '/about/technology':
        return <TechnologyStackPage onNavigate={navigate} />;
      case '/docs':
        return <DocsIndexPage onNavigate={navigate} onOpenSearch={() => setSearchOpen(true)} />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      <Header
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenSearch={() => setSearchOpen(true)}
      />

      <div className="flex-1">
        {renderRoute()}
      </div>

      <Footer onNavigate={navigate} />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={navigate}
      />
    </div>
  );
}

export default App;
