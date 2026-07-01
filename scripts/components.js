import {
  audienceItems,
  platformFeatureCards,
  proofItems,
  processSteps,
  roadmapGroups,
  routes,
  services,
  statusItems,
} from "./site-data.js?v=20260701a";

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
      <div class="app-frame app-video-frame ${compact ? "app-frame-compact" : ""}">
        <div class="app-topbar">
          <div class="window-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="video-badge">Klyvo Studios</div>
        </div>
        <div class="app-video-shell">
          <video
            class="app-showcase-video"
            autoplay
            muted
            loop
            playsinline
            preload="metadata"
            aria-label="Klyvo perfume showcase"
          >
            <source src="assets/klyvo-perfume-showcase.mov" type="video/quicktime">
            <source src="assets/klyvo-perfume-showcase.mov">
          </video>
        </div>
      </div>
    </div>
  `;
}

function pageHero({ eyebrow, title, text, ctaLabel, ctaHref, className = "", headingClassName = "" }) {
  return `
    <section class="section page-hero ${className}">
      <div class="section-heading compact-heading ${headingClassName}">
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
  const headerCtaLabel = pageKey === "contact" ? "Beta Client Inquiry" : "Start a Project";
  const headerCtaHref = pageKey === "contact" ? "#contact" : routes.contact;
  return `
    <header class="site-header">
      <a class="brand" href="${routes.home}" aria-label="Klyvo Studios home">
        <span class="brand-mark" aria-hidden="true">
          <img src="assets/klyvo-logo-mark.png" alt="">
        </span>
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

      <a class="button button-primary header-cta" href="${headerCtaHref}">${headerCtaLabel}</a>
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
            <a class="button button-primary" href="${routes.contact}">Start a Project</a>
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
        eyebrow: "Behind Klyvo",
        title: "Creative system in progress.",
        text:
          "See how Klyvo Studios is shaping a better creative workflow around product videos, social ads, ad concepts, and client feedback.",
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
              Klyvo is still being built carefully. It supports the studio workflow now, and it is growing around real creative work and client feedback.
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
        title: "Helping brands create ads that actually get watched.",
        text:
          "Klyvo Studios creates product videos, ad concepts, and short-form creative for brands that need stronger marketing without hiring a full agency.",
        ctaLabel: "Start a Project",
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
            <h2>Need stronger creative?</h2>
            <p>
              Whether you have product photos, raw footage, or just an idea, Klyvo Studios can help turn it into content designed to capture attention.
            </p>
          </div>
          <div class="hero-actions">
            <a class="button button-primary" href="${routes.contact}">Start a Project</a>
            <a class="button button-secondary" href="${routes.services}">View Services</a>
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
        eyebrow: "Beta client inquiry",
        title: "Choose the right next step.",
        text:
          "Reach out about a product video, social ad, or creative support. Klyvo Studios is working with a limited number of beta clients right now.",
        className: "contact-page-hero",
        headingClassName: "contact-page-heading",
      })}

      <section id="contact" class="section contact-section">
        <div class="contact-panel contact-panel-single">
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
            <p>
              Prefer email? Reach us at klyvo.cloud@gmail.com.
            </p>
          </div>

          <div class="forms-grid forms-grid-single">
            <div class="form-card form-card-inquiry">
              <h3>Beta client inquiry</h3>
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
                <button class="button button-primary form-button" type="submit">Send Inquiry</button>
                <p class="form-status" aria-live="polite"></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}

const privacySections = [
  {
    title: "Who We Are",
    body: [
      "Klyvo Studios is a Canadian creative services business that produces product videos, social ads, and brand creative content for small and growing businesses. You can reach us at klyvo.cloud@gmail.com.",
    ],
  },
  {
    title: "What Information We Collect",
    body: [
      "When you submit an inquiry through our contact form, we collect:",
    ],
    list: [
      "Your name",
      "Your email address",
      "Your brand or company name",
      "A description of your project or creative needs",
    ],
    after: [
      "We do not collect payment information directly through this website.",
    ],
  },
  {
    title: "Why We Collect It",
    body: [
      "We collect this information solely to respond to your inquiry, assess whether we can help with your project, and communicate with you about potential or active work together. We do not use it for any other purpose without telling you first.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: ["Your information is used to:"],
    list: [
      "Respond to your inquiry",
      "Discuss and scope your project",
      "Deliver work and communicate during an active project",
    ],
    after: [
      "We do not sell, rent, or share your personal information with third parties for marketing purposes.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "Our contact form is processed by a third-party form service, which may temporarily store submission data on our behalf. We also use email (Gmail) to communicate with clients. These services have their own privacy policies, and by submitting an inquiry you acknowledge that your information passes through them.",
      "We use AI-assisted tools in our creative workflow. Project materials shared with us may be used as inputs to these tools. We do not submit identifiable personal information about you to AI tools; only creative content relevant to the project.",
    ],
  },
  {
    title: "How Long We Keep Your Information",
    body: [
      "We retain inquiry and project communications for as long as reasonably necessary for the project and any follow-up, typically no longer than two years after a project concludes. You can ask us to delete your information at any time.",
    ],
  },
  {
    title: "How We Protect Your Information",
    body: [
      "We take reasonable steps to protect your information from unauthorized access, including using secure email and reputable third-party services. No method of electronic transmission is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "Under Canada's Personal Information Protection and Electronic Documents Act (PIPEDA), you have the right to:",
    ],
    list: [
      "Know what personal information we hold about you",
      "Request access to that information",
      "Ask us to correct inaccurate information",
      "Withdraw your consent to our use of your information and request deletion",
    ],
    after: [
      "To exercise any of these rights, contact us at klyvo.cloud@gmail.com. We will respond within 30 days.",
    ],
  },
  {
    title: "A Note on Location",
    body: [
      "Klyvo Studios is based in Canada and operates under Canadian federal privacy law (PIPEDA). If you are located in Quebec, additional provincial privacy rights may apply under Quebec's Act respecting the protection of personal information in the private sector. If you are located outside Canada, please be aware that your information will be processed in Canada.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "If we make material changes to this policy, we will update the Last updated date at the top. We encourage you to review this page periodically.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For any privacy questions or requests, contact Klyvo Studios at klyvo.cloud@gmail.com.",
    ],
  },
];

export function PrivacyPage() {
  return `
    <main class="main-content">
      ${pageHero({
        eyebrow: "Privacy Policy",
        title: "Privacy Policy",
        text:
          "Klyvo Studios collects only the information needed to respond to inquiries, scope creative work, and communicate with clients.",
        className: "privacy-page-hero",
        headingClassName: "privacy-page-heading",
      })}

      <section class="section privacy-section">
        <article class="privacy-panel">
          <div class="privacy-meta">
            <span class="section-tag">Klyvo Studios</span>
            <p>Last updated: June 2026</p>
          </div>
          <div class="privacy-content">
            ${privacySections
              .map(
                ({ title, body = [], list = [], after = [] }) => `
                  <section class="privacy-block">
                    <h2>${title}</h2>
                    ${body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
                    ${
                      list.length
                        ? `<ul>${list.map((item) => `<li>${item}</li>`).join("")}</ul>`
                        : ""
                    }
                    ${after.map((paragraph) => `<p>${paragraph}</p>`).join("")}
                  </section>
                `
              )
              .join("")}
          </div>
        </article>
      </section>
    </main>
  `;
}

export function BetaCTA() {
  return `
    <section class="section cta-section">
      <div class="cta-panel">
        <div>
          <span class="section-tag">Need creative help?</span>
          <h2>Ready to make your ads look stronger?</h2>
          <p>
            Start with a project conversation first. If beta access makes sense afterward, we can talk about that too.
          </p>
        </div>
        <div class="hero-actions">
          <a class="button button-primary" href="${routes.contact}">Start a Project</a>
          <a class="button button-secondary" href="${routes.services}">View Services</a>
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
        <p>Helping brands today. Building Klyvo tomorrow.</p>
      </div>
      <div class="footer-links">
        <a href="${routes.building}">Behind Klyvo</a>
        <a href="${routes.services}">Services</a>
        <a href="${routes.about}">About</a>
        <a href="${routes.contact}">Contact</a>
        <a href="${routes.privacy}">Privacy</a>
      </div>
    </footer>
  `;
}
