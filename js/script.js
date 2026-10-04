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
  initWelcomeOverlay();
  initAutoPlayAudio();
  initMusicToggle();
});

/**
 * Welcome Cover Screen / Tap to Open Invitation Handler:
 * Clicking "Open Invitation" or tapping anywhere on the welcome overlay
 * immediately starts music playback within a direct user gesture context,
 * smoothly hides the welcome screen, and triggers the main video timer sequence.
 */
function initWelcomeOverlay() {
  const welcomeOverlay = document.getElementById('welcome-overlay');
  const openBtn = document.getElementById('open-invitation-btn');
  const audio = document.getElementById('bg-music');
  const musicBtn = document.getElementById('music-toggle');

  if (!welcomeOverlay) {
    startVideoSequence();
    return;
  }

  function handleOpen() {
    // 1. Instantly start audio playback within direct user interaction
    if (audio && audio.paused) {
      fadeInAudio(audio, musicBtn, 0.6, 3000).catch(() => {});
    }

    // 2. Hide welcome overlay smoothly
    welcomeOverlay.classList.add('hidden-welcome');

    // 3. Trigger 7-second background video transition
    startVideoSequence();
  }

  if (openBtn) {
    openBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      handleOpen();
    });
  }

  welcomeOverlay.addEventListener('click', () => {
    handleOpen();
  });
}

let videoSequenceStarted = false;

/**
 * 7-Second Video Transition Sequence:
 * Starts after the invitation is opened:
 * 1. Initial page displays original text & hero image for 7 seconds.
 * 2. At 7s mark, all text fades away smoothly and background video starts playing with music.
 * 3. Once video ends, text returns with smooth animation displaying original content.
 */
function startVideoSequence() {
  if (videoSequenceStarted) return;
  videoSequenceStarted = true;

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
  if (!audio) return Promise.reject("No audio element");
  
  audio.volume = 0.05; // Start at low volume
  const playPromise = audio.play();

  if (playPromise !== undefined) {
    return playPromise.then(() => {
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
      console.log('Autoplay deferred/blocked by browser policy:', err);
      throw err;
    });
  }
  return Promise.resolve();
}

/**
 * Default Auto-Play Audio Handler:
 * Attempts autoplay immediately on page load, and keeps interaction listeners active
 * until playback successfully starts on any user gesture anywhere on the page.
 */
function initAutoPlayAudio() {
  const audio = document.getElementById('bg-music');
  const musicBtn = document.getElementById('music-toggle');

  if (!audio) return;

  let isStarted = false;

  function tryPlay() {
    if (isStarted || !audio.paused) {
      isStarted = true;
      removeInteractionListeners();
      return;
    }

    fadeInAudio(audio, musicBtn, 0.6, 3000)
      .then(() => {
        isStarted = true;
        removeInteractionListeners();
      })
      .catch(() => {
        // Autoplay blocked by browser policy on this attempt.
        // Listeners remain active so the very first tap/click/scroll anywhere will start playback.
      });
  }

  function removeInteractionListeners() {
    const events = ['click', 'touchstart', 'pointerdown', 'scroll', 'keydown'];
    events.forEach(evt => {
      document.removeEventListener(evt, tryPlay);
      window.removeEventListener(evt, tryPlay);
    });
  }

  // 1. Attempt autoplay immediately on script execution
  tryPlay();

  // 2. Attempt again on full window load
  window.addEventListener('load', tryPlay, { once: true });

  // 3. Fallback: trigger playback on any user interaction anywhere on the document or window
  const events = ['click', 'touchstart', 'pointerdown', 'scroll', 'keydown'];
  events.forEach(evt => {
    document.addEventListener(evt, tryPlay, { passive: true });
    window.addEventListener(evt, tryPlay, { passive: true });
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
      fadeInAudio(audio, musicBtn, 0.6, 2000).catch(() => {});
    } else {
      audio.pause();
      musicBtn.classList.remove('playing');
      musicBtn.classList.add('muted');
    }
  });
}
