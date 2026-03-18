const googleBooking = document.getElementById("google-booking");

if (googleBooking) {
  const bookingUrl = (googleBooking.dataset.bookingUrl || "").trim();
  const embedUrl = (googleBooking.dataset.embedUrl || "").trim();
  const bookingLink = document.getElementById("google-booking-link");
  const bookingStatus = document.getElementById("google-booking-status");
  const embedWrap = document.getElementById("google-booking-embed-wrap");
  const embedFrame = document.getElementById("google-booking-embed");
  const placeholder = document.getElementById("google-booking-placeholder");

  if (bookingLink) {
    if (bookingUrl) {
      bookingLink.href = bookingUrl;
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
    bookingStatus.textContent = bookingUrl
      ? "Google Calendar booking is connected. You can book directly here or open the booking page in a new tab."
      : "Google Calendar booking link not configured yet. Review the weekly appointment hours below and call the office to request a time.";
  }

  if (embedWrap && embedFrame && embedUrl) {
    embedFrame.src = embedUrl;
    embedWrap.hidden = false;
  }

  if (placeholder) {
    placeholder.hidden = Boolean(bookingUrl || embedUrl);
  }
}
