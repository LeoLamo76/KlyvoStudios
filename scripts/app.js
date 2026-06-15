import {
  Footer,
  HomePage,
  BuildingPage,
  ServicesPage,
  AboutPage,
  ContactPage,
  Navbar,
} from "./components.js";

const app = document.querySelector("#app");
const page = document.body.dataset.page || "home";

const pageMap = {
  home: HomePage,
  building: BuildingPage,
  services: ServicesPage,
  about: AboutPage,
  contact: ContactPage,
};

const renderPage = pageMap[page] || HomePage;

app.innerHTML = `
  <div class="page-shell">
    ${Navbar(page)}
    ${renderPage()}
    ${Footer()}
  </div>
`;

const navToggle = document.querySelector(".mobile-nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
  const faviconStamp = `v=${Date.now()}`;

  for (const link of document.querySelectorAll('link[data-favicon]')) {
    const originalHref = link.getAttribute("href");

    if (!originalHref) {
      continue;
    }

    const baseHref = originalHref.split("?")[0];
    link.setAttribute("href", `${baseHref}?${faviconStamp}`);
  }
}

const forceKlyvoTabIcon = () => {
  const source = new Image();

  source.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    context.drawImage(source, 0, 0, 512, 512);

    const iconHref = canvas.toDataURL("image/png");

    for (const link of document.querySelectorAll('link[rel~="icon"]')) {
      link.setAttribute("type", "image/png");
      link.setAttribute("sizes", "512x512");
      link.setAttribute("href", iconHref);
    }

    const tabIcon = document.createElement("link");
    tabIcon.rel = "icon";
    tabIcon.type = "image/png";
    tabIcon.sizes = "512x512";
    tabIcon.href = iconHref;
    document.head.appendChild(tabIcon);
  };

  source.src = `/assets/klyvo-tab-logo-512.png?force=${Date.now()}`;
};

forceKlyvoTabIcon();

if (navToggle instanceof HTMLButtonElement && navLinks instanceof HTMLElement) {
  navToggle.addEventListener("click", () => {
    const nextExpanded = navToggle.getAttribute("aria-expanded") !== "true";
    navToggle.setAttribute("aria-expanded", String(nextExpanded));
    navLinks.dataset.open = String(nextExpanded);
    document.body.classList.toggle("nav-open", nextExpanded);
  });

  for (const navLink of navLinks.querySelectorAll("a")) {
    navLink.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      navLinks.dataset.open = "false";
      document.body.classList.remove("nav-open");
    });
  }
}

const formMessages = {
  idle: "",
  sending: "Sending...",
  success: "Thanks. Your message is in and we'll get back to you soon.",
  error: "We couldn't send that right now. Prefer email? Reach us at klyvo.cloud@gmail.com.",
};

for (const form of document.querySelectorAll("form[data-form-endpoint]")) {
  const status = form.querySelector(".form-status");
  const button = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!(button instanceof HTMLButtonElement) || !(status instanceof HTMLElement)) {
      return;
    }

    const endpoint = form.getAttribute("data-form-endpoint");
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    button.disabled = true;
    status.textContent = formMessages.sending;
    status.dataset.state = "sending";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      status.textContent = formMessages.success;
      status.dataset.state = "success";
    } catch (error) {
      console.error(error);
      status.textContent = formMessages.error;
      status.dataset.state = "error";
    } finally {
      button.disabled = false;
    }
  });
}
