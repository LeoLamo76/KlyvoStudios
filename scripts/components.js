import {
  audienceItems,
  platformFeatureCards,
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

function appMockup() {
  return `
    <div class="hero-product" aria-label="Klyvo product preview">
      <div class="app-frame">
        <div class="app-topbar">
          <div class="window-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="topbar-title">Klyvo / Create</div>
          <div class="topbar-chip">Beta build</div>
        </div>

        <div class="app-body">
          <aside class="app-sidebar">
            <div class="sidebar-brand">K</div>
            <nav class="sidebar-nav">
              <span class="active">Create</span>
              <span>Projects</span>
              <span>Brand Kit</span>
              <span>Renders</span>
              <span>History</span>
            </nav>
          </aside>

          <div class="app-content">
            <div class="content-header">
              <div>
                <p class="mini-label">Create</p>
                <h2>Build ad creative faster</h2>
              </div>
              <button class="mock-button">New concept</button>
            </div>

            <div class="mode-grid">
              <article class="mode-card primary-mode">
                <div class="mode-badge">Product showcase</div>
                <h3>Basic Product Showcase</h3>
                <p>Clean product framing for paid social, landing pages, and catalog ads.</p>
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
                <div class="mode-badge purple-badge">Video mode</div>
                <h3>Cinematic Mode</h3>
                <p>Structure motion, angle ideas, captions, and pacing before rendering.</p>
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
                  <span>Brand kit</span>
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
                  <span>Caption ideas</span>
                  <span class="muted-tag">Draft</span>
                </div>
                <div class="text-lines">
                  <span></span>
                  <span></span>
                  <span class="short-line"></span>
                </div>
              </article>

              <article class="dash-card">
                <div class="card-top">
                  <span>Render queue</span>
                  <span class="muted-tag">3 jobs</span>
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
          <small>AI creative studio</small>
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
        <a class="${pageKey === "building" ? "is-active" : ""}" href="${routes.building}">What We're Building</a>
        <a class="${pageKey === "services" ? "is-active" : ""}" href="${routes.services}">Services</a>
        <a class="${pageKey === "about" ? "is-active" : ""}" href="${routes.about}">About</a>
        <a class="${pageKey === "contact" ? "is-active" : ""}" href="${routes.contact}">Contact</a>
      </nav>

      <a class="button button-primary header-cta" href="${routes.beta}">Apply for Beta</a>
    </header>
  `;
}

export function HomePage() {
  return `
    <main class="main-content">
      <section id="home" class="hero section home-hero">
        <div class="hero-copy">
          <span class="pill">Early Access</span>
          <h1>AI-assisted ad creation for growing brands.</h1>
          <p class="lead">
            Klyvo Studios helps brands turn product photos, ideas, and raw clips into stronger
            ad creatives while the full Klyvo platform is still being built.
          </p>
          <p class="supporting-line">
            Currently in active development and accepting a small group of beta clients.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="${routes.beta}">Apply for Beta</a>
            <a class="button button-secondary" href="${routes.building}">See What We're Building</a>
          </div>
        </div>
        ${appMockup()}
      </section>

      <section class="section">
        <div class="section-heading compact-heading">
          <span class="section-tag">Development status</span>
          <h2>Built in public, not dressed up as finished.</h2>
          <p>
            Klyvo is still taking shape. The point is to learn from real creative work now,
            then turn that into a better product surface over time.
          </p>
        </div>
        <div class="status-grid status-grid-compact">
          ${cardCollection(statusItems, "status-card")}
        </div>
      </section>

      <section class="section preview-section">
        <div class="split-overview">
          <div class="section-heading compact-heading">
            <span class="section-tag">How we help brands today</span>
            <h2>Klyvo Studios is the service layer around the product.</h2>
            <p>
              We help brands create stronger ad concepts, scripts, and short-form creative now,
              while the Klyvo platform continues to develop behind the scenes.
            </p>
            <a class="button button-secondary" href="${routes.services}">Explore Services</a>
          </div>
          <div class="cards-grid preview-card-grid">
            ${services
              .slice(0, 3)
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
            <span class="section-tag">Who it's for</span>
            <h2>Best fit for brands that need better creative momentum.</h2>
            <p>
              This is for teams that want sharper ad workflows, not fake agency posturing
              or a bloated enterprise platform.
            </p>
            <a class="button button-secondary" href="${routes.about}">Why This Exists</a>
          </div>
          <div class="cards-grid preview-card-grid">
            ${audienceItems
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

      ${BetaCTA()}
    </main>
  `;
}

export function BuildingPage() {
  return `
    <main class="main-content">
      ${pageHero({
        eyebrow: "What we're building",
        title: "The Klyvo platform",
        text:
          "Klyvo is not being rushed into a fake finished state. We're building carefully with feedback from early users so the platform grows around real creative workflows.",
      })}

      <section class="section">
        <div class="roadmap-status">
          <article class="roadmap-status-card">
            <span class="section-tag">Development status</span>
            <h2>Current stage: Private Beta</h2>
            <p>
              The foundation is real, but we are still improving the product around hands-on use.
            </p>
          </article>
          <div class="roadmap-columns">
            ${roadmapGroups
              .map(
                ({ title, items }) => `
                  <article class="roadmap-card">
                    <h3>${title}</h3>
                    <ul class="roadmap-list">
                      ${items.map((item) => `<li>${item}</li>`).join("")}
                    </ul>
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
            <span class="section-tag">Product preview</span>
            <h2>A clearer creative operating surface.</h2>
            <p>
              The product is being designed to help teams upload assets, organize brand context,
              generate creative concepts, and manage render decisions without losing control.
            </p>
          </div>
          ${appMockup()}
        </div>
      </section>

      <section class="section">
        <div class="section-heading compact-heading">
          <span class="section-tag">Feature areas</span>
          <h2>Core parts of the platform taking shape now.</h2>
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
          "Klyvo Studios is the service layer around the product. We help brands create better ad concepts, scripts, and short-form creative while the Klyvo platform continues developing.",
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
              If you need creative help right away, reach out about a project or apply for beta access.
            </p>
          </div>
          <div class="hero-actions">
            <a class="button button-secondary" href="${routes.contact}">Contact Us</a>
            <a class="button button-primary" href="${routes.beta}">Apply for Beta</a>
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
            Klyvo isn't finished yet. That's the point. Early users help shape what gets built
            instead of being handed a generic tool that missed the real problem.
          </p>
          <p>
            Klyvo Studios is how that work happens today: real brand projects, direct feedback,
            and a product that is learning from actual creative pressure instead of a fictional roadmap.
          </p>
          <p>
            The ambition is serious. The tone is just honest about where the product is right now.
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
          "Reach out about a project, apply for beta access, or do both if you want service help now while the software is still being built.",
      })}

      <section id="contact" class="section contact-section">
        <div class="contact-panel">
          <div class="contact-copy">
            <span class="section-tag">Direct email</span>
            <h2>klyvo.cloud@gmail.com</h2>
            <p>
              If the forms are not working yet, email us directly. We couldn't send this yet. Please try again or email klyvo.cloud@gmail.com.
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
              <h3>Apply for beta access</h3>
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
