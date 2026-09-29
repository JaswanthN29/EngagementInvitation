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
  initAutoPlayAudio();
  initMusicToggle();
  initVideoSequence();
});

/**
 * 7-Second Video Transition Sequence:
 * 1. Initial page displays original text & hero image for 7 seconds.
 * 2. At 7s mark, all text fades away smoothly and background video starts playing with music.
 * 3. Once video ends, text returns with smooth animation displaying original content.
 */
function initVideoSequence() {
  const contentOverlay = document.querySelector('.fullscreen-content');
  const video = document.getElementById('bg-video');
  const overlay = document.getElementById('bg-overlay');

  if (!contentOverlay || !video) return;

  // At 7 seconds (7000ms), fade text away and play video
  setTimeout(() => {
    contentOverlay.classList.add('fade-out');
    if (overlay) overlay.classList.add('hidden-overlay');

    video.muted = true;
    video.currentTime = 0;
    video.play().then(() => {
      video.classList.add('playing');
    }).catch(err => {
      console.log('Video play deferred or blocked:', err);
    });
  }, 7000);

  // When video completes, bring original text content back with animation
  video.addEventListener('ended', () => {
    video.classList.remove('playing');
    if (overlay) overlay.classList.remove('hidden-overlay');

    contentOverlay.classList.remove('fade-out');
    contentOverlay.classList.add('fade-in-return');
  });
}

/**
 * Smooth Audio Volume Fade-In Helper:
 * Starts audio at low volume (0.05) and smoothly fades up to targetVolume over durationMs.
 */
function fadeInAudio(audio, musicBtn, targetVolume = 0.6, durationMs = 3000) {
  if (!audio) return;
  
  audio.volume = 0.05; // Start at low volume
  const playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise.then(() => {
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
      console.log('Autoplay blocked by browser policy:', err);
    });
  }
}

/**
 * Default Auto-Play Audio Handler:
 * Attempts autoplay immediately on page load, with fallback listener on first user interaction.
 */
function initAutoPlayAudio() {
  const audio = document.getElementById('bg-music');
  const musicBtn = document.getElementById('music-toggle');

  if (!audio) return;

  let isStarted = false;

  function attemptPlay() {
    if (isStarted) return;
    isStarted = true;
    fadeInAudio(audio, musicBtn, 0.6, 3000);
    removeInteractionListeners();
  }

  function removeInteractionListeners() {
    ['click', 'touchstart', 'pointerdown', 'scroll'].forEach(evt => {
      document.removeEventListener(evt, attemptPlay);
    });
  }

  // 1. Attempt autoplay immediately on page load
  attemptPlay();

  // 2. Fallback: trigger on first user interaction if autoplay was restricted by browser
  ['click', 'touchstart', 'pointerdown', 'scroll'].forEach(evt => {
    document.addEventListener(evt, attemptPlay, { passive: true, once: true });
  });
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
