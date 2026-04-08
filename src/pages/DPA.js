import React from 'react';
import '../styles/legal.css';

const DPA = () => {
  return (
    <div className="legal-page">
      <div className="legal-content">
        <h1>Data Processing Addendum</h1>
        <p className="last-updated">Last Updated: April 2026</p>

        <h2>Introduction</h2>
        <p>This Data Processing Addendum ("DPA") forms part of the Terms of Service ("Terms") between you ("Customer", "Controller") and COREPROCESS ("we", "us", "our", "Processor") governing your use of the T-CAFE application ("the App") distributed through the Atlassian Marketplace.</p>
        <p>This DPA applies to the extent COREPROCESS processes Personal Data on behalf of the Customer in connection with the App, and is intended to ensure compliance with the General Data Protection Regulation (Regulation (EU) 2016/679) ("GDPR"), the United Kingdom General Data Protection Regulation ("UK GDPR"), the California Consumer Privacy Act ("CCPA") as amended by the California Privacy Rights Act ("CPRA"), the Brazilian General Data Protection Law (Lei Geral de Proteção de Dados, "LGPD"), and other applicable data protection laws.</p>
        <p>By installing and using the App, you accept this DPA on behalf of yourself and any organization you represent. If you do not agree to this DPA, you must not install or use the App.</p>

        <h2>1. Definitions</h2>
        <p>Capitalized terms not defined in this DPA shall have the meanings given to them in the Terms of Service or applicable data protection laws.</p>
        <ul>
          <li><strong>"Applicable Data Protection Laws"</strong> means all laws and regulations applicable to the Processing of Personal Data under this DPA, including the GDPR, UK GDPR, CCPA/CPRA, LGPD, and any other data protection or privacy laws applicable to the parties.</li>
          <li><strong>"Controller"</strong>, <strong>"Processor"</strong>, <strong>"Data Subject"</strong>, <strong>"Personal Data"</strong>, <strong>"Personal Data Breach"</strong>, <strong>"Processing"</strong>, and <strong>"Supervisory Authority"</strong> shall have the meanings given to them in the GDPR.</li>
          <li><strong>"Customer Personal Data"</strong> means any Personal Data that COREPROCESS processes on behalf of the Customer in connection with the App.</li>
          <li><strong>"Sub-processor"</strong> means any third party engaged by COREPROCESS to process Customer Personal Data in connection with the App.</li>
          <li><strong>"Standard Contractual Clauses"</strong> or <strong>"SCCs"</strong> means the standard contractual clauses approved by the European Commission for the transfer of personal data to third countries pursuant to GDPR.</li>
        </ul>

        <h2>2. Roles of the Parties</h2>
        <ul>
          <li><strong>Customer as Controller</strong>: The Customer is the Controller of Customer Personal Data and determines the purposes and means of Processing.</li>
          <li><strong>COREPROCESS as Processor</strong>: COREPROCESS acts as a Processor and processes Customer Personal Data only on behalf of and in accordance with the documented instructions of the Customer.</li>
          <li><strong>Atlassian as Sub-processor</strong>: Atlassian acts as a Sub-processor for the App's hosting infrastructure under the Atlassian Forge platform, subject to Atlassian's own data processing terms.</li>
        </ul>

        <h2>3. Scope and Purpose of Processing</h2>
        <h3>3.1 Subject Matter</h3>
        <p>The subject matter of the Processing is the provision of the App's test management functionality to the Customer, as described in the Terms of Service.</p>

        <h3>3.2 Duration</h3>
        <p>The duration of the Processing is the term of the Customer's subscription to the App, plus any retention period required for backups or legal compliance as set forth in the Privacy Policy.</p>

        <h3>3.3 Nature and Purpose</h3>
        <p>COREPROCESS processes Customer Personal Data for the following purposes:</p>
        <ul>
          <li>Providing the App's core functionality (test case, plan, and report management)</li>
          <li>User authentication and authorization</li>
          <li>Storing and retrieving Customer Data</li>
          <li>Generating reports and analytics for the Customer's authorized users</li>
          <li>Security monitoring and incident response</li>
          <li>Technical support and bug fixing</li>
          <li>Compliance with legal obligations</li>
        </ul>

        <h3>3.4 Types of Personal Data</h3>
        <p>The types of Personal Data processed may include:</p>
        <ul>
          <li>Atlassian account identifiers (account ID, email address)</li>
          <li>User profile information (display name, avatar URL)</li>
          <li>User-generated content (test cases, test plans, test results, comments, attachments)</li>
          <li>Technical data (IP addresses, request timestamps, audit logs)</li>
        </ul>

        <h3>3.5 Categories of Data Subjects</h3>
        <p>The categories of Data Subjects whose Personal Data is processed include:</p>
        <ul>
          <li>Customer's employees, contractors, and other authorized users of the App</li>
          <li>Customer's administrators and project managers</li>
          <li>Any individuals identified within content created or uploaded to the App by the Customer's authorized users</li>
        </ul>

        <h2>4. Customer Instructions</h2>
        <p>COREPROCESS shall process Customer Personal Data only in accordance with the documented instructions of the Customer, as set forth in:</p>
        <ul>
          <li>The Terms of Service</li>
          <li>The Privacy Policy</li>
          <li>This DPA</li>
          <li>The Customer's use of the App's features and configuration</li>
          <li>Any additional written instructions provided by the Customer that are reasonably feasible for COREPROCESS to implement</li>
        </ul>
        <p>If COREPROCESS believes that an instruction from the Customer violates Applicable Data Protection Laws, COREPROCESS shall promptly inform the Customer.</p>

        <h2>5. Processor Obligations</h2>
        <p>COREPROCESS shall:</p>
        <ul>
          <li><strong>Process lawfully</strong>: Process Customer Personal Data only as instructed by the Customer and in accordance with this DPA and Applicable Data Protection Laws.</li>
          <li><strong>Confidentiality</strong>: Ensure that personnel authorized to process Customer Personal Data are bound by appropriate confidentiality obligations.</li>
          <li><strong>Security measures</strong>: Implement appropriate technical and organizational measures as described in Section 6 of this DPA.</li>
          <li><strong>Sub-processor management</strong>: Engage Sub-processors only in accordance with Section 7 of this DPA.</li>
          <li><strong>Assist the Customer</strong>: Provide reasonable assistance to the Customer in fulfilling its obligations to respond to Data Subject requests, conduct Data Protection Impact Assessments, and consult with Supervisory Authorities.</li>
          <li><strong>Notify breaches</strong>: Notify the Customer of Personal Data Breaches in accordance with Section 9 of this DPA.</li>
          <li><strong>Return or delete data</strong>: Return or delete Customer Personal Data upon termination as described in Section 12.</li>
          <li><strong>Audit cooperation</strong>: Make available information necessary to demonstrate compliance with this DPA, in accordance with Section 11.</li>
        </ul>

        <h2>6. Security Measures</h2>
        <p>COREPROCESS shall implement and maintain appropriate technical and organizational measures designed to protect Customer Personal Data against unauthorized or unlawful Processing, accidental loss, destruction, damage, alteration, or disclosure. These measures include:</p>

        <h3>6.1 Technical Measures</h3>
        <ul>
          <li><strong>Encryption at Rest</strong>: AES-256-CBC encryption for sensitive Customer Personal Data stored in the database</li>
          <li><strong>Encryption in Transit</strong>: HTTPS/TLS for all data transmission between the App, the customer, and COREPROCESS infrastructure</li>
          <li><strong>Access Control</strong>: Role-based access control (RBAC) with four distinct roles (Admin, Team Admin, Tester, Developer)</li>
          <li><strong>Authentication</strong>: API key authentication with cryptographically hashed credential storage</li>
          <li><strong>Input Validation</strong>: XSS prevention via DOMPurify sanitization</li>
          <li><strong>SQL Injection Prevention</strong>: Parameterized queries throughout the application</li>
          <li><strong>Network Security</strong>: HTTP security headers via Helmet middleware, CORS restrictions, and rate limiting</li>
          <li><strong>Data Isolation</strong>: Multi-tenant data isolation using cloud_id and project_key identifiers</li>
        </ul>

        <h3>6.2 Organizational Measures</h3>
        <ul>
          <li><strong>Access Restrictions</strong>: Personnel access to production systems is restricted to authorized individuals only, on a need-to-know basis</li>
          <li><strong>Confidentiality Obligations</strong>: All personnel are bound by confidentiality agreements</li>
          <li><strong>Audit Logging</strong>: Security events and administrative actions are logged for review</li>
          <li><strong>Incident Response</strong>: Defined procedures for detecting, responding to, and reporting security incidents</li>
          <li><strong>Backup and Recovery</strong>: Encrypted backups with defined retention and recovery procedures</li>
        </ul>

        <h3>6.3 Updates to Security Measures</h3>
        <p>COREPROCESS may update its security measures from time to time, provided that such updates do not materially decrease the overall level of protection provided to Customer Personal Data.</p>

        <h2>7. Sub-processors</h2>
        <h3>7.1 General Authorization</h3>
        <p>The Customer provides general authorization for COREPROCESS to engage Sub-processors to process Customer Personal Data, subject to the terms of this Section 7.</p>

        <h3>7.2 Current Sub-processors</h3>
        <p>The current list of Sub-processors used by COREPROCESS is maintained on our <a href="/sub-processors">Sub-processors</a> page, which is incorporated into this DPA by reference.</p>

        <h3>7.3 New Sub-processors</h3>
        <p>COREPROCESS shall notify the Customer of any intended changes concerning the addition or replacement of Sub-processors, giving the Customer the opportunity to object to such changes. Notification will be made through:</p>
        <ul>
          <li>Updates to the Privacy Policy and Sub-processor list</li>
          <li>In-app notifications where feasible</li>
          <li>Email to administrators where contact information is available</li>
        </ul>

        <h3>7.4 Sub-processor Obligations</h3>
        <p>COREPROCESS shall ensure that any Sub-processor it engages is bound by written agreement to data protection obligations substantially similar to those set out in this DPA, including obligations to implement appropriate technical and organizational security measures.</p>

        <h3>7.5 Liability for Sub-processors</h3>
        <p>COREPROCESS shall remain fully liable to the Customer for the performance of any Sub-processor's obligations.</p>

        <h2>8. Data Subject Rights</h2>
        <p>Taking into account the nature of the Processing, COREPROCESS shall assist the Customer by appropriate technical and organizational measures, insofar as possible, in fulfilling the Customer's obligations to respond to requests from Data Subjects exercising their rights under Applicable Data Protection Laws, including:</p>
        <ul>
          <li>Right of Access</li>
          <li>Right to Rectification</li>
          <li>Right to Erasure</li>
          <li>Right to Restriction of Processing</li>
          <li>Right to Data Portability</li>
          <li>Right to Object</li>
          <li>Rights related to automated decision-making and profiling (where applicable)</li>
        </ul>
        <p>The App provides functionality enabling the Customer to access, correct, delete, and export Customer Personal Data through its standard interface. If COREPROCESS receives a request directly from a Data Subject, it shall, to the extent legally permitted, promptly forward such request to the Customer and not respond to the Data Subject directly without the Customer's authorization.</p>

        <h2>9. Personal Data Breach Notification</h2>
        <p>In the event of a Personal Data Breach affecting Customer Personal Data, COREPROCESS shall:</p>
        <ul>
          <li>Notify the Customer without undue delay and, where feasible, within seventy-two (72) hours of becoming aware of the breach</li>
          <li>Provide information about the nature of the breach, including (where possible) the categories and approximate number of Data Subjects and records affected</li>
          <li>Communicate the name and contact details of the data protection contact or other point of contact for further information</li>
          <li>Describe the likely consequences of the breach</li>
          <li>Describe the measures taken or proposed to address the breach and mitigate possible adverse effects</li>
          <li>Cooperate with the Customer and provide reasonable assistance with the Customer's notification obligations to Supervisory Authorities and Data Subjects</li>
        </ul>
        <p>COREPROCESS's notification of a Personal Data Breach shall not be construed as an acknowledgment of fault or liability.</p>

        <h2>10. Data Protection Impact Assessments</h2>
        <p>COREPROCESS shall, taking into account the nature of the Processing and the information available to it, provide reasonable assistance to the Customer with any Data Protection Impact Assessments and prior consultations with Supervisory Authorities that the Customer is required to carry out under Applicable Data Protection Laws.</p>

        <h2>11. Audit Rights</h2>
        <p>COREPROCESS shall make available to the Customer information reasonably necessary to demonstrate compliance with this DPA and Applicable Data Protection Laws.</p>
        <p>Where the Customer reasonably believes that an audit is necessary:</p>
        <ul>
          <li>The Customer shall provide COREPROCESS with at least thirty (30) days' prior written notice</li>
          <li>Audits shall be conducted no more than once per calendar year, except where required by a Supervisory Authority or following a Personal Data Breach</li>
          <li>Audits shall be conducted during normal business hours and in a manner that does not disrupt COREPROCESS's normal business operations</li>
          <li>The Customer shall bear all costs of the audit, unless the audit reveals material non-compliance by COREPROCESS</li>
          <li>The Customer shall treat all information obtained during the audit as confidential</li>
        </ul>
        <p>In lieu of an on-site audit, COREPROCESS may satisfy its audit obligations by providing relevant documentation, third-party audit reports (such as SOC 2 reports if available), security questionnaire responses (such as CAIQ), or written responses to the Customer's reasonable inquiries.</p>

        <h2>12. International Data Transfers</h2>
        <p>To the extent that COREPROCESS transfers Customer Personal Data from the European Economic Area, the United Kingdom, or Switzerland to a country not deemed by the European Commission (or relevant authority) to provide an adequate level of data protection, such transfers shall be governed by:</p>
        <ul>
          <li><strong>Standard Contractual Clauses</strong>: The Standard Contractual Clauses approved by the European Commission, which are hereby incorporated by reference and shall apply to such transfers</li>
          <li><strong>UK International Data Transfer Addendum</strong>: For transfers from the United Kingdom, the UK International Data Transfer Addendum issued by the Information Commissioner's Office shall apply</li>
          <li><strong>Adequacy Decisions</strong>: Where the recipient country has been recognized as providing adequate protection (such as the Republic of Korea, recognized by Adequacy Decision of December 17, 2021)</li>
          <li><strong>Other Approved Mechanisms</strong>: Any other transfer mechanism approved under Applicable Data Protection Laws</li>
        </ul>
        <p>The parties agree that for the purposes of the Standard Contractual Clauses, the Customer is the data exporter and COREPROCESS is the data importer, and Module Two (Controller-to-Processor) shall apply.</p>

        <h2>13. Return or Deletion of Personal Data</h2>
        <p>Upon termination of the Customer's subscription to the App or upon the Customer's written request:</p>
        <ul>
          <li>COREPROCESS shall, at the Customer's choice, return or delete all Customer Personal Data, including existing copies, except to the extent that storage is required by applicable law</li>
          <li>The Customer may export Customer Personal Data through the App's standard export functionality (CSV, JSON, or Excel) at any time prior to termination</li>
          <li>COREPROCESS shall complete deletion within thirty (30) days of termination, except for backups, which shall be deleted within ninety (90) days, and audit logs, which may be retained for up to one (1) year for security and compliance purposes</li>
          <li>Upon completion of deletion, COREPROCESS shall, upon written request, provide written confirmation that all Customer Personal Data has been deleted</li>
        </ul>

        <h2>14. Liability</h2>
        <p>Each party's liability arising out of or in connection with this DPA shall be subject to the limitations of liability set forth in the Terms of Service. Nothing in this DPA shall limit or exclude either party's liability to the extent such liability cannot be limited or excluded under Applicable Data Protection Laws.</p>

        <h2>15. Term and Termination</h2>
        <p>This DPA shall remain in effect for as long as COREPROCESS processes Customer Personal Data on behalf of the Customer in connection with the App, and shall automatically terminate upon the deletion of all Customer Personal Data in accordance with Section 13.</p>

        <h2>16. Order of Precedence</h2>
        <p>In the event of any conflict or inconsistency between the provisions of this DPA and the Terms of Service, the provisions of this DPA shall prevail with respect to data protection matters. In the event of any conflict between this DPA and the Standard Contractual Clauses (where applicable), the Standard Contractual Clauses shall prevail.</p>

        <h2>17. Governing Law</h2>
        <p>This DPA shall be governed by the same governing law as the Terms of Service, except where Applicable Data Protection Laws require a different governing law for specific provisions. Any disputes arising out of or related to this DPA shall be subject to the dispute resolution provisions of the Terms of Service.</p>

        <h2>18. Contact Us</h2>
        <p>For questions, requests, or notifications related to this DPA or the processing of Personal Data, please contact:</p>
        <p><strong>COREPROCESS</strong></p>
        <p>Email: <a href="mailto:cp.content100@gmail.com">cp.content100@gmail.com</a></p>
        <p>For more information about how we collect and process Personal Data, please refer to our <a href="/privacy-policy">Privacy Policy</a> and <a href="/terms-of-service">Terms of Service</a>.</p>
      </div>
    </div>
  );
};

export default DPA;
