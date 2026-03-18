const bookingShell = document.getElementById("booking-shell");

function loadCalendlyScript() {
  return new Promise((resolve, reject) => {
    if (window.Calendly) {
      resolve(window.Calendly);
      return;
    }

    const existingScript = document.querySelector('script[data-calendly-script="true"]');

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(window.Calendly), { once: true });
      existingScript.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.dataset.calendlyScript = "true";
    script.addEventListener("load", () => resolve(window.Calendly), { once: true });
    script.addEventListener("error", reject, { once: true });
    document.body.appendChild(script);
  });
}

if (bookingShell) {
  const calendlyUrl = (bookingShell.dataset.calendlyUrl || "").trim();
  const bookingLink = document.getElementById("booking-link");
  const bookingStatus = document.getElementById("booking-status");
  const embedWrap = document.getElementById("booking-embed-wrap");
  const embedRoot = document.getElementById("calendly-embed");
  const placeholder = document.getElementById("booking-placeholder");

  if (bookingLink) {
    if (calendlyUrl) {
      bookingLink.href = calendlyUrl;
      bookingLink.removeAttribute("aria-disabled");
    } else {
      bookingLink.href = "#";
      bookingLink.setAttribute("aria-disabled", "true");
      bookingLink.addEventListener("click", (event) => {
        event.preventDefault();
      });
    }
  }

  if (bookingStatus) {
    bookingStatus.textContent = calendlyUrl
      ? "Online booking is connected. You can choose a live time below or open the booking page in a new tab."
      : "Calendly booking link not configured yet. Review the weekly appointment hours below and call the office to request a time.";
  }

  if (placeholder) {
    placeholder.hidden = Boolean(calendlyUrl);
  }

  if (embedWrap && embedRoot && calendlyUrl) {
    loadCalendlyScript()
      .then(() => {
        if (!window.Calendly) {
          throw new Error("Calendly unavailable");
        }

        embedWrap.hidden = false;
        window.Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: embedRoot,
        });
      })
      .catch(() => {
        embedWrap.hidden = true;

        if (bookingStatus) {
          bookingStatus.textContent = "We could not load the Calendly widget right now. Please use the booking page button or call the office.";
        }
      });
  }
}
