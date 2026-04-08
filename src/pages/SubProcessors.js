import React from 'react';
import '../styles/legal.css';

const SubProcessors = () => {
  return (
    <div className="legal-page">
      <div className="legal-content">
        <h1>Sub-processors</h1>
        <p className="last-updated">Last Updated: April 2026</p>

        <h2>Introduction</h2>
        <p>This page lists the sub-processors that COREPROCESS engages to assist in providing the T-CAFE (Test CAFE) application ("the App"), a business-to-business (B2B) test management service. A "sub-processor" is a third-party service provider that may process Customer Personal Data on behalf of COREPROCESS in connection with the App.</p>
        <p>COREPROCESS ensures that each sub-processor is bound by contractual obligations to maintain the confidentiality and security of Customer Personal Data consistent with our <a href="/privacy-policy">Privacy Policy</a>, <a href="/dpa">Data Processing Addendum</a>, and applicable data protection laws.</p>

        <h2>1. COREPROCESS-Operated Infrastructure</h2>
        <p>The T-CAFE backend infrastructure (API servers and a relational database) is operated directly by COREPROCESS on its own internal servers located in the Republic of Korea. No third-party cloud hosting provider is engaged for the storage or processing of Customer Data. As a result, COREPROCESS is solely responsible for the operation, security, and maintenance of the backend infrastructure.</p>

        <h2>2. Infrastructure Sub-processors</h2>
        <p>The following sub-processors provide essential infrastructure services for the App's operation:</p>

        <div className="subprocessor-table">
          <table>
            <thead>
              <tr>
                <th>Sub-processor</th>
                <th>Purpose</th>
                <th>Location</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Atlassian Pty Ltd</strong></td>
                <td>App hosting via Forge platform, user authentication, attachment storage</td>
                <td>Global (Atlassian Cloud regions)</td>
                <td><a href="https://www.atlassian.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></td>
              </tr>
              <tr>
                <td><strong>Cloudflare, Inc.</strong></td>
                <td>DNS management, reverse proxy, network tunnel, DDoS protection, and TLS termination for the COREPROCESS backend domain</td>
                <td>Global (edge network); customer's nearest edge location</td>
                <td><a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>3. Communication Sub-processors</h2>
        <p>The following sub-processors are used for communication with customers:</p>

        <div className="subprocessor-table">
          <table>
            <thead>
              <tr>
                <th>Sub-processor</th>
                <th>Purpose</th>
                <th>Location</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Google LLC (Gmail)</strong></td>
                <td>Email communication for support and notifications</td>
                <td>United States</td>
                <td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>4. Sub-processors Provided by Atlassian</h2>
        <p>Because the App is distributed through the Atlassian Marketplace and runs on the Atlassian Forge platform, Atlassian acts as a primary sub-processor and may engage its own sub-processors (sometimes referred to as "sub-sub-processors") for hosting, content delivery, monitoring, and related services. A complete list of Atlassian's sub-processors is maintained by Atlassian and available at:</p>
        <p><a href="https://www.atlassian.com/legal/sub-processors" target="_blank" rel="noopener noreferrer">https://www.atlassian.com/legal/sub-processors</a></p>

        <h2>5. Notification of Changes</h2>
        <p>COREPROCESS may update this list of sub-processors from time to time. When we add or replace a sub-processor that may process Customer Personal Data, we will notify customers through one or more of the following channels:</p>
        <ul>
          <li>Updates to this page (with a revised "Last Updated" date)</li>
          <li>Updates to the <a href="/privacy-policy">Privacy Policy</a></li>
          <li>In-app notifications where feasible</li>
          <li>Email to administrators where contact information is available</li>
          <li>Atlassian Marketplace listing updates</li>
        </ul>
        <p>Customers subject to GDPR or similar data protection laws may object to any new sub-processor by contacting COREPROCESS at <a href="mailto:privacy@t-cafe.com">{'privacy@t-cafe.com'}</a> within thirty (30) days of notification. If COREPROCESS cannot accommodate the objection, the customer may terminate the affected services in accordance with the <a href="/terms-of-service">Terms of Service</a>.</p>

        <h2>6. Sub-processor Due Diligence</h2>
        <p>Before engaging any sub-processor, COREPROCESS conducts reasonable due diligence to ensure that the sub-processor:</p>
        <ul>
          <li>Provides sufficient guarantees to implement appropriate technical and organizational measures</li>
          <li>Is bound by a written agreement containing data protection obligations consistent with this DPA and applicable laws</li>
          <li>Maintains industry-standard security practices appropriate for the type and sensitivity of data processed</li>
          <li>Complies with applicable data protection laws, including GDPR Article 28 where applicable</li>
        </ul>

        <h2>7. Liability for Sub-processors</h2>
        <p>COREPROCESS remains fully liable to its customers for the performance of any sub-processor's data protection obligations, as set forth in our <a href="/dpa">Data Processing Addendum</a>.</p>

        <h2>8. International Data Transfers</h2>
        <p>Some sub-processors may be located outside the European Economic Area, the United Kingdom, or your country of residence. Where applicable, such international transfers are governed by appropriate transfer mechanisms as described in our <a href="/dpa">Data Processing Addendum</a>, including:</p>
        <ul>
          <li>European Commission adequacy decisions (for example, the Republic of Korea has been recognized as providing adequate data protection by the European Commission's Adequacy Decision of December 17, 2021)</li>
          <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
          <li>UK International Data Transfer Addendum for transfers from the United Kingdom</li>
          <li>Other approved transfer mechanisms under applicable law</li>
        </ul>

        <h2>9. Contact Us</h2>
        <p>For questions about this Sub-processor list or to request additional information about a specific sub-processor, please contact:</p>
        <p><strong>{'COREPROCESS Corp.'}</strong> (COREPROCESS)</p>
        <p>Address: {'Room 801, Dasan Station Leader’s Tower, 123 Dasanjungang-ro 123beon-gil, Namyangju-si, Gyeonggi-do, South Korea'}</p>
        <p>Representative: {'JongSun.Kim'}</p>
        <p>Data protection (DPO): <a href="mailto:privacy@t-cafe.com">{'privacy@t-cafe.com'}</a></p>
        <p>Privacy inquiries: <a href="mailto:privacy@t-cafe.com">{'privacy@t-cafe.com'}</a></p>
        <p>For more information about how we handle your data, please refer to our <a href="/privacy-policy">Privacy Policy</a> and <a href="/dpa">Data Processing Addendum</a>.</p>
      </div>
    </div>
  );
};

export default SubProcessors;
