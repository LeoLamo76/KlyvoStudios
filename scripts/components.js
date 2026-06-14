import {
  audienceItems,
  platformFeatureCards,
  proofItems,
  processSteps,
  roadmapGroups,
  routes,
  services,
  statusItems,
} from "./site-data.js";

function cardCollection(items, cardClass) {
  return items
    .map(
      ({ title, body, iconClass }) => `
        <article class="${cardClass}">
          ${typeof iconClass === "string" ? `<div class="status-icon ${iconClass}"></div>` : ""}
          <h3>${title}</h3>
          <p>${body}</p>
        </article>
      `
    )
    .join("");
}

function appMockup({ compact = false } = {}) {
  return `
    <div class="hero-product ${compact ? "hero-product-compact" : ""}" aria-label="Klyvo product preview">
      <div class="app-frame ${compact ? "app-frame-compact" : ""}">
        <div class="app-topbar">
          <div class="window-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="topbar-title">Klyvo / Studio</div>
          <div class="topbar-chip">Creative workflow</div>
        </div>

        <div class="app-body">
          <aside class="app-sidebar">
            <div class="sidebar-brand">K</div>
            <nav class="sidebar-nav">
              <span class="active">Concepts</span>
              <span>Projects</span>
              <span>Reviews</span>
              <span>Delivery</span>
              <span>Archive</span>
            </nav>
          </aside>

          <div class="app-content">
            <div class="content-header">
              <div>
                <p class="mini-label">Studio board</p>
                <h2>Build stronger ad creative</h2>
              </div>
              <button class="mock-button">Start concept</button>
            </div>

            <div class="mode-grid">
              <article class="mode-card primary-mode">
                <div class="mode-badge">Product ads</div>
                <h3>Product Video Concepts</h3>
                <p>Stronger product framing for paid social, launches, and ads that need a cleaner hook.</p>
                <div class="mode-preview showcase-preview">
                  <div class="preview-product"></div>
                  <div class="preview-copy">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </article>

              <article class="mode-card">
                <div class="mode-badge purple-badge">Social ads</div>
                <h3>Creative Direction</h3>
                <p>Shape motion, pacing, hooks, and edit direction before the work gets delivered.</p>
                <div class="mode-preview cinematic-preview">
                  <div class="preview-strip"></div>
                  <div class="preview-strip short"></div>
                  <div class="timeline">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </article>
            </div>

              <div class="dashboard-grid">
                <article class="dash-card">
                  <div class="card-top">
                    <span>Brand creative</span>
                    <span class="status-dot"></span>
                  </div>
                <div class="swatches">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </article>

                <article class="dash-card">
                  <div class="card-top">
                    <span>Projects in progress</span>
                    <span class="muted-tag">Active</span>
                  </div>
                <div class="text-lines">
                  <span></span>
                  <span></span>
                  <span class="short-line"></span>
                </div>
              </article>

                <article class="dash-card">
                  <div class="card-top">
                    <span>Delivery notes</span>
                    <span class="muted-tag">Ready</span>
                  </div>
                <div class="queue-bars">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function pageHero({ eyebrow, title, text, ctaLabel, ctaHref }) {
  return `
    <section class="section page-hero">
      <div class="section-heading compact-heading">
        <span class="section-tag">${eyebrow}</span>
        <h1 class="page-title">${title}</h1>
        <p>${text}</p>
        ${ctaLabel ? `<a class="button button-primary page-hero-cta" href="${ctaHref}">${ctaLabel}</a>` : ""}
      </div>
    </section>
  `;
}

export function Navbar(page) {
  const pageKey = page === "building" ? "building" : page;
  return `
    <header class="site-header">
      <a class="brand" href="${routes.home}" aria-label="Klyvo Studios home">
        <span class="brand-mark">K</span>
        <span class="brand-text">
          <strong>Klyvo Studios</strong>
          <small>Creative studio</small>
        </span>
      </a>

      <button
        class="mobile-nav-toggle"
        type="button"
        aria-expanded="false"
        aria-controls="site-nav"
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
      </button>

      <nav id="site-nav" class="nav-links" aria-label="Main navigation">
        <a class="${pageKey === "home" ? "is-active" : ""}" href="${routes.home}">Home</a>
        <a class="${pageKey === "building" ? "is-active" : ""}" href="${routes.building}">Our Process</a>
        <a class="${pageKey === "services" ? "is-active" : ""}" href="${routes.services}">Services</a>
        <a class="${pageKey === "about" ? "is-active" : ""}" href="${routes.about}">About</a>
        <a class="${pageKey === "contact" ? "is-active" : ""}" href="${routes.contact}">Contact</a>
      </nav>

      <a class="button button-primary header-cta" href="${routes.contact}">Start a Project</a>
    </header>
  `;
}

export function HomePage() {
  return `
    <main class="main-content">
      <section id="home" class="hero section home-hero">
        <div class="hero-copy">
          <span class="pill">Klyvo Studios</span>
          <h1>Ads that stop scrolling.</h1>
          <p class="lead">
            Product videos, social ads, and creative concepts for growing brands.
          </p>
          <p class="supporting-line">
            Klyvo Studios helps brands turn product photos, raw footage, and ideas into stronger
            creative without the cost and complexity of a traditional agency.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="${routes.contact}">Talk About a Project</a>
            <a class="button button-secondary" href="${routes.services}">View Services</a>
          </div>
        </div>
        ${appMockup({ compact: true })}
      </section>

      <section class="section">
        <div class="section-heading compact-heading">
            <span class="section-tag">What you get</span>
            <h2>Creative that makes products look more professional.</h2>
            <p>
            Better ads. Better product presentation. A faster path from rough assets to creative
            you can actually use.
          </p>
        </div>
        <div class="status-grid status-grid-compact">
          ${cardCollection(audienceItems, "status-card")}
        </div>
      </section>

      <section class="section preview-section">
        <div class="split-overview">
          <div class="section-heading compact-heading">
            <span class="section-tag">Early work</span>
            <h2>Proof before promises.</h2>
            <p>
              Even early work should show clearer ad thinking, stronger visuals, and better product presentation.
            </p>
            <a class="button button-secondary" href="${routes.contact}">Talk About a Project</a>
          </div>
          <div class="cards-grid preview-card-grid">
            ${proofItems
              .map(
                ({ title, body }) => `
                  <article class="info-card">
                    <h3>${title}</h3>
                    <p>${body}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section preview-section">
        <div class="split-overview">
          <div class="section-heading compact-heading">
            <span class="section-tag">How we help brands today</span>
            <h2>Klyvo Studios helps you ship stronger creative right now.</h2>
            <p>
              This is a creative studio first. The product in progress simply helps make the work faster and sharper behind the scenes.
            </p>
            <a class="button button-secondary" href="${routes.services}">See Services</a>
          </div>
          <div class="cards-grid preview-card-grid">
            ${services
              .slice(0, 3)
              .map(
                ({ title, body }) => `
                  <article class="feature-card">
                    <h3>${title}</h3>
                    <p>${body}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section preview-section">
        <div class="split-overview">
          <div class="section-heading compact-heading">
            <span class="section-tag">Behind the scenes</span>
            <h2>Why Klyvo feels different.</h2>
            <p>
              Klyvo started as an attempt to make professional advertising more accessible for smaller brands.
              The product story matters, but it sits behind the service, not in front of it.
            </p>
            <a class="button button-secondary" href="${routes.about}">Read the Story</a>
          </div>
          <div class="status-grid status-grid-compact">
            ${cardCollection(statusItems, "status-card")}
          </div>
        </div>
      </section>

      ${BetaCTA()}
    </main>
  `;
}

export function BuildingPage() {
  return `
    <main class="main-content">
      ${pageHero({
        eyebrow: "Our process",
        title: "How projects move from idea to ad.",
        text:
          "Klyvo Studios is built to help brands move faster from rough product assets to stronger ad creative, without dragging them through a bloated agency process.",
      })}

      <section class="section">
        <div class="roadmap-status">
          <article class="roadmap-status-card">
            <span class="section-tag">What clients receive</span>
            <h2>A clearer workflow and stronger creative.</h2>
            <p>
              The goal is simple: make the creative process easier to understand, easier to review, and easier to ship.
            </p>
          </article>
          <div class="roadmap-columns">
            ${processSteps
              .map(
                ({ title, body }) => `
                  <article class="roadmap-card">
                    <h3>${title}</h3>
                    <p>${body}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section preview-section">
        <div class="split-overview split-overview-tall">
          <div class="section-heading compact-heading">
            <span class="section-tag">Behind Klyvo</span>
            <h2>The internal system helping the studio move faster.</h2>
            <p>
              Klyvo is still being built carefully. It supports the studio workflow now, and it is growing around real creative work instead of startup theater.
            </p>
          </div>
          ${appMockup()}
        </div>
      </section>

      <section class="section">
        <div class="section-heading compact-heading">
          <span class="section-tag">Current focus</span>
          <h2>What the system is helping with today.</h2>
        </div>
        <div class="cards-grid feature-grid">
          ${platformFeatureCards
            .map(
              ({ title, body }) => `
                <article class="feature-card">
                  <h3>${title}</h3>
                  <p>${body}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    </main>
  `;
}

export function ServicesPage() {
  return `
    <main class="main-content">
      ${pageHero({
        eyebrow: "Services",
        title: "How we're helping brands today",
        text:
          "Klyvo Studios helps brands create better ads, clearer concepts, and sharper short-form creative without the overhead of a traditional agency.",
        ctaLabel: "Contact or Apply",
        ctaHref: routes.contact,
      })}

      <section class="section">
        <div class="cards-grid four-up">
          ${services
            .map(
              ({ title, body }) => `
                <article class="info-card">
                  <h3>${title}</h3>
                  <p>${body}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="section section-elevated">
        <div class="cta-panel">
          <div>
            <span class="section-tag">Need help now?</span>
            <h2>Need help with a product ad?</h2>
            <p>
              Reach out about a project if you need stronger product videos, ads, or creative direction.
            </p>
          </div>
          <div class="hero-actions">
            <a class="button button-primary" href="${routes.contact}">Start a Project</a>
            <a class="button button-secondary" href="${routes.beta}">Ask About Beta</a>
          </div>
        </div>
      </section>
    </main>
  `;
}

export function AboutPage() {
  return `
    <main class="main-content">
      ${pageHero({
        eyebrow: "About",
        title: "Why this exists",
        text:
          "Professional ad creation is expensive, slow, and often out of reach for smaller brands. Klyvo exists to make the creative process faster, clearer, and more accessible without removing human judgment from the work.",
      })}

      <section class="section founder-section">
        <div class="founder-card">
          <p class="founder-quote">
            Klyvo started as an attempt to make professional advertising more accessible for smaller brands.
          </p>
          <p>
            Klyvo isn't finished yet. That's the point. Early users help shape what gets built
            instead of being handed a generic tool that missed the real problem.
          </p>
          <p>
            Klyvo Studios is how that work happens today: real brand projects, direct feedback,
            and a product that is learning from actual creative pressure instead of a fictional roadmap.
          </p>
        </div>
      </section>
    </main>
  `;
}

export function ContactPage() {
  return `
    <main class="main-content">
      ${pageHero({
        eyebrow: "Contact / Apply",
        title: "Choose the right next step.",
        text:
          "Reach out about a project, ask about beta access, or do both if you want service help now and want to follow what Klyvo becomes.",
      })}

      <section id="contact" class="section contact-section">
        <div class="contact-panel">
          <div class="contact-copy">
            <span class="section-tag">Direct email</span>
            <h2>klyvo.cloud@gmail.com</h2>
            <p>
              Talk to us about a product video, social ad, concept direction, or ongoing creative support.
            </p>
            <p>
              Response time: 24-72 hours. Klyvo Studios is currently accepting a limited number of
              projects while workflows are being refined.
            </p>
          </div>

          <div class="forms-grid">
            <div class="form-card">
              <h3>Contact about a project</h3>
              <form name="contact" method="post" data-form-endpoint="/api/contact">
                <label>
                  Name
                  <input name="name" type="text" autocomplete="name" required>
                </label>
                <label>
                  Email
                  <input name="email" type="email" autocomplete="email" required>
                </label>
                <label>
                  Brand/company
                  <input name="company" type="text" autocomplete="organization" required>
                </label>
                <label>
                  What do you need help creating?
                  <textarea name="message" rows="5" required></textarea>
                </label>
                <button class="button button-secondary form-button" type="submit">Send message</button>
                <p class="form-status" aria-live="polite"></p>
              </form>
            </div>

            <div id="beta" class="form-card beta-card">
              <h3>Ask about beta access</h3>
              <form name="beta-access" method="post" data-form-endpoint="/api/beta-apply">
                <label>
                  Work email
                  <input name="email" type="email" autocomplete="email" required>
                </label>
                <label>
                  Brand/company
                  <input name="company" type="text" autocomplete="organization" required>
                </label>
                <label>
                  Website or social link
                  <input name="website_or_social" type="url" inputmode="url" placeholder="https://">
                </label>
                <label>
                  What kind of ad workflow are you trying to improve?
                  <textarea name="workflow_problem" rows="4" required></textarea>
                </label>
                <label>
                  Are you looking for service help now, beta software access, or both?
                  <input name="interest_type" type="text" placeholder="Service help, beta access, or both" required>
                </label>
                <button class="button button-primary form-button" type="submit">Apply for Beta</button>
                <p class="form-status" aria-live="polite"></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}

export function BetaCTA() {
  return `
    <section class="section cta-section">
      <div class="cta-panel">
        <div>
          <span class="section-tag">Early group</span>
          <h2>Want to be part of the early group?</h2>
          <p>
            We're accepting a small number of beta clients to test workflows, give feedback,
            and shape what Klyvo becomes.
          </p>
        </div>
        <a class="button button-primary" href="${routes.beta}">Apply for Beta</a>
      </div>
    </section>
  `;
}

export function Footer() {
  return `
    <footer class="site-footer">
      <div>
        <strong>Klyvo Studios</strong>
        <p>Service today. Product in progress.</p>
      </div>
      <div class="footer-links">
        <a href="${routes.building}">What We're Building</a>
        <a href="${routes.services}">Services</a>
        <a href="${routes.about}">About</a>
        <a href="${routes.contact}">Contact</a>
      </div>
    </footer>
  `;
}
