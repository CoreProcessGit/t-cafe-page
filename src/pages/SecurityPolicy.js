import React from 'react';
import '../styles/legal.css';

const SecurityPolicy = () => {
  return (
    <div className="legal-page">
      <div className="legal-content">
        <h1>Security Policy</h1>
        <p className="last-updated">Last Updated: April 2026</p>

        <h2>Introduction</h2>
        <p>COREPROCESS is committed to protecting the security, confidentiality, and integrity of Customer Data processed through the T-CAFE application ("the App"). This Security Policy describes the technical and organizational measures we implement to safeguard Customer Data.</p>
        <p>This Security Policy should be read in conjunction with our <a href="/privacy-policy">Privacy Policy</a>, <a href="/terms-of-service">Terms of Service</a>, and <a href="/dpa">Data Processing Addendum</a>.</p>

        <h2>1. Security Governance</h2>
        <p>COREPROCESS maintains a security program designed to:</p>
        <ul>
          <li>Protect Customer Data against unauthorized access, disclosure, alteration, or destruction</li>
          <li>Ensure the confidentiality, integrity, and availability of the App and its underlying infrastructure</li>
          <li>Comply with applicable data protection laws and industry best practices</li>
          <li>Respond effectively to security incidents and continuously improve our security posture</li>
        </ul>

        <h2>2. Data Encryption</h2>
        <h3>2.1 Encryption at Rest</h3>
        <ul>
          <li><strong>Sensitive Customer Data</strong>: Encrypted using AES-256-CBC, including test case content, test steps, preconditions, and other sensitive fields</li>
          <li><strong>Database Backups</strong>: Encrypted using industry-standard encryption</li>
          <li><strong>Encryption Keys</strong>: Managed securely and rotated periodically in accordance with industry best practices</li>
        </ul>

        <h3>2.2 Encryption in Transit</h3>
        <ul>
          <li><strong>HTTPS/TLS</strong>: All data transmission between the App, customers, and COREPROCESS infrastructure uses HTTPS with TLS 1.2 or higher</li>
          <li><strong>API Communication</strong>: All API requests are encrypted using TLS</li>
          <li><strong>Internal Communication</strong>: Service-to-service communication within COREPROCESS infrastructure is encrypted where applicable</li>
        </ul>

        <h2>3. Access Control</h2>
        <h3>3.1 Role-Based Access Control (RBAC)</h3>
        <p>The App implements four distinct roles to control user access to Customer Data:</p>
        <ul>
          <li><strong>Admin</strong>: Full administrative access including configuration, user management, and all data operations</li>
          <li><strong>Team Admin</strong>: Test case and test plan management, but not configuration access</li>
          <li><strong>Tester</strong>: Test execution and viewing access</li>
          <li><strong>Developer</strong>: Read-only access to view test results</li>
        </ul>

        <h3>3.2 Authentication</h3>
        <ul>
          <li><strong>Atlassian Authentication</strong>: User authentication is delegated to Atlassian's identity infrastructure via the Forge platform</li>
          <li><strong>API Key Authentication</strong>: Backend API access is protected by API keys with cryptographically hashed credential storage (SHA-256)</li>
          <li><strong>Constant-Time Comparison</strong>: API key validation uses constant-time comparison to prevent timing attacks</li>
        </ul>

        <h3>3.3 Personnel Access</h3>
        <ul>
          <li>Access to production systems is restricted to authorized COREPROCESS personnel on a need-to-know basis</li>
          <li>All personnel are bound by confidentiality obligations</li>
          <li>Access privileges are reviewed periodically and revoked promptly upon role changes or termination</li>
        </ul>

        <h2>4. Application Security</h2>
        <h3>4.1 Input Validation and Sanitization</h3>
        <ul>
          <li><strong>XSS Prevention</strong>: User input is sanitized using DOMPurify to prevent cross-site scripting attacks</li>
          <li><strong>SQL Injection Prevention</strong>: All database queries use parameterized statements (prepared statements) to prevent SQL injection</li>
          <li><strong>Output Encoding</strong>: User-generated content is properly encoded when displayed</li>
        </ul>

        <h3>4.2 HTTP Security Headers</h3>
        <ul>
          <li>Helmet middleware is used to set secure HTTP headers including Content Security Policy (CSP), X-Frame-Options, X-Content-Type-Options, and Strict-Transport-Security</li>
          <li>CORS (Cross-Origin Resource Sharing) restrictions limit API access to authorized origins</li>
        </ul>

        <h3>4.3 Rate Limiting and DDoS Protection</h3>
        <ul>
          <li>API endpoints are protected by rate limiting to prevent abuse</li>
          <li>Cloudflare provides additional DDoS protection at the network edge</li>
          <li>Excessive or anomalous request patterns are logged and may result in temporary blocking</li>
        </ul>

        <h2>5. Multi-Tenant Data Isolation</h2>
        <p>The App is designed for multi-tenant use with strict data isolation:</p>
        <ul>
          <li>Each Jira Cloud instance's data is isolated using <code>cloud_id</code> and <code>project_key</code> identifiers</li>
          <li>All database queries enforce tenant boundaries to prevent cross-tenant data access</li>
          <li>One customer's data cannot be accessed by another customer through the App's interface or API</li>
        </ul>

        <h2>6. Infrastructure Security</h2>
        <h3>6.1 Hosting</h3>
        <ul>
          <li>The App's frontend is hosted on the Atlassian Forge platform, which provides infrastructure-level security managed by Atlassian</li>
          <li>The backend API server and MySQL database are operated directly by COREPROCESS on its own internal servers located in the Republic of Korea</li>
          <li>Network traffic between Forge and the backend is secured via Cloudflare's reverse proxy and TLS termination at <code>taa-api.t-cafe.com</code></li>
          <li>The internal servers are protected by physical access controls, network firewalls, and operating system-level hardening</li>
        </ul>

        <h3>6.2 Network Security</h3>
        <ul>
          <li>Backend systems are protected by firewalls and access control lists</li>
          <li>Public-facing endpoints are limited to those required for App functionality</li>
          <li>Internal services are isolated from public network access where possible</li>
        </ul>

        <h2>7. Logging and Monitoring</h2>
        <h3>7.1 Audit Logging</h3>
        <ul>
          <li>Security-relevant events are logged, including authentication attempts, configuration changes, and administrative actions</li>
          <li>Logs include request identifiers for traceability</li>
          <li>Personal data in logs is minimized where reasonably possible</li>
        </ul>

        <h3>7.2 Slow Query and Performance Monitoring</h3>
        <ul>
          <li>Database queries exceeding configured thresholds are logged for performance investigation</li>
          <li>Anomalous patterns may trigger security review</li>
        </ul>

        <h3>7.3 Log Retention</h3>
        <ul>
          <li>Combined application logs are retained according to our retention schedule</li>
          <li>Security event logs may be retained for up to one (1) year for security investigation and compliance purposes</li>
        </ul>

        <h2>8. Vulnerability Management</h2>
        <ul>
          <li><strong>Dependency Management</strong>: Third-party libraries and dependencies are monitored for known vulnerabilities</li>
          <li><strong>Security Updates</strong>: Critical security patches are applied promptly</li>
          <li><strong>Code Review</strong>: Code changes are reviewed before deployment to production</li>
          <li><strong>Secure Development</strong>: Development practices follow OWASP secure coding guidelines where applicable</li>
        </ul>

        <h2>9. Incident Response</h2>
        <h3>9.1 Detection</h3>
        <p>COREPROCESS monitors for security incidents through automated alerts, log analysis, and customer reports.</p>

        <h3>9.2 Response</h3>
        <p>In the event of a security incident, COREPROCESS will:</p>
        <ul>
          <li>Investigate the incident promptly to determine its scope and impact</li>
          <li>Contain the incident and mitigate ongoing risks</li>
          <li>Restore affected services and data integrity</li>
          <li>Conduct a post-incident review to prevent recurrence</li>
        </ul>

        <h3>9.3 Notification</h3>
        <p>In the event of a Personal Data Breach affecting Customer Data, COREPROCESS will notify affected customers without undue delay and, where feasible, within seventy-two (72) hours of becoming aware of the breach, in accordance with our <a href="/dpa">Data Processing Addendum</a> and applicable data protection laws.</p>

        <h2>10. Backup and Disaster Recovery</h2>
        <ul>
          <li><strong>Backups</strong>: Customer Data is backed up regularly using encrypted backups</li>
          <li><strong>Backup Retention</strong>: Backups are retained for a maximum of ninety (90) days</li>
          <li><strong>Recovery</strong>: COREPROCESS maintains procedures for recovering from data loss or service disruption</li>
        </ul>

        <h2>11. Secure Development Lifecycle</h2>
        <ul>
          <li>Source code is managed in a version control system with access controls</li>
          <li>Production credentials are not stored in source code repositories</li>
          <li>Environment variables and secrets are managed securely</li>
          <li>Code changes follow a review and testing process before deployment</li>
        </ul>

        <h2>12. Third-Party Security</h2>
        <p>COREPROCESS engages sub-processors that meet appropriate security standards. For a complete list of sub-processors and their roles, please refer to our <a href="/sub-processors">Sub-processors</a> page.</p>
        <p>Each sub-processor is bound by contractual obligations to maintain security measures consistent with this Security Policy and applicable data protection laws.</p>

        <h2>13. Customer Responsibilities</h2>
        <p>Security is a shared responsibility. Customers are responsible for:</p>
        <ul>
          <li>Maintaining the security and confidentiality of their Atlassian credentials</li>
          <li>Configuring user roles and permissions appropriately within the App</li>
          <li>Ensuring that authorized users follow good security practices</li>
          <li>Promptly reporting any suspected security issues to COREPROCESS</li>
          <li>Complying with the App's <a href="/terms-of-service">Terms of Service</a> and applicable laws</li>
        </ul>

        <h2>14. Reporting Security Issues</h2>
        <p>If you discover a security vulnerability or have concerns about the security of the App, please report it to us responsibly. We appreciate the efforts of security researchers and will investigate all legitimate reports.</p>
        <p><strong>How to Report:</strong></p>
        <ul>
          <li>Email: <a href="mailto:cp.content100@gmail.com">cp.content100@gmail.com</a></li>
          <li>Subject line: "Security Report - T-CAFE"</li>
          <li>Include: A description of the vulnerability, steps to reproduce, and any relevant technical details</li>
        </ul>
        <p><strong>Please do NOT:</strong></p>
        <ul>
          <li>Publicly disclose the vulnerability before we have had a reasonable opportunity to address it</li>
          <li>Access, modify, or delete data belonging to other customers</li>
          <li>Perform denial-of-service attacks or other actions that could harm the App or its users</li>
        </ul>
        <p>COREPROCESS will acknowledge receipt of your report and work with you to understand and address the issue.</p>

        <h2>15. Compliance and Certifications</h2>
        <p>COREPROCESS is committed to complying with applicable data protection and security laws, including:</p>
        <ul>
          <li>General Data Protection Regulation (GDPR) - European Union</li>
          <li>UK General Data Protection Regulation (UK GDPR)</li>
          <li>California Consumer Privacy Act (CCPA) / California Privacy Rights Act (CPRA)</li>
          <li>Brazilian General Data Protection Law (LGPD)</li>
          <li>Personal Information Protection Act (PIPA) - Republic of Korea</li>
        </ul>
        <p>COREPROCESS is evaluating additional security certifications (such as SOC 2 Type II and ISO 27001) and will update this Security Policy as new certifications are obtained.</p>

        <h2>16. Updates to This Policy</h2>
        <p>COREPROCESS may update this Security Policy from time to time to reflect changes in our security practices, legal requirements, or service offerings. Material changes will be communicated through the Atlassian Marketplace listing or in-app notifications. The "Last Updated" date at the top of this policy indicates when it was last revised.</p>

        <h2>17. Contact Us</h2>
        <p>For questions about this Security Policy or our security practices, please contact:</p>
        <p><strong>COREPROCESS</strong></p>
        <p>Email: <a href="mailto:cp.content100@gmail.com">cp.content100@gmail.com</a></p>
        <p>For data protection inquiries, please refer to our <a href="/privacy-policy">Privacy Policy</a> and <a href="/dpa">Data Processing Addendum</a>.</p>
      </div>
    </div>
  );
};

export default SecurityPolicy;
