import {
  BetaCTA,
  ContactSection,
  Footer,
  FounderStory,
  Hero,
  Navbar,
  PlatformPreview,
  Services,
  StatusStrip,
} from "./components.js";

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="page-shell">
    ${Navbar()}
    <main class="main-content">
      ${Hero()}
      ${StatusStrip()}
      ${Services()}
      ${PlatformPreview()}
      ${FounderStory()}
      ${BetaCTA()}
      ${ContactSection()}
    </main>
    ${Footer()}
  </div>
`;

const formMessages = {
  idle: "",
  sending: "Sending...",
  success: "Thanks. Your message is in and we'll get back to you soon.",
  error: "That didn't send. Please try again in a moment.",
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
