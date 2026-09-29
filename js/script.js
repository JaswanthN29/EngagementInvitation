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
  initClickToPlayMedia();
  initMusicToggle();
});

/**
 * Click-to-Play Video & Audio Handler:
 * Show hero image by default. On page click/tap, video plays, background music (Song.mp3) plays, and hero image hides smoothly.
 */
function initClickToPlayMedia() {
  const video = document.getElementById('bg-video');
  const bgImage = document.getElementById('bg-image');
  const audio = document.getElementById('bg-music');
  const musicBtn = document.getElementById('music-toggle');

  if (!video || !bgImage) return;

  let isPlaying = false;

  function startMedia(e) {
    // If clicking directly on the music toggle button, let initMusicToggle handle it
    if (e && e.target && e.target.closest('#music-toggle')) return;

    if (!isPlaying) {
      // Play Video
      video.muted = true;
      video.play().then(() => {
        isPlaying = true;
        video.classList.add('playing');
        bgImage.classList.add('hidden');
      }).catch(err => {
        console.log('Video play failed:', err);
      });

      // Play Audio Song.mp3
      if (audio) {
        audio.play().then(() => {
          if (musicBtn) musicBtn.classList.add('playing');
        }).catch(err => {
          console.log('Audio autoplay blocked by browser:', err);
        });
      }
    }
  }

  document.addEventListener('click', startMedia);
}

/**
 * Music Mute/Unmute & Play/Pause Floating Control
 */
function initMusicToggle() {
  const audio = document.getElementById('bg-music');
  const musicBtn = document.getElementById('music-toggle');

  if (!audio || !musicBtn) return;

  musicBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (audio.paused) {
      audio.play().then(() => {
        musicBtn.classList.add('playing');
        musicBtn.classList.remove('muted');
      }).catch(err => console.log('Audio play failed:', err));
    } else {
      audio.pause();
      musicBtn.classList.remove('playing');
      musicBtn.classList.add('muted');
    }
  });
}
