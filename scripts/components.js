import { platformFeatures, routes, services, statusItems } from "./site-data.js";

function cardList(items, className) {
  return items
    .map(
      ({ title, body, iconClass = "" }) => `
        <article class="${className}">
          ${iconClass !== undefined ? `<div class="status-icon ${iconClass}"></div>` : ""}
          <h3>${title}</h3>
          <p>${body}</p>
        </article>
      `
    )
    .join("");
}

export function Navbar() {
  return `
    <header class="site-header">
      <a class="brand" href="${routes.home}" aria-label="Klyvo Studios home">
        <span class="brand-mark">K</span>
        <span class="brand-text">
          <strong>Klyvo Studios</strong>
          <small>AI creative studio</small>
        </span>
      </a>

      <nav class="nav-links" aria-label="Main navigation">
        <a href="${routes.home}">Home</a>
        <a href="${routes.platform}">What We're Building</a>
        <a href="${routes.services}">Services</a>
        <a href="${routes.about}">About</a>
        <a href="${routes.contact}">Contact</a>
      </nav>

      <a class="button button-primary header-cta" href="${routes.beta}">Apply for Beta</a>
    </header>
  `;
}

export function Hero() {
  return `
    <section id="home" class="hero section">
      <div class="hero-copy">
        <span class="pill">Early Access</span>
        <h1>AI-assisted ad creation for growing brands.</h1>
        <p class="lead">
          Klyvo Studios helps turn product photos, ideas, and raw clips into
          scroll-stopping ad creatives while we build the full Klyvo platform.
        </p>
        <p class="supporting-line">
          We're early, actively building, and working with a small group of beta clients.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="${routes.beta}">Apply for Beta</a>
          <a class="button button-secondary" href="${routes.platform}">See What We're Building</a>
        </div>
      </div>

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
    </section>
  `;
}

export function StatusStrip() {
  return `
    <section class="section">
      <div class="status-grid">
        ${cardList(statusItems, "status-card")}
      </div>
    </section>
  `;
}

export function Services() {
  return `
    <section id="services" class="section">
      <div class="section-heading">
        <span class="section-tag">Services</span>
        <h2>Creative services while the platform grows.</h2>
        <p>
          Klyvo Studios can help brands create ads now, while the internal Klyvo software
          keeps getting sharper behind the scenes.
        </p>
      </div>

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
  `;
}

export function PlatformPreview() {
  return `
    <section id="platform" class="section section-elevated">
      <div class="section-heading">
        <span class="section-tag">What we're building</span>
        <h2>The Klyvo platform</h2>
        <p>
          Klyvo is being built to help businesses upload product assets, generate creative
          concepts, organize brand kits, manage renders, and create ad videos faster.
        </p>
      </div>

      <div class="cards-grid feature-grid">
        ${platformFeatures
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
  `;
}

export function FounderStory() {
  return `
    <section id="about" class="section founder-section">
      <div class="founder-card">
        <span class="section-tag">Why this exists</span>
        <h2>Building something useful before pretending it's finished.</h2>
        <p class="founder-quote">
          “I started Klyvo because professional ad creation is expensive, slow, and out of
          reach for many small brands. The goal is to make high-quality advertising easier to
          create without removing human creative control.”
        </p>
        <p>
          Klyvo Studios is the service layer around that mission right now: real client work,
          real feedback, and a practical way to keep building the product with actual use cases
          in front of us.
        </p>
      </div>
    </section>
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

export function ContactSection() {
  return `
    <section id="contact" class="section contact-section">
      <div class="contact-panel">
        <div class="contact-copy">
          <span class="section-tag">Contact</span>
          <h2>Talk to us about a brand, product, or ad workflow.</h2>
          <p>
            If you need AI-assisted creative support now, or want early access to the platform,
            this is the place to start.
          </p>
        </div>

        <div class="forms-grid">
          <div class="form-card">
            <h3>Client inquiry</h3>
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
                What do you need help creating?
                <textarea name="message" rows="5" required></textarea>
              </label>
              <button class="button button-secondary form-button" type="submit">Send message</button>
              <p class="form-status" aria-live="polite"></p>
            </form>
          </div>

          <div class="form-card beta-card">
            <h3>Apply for beta</h3>
            <form name="beta-access" method="post" data-form-endpoint="/api/beta-apply">
              <label>
                Work email
                <input name="email" type="email" autocomplete="email" required>
              </label>
              <label>
                Brand or company
                <input name="company" type="text" autocomplete="organization" required>
              </label>
              <label>
                What kind of ad workflow are you trying to improve?
                <textarea name="workflow_problem" rows="5" required></textarea>
              </label>
              <button class="button button-primary form-button" type="submit">Apply for Beta</button>
              <p class="form-status" aria-live="polite"></p>
            </form>
          </div>
        </div>
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
      <a href="mailto:hello@klyvostudios.com">hello@klyvostudios.com</a>
    </footer>
  `;
}
