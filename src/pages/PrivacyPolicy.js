import React from 'react';
import '../styles/legal.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <div className="legal-content">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: April 2026</p>

        <h2>1. Introduction</h2>
        <p>This Privacy Policy describes how COREPROCESS ("we", "us", "our") collects, uses, processes, stores, and protects information through the T-CAFE application ("the App"), a test management plugin distributed through the Atlassian Marketplace for use with Atlassian Jira Cloud.</p>
        <p>By installing and using the App, you acknowledge that you have read, understood, and agree to the practices described in this Privacy Policy. If you do not agree, please do not install or use the App.</p>
        <p>This Privacy Policy should be read in conjunction with our <a href="/terms-of-service">Terms of Service</a>.</p>

        <h2>2. Data Controller and Processor Roles</h2>
        <p>Under the General Data Protection Regulation (GDPR) and similar data protection laws:</p>
        <ul>
          <li><strong>You (Customer)</strong> act as the <strong>Data Controller</strong> for any personal data you and your authorized users submit to or process through the App.</li>
          <li><strong>COREPROCESS</strong> acts as the <strong>Data Processor</strong>, processing personal data on your behalf and in accordance with your instructions and this Privacy Policy.</li>
          <li><strong>Atlassian</strong> may also act as a sub-processor for the App's hosting infrastructure under the Atlassian Forge platform.</li>
        </ul>
        <p>For customers subject to GDPR or similar data protection laws, please refer to our <a href="/dpa">Data Processing Addendum (DPA)</a>.</p>

        <h2>3. Information We Collect</h2>
        <h3>3.1 Data from Jira</h3>
        <ul>
          <li><strong>User Information</strong>: Display name, Atlassian account ID, email address, and avatar URL</li>
          <li><strong>Project Information</strong>: Project key, name, and configuration</li>
          <li><strong>Issue Information</strong>: Issue key, summary, status, type, and assignee (only as needed for test-issue linking)</li>
        </ul>

        <h3>3.2 Data Created Within the App</h3>
        <ul>
          <li><strong>Test Cases</strong>: Name, description, precondition, priority, status, test steps, and custom fields</li>
          <li><strong>Test Plans</strong>: Name, description, schedule, and test case assignments</li>
          <li><strong>Test Reports</strong>: Execution results, pass/fail status, and related metrics</li>
          <li><strong>Factor Combinations</strong>: Factor definitions, constraints, simulation results</li>
          <li><strong>Attachments</strong>: Files uploaded by users (stored in Atlassian Forge Storage)</li>
          <li><strong>Board Posts</strong>: Announcements created by administrators</li>
        </ul>

        <h3>3.3 Technical Data</h3>
        <ul>
          <li><strong>API request metadata</strong>: Request timestamps, IP addresses (for security and debugging), request IDs</li>
          <li><strong>Error logs</strong>: Stack traces and error messages (with personal data redacted where reasonably possible)</li>
          <li><strong>Audit logs</strong>: Record of administrative actions for security and compliance purposes</li>
        </ul>

        <h3>3.4 Data We Do NOT Collect</h3>
        <ul>
          <li>Personal data beyond what is provided through Jira's standard APIs</li>
          <li>Payment or financial information (handled exclusively by Atlassian Marketplace)</li>
          <li>Browser cookies or third-party tracking technologies within the App</li>
          <li>Data from individuals outside your authorized Jira environment</li>
          <li>Biometric, health, or other special category personal data</li>
        </ul>

        <h2>4. Lawful Basis for Processing (GDPR Article 6)</h2>
        <p>We process personal data under the following lawful bases:</p>
        <ul>
          <li><strong>Performance of a Contract (Art. 6(1)(b))</strong>: To provide the App's functionality as agreed in our Terms of Service.</li>
          <li><strong>Legitimate Interests (Art. 6(1)(f))</strong>: For security monitoring, fraud prevention, service improvement, and audit logging, where such interests are not overridden by your fundamental rights.</li>
          <li><strong>Legal Obligations (Art. 6(1)(c))</strong>: To comply with applicable laws, court orders, and regulatory requests.</li>
          <li><strong>Consent (Art. 6(1)(a))</strong>: Where you have explicitly consented to specific processing activities.</li>
        </ul>

        <h2>5. How We Use Information</h2>
        <p>We use collected information solely for:</p>
        <ul>
          <li>Providing the App's core functionality (test case, plan, and report management)</li>
          <li>User and permission management (role-based access control)</li>
          <li>Defect tracking (linking test results to Jira issues)</li>
          <li>Reporting and analytics (generating test execution reports for your team)</li>
          <li>Security monitoring and incident response</li>
          <li>Service improvement and bug fixing</li>
          <li>Communicating with you about service updates, security advisories, or support requests</li>
        </ul>
        <p>We do <strong>NOT</strong>:</p>
        <ul>
          <li>Use your data for advertising or marketing to third parties</li>
          <li>Sell, rent, or trade your data to any third party</li>
          <li>Profile users for purposes unrelated to the App's functionality</li>
        </ul>

        <h2>6. Data Storage and Security</h2>
        <h3>6.1 Storage Location</h3>
        <ul>
          <li><strong>Test data</strong>: Stored in a MySQL database operated directly by COREPROCESS on its own internal servers located in the Republic of Korea. No third-party cloud hosting provider is used for the storage of Customer Data.</li>
          <li><strong>Network access</strong>: The backend API endpoint (taa-api.t-cafe.com) is exposed to authorized clients via Cloudflare, which provides DNS, reverse proxy, network tunnel, and TLS termination services. Cloudflare may temporarily process traffic at its edge locations but does not store Customer Data.</li>
          <li><strong>Attachments</strong>: Stored in each user's Atlassian Forge Storage (managed by Atlassian)</li>
          <li><strong>Temporary upload data</strong>: Processed through Forge Storage and deleted after processing</li>
          <li><strong>Backups</strong>: Encrypted backups are stored on COREPROCESS-controlled infrastructure and retained for a maximum of ninety (90) days</li>
        </ul>

        <h3>6.2 Security Measures</h3>
        <ul>
          <li><strong>Encryption at Rest</strong>: AES-256-CBC for sensitive test data</li>
          <li><strong>Encryption in Transit</strong>: HTTPS/TLS for all data transmission</li>
          <li><strong>Access Control</strong>: Role-based (Admin, Team Admin, Tester, Developer)</li>
          <li><strong>API Security</strong>: API key authentication with hashed credential storage</li>
          <li><strong>XSS Prevention</strong>: DOMPurify sanitization of user input</li>
          <li><strong>SQL Injection Prevention</strong>: Parameterized queries throughout</li>
          <li><strong>Network Security</strong>: Helmet middleware, CORS restrictions, rate limiting</li>
          <li><strong>Audit Logging</strong>: Security events and administrative actions are logged</li>
        </ul>

        <h3>6.3 Data Isolation</h3>
        <p>Each Jira Cloud instance's data is isolated using cloud_id and project_key identifiers, ensuring that one customer's data cannot be accessed by another customer.</p>

        <h2>7. Sub-processors and Third-Party Sharing</h2>
        <p>We may engage third-party service providers ("sub-processors") to assist in providing the App. We do <strong>NOT</strong> sell, rent, or share your personal data with third parties for their own purposes. A complete and up-to-date list of sub-processors used by COREPROCESS is available on our <a href="/sub-processors">Sub-processors</a> page.</p>
        <p>We may update our list of sub-processors from time to time. Material changes will be communicated through the <a href="/sub-processors">Sub-processors</a> page, the Atlassian Marketplace listing, or in-app notifications.</p>
        <p>Each sub-processor is bound by contractual obligations to maintain the confidentiality and security of personal data consistent with this Privacy Policy and applicable data protection laws.</p>

        <h2>8. Data Retention and Deletion</h2>
        <ul>
          <li><strong>Active data</strong>: Retained for as long as the App is installed and your subscription is active.</li>
          <li><strong>Deleted data</strong>: Permanently removed from active storage when deleted within the App.</li>
          <li><strong>Uninstallation</strong>: Upon uninstallation, all Customer Data will be automatically deleted from our active systems within thirty (30) days.</li>
          <li><strong>Backups</strong>: Encrypted backups containing your data are retained for a maximum of ninety (90) days from the date of backup, after which they are automatically purged.</li>
          <li><strong>Audit logs</strong>: Security and audit logs may be retained for up to one (1) year for compliance and security investigation purposes, with personal identifiers minimized where reasonably possible.</li>
          <li><strong>Legal retention</strong>: Where required by applicable law, court order, or to defend legal claims, data may be retained for longer periods.</li>
        </ul>

        <h2>9. Your Rights (GDPR, CCPA, LGPD, and Other Laws)</h2>
        <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>

        <h3>9.1 Rights Under GDPR (EEA, UK, Switzerland)</h3>
        <ul>
          <li><strong>Right of Access (Art. 15)</strong>: View all data through the App's interface or by request</li>
          <li><strong>Right to Rectification (Art. 16)</strong>: Correct inaccurate data through the App</li>
          <li><strong>Right to Erasure / "Right to be Forgotten" (Art. 17)</strong>: Request deletion of your data</li>
          <li><strong>Right to Restriction of Processing (Art. 18)</strong>: Request limitation on how we process your data</li>
          <li><strong>Right to Data Portability (Art. 20)</strong>: Export your data in CSV, JSON, or Excel format</li>
          <li><strong>Right to Object (Art. 21)</strong>: Object to processing based on legitimate interests</li>
          <li><strong>Right to Withdraw Consent (Art. 7(3))</strong>: Withdraw any consent previously given</li>
          <li><strong>Right to Lodge a Complaint (Art. 77)</strong>: File a complaint with your local supervisory authority</li>
        </ul>

        <h3>9.2 Rights Under CCPA / CPRA (California Residents)</h3>
        <ul>
          <li><strong>Right to Know</strong>: Request disclosure of personal information collected, used, and shared</li>
          <li><strong>Right to Delete</strong>: Request deletion of personal information</li>
          <li><strong>Right to Correct</strong>: Request correction of inaccurate personal information</li>
          <li><strong>Right to Opt-Out of Sale/Sharing</strong>: We do not sell or share personal information for advertising purposes</li>
          <li><strong>Right to Limit Use of Sensitive Personal Information</strong>: We do not collect sensitive personal information</li>
          <li><strong>Right to Non-Discrimination</strong>: You will not be discriminated against for exercising your privacy rights</li>
        </ul>

        <h3>9.3 Rights Under LGPD (Brazil)</h3>
        <ul>
          <li>Confirmation and access to data</li>
          <li>Correction of incomplete or inaccurate data</li>
          <li>Anonymization, blocking, or deletion of unnecessary data</li>
          <li>Data portability</li>
          <li>Information about public and private entities with whom data has been shared</li>
          <li>Revocation of consent</li>
        </ul>

        <h3>9.4 How to Exercise Your Rights</h3>
        <p>To exercise any of these rights, contact us at <a href="mailto:cp.content100@gmail.com">cp.content100@gmail.com</a>. We will respond to your request within thirty (30) days, or as required by applicable law. We may need to verify your identity before processing certain requests.</p>

        <h2>10. International Data Transfers</h2>
        <p>The App may transfer and process personal data across international borders. We rely on the following legal mechanisms to ensure adequate protection:</p>
        <ul>
          <li><strong>Adequacy Decisions</strong>: Where data is transferred to jurisdictions recognized by the European Commission as providing adequate data protection (such as the Republic of Korea, recognized by Adequacy Decision of December 17, 2021).</li>
          <li><strong>Standard Contractual Clauses (SCCs)</strong>: For transfers to other jurisdictions, we rely on the European Commission's Standard Contractual Clauses or equivalent safeguards.</li>
          <li><strong>EU-US Data Privacy Framework</strong>: Where applicable, transfers to US-based sub-processors certified under the EU-US Data Privacy Framework.</li>
          <li><strong>Atlassian Forge Infrastructure</strong>: Customer Data hosted on the Atlassian Forge platform is governed by Atlassian's data residency policies and the Forge Data Processing Addendum.</li>
        </ul>
        <p>By using the App, you acknowledge and consent to such international transfers, subject to the safeguards described above.</p>

        <h2>11. Data Breach Notification</h2>
        <p>In the event of a personal data breach that is likely to result in a risk to the rights and freedoms of individuals, COREPROCESS will:</p>
        <ul>
          <li>Notify affected customers without undue delay and, where feasible, within seventy-two (72) hours of becoming aware of the breach, in accordance with GDPR Article 33.</li>
          <li>Provide information about the nature of the breach, categories and approximate number of data subjects affected, likely consequences, and measures taken or proposed to address the breach.</li>
          <li>Cooperate with relevant supervisory authorities as required by applicable law.</li>
          <li>Implement remediation measures and conduct post-incident reviews to prevent recurrence.</li>
        </ul>

        <h2>12. Children's Privacy</h2>
        <p>The App is designed for enterprise Jira environments and is not intended for use by children. We do not knowingly collect personal data from individuals under:</p>
        <ul>
          <li><strong>16 years of age</strong> in the European Economic Area, the United Kingdom, and Switzerland</li>
          <li><strong>13 years of age</strong> in the United States (per COPPA)</li>
          <li><strong>14 years of age</strong> in the Republic of Korea (per Personal Information Protection Act)</li>
          <li>The applicable minimum age in any other jurisdiction</li>
        </ul>
        <p>If you become aware that a child has provided personal data to us without verifiable parental consent, please contact us immediately so we can take appropriate action.</p>

        <h2>13. Cookies and Tracking</h2>
        <p>The App itself does not use browser cookies or third-party tracking technologies for advertising or analytics. The App may use session storage or local storage for essential functionality (such as user preferences and authentication state), which is necessary for the operation of the App and does not constitute tracking under GDPR ePrivacy Directive.</p>
        <p>Note: Cookies used on the Atlassian Marketplace listing page or the Atlassian Jira Cloud platform itself are governed by Atlassian's privacy policy.</p>

        <h2>14. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or service offerings. Material changes will be communicated through:</p>
        <ul>
          <li>In-app notifications</li>
          <li>Atlassian Marketplace listing updates</li>
          <li>Email to administrators (where contact information is available)</li>
        </ul>
        <p>The "Last Updated" date at the top of this policy indicates when it was last revised. Your continued use of the App after the effective date of any changes constitutes acceptance of the revised policy.</p>

        <h2>15. Contact Us</h2>
        <p>For questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact:</p>
        <p><strong>COREPROCESS</strong></p>
        <p>Email: <a href="mailto:cp.content100@gmail.com">cp.content100@gmail.com</a></p>
        <p>For data protection inquiries from EEA residents, you also have the right to contact your local data protection supervisory authority. A list of EEA supervisory authorities is available at: <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" target="_blank" rel="noopener noreferrer">https://edpb.europa.eu/about-edpb/about-edpb/members_en</a></p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
