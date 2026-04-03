import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const features = [
  { icon: 'document', title: 'Test Case Management', desc: 'Create and manage test cases with Single and Factor Combination types. Support for test steps, preconditions, priorities, and custom fields.' },
  { icon: 'clipboard', title: 'Test Plan & Execution', desc: 'Organize test cases into test plans. Track execution status with Pass, Fail, Block, and Skip results.' },
  { icon: 'chart', title: 'Test Reports & Analytics', desc: 'Generate comprehensive test reports with execution statistics and progress tracking. Export in CSV, JSON, or Excel.' },
  { icon: 'grid', title: 'Factor Combination Testing', desc: 'Generate test combinations using Full Combination, Pairwise, or Mixed algorithms with constraint support.' },
  { icon: 'bug', title: 'Jira Issue Integration', desc: 'Create and link Jira issues directly from test execution with built-in rich text editor and image markup tool.' },
  { icon: 'attachment', title: 'Attachment Management', desc: 'Upload, download, and manage test artifacts with chunked file upload and drag-and-drop interface.' },
  { icon: 'settings', title: 'Configuration', desc: 'Customize priorities, case types, components, plan statuses, and user-defined fields for your workflow.' },
  { icon: 'users', title: 'User Permissions', desc: 'Role-based access control with Admin, Team Admin, Tester, and Developer roles.' },
  { icon: 'globe', title: 'Multi-Language Support', desc: 'Full internationalization with English, Korean, and Japanese. Auto-detection based on Jira settings.' },
];

const iconMap = {
  document: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  clipboard: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 14l2 2 4-4"/></svg>,
  chart: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  grid: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>,
  bug: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
  attachment: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>,
  settings: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.39a2 2 0 00-.73-2.73l-.15-.08a2 2 0 01-1-1.74v-.5a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2z"/><circle cx="12" cy="12" r="3"/></svg>,
  users: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  globe: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
};

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">Jira Cloud Plugin</div>
          <h1>T-CAFE</h1>
          <p className="hero-subtitle">Test Case Archive for Jira</p>
          <p className="hero-description">
            A comprehensive test management solution built for Jira Cloud.
            Create, organize, execute, and track your test cases — all within Jira.
          </p>
          <div className="hero-actions">
            <a href="https://marketplace.atlassian.com" className="btn-primary" target="_blank" rel="noopener noreferrer">Get Started</a>
            <a href="javascripts:void(0)" className="btn-secondary">Learn More</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="screenshot-placeholder">
            {/* Replace with: <img src="/screenshots/hero.png" alt="T-CAFE" /> */}
            <span>App Screenshot</span>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="section-header">
          <h2>Features</h2>
          <p>Everything you need for test management, integrated directly into Jira.</p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{iconMap[f.icon]}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="screenshots" className="screenshots">
        <div className="section-header">
          <h2>Screenshots</h2>
          <p>See T-CAFE in action.</p>
        </div>
        <div className="screenshots-grid">
          {['Test Cases', 'Test Plans', 'Test Reports', 'Factor Combination', 'Configuration', 'Create Issue'].map((name, i) => (
            <div key={i} className="screenshot-item">
              <div className="screenshot-placeholder large">
                {/* Replace with: <img src={`/screenshots/${name.toLowerCase().replace(/ /g, '-')}.png`} alt={name} /> */}
                <span>{name}</span>
              </div>
              <p className="screenshot-caption">{name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Ready to streamline your testing?</h2>
        <p>Install T-CAFE and start managing test cases in Jira today.</p>
        <div className="cta-actions">
          <a href="https://marketplace.atlassian.com" className="btn-primary" target="_blank" rel="noopener noreferrer">Get it on Marketplace</a>
          <Link to="/support" className="btn-secondary">View Documentation</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
