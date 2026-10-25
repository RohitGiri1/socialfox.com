import React, { useState, useEffect, useRef } from 'react';
import { config } from './config';

/**
 * Privacy-friendly download tracking hook.
 * Add custom analytics (Plausible, PostHog, custom API, etc.) here when needed.
 */
function onDownloadClick(source = 'main') {
  if (import.meta.env?.DEV) {
    console.log(`[Social Fox Analytics] Download clicked via: ${source}`);
  }
}

export default function App() {
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const mainButtonRef = useRef(null);

  // Sticky bottom bar intersection observer:
  // Visible while scrolling on mobile, HIDDEN when the main button is on screen
  useEffect(() => {
    const target = mainButtonRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show sticky bar only when main download button has scrolled out of view
        setShowStickyBar(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const handleDownload = (source) => {
    onDownloadClick(source);
    setDownloadStarted(true);
  };

  const hasBonus = Boolean(config.bonusText && config.bonusText.trim().length > 0);

  return (
    <div className="page-shell">
      <main className="main-content">
        {/* 1. Tiny Header: Fox logo tinted neon green + "SOCIAL FOX". No menu, no links. */}
        <header className="header">
          <div className="brand">
            <span className="fox-logo-mask" aria-hidden="true" />
            <span className="brand-text">SOCIAL FOX</span>
          </div>
        </header>

        {/* 2. Headline */}
        <h1 className="headline">
          99% of creators stay unseen.<br />
          <span className="headline-accent">Be the 1%.</span>
        </h1>

        {/* 3. Subline */}
        <p className="subline">
          Followers, views, likes and subscribers at the lowest rates.
          {hasBonus && ` Join now and get ${config.bonusText}.`}
        </p>

        {/* 4. Primary Button */}
        <div ref={mainButtonRef} className="download-section">
          <a
            href={config.apkUrl}
            download
            className="btn-primary"
            onClick={() => handleDownload('main')}
            id="main-download-button"
          >
            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download Free App</span>
          </a>
          <div className="download-meta font-mono">
            Android APK • v{config.version} • {config.size}
          </div>

          {downloadStarted && (
            <div className="download-status" role="status">
              <svg className="status-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Download started. Open the file when it finishes.</span>
            </div>
          )}
        </div>

        {/* 5. Price Strip */}
        <section className="price-strip" aria-label="Example rates">
          <div className="price-rows">
            {config.prices.map((item, index) => (
              <div key={index} className="price-row">
                <span className="price-name">{item.name}</span>
                <span className="price-value font-mono">
                  {item.qty} for {item.price}
                </span>
              </div>
            ))}
          </div>
          <p className="price-note">
            Example rates. Live rates inside the app.
          </p>
        </section>

        {/* 6. Install in 3 steps */}
        <section className="install-steps" aria-label="Installation instructions">
          <h2 className="steps-title">Install in 3 steps</h2>
          <ol className="steps-list">
            <li className="step-item">
              <span className="step-num font-mono">1</span>
              <span className="step-text">Tap Download and open the file</span>
            </li>
            <li className="step-item">
              <span className="step-num font-mono">2</span>
              <span className="step-text">
                If Android asks, allow &ldquo;Install unknown apps&rdquo; for your browser (one time)
              </span>
            </li>
            <li className="step-item">
              <span className="step-num font-mono">3</span>
              <span className="step-text">
                Open Social Fox, sign in with Google{hasBonus ? ', claim your bonus' : ''}
              </span>
            </li>
          </ol>
        </section>

        {/* 7. Footer */}
        <footer className="footer">
          <div className="footer-links">
            <a href={config.termsUrl} className="footer-link">Terms</a>
            <span className="footer-sep">•</span>
            <a href={config.privacyUrl} className="footer-link">Privacy</a>
            <span className="footer-sep">•</span>
            <a href={`mailto:${config.supportEmail}`} className="footer-link">{config.supportEmail}</a>
          </div>
          <p className="footer-disclaimer">
            Not affiliated with Instagram, YouTube, Telegram, Meta or X. Target profiles must be public. All payments are final.
          </p>
        </footer>
      </main>

      {/* Sticky Mobile Bottom Bar: visible while scrolling, hidden when main button is on screen */}
      <aside
        className={`sticky-bottom-bar ${showStickyBar ? 'is-visible' : ''}`}
        aria-hidden={!showStickyBar}
      >
        <div className="sticky-inner">
          <a
            href={config.apkUrl}
            download
            className="btn-primary btn-sticky"
            onClick={() => handleDownload('sticky')}
            tabIndex={showStickyBar ? 0 : -1}
          >
            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download Free App</span>
          </a>
        </div>
      </aside>
    </div>
  );
}
