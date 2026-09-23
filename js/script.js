/**
 * Engagement Invitation Website JavaScript
 * Couple: Jaswanth & Lalitha
 * Date: 12 October 2026, 9:30 AM IST
 */

// Centralized Event Details Data Configuration
const eventDetails = {
  bride: "Lalitha",
  groom: "Jaswanth",
  event: "Engagement",
  date: "12 October 2026",
  time: "9:30 AM",
  city: "Visakhapatnam",
  shortCity: "Vizag",
  venue: "HOTEL V PRIDE",
  address: "Opp. BSNL Office, Lalitha Colony, Daba Gardens, Ram Nagar, Visakhapatnam, Andhra Pradesh, India"
};

document.addEventListener('DOMContentLoaded', () => {
  initCountdownTimer();
  initVideoAutoplay();
});

/**
 * Ensures background video plays automatically across mobile & desktop browsers.
 */
function initVideoAutoplay() {
  const video = document.getElementById('bg-video');
  if (video) {
    video.muted = true;
    video.play().catch(err => {
      console.log('Autoplay deferred until user interaction', err);
    });
  }
}

/**
 * Live IST Countdown Timer (Target: 12 October 2026, 09:30:00 IST)
 * Clicking the countdown box smoothly fades out and removes the counter.
 */
function initCountdownTimer() {
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  const countdownBox = document.getElementById('countdown-box');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  // Click on counter box makes it fade out and disappear completely
  if (countdownBox) {
    countdownBox.addEventListener('click', () => {
      countdownBox.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      countdownBox.style.opacity = '0';
      countdownBox.style.transform = 'scale(0.95)';
      setTimeout(() => {
        countdownBox.style.display = 'none';
      }, 300);
    });
  }

  // Target event time in India Standard Time (UTC+5:30)
  const targetDate = new Date("2026-10-12T09:30:00+05:30").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}
