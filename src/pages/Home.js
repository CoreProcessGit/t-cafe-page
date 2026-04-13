import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const features = [
  { icon: 'document', color: 'indigo', title: 'Test Case Management', desc: 'Create and manage test cases with folders, steps, preconditions, and user-defined fields.',
    list: ['Single & Factor Combination types', 'Test steps with expected results', 'Import/Export (CSV, JSON, Excel)'] },
  { icon: 'clipboard', color: 'emerald', title: 'Test Plan & Execution', desc: 'Organize test cases into plans and track execution with real-time progress monitoring.',
    list: ['Pass / Fail / Block / Skip tracking', 'Milestone timeline view', 'Comments & Jira issue linking'] },
  { icon: 'chart', color: 'purple', title: 'Reports & Analytics', desc: 'Generate detailed test reports with execution statistics and exportable data.',
    list: ['Execution rate & pass/fail charts', 'Export reports (CSV, Excel)', 'Daily progress tracking'] },
  { icon: 'grid', color: 'sky', title: 'Factor Combination', desc: 'Generate optimized test combinations to maximize coverage with minimal test cases.',
    list: ['Full / Pairwise / Mixed algorithms', 'Constraint rules (If-Then, Mutual Exclusion)', 'Steps matrix with TC mapping'] },
  { icon: 'bug', color: 'rose', title: 'Jira Issue Integration', desc: 'Create and search Jira issues directly from test execution and link them to test cases.',
    list: ['Create issues with auto-filled details', 'Search and link existing issues', 'Retestable tracking on issue completion'] },
  { icon: 'attachment', color: 'teal', title: 'Attachment Management', desc: 'Upload and manage test artifacts with drag-and-drop support and secure storage.',
    list: ['Drag & drop file upload', 'Supported formats guide', 'Data encrypted & secured'] },
  { icon: 'settings', color: 'blue', title: 'Configuration', desc: 'Customize priorities, case types, components, plan statuses, and user-defined fields.',
    list: ['Custom priorities & case types', 'User-defined fields (9 types)', 'Plan status & component management'] },
  { icon: 'users', color: 'amber', title: 'User Permissions', desc: 'Flexible role-based access control with system roles and custom roles.',
    list: ['4 system roles + custom roles', 'Per-project permission control', 'User activate / deactivate'] },
  { icon: 'globe', color: 'cyan', title: 'Multi-Language', desc: 'Full internationalization support with automatic language detection from Jira settings.',
    list: ['English, Korean, Japanese', 'Auto-detect from Jira locale', 'Per-project language setting'] },
];

const iconMap = {
  document: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  clipboard: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 14l2 2 4-4"/></svg>,
  chart: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  grid: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>,
  bug: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 2l1.88 1.88M14.12 3.88L16 2M9 7.13v-1a3.003 3.003 0 116 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 014-4h4a4 4 0 014 4v3c0 3.3-2.7 6-6 6z"/><path d="M12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M6 13H2M3 21c0-2.1 1.7-3.9 3.8-4"/><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/><path d="M22 13h-4M21 21c0-2.1-1.7-3.9-3.8-4"/></svg>,
  attachment: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>,
  settings: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.39a2 2 0 00-.73-2.73l-.15-.08a2 2 0 01-1-1.74v-.5a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2z"/><circle cx="12" cy="12" r="3"/></svg>,
  users: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  globe: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
};

const checkIcon = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20,6 9,17 4,12"/></svg>;

const screenshotTabs = [
  { key: 'testcases', label: 'Test Cases', icon: 'document', title: 'Test Case Management', desc: 'Create, organize, and manage test cases with folders, filters, and bulk operations.' },
  { key: 'testplans', label: 'Test Plans', icon: 'clipboard', title: 'Test Plan Execution', desc: 'Track test execution progress with status updates, comments, and defect linking.' },
  { key: 'reports', label: 'Reports', icon: 'chart', title: 'Test Reports & Analytics', desc: 'Visualize test execution results with detailed pass/fail statistics and exportable reports.' },
  { key: 'config', label: 'Configuration', icon: 'settings', title: 'Configuration & Settings', desc: 'Customize priorities, case types, components, and user-defined fields to fit your workflow.' },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState('testcases');
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observerRef.current.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate').forEach(el => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const activeScreenshot = screenshotTabs.find(t => t.key === activeTab);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-bg">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge animate">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              Jira Cloud Plugin
            </div>
            <div className="animate hero-logo">
              <img src={require('../assets/logo-archive-white.svg').default || require('../assets/logo-archive-white.svg')} alt="T-CAFE archive" height={56} />
            </div>
            <p className="hero-tagline animate">Smarter Testing. Better Quality.</p>
            <p className="hero-description animate">
              Manage your entire testing lifecycle within Jira.
              From test case creation to execution reports,
              T-CAFE provides everything your QA team needs.
            </p>
            <div className="hero-actions animate">
              <a href="https://marketplace.atlassian.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
              <a href="#features" className="btn btn-outline">
                Learn More
              </a>
            </div>
            <div className="hero-trust animate">
              <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg> Factor Combination</span>
              <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg> Data Encrypted &amp; Secured</span>
              <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg> Custom Roles &amp; Permissions</span>
              <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg> Multi-Language (EN/KO/JA)</span>
            </div>
          </div>
          <div className="hero-image animate">
            <div className="browser-mockup">
              <div className="browser-bar">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="browser-url">your-site.atlassian.net/jira/apps/t-cafe</span>
              </div>
              <div className="browser-body">
                {/* Replace with: <img src="/images/hero-screenshot.png" alt="T-CAFE" /> */}
                <span>App Screenshot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <div className="section-header animate">
            <span className="section-badge">Core Features</span>
            <h2>Everything you need for<br/>test management in Jira</h2>
            <p>T-CAFE integrates seamlessly with Jira Cloud to provide<br/>a complete test management solution for your team.</p>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className={`feature-card animate`} style={{ animationDelay: `${(i % 3) * 0.15}s` }}>
                <div className={`feature-icon icon-${f.color}`}>{iconMap[f.icon]}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <ul className="feature-list">
                  {f.list.map((item, j) => (
                    <li key={j}>{checkIcon} {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="screenshots" className="screenshots">
        <div className="container">
          <div className="section-header animate">
            <span className="section-badge">Screenshots</span>
            <h2>See T-CAFE in action</h2>
            <p>Clean, intuitive interface designed for productivity.<br/>Get started in minutes, not hours.</p>
          </div>
          <div className="screenshot-tabs animate">
            {screenshotTabs.map(tab => (
              <button
                key={tab.key}
                className={`tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {iconMap[tab.icon]} {tab.label}
              </button>
            ))}
          </div>
          <div className="screenshot-display animate">
            <div className="screenshot-info">
              <h3>{activeScreenshot?.title}</h3>
              <p>{activeScreenshot?.desc}</p>
            </div>
            <div className="screenshot-frame">
              {/* Replace with: <img src={`/images/screenshot-${activeTab}.png`} alt={activeScreenshot?.title} /> */}
              <div className="screenshot-placeholder">
                <span>{activeScreenshot?.title} Screenshot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-bg">
          <div className="cta-shape cta-shape-1"></div>
          <div className="cta-shape cta-shape-2"></div>
        </div>
        <div className="cta-content animate">
          <span className="section-badge badge-light">Get Started</span>
          <h2>Ready to streamline<br/>your testing?</h2>
          <p>Install T-CAFE and start managing test cases in Jira today.</p>
          <div className="cta-actions">
            <a href="https://marketplace.atlassian.com" className="btn btn-white" target="_blank" rel="noopener noreferrer">Get it on Marketplace</a>
            <Link to="/support" className="btn btn-outline-light">View Documentation</Link>
          </div>
          <div className="cta-trust">
            <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20,6 9,17 4,12"/></svg> Free to try</span>
            <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20,6 9,17 4,12"/></svg> Jira Cloud native</span>
            <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20,6 9,17 4,12"/></svg> Dedicated support</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
