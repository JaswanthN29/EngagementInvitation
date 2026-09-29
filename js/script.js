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
  initClickToPlayAudio();
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
 * Click-to-Play Audio Handler:
 * On user page click/tap, background music (Song.mp3) fades in smoothly from low volume.
 */
function initClickToPlayAudio() {
  const audio = document.getElementById('bg-music');
  const musicBtn = document.getElementById('music-toggle');

  if (!audio) return;

  let isStarted = false;

  function startAudio(e) {
    if (e && e.target && e.target.closest('#music-toggle')) return;

    if (!isStarted) {
      isStarted = true;
      fadeInAudio(audio, musicBtn, 0.6, 3000);
    }
  }

  document.addEventListener('click', startAudio);
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
