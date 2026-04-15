import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/support.css';

const docSections = [
  {
    title: 'Getting Started & Overview',
    color: 'blue',
    items: [
      { num: '01', title: 'Installation & First Steps', desc: 'Install T-CAFE on Jira Cloud, sign in, and create your first project. Includes Welcome Banner & Sample Data.', search: 'installation setup install quick start first steps beginner sample data welcome banner', slug: 'getting-started' },
      { num: '02', title: 'User Roles & Permissions', desc: 'Admin / Team Admin / Tester / Developer system roles, custom roles across 8 permission areas, and self-demotion guards.', search: 'user roles permissions admin tester developer custom', slug: 'permissions' },
      { num: '03', title: 'Overview Dashboard', desc: 'Welcome Banner, Board, Count cards (Test Cases / Test Plans / Total Users), Test Milestone Gantt, and Status Kanban.', search: 'overview dashboard welcome banner count milestone status kanban', slug: 'overview-dashboard' },
      { num: '04', title: 'Board (Announcements)', desc: 'Embedded project board with rich-text post creation (Admin only), pagination, and view counts.', search: 'board announcement post notice', slug: 'board' },
    ]
  },
  {
    title: 'Test Cases',
    color: 'green',
    items: [
      { num: '05', title: 'Test Case Management', desc: 'Create, edit, view, clone, move, and delete test cases. Created/Updated columns, filters, and bulk actions.', search: 'test case create edit clone move delete', slug: 'test-cases' },
      { num: '06', title: 'Folder Management', desc: 'Organize test cases into folders with rename, move, copy, and impact-aware delete (TCs deleted with folder).', search: 'folder rename move copy delete impact', slug: 'test-cases-folders' },
      { num: '07', title: 'Test Steps', desc: 'Write detailed test steps with Step / Test Data / Expected Result. Embed [ATTACHMENT:…] tags for clickable downloads.', search: 'test steps step data expected result attachment', slug: 'test-cases-steps' },
      { num: '08', title: 'Factor Combination', desc: 'Auto-generate test combinations with Pairwise (greedy + random sampling), Full Combination, or Mixed mode. Constraints supported.', search: 'factor combination pairwise full mixed constraint', slug: 'factor-combination' },
      { num: '09', title: 'Import / Export', desc: 'Import CSV / JSON / Excel up to 5,000 cases (auto-merge). Export to CSV / JSON / Excel with full column set.', search: 'import export csv json excel xlsx merge migration', slug: 'import-export' },
    ]
  },
  {
    title: 'Test Plans & Reports',
    color: 'green',
    items: [
      { num: '10', title: 'Test Plan Management', desc: 'Create test plans, add/remove TCs, clone (without TPTCs), folder organization, and status workflow.', search: 'test plan create assign clone folder status', slug: 'test-plans' },
      { num: '11', title: 'Test Execution', desc: 'Execute TPTCs (Pass / Fail / Block / Skip), log comments, and create Jira issues from failures.', search: 'test execution run pass fail block skip jira issue defect', slug: 'test-execution' },
      { num: '12', title: 'Test Reports & Analytics', desc: 'View execution stats by Folder / Component / Tester. Filter by Status / Owner / Progress. Export to Excel.', search: 'test report analytics excel folder component tester', slug: 'test-reports' },
    ]
  },
  {
    title: 'Configuration & Resources',
    color: 'purple',
    items: [
      { num: '13', title: 'Configuration', desc: 'Customize Priorities (4 default), Case Types (6 default), Components, Plan Statuses (Draft/Open/Completed), and User-Defined Fields.', search: 'configuration settings priority case type component plan status udf', slug: 'configuration' },
      { num: '14', title: 'Attachments', desc: 'Upload, manage, and link files. Project storage cap 200 MB. Use [ATTACHMENT:id:filename] tags inside TCs/TPs for clickable downloads.', search: 'attachment file upload download storage', slug: 'attachments' },
      { num: '15', title: 'Frequently Asked Questions', desc: 'Common questions on installation, permissions, test cases, factor combination, attachments, security, billing, and compatibility.', search: 'faq question troubleshoot help language data security billing roadmap', slug: 'faq' },
    ]
  },
];

const Support = () => {
  const [search, setSearch] = useState('');

  const filterMatch = (item) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (item.num + ' ' + item.title + ' ' + item.desc + ' ' + (item.search || ''))
      .toLowerCase()
      .includes(q);
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
                        <h3>
                          <span className="doc-card-num">{item.num}</span>
                          {item.title}
                        </h3>
                        <p>{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
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
