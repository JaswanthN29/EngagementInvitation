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
 * Smooth Audio Volume Fade-In Helper:
 * Starts audio at low volume (0.05) and smoothly fades up to targetVolume over durationMs.
 */
function fadeInAudio(audio, musicBtn, targetVolume = 0.6, durationMs = 3000) {
  if (!audio) return;
  
  audio.volume = 0.05; // Start at low volume
  audio.play().then(() => {
    if (musicBtn) {
      musicBtn.classList.add('playing');
      musicBtn.classList.remove('muted');
    }

    const stepMs = 50;
    const totalSteps = durationMs / stepMs;
    const volumeIncrement = (targetVolume - 0.05) / totalSteps;

    const fadeTimer = setInterval(() => {
      if (audio.paused) {
        clearInterval(fadeTimer);
        return;
      }

      if (audio.volume + volumeIncrement < targetVolume) {
        audio.volume += volumeIncrement;
      } else {
        audio.volume = targetVolume;
        clearInterval(fadeTimer);
      }
    }, stepMs);
  }).catch(err => {
    console.log('Audio playback blocked or deferred:', err);
  });
}

/**
 * Click-to-Play Video & Audio Handler:
 * Show hero image by default. On page click/tap, video plays, background music (Song.mp3) fades in smoothly from low volume, and hero image hides.
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

      // Play Audio with smooth low-volume fade in
      if (audio) {
        fadeInAudio(audio, musicBtn, 0.6, 3000);
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
      fadeInAudio(audio, musicBtn, 0.6, 2000);
    } else {
      audio.pause();
      musicBtn.classList.remove('playing');
      musicBtn.classList.add('muted');
    }
  });
}
