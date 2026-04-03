const TICKER_LABELS = [
  "SEO Mastery",
  "Google Business Profile",
  "Review Automation",
  "AI-Powered Marketing",
  "Business Utopia Framework",
  "Website Redesign",
  "Process Automation",
  "SME Growth Systems",
] as const;

export default function Page() {
  const tickerDup = [...TICKER_LABELS, ...TICKER_LABELS];

  return (
    <>
      <nav>
        <div className="logo">
          d–m <span className="logo-dot" />
        </div>
        <ul>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Framework</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#" className="nav-cta">
              Get Started
            </a>
          </li>
        </ul>
      </nav>

      <div className="hero">
        <div className="hero-bg-text">d–m</div>
        <div className="hero-line-left" />
        <div className="hero-line-right" />
        <div className="hero-line-h" />

        <div className="hero-inner">
          <div className="hero-eyebrow-row">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">A collaborative initiative</span>
            <div className="eyebrow-line" />
          </div>

          <h1>
            <span className="h1-line1">We Build</span>
            <span className="h1-line2">Business</span>
            <span className="h1-line3">
              <span className="h1-utopia">Utopia.</span>
              <span className="h1-dot" />
            </span>
          </h1>

          <div className="hero-divider" />

          <div className="hero-bottom">
            <p className="hero-sub">
              <strong>Most SMEs are invisible online.</strong> We fix that —
              with SEO, automation, AI, and compounding systems that actually
              work. No fluff. Just growth.
            </p>
            <div className="hero-right-col">
              <div className="hero-cta">
                <button type="button" className="btn-primary">
                  Audit My Business
                </button>
                <button type="button" className="btn-ghost">
                  See the Framework
                </button>
              </div>
              <div className="hero-stats">
                <div className="h-stat">
                  <div className="h-stat-n g">6</div>
                  <div className="h-stat-l">Pillars</div>
                </div>
                <div className="h-stat">
                  <div className="h-stat-n">100%</div>
                  <div className="h-stat-l">Practical</div>
                </div>
                <div className="h-stat">
                  <div className="h-stat-n g">∞</div>
                  <div className="h-stat-l">Evolving</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-hint">Scroll</div>
      </div>

      <div className="ticker">
        <div className="ticker-inner">
          {tickerDup.map((label, i) => (
            <span key={`${label}-${i}`} className="ticker-item">
              {label} <span className="sep">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section style={{ background: "var(--paper)" }}>
        <div className="section">
          <div className="section-label">Business Utopia Framework</div>
          <div className="section-title">
            Six pillars. <span>One standard.</span>
          </div>
          <div className="utopia-grid">
            <div className="u-card feat-green">
              <div className="u-num">01</div>
              <h3>Digital Presence & SEO</h3>
              <p>
                Own your rankings. Google Business Profile, local SEO, keyword
                authority — built to last, not to game.
              </p>
            </div>
            <div className="u-card feat-lav">
              <div className="u-num">02</div>
              <h3>Reputation Engine</h3>
              <p>
                Automate review generation across platforms. Turn every happy
                customer into a 5-star signal.
              </p>
            </div>
            <div className="u-card">
              <div className="u-num">03</div>
              <h3>Process Automation</h3>
              <p>
                Eliminate repetitive tasks. Build workflows that run while you
                sleep — real automation, real results.
              </p>
            </div>
            <div className="u-card">
              <div className="u-num">04</div>
              <h3>Technology Edge</h3>
              <p>
                Stay ahead of your industry. AI tools, emerging platforms, and
                the tech your competitors haven&apos;t found yet.
              </p>
            </div>
            <div className="u-card">
              <div className="u-num">05</div>
              <h3>Operational Efficiency</h3>
              <p>
                Tighten the business unit. Reduce waste, speed up delivery, and
                build systems that scale.
              </p>
            </div>
            <div className="u-card">
              <div className="u-num">06</div>
              <h3>Web & Brand Presence</h3>
              <p>
                Futuristic, functional websites that convert. Design with
                intention. Build with purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-strip">
        <div className="stats-inner">
          <div className="stat-block">
            <div className="stat-tag">Our standard</div>
            <div className="stat-n g">100%</div>
            <div className="stat-l">
              Practical. No fluff, no vanity metrics. Real marketing that drives
              real business.
            </div>
          </div>
          <div className="stat-block">
            <div className="stat-tag">Our focus</div>
            <div className="stat-n l">SME–first</div>
            <div className="stat-l">
              Built for small and medium businesses who want enterprise-grade
              marketing.
            </div>
          </div>
          <div className="stat-block">
            <div className="stat-tag">Our framework</div>
            <div className="stat-n">Always evolving</div>
            <div className="stat-l">
              Business Utopia grows continuously — always current, always
              improving.
            </div>
          </div>
        </div>
      </div>

      <div className="services-wrap">
        <div className="services-inner">
          <div className="section-label">What we do</div>
          <div className="section-title">
            Marketing that <span className="g">works.</span> Systems that{" "}
            <span className="l">scale.</span>
          </div>
          <div>
            <div className="svc-item">
              <span className="svc-name">SEO & Search Dominance</span>
              <div className="svc-right">
                <span className="svc-tag tag-core">Core</span>
                <span className="svc-arr">→</span>
              </div>
            </div>
            <div className="svc-item">
              <span className="svc-name">
                Google Business Profile Setup & Management
              </span>
              <div className="svc-right">
                <span className="svc-tag tag-core">Core</span>
                <span className="svc-arr">→</span>
              </div>
            </div>
            <div className="svc-item">
              <span className="svc-name">Review Automation Systems</span>
              <div className="svc-right">
                <span className="svc-tag tag-auto">Automation</span>
                <span className="svc-arr">→</span>
              </div>
            </div>
            <div className="svc-item">
              <span className="svc-name">Business Utopia Audit & Roadmap</span>
              <div className="svc-right">
                <span className="svc-tag tag-core">Strategy</span>
                <span className="svc-arr">→</span>
              </div>
            </div>
            <div className="svc-item">
              <span className="svc-name">Website Design & Development</span>
              <div className="svc-right">
                <span className="svc-tag tag-web">Web</span>
                <span className="svc-arr">→</span>
              </div>
            </div>
            <div className="svc-item">
              <span className="svc-name">AI & Tech Integration</span>
              <div className="svc-right">
                <span className="svc-tag tag-future">Future</span>
                <span className="svc-arr">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section style={{ background: "var(--paper)" }}>
        <div className="why-section">
          <div className="section-label">Why d-m</div>
          <div className="section-title">
            What makes us <span>different.</span>
          </div>
          <div className="why-grid">
            <div className="why-card wg">
              <h3>Real & Practical</h3>
              <p>
                No vanity metrics. No abstract theory. Only tactics and systems
                that demonstrably move the needle for SMEs.
              </p>
            </div>
            <div className="why-card wl">
              <h3>Automation-First</h3>
              <p>
                Everything we build has automation baked in from day one. Not as
                an add-on — as a non-negotiable.
              </p>
            </div>
            <div className="why-card wl">
              <h3>Always Current</h3>
              <p>
                Business Utopia evolves constantly. AI, platforms, SEO shifts —
                we track it so our clients don&apos;t have to.
              </p>
            </div>
            <div className="why-card wg">
              <h3>End-to-End</h3>
              <p>
                Strategy to execution to the website to the automation stack. One
                trusted partner, zero fragmentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="cta-inner">
          <h2>
            Ready to build your <em>business utopia?</em>
          </h2>
          <button type="button" className="btn-cta">
            Start the Audit →
          </button>
        </div>
      </div>

      <footer>
        <div className="foot-logo">d–m</div>
        <div className="foot-pal">
          <div
            className="foot-dot"
            style={{ background: "#0a0a0a", border: "1px solid #333" }}
          />
          <div className="foot-dot" style={{ background: "#c8f03a" }} />
          <div className="foot-dot" style={{ background: "#c4b5fd" }} />
          <div
            className="foot-dot"
            style={{ background: "#f5f2ec", border: "1px solid #444" }}
          />
        </div>
        <div>A collaborative initiative. Marketing for the modern SME.</div>
        <div>© 2026 d-m. All rights reserved.</div>
      </footer>
    </>
  );
}
