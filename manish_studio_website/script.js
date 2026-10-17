// Manish Studio — small, dependency-free interactions.
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

// Update footer year automatically.
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Preselect the relevant service when a service card CTA is clicked.
document.querySelectorAll("[data-service]").forEach((link) => {
  link.addEventListener("click", () => {
    const serviceSelect = document.getElementById("service");
    if (serviceSelect) {
      const desired = link.dataset.service;
      const option = Array.from(serviceSelect.options).find((item) => item.textContent.trim() === desired);
      if (option) serviceSelect.value = option.value || option.textContent;
    }
  });
});

// The form does not store or send details to a server.
// It prepares a message and opens WhatsApp only after the visitor submits.
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

// IMPORTANT: Replace this with Manish's business WhatsApp number before publishing.
// Use country code + number only, no plus sign, spaces, or dashes. Example format: 919876543210.
const WHATSAPP_NUMBER = "9309xxxxxx";

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const business = String(data.get("business") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();

    const whatsappMessage = [
      "Hi Manish! I'm interested in discussing a website project.",
      "",
      `Name: ${name}`,
      `Business: ${business}`,
      `Phone / WhatsApp: ${phone}`,
      `Service needed: ${service}`,
      message ? `Business details: ${message}` : ""
    ].filter(Boolean).join("\n");

    if (!/^91\d{10}$/.test(WHATSAPP_NUMBER)) {
      statusEl.textContent = "Almost ready! The website owner needs to add their WhatsApp number in script.js before this form can open a chat.";
      const preview = document.createElement("textarea");
      preview.className = "generated-message";
      preview.setAttribute("aria-label", "Prepared WhatsApp message");
      preview.readOnly = true;
      preview.rows = 7;
      preview.value = whatsappMessage;
      const existing = form.querySelector(".generated-message");
      if (existing) existing.remove();
      statusEl.insertAdjacentElement("afterend", preview);
      preview.style.cssText = "width:100%;margin-top:12px;padding:12px;color:#f3f6ff;background:#0b1220;border:1px solid #ffffff25;border-radius:8px;font:12px/1.6 'DM Sans',sans-serif;";
      preview.focus();
      preview.select();
      return;
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    statusEl.textContent = "WhatsApp opened with your message. Review it there and press Send to contact Manish.";
  });
}
