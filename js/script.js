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
  initClickToPlayVideo();
});

/**
 * Click-to-Play Video Handler:
 * Show hero image by default. On page click/tap, video plays and hero image hides smoothly.
 */
function initClickToPlayVideo() {
  const video = document.getElementById('bg-video');
  const bgImage = document.getElementById('bg-image');

  if (!video || !bgImage) return;

  let isPlaying = false;

  function startVideo() {
    if (!isPlaying) {
      video.muted = true;
      video.play().then(() => {
        isPlaying = true;
        video.classList.add('playing');
        bgImage.classList.add('hidden');
      }).catch(err => {
        console.log('Video play failed:', err);
      });
    }
  }

  document.addEventListener('click', startVideo);
}
