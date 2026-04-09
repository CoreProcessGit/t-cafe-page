import React from 'react';

const ScreenshotSlot = ({ label, recommended = '1280 × 720' }) => (
  <div
    className="guide-screenshot-slot"
    role="img"
    aria-label={`Screenshot placeholder: ${label}`}
  >
    <div className="guide-screenshot-icon">[ Screenshot ]</div>
    <div className="guide-screenshot-label">{label}</div>
    <div className="guide-screenshot-meta">권장 해상도: {recommended}</div>
  </div>
);

export default ScreenshotSlot;
