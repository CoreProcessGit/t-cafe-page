import React from 'react';

const ScreenshotSlot = ({ label, src, recommended = '1280 × 720' }) => {
  if (src) {
    return (
      <figure className="guide-screenshot-figure">
        <img src={src} alt={label} className="guide-screenshot-image" loading="lazy" />
        {label && <figcaption className="guide-screenshot-caption">{label}</figcaption>}
      </figure>
    );
  }
  return (
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
};

export default ScreenshotSlot;
