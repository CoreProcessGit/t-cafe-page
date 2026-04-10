import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/support.css';

const docSections = [
  {
    title: 'Getting Started',
    color: 'blue',
    items: [
      { title: 'Installation Guide', desc: 'How to install and set up T-CAFE on your Jira Cloud instance.', search: 'installation setup install', slug: 'getting-started' },
      { title: 'Quick Start', desc: 'Create your first test case and test plan in minutes.', search: 'quick start first steps beginner', slug: 'getting-started' },
      { title: 'User Roles & Permissions', desc: 'Understand Admin, Team Admin, Tester, and Developer roles.', search: 'user roles permissions admin', slug: 'permissions' },
    ]
  },
  {
    title: 'Features',
    color: 'green',
    items: [
      { title: 'Test Case Management', desc: 'Create, edit, import, export, and organize test cases with folders.', search: 'test case create edit', slug: 'test-cases' },
      { title: 'Test Plans & Execution', desc: 'Create test plans, assign test cases, and track execution results.', search: 'test plan execution run', slug: 'test-plans' },
      { title: 'Factor Combination Testing', desc: 'Generate test combinations with Full, Pairwise, or Mixed algorithms.', search: 'factor combination pairwise', slug: 'factor-combination' },
      { title: 'Test Reports & Analytics', desc: 'View execution statistics, export reports in CSV, JSON, or Excel.', search: 'test report analytics', slug: 'test-reports' },
      { title: 'Defect Tracking', desc: 'Create Jira issues directly from failed test cases.', search: 'defect bug issue create', slug: 'test-execution' },
      { title: 'Configuration', desc: 'Customize priorities, case types, components, plan statuses, and UDFs.', search: 'configuration settings priority', slug: 'configuration' },
    ]
  },
  {
    title: 'Import & Export',
    color: 'purple',
    items: [
      { title: 'Importing Test Cases', desc: 'Import from CSV, JSON, or Excel with validation and encoding support.', search: 'import csv json excel', slug: 'import-export' },
      { title: 'Exporting Test Cases', desc: 'Export test cases and reports in CSV, JSON, or Excel format.', search: 'export csv json excel', slug: 'import-export' },
    ]
  }
];

const faqs = [
  { q: 'The app is not loading or showing a blank screen', a: 'Try hard refreshing your browser (Ctrl+Shift+R), clear browser cache, check if Jira Cloud is accessible, and verify the app is installed in site settings.' },
  { q: "I can't create or edit test cases", a: 'This is likely a permissions issue. Only Admin or Team Admin roles can create and edit. Contact your project administrator.' },
  { q: 'Import is failing or showing errors', a: 'Check: file format (CSV/JSON/XLSX), max 5,000 test cases, UTF-8 encoding recommended, "Name" column is required.' },
  { q: 'How do I change the language?', a: 'T-CAFE supports English, Korean, and Japanese. Language is auto-detected from Jira settings, or manually change via the language selector in the header.' },
  { q: 'How is my data stored and secured?', a: 'All data, including attachments, is stored on COREPROCESS internal servers in the Republic of Korea (same infrastructure as test data). Test data is encrypted with AES-256. See our Privacy Policy for details.' },
];

const Support = () => {
  const [search, setSearch] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const filterMatch = (item) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (item.title + ' ' + item.desc + ' ' + (item.search || '')).toLowerCase().includes(q);
  };

  return (
    <div className="support-page">
      <section className="support-hero">
        <div className="support-hero-content">
          <h1>How can we help you?</h1>
          <p>Find guides, documentation, and answers to common questions.</p>
          <div className="support-search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B778C" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" placeholder="Search documentation..." value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>
      </section>

      <section className="docs-section">
        <div className="docs-container">
          {docSections.map((section, si) => {
            const filtered = section.items.filter(filterMatch);
            if (filtered.length === 0) return null;
            return (
              <div key={si}>
                <h2 className="docs-section-title">{section.title}</h2>
                <div className="docs-grid">
                  {filtered.map((item, ii) => (
                    <Link key={ii} to={`/support/guide/${item.slug}`} className="doc-card">
                      <div className={`doc-card-icon ${section.color}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
                      </div>
                      <div className="doc-card-content">
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          <h2 className="docs-section-title">Troubleshooting & FAQ</h2>
          <div className="faq-list">
            {faqs.filter(f => !search || (f.q + ' ' + f.a).toLowerCase().includes(search.toLowerCase())).map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <div className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6,9 12,15 18,9"/></svg>
                </div>
                <div className="faq-answer"><p>{faq.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-support">
        <h2>Still need help?</h2>
        <p>Our team is ready to assist you.</p>
        <div className="contact-methods single">
          <div className="contact-method">
            <h3>Email Support</h3>
            <p>We'll respond within 1-2 business days.</p>
            <a href="mailto:contact@coreprocess.co.kr">{'contact@coreprocess.co.kr'}</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
