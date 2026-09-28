type BurstKind = "petal" | "confetti" | "coin" | "bubble";

const COLORS = ["#cdb6ff", "#ff9be4", "#7c4dff", "#c6ff3d", "#ffd166", "#ffffff"];

let soundOn = false;
let audio: AudioContext | null = null;

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function setSoundEnabled(value: boolean) {
  soundOn = value;
}

export function isSoundEnabled() {
  return soundOn;
}

export function chime() {
  if (!soundOn || prefersReducedMotion() || typeof window === "undefined") return;
  const AudioCtx =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext })
      .webkitAudioContext;
  if (!AudioCtx) return;
  audio ||= new AudioCtx();
  if (audio.state === "suspended") void audio.resume();
  const oscillator = audio.createOscillator();
  const gain = audio.createGain();
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(660, audio.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(988, audio.currentTime + 0.18);
  gain.gain.setValueAtTime(0.0001, audio.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.07, audio.currentTime + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 0.5);
  oscillator.connect(gain);
  gain.connect(audio.destination);
  oscillator.start();
  oscillator.stop(audio.currentTime + 0.52);
}

export function burst(kind: BurstKind, count = 24) {
  if (typeof document === "undefined" || prefersReducedMotion()) return;
  const root = document.getElementById("fx-root");
  if (!root) return;

  for (let i = 0; i < count; i++) {
    const el = document.createElement("span");
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    if (kind === "petal") {
      el.className = "fx pt";
      el.style.setProperty("--c", color);
    } else if (kind === "confetti") {
      el.className = "fx cf";
      el.style.setProperty("--c", color);
    } else if (kind === "coin") {
      el.className = "fx cn";
      el.textContent = "₦";
    } else {
      el.className = "fx bb";
    }
    el.style.left = `${Math.random() * 100}%`;
    el.style.top = `${20 + Math.random() * 50}%`;
    el.style.setProperty("--dx", `${Math.random() * 280 - 140}px`);
    el.style.setProperty(
      "--dy",
      kind === "bubble" ? `${-120 - Math.random() * 220}px` : `${80 + Math.random() * 320}px`,
    );
    el.style.setProperty("--r", `${Math.random() * 540 - 180}deg`);
    el.style.animationDuration = `${1.1 + Math.random() * 1.8}s`;
    root.append(el);
    window.setTimeout(() => el.remove(), 3200);
  }
}
