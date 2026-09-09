import { useEffect } from 'react';

/**
 * About Fels Wertburg AI - an original, honest brand story page.
 * Rendered inside the shared site Header/Footer (see src/about-us.jsx).
 * All copy is original; no fabricated stats, team members or testimonials.
 */
export default function AboutPage() {
  // Scroll-reveal: observe `.rv` blocks once, reveal them as they enter view.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.rv'));
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* ============ Hero ============ */}
      <section className="ab-hero" aria-labelledby="about-title">
        <div className="ab-hero-bg" aria-hidden="true">
          <span className="blob1" />
          <span className="blob2" />
          <span className="grid" />
        </div>
        <div className="shell ab-hero-grid">
          <div className="rv">
            <p className="ab-eyebrow">About Fels Wertburg AI</p>
            <h1 id="about-title">
              Research that helps you <span className="grad">decide, not guess.</span>
            </h1>
            <p className="ab-lede">
              Fels Wertburg AI is an Australian platform that pairs <strong>AI-assisted market scanning</strong>
              with <strong>plain-English education</strong>. We help everyday people research Bitcoin, Ethereum and
              60+ other cryptocurrencies with clearer context: no hype, no noise, no shortcuts.
            </p>
            <div className="ab-facts" aria-label="At a glance">
              <span className="ab-chip">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Made in Australia
              </span>
              <span className="ab-chip">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                No credit card to start
              </span>
              <span className="ab-chip">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Education included
              </span>
            </div>
            <div className="ab-hero-actions">
              <a className="ab-btn-solid" href="/#register">
                Create your account
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a className="ab-btn-line" href="/#platform">
                Explore the platform
              </a>
            </div>
          </div>
          <div className="ab-hero-imgs rv">
            <div className="ab-float-card">
              <span className="dot" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M3 17l6-9 4 6 3-4 5 7" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="18" cy="7" r="1.6" fill="currentColor" />
                </svg>
              </span>
              <span>
                <b>Evidence over hype</b>
                <span>Human-reviewed research</span>
              </span>
            </div>
            <div className="ab-img-a">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
                alt="Two people collaborating around a laptop at a shared table"
                width="1400"
                height="900"
                fetchPriority="high"
              />
            </div>
            <div className="ab-img-b">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80"
                alt="Laptop screen showing market analytics charts"
                width="700"
                height="470"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ Story ============ */}
      <section className="ab-section" style={{ paddingTop: 0 }} aria-labelledby="story-title">
        <div className="shell">
          <div className="ab-story-grid">
            <div className="ab-story-img rv">
              <div className="frame">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1100&q=80"
                  alt="Colleagues reviewing charts together in a boardroom"
                  width="1100"
                  height="740"
                  loading="lazy"
                />
              </div>
              <span className="tag">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="#15877D" strokeWidth="2" />
                  <path d="M12 7v5l3 2" stroke="#15877D" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Building since day one with research first
              </span>
            </div>
            <div className="ab-story-copy rv">
              <p className="ab-eyebrow">Our story</p>
              <h2 id="story-title">We got tired of guessing.</h2>
              <p>
                Fels Wertburg started with a simple observation: most people don&rsquo;t have a crypto
                problem: they have an <strong>information</strong> problem. Between jargon, hype and
                contradictory advice, finding a straight answer about a digital asset can feel like a
                second job.
              </p>
              <p>
                So we set out to build the research layer we wished existed: a single workspace that
                <strong> scans the market for you</strong>, explains what changed in plain language, and
                points you to the education to go deeper, at your own pace, on your own terms.
              </p>
              <ul className="ab-tick">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" fill="#29B6A8" opacity="0.18" />
                    <path d="M8 12.5l2.6 2.6L16 9.5" stroke="#15877D" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Market scanning, alerts and guides in one calm workspace.
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" fill="#29B6A8" opacity="0.18" />
                    <path d="M8 12.5l2.6 2.6L16 9.5" stroke="#15877D" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Built for Australians, with Australian support hours.
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" fill="#29B6A8" opacity="0.18" />
                    <path d="M8 12.5l2.6 2.6L16 9.5" stroke="#15877D" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  No advice robots, no guaranteed returns: just clearer information.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ What we focus on ============ */}
      <section className="ab-section" aria-labelledby="focus-title">
        <div className="shell">
          <div className="ab-sec-head rv">
            <p className="ab-eyebrow">What we focus on</p>
            <h2 id="focus-title">Three things, done properly.</h2>
            <p className="ab-sub">
              Every part of the platform exists to serve one job: helping you understand what&rsquo;s happening
              in the market and why it might matter.
            </p>
          </div>
          <div className="ab-cards">
            <article className="ab-card rv">
              <span className="ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M3 17l6-9 4 6 3-4 5 7" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 21h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <h3>AI-assisted scanning</h3>
              <p>
                Tools that watch price action across exchanges and flag unusual moves and gaps, so you always
                know where to look closer.
              </p>
            </article>
            <article className="ab-card rv">
              <span className="ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 19.5V5.5A1.5 1.5 0 0 1 5.5 4H19v14H6a2 2 0 0 0-2 1.5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M8 8h8M8 12h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <h3>Education, not promises</h3>
              <p>
                Guides written for real beginners, from your first wallet to advanced research. We teach how
                markets work; we never guarantee outcomes.
              </p>
            </article>
            <article className="ab-card rv">
              <span className="ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 3l7 3v5c0 4.4-3 8.4-7 10-4-1.6-7-5.6-7-10V6l7-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M9.5 12l1.8 1.8 3.4-3.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3>Security by design</h3>
              <p>
                Sign-up only asks for basic contact details. No credit card, no wallet keys and no passwords;
                that stays between you and your providers.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ============ Values ============ */}
      <section className="ab-values ab-section" aria-labelledby="values-title">
        <span className="bgdot" style={{ top: -120, right: -80 }} aria-hidden="true" />
        <span className="bgdot" style={{ bottom: -160, left: -60, opacity: 0.7 }} aria-hidden="true" />
        <div className="shell" style={{ position: 'relative' }}>
          <div className="ab-sec-head rv">
            <p className="ab-eyebrow">What we value</p>
            <h2 id="values-title">The way we work</h2>
            <p className="ab-sub">Our principles stay the same whether the market is up, down or sideways.</p>
          </div>
          <div className="ab-val-grid">
            <div className="ab-val rv">
              <span className="num">/ 01</span>
              <h3>Clarity over complexity</h3>
              <p>If an explanation needs an explanation, we rewrite it. Markets are complicated enough.</p>
            </div>
            <div className="ab-val rv">
              <span className="num">/ 02</span>
              <h3>Evidence over hype</h3>
              <p>We show the data and the reasoning, and we clearly label what is opinion versus fact.</p>
            </div>
            <div className="ab-val rv">
              <span className="num">/ 03</span>
              <h3>Education first</h3>
              <p>We&rsquo;d rather you learn to fish than be handed a fish, especially when money is involved.</p>
            </div>
            <div className="ab-val rv">
              <span className="num">/ 04</span>
              <h3>Honesty &amp; accountability</h3>
              <p>No guaranteed returns, no pressure tactics, and clear risk disclosure on every example we show.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Promise ============ */}
      <section className="ab-promise ab-section" aria-labelledby="promise-title">
        <div className="shell">
          <div className="ab-promise-box rv">
            <span className="quotemark" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 7H6a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-7zm11 0h-4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-7z" />
              </svg>
            </span>
            <blockquote>
              <p id="promise-title">
                We can&rsquo;t promise returns. Markets don&rsquo;t work that way. We promise clearer information,
                honest disclaimers, and the education to make your own calls with more confidence.
              </p>
              <cite>The Fels Wertburg AI team</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="ab-cta-band" aria-labelledby="cta-title">
        <div className="shell">
          <div className="inner rv">
            <img
              className="photo"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=80"
              alt=""
              role="presentation"
              loading="lazy"
              width="1800"
              height="1000"
            />
            <div className="veil" aria-hidden="true" />
            <div className="cnt">
              <h2 id="cta-title">Start with the basics, at your own pace.</h2>
              <p>
                Fels Wertburg AI gives Australians a clearer way to research the market: AI-assisted
                scanning, charts and plain-English education, with no credit card needed.
              </p>
              <div className="btns">
                <a className="ab-btn-solid" href="/#register">
                  Create your account
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="none" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a className="btn-ghostw" href="/#platform">
                  Explore the platform
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
