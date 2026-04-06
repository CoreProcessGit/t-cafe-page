import React from 'react';
import '../styles/legal.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <div className="legal-content">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: April 2026</p>

        <h2>1. Introduction</h2>
        <p>This Privacy Policy describes how COREPROCESS ("we", "us", "our") collects, uses, and protects information through the T-CAFE application ("the App"), a test management plugin for Atlassian Jira.</p>
        <p>By installing and using the App, you agree to the practices described in this Privacy Policy.</p>

        <h2>2. Information We Collect</h2>
        <h3>2.1 Data from Jira</h3>
        <ul>
          <li><strong>User Information</strong>: Display name, account ID, email address, and avatar URL</li>
          <li><strong>Project Information</strong>: Project key, name, and configuration</li>
          <li><strong>Issue Information</strong>: Issue key, summary, status, type, and assignee</li>
        </ul>

        <h3>2.2 Data Created Within the App</h3>
        <ul>
          <li><strong>Test Cases</strong>: Name, description, precondition, priority, status, test steps, and custom fields</li>
          <li><strong>Test Plans</strong>: Name, description, schedule, and test case assignments</li>
          <li><strong>Test Reports</strong>: Execution results, pass/fail status, and related metrics</li>
          <li><strong>Factor Combinations</strong>: Factor definitions, constraints, simulation results</li>
          <li><strong>Attachments</strong>: Files uploaded by users (stored in each user's Atlassian Forge Storage, not on our servers)</li>
          <li><strong>Board Posts</strong>: Announcements created by administrators</li>
        </ul>

        <h3>2.3 Data We Do NOT Collect</h3>
        <ul>
          <li>Personal data beyond Jira's standard APIs</li>
          <li>Payment or financial information</li>
          <li>Cookies or tracking technologies</li>
          <li>Data from users outside the Jira environment</li>
        </ul>

        <h2>3. How We Use Information</h2>
        <p>We use collected information solely for:</p>
        <ul>
          <li>Providing App functionality (test case/plan/report management)</li>
          <li>User management (role and permission assignment)</li>
          <li>Defect tracking (linking test results to Jira issues)</li>
          <li>Reporting (generating test execution reports)</li>
        </ul>
        <p>We do <strong>NOT</strong> use your data for advertising, profiling, selling to third parties, or training AI/ML models.</p>

        <h2>4. Data Storage and Security</h2>
        <h3>4.1 Storage Location</h3>
        <ul>
          <li><strong>Test data</strong>: Stored on COREPROCESS's private database server in South Korea</li>
          <li><strong>Attachments</strong>: Stored in each user's Atlassian Forge Storage (managed by Atlassian)</li>
          <li><strong>Temporary upload data</strong>: Processed through Forge Storage and deleted after processing</li>
        </ul>

        <h3>4.2 Security Measures</h3>
        <ul>
          <li><strong>Encryption</strong>: AES-256-CBC for sensitive test data</li>
          <li><strong>Access Control</strong>: Role-based (Admin, Team Admin, Tester, Developer)</li>
          <li><strong>API Security</strong>: API key authentication</li>
          <li><strong>XSS Prevention</strong>: DOMPurify sanitization</li>
          <li><strong>SQL Injection Prevention</strong>: Parameterized queries</li>
          <li><strong>Transport Security</strong>: HTTPS/TLS</li>
        </ul>

        <h3>4.3 Data Isolation</h3>
        <p>Each Jira Cloud instance's data is isolated using cloud_id and project_key.</p>

        <h2>5. Data Sharing</h2>
        <p>We do <strong>NOT</strong> share your data with third parties, except:</p>
        <ul>
          <li><strong>Atlassian</strong>: Data transmitted through the Forge platform</li>
          <li><strong>Cloudflare</strong>: Network traffic passes through Cloudflare's tunnel service</li>
        </ul>

        <h2>6. Data Retention</h2>
        <ul>
          <li><strong>Active data</strong>: Retained while the App is installed</li>
          <li><strong>Deleted data</strong>: Permanently removed when deleted within the App</li>
          <li><strong>Uninstallation</strong>: Request complete deletion by contacting us</li>
        </ul>

        <h2>7. Your Rights</h2>
        <ul>
          <li><strong>Access</strong>: View all data through the App's interface</li>
          <li><strong>Correction</strong>: Edit data through the App</li>
          <li><strong>Deletion</strong>: Delete records or request complete removal</li>
          <li><strong>Export</strong>: Export in CSV, JSON, or Excel format</li>
        </ul>
        <p>Contact us at <a href="mailto:cp.content100@gmail.com">cp.content100@gmail.com</a>.</p>

        <h2>8. International Data Transfers</h2>
        <p>Data is stored in South Korea with appropriate security measures.</p>

        <h2>9. Children's Privacy</h2>
        <p>The App is for enterprise Jira environments and not intended for children under 16.</p>

        <h2>10. Changes to This Policy</h2>
        <p>We will notify users of significant changes through the App or email.</p>

        <h2>11. Contact Us</h2>
        <p><strong>COREPROCESS</strong></p>
        <p>Email: <a href="mailto:cp.content100@gmail.com">cp.content100@gmail.com</a></p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
