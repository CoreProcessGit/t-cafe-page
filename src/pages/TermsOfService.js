import React from 'react';
import '../styles/legal.css';

const TermsOfService = () => {
  return (
    <div className="legal-page">
      <div className="legal-content">
        <h1>Terms of Service</h1>
        <p className="last-updated">Last Updated: April 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By installing, accessing, or using the T-CAFE application ("the App"), you agree to these Terms. The App is developed by COREPROCESS.</p>

        <h2>2. Description of Service</h2>
        <p>T-CAFE is a test management application for Atlassian Jira Cloud providing:</p>
        <ul>
          <li>Test case creation and management (Single and Factor Combination types)</li>
          <li>Test plan management and execution tracking</li>
          <li>Test report generation and analytics</li>
          <li>Defect tracking integration with Jira issues</li>
          <li>File attachment management</li>
          <li>Multi-language support (English, Korean, Japanese)</li>
        </ul>

        <h2>3. Eligibility</h2>
        <p>The App is intended for licensed Atlassian Jira Cloud users with active subscriptions, authorized by their Jira administrator.</p>

        <h2>4. User Responsibilities</h2>
        <p>You agree to:</p>
        <ul>
          <li>Use the App only for test management purposes</li>
          <li>Not attempt to access other instances' data</li>
          <li>Not reverse engineer or decompile the App</li>
          <li>Not store illegal or harmful content</li>
          <li>Maintain Jira account credential security</li>
          <li>Comply with Atlassian's Terms of Service</li>
        </ul>

        <h2>5. Data Ownership</h2>
        <ul>
          <li><strong>Your Data</strong>: All content you create remains your property</li>
          <li><strong>Export</strong>: Export your data anytime (CSV, JSON, Excel)</li>
          <li><strong>Our Rights</strong>: We do not claim ownership of your content</li>
        </ul>

        <h2>6. Service Availability</h2>
        <p>We strive for availability but do not guarantee uninterrupted service. The App depends on Jira Cloud, Forge infrastructure, our database server, and network connectivity.</p>

        <h2>7. Intellectual Property</h2>
        <p>The App is owned by COREPROCESS. We grant a limited, non-exclusive, non-transferable license to use the App. You may not copy, modify, distribute, sell, or use the App to develop competing products.</p>

        <h2>8. Limitation of Liability</h2>
        <h3>8.1 Disclaimer</h3>
        <p className="uppercase">The App is provided "as is" without warranties of any kind.</p>

        <h3>8.2 Limitation</h3>
        <p className="uppercase">COREPROCESS shall not be liable for indirect, incidental, special, or consequential damages.</p>

        <h3>8.3 Maximum Liability</h3>
        <p>Our total cumulative liability shall not exceed <strong>[TO BE DETERMINED]</strong>.</p>

        <h2>9. Termination</h2>
        <p>You may stop using the App by uninstalling it. We may suspend access for Terms violations. Upon termination, export your data before uninstalling.</p>

        <h2>10. Governing Law</h2>
        <p>These Terms are governed by the laws of the Republic of Korea. Disputes shall be subject to Seoul courts.</p>

        <h2>11. Changes to Terms</h2>
        <p>We will notify users of material changes through the Marketplace listing or in-app notification.</p>

        <h2>12. Contact Us</h2>
        <p><strong>COREPROCESS</strong></p>
        <p>Email: <a href="mailto:cp.content100@gmail.com">cp.content100@gmail.com</a></p>
      </div>
    </div>
  );
};

export default TermsOfService;
