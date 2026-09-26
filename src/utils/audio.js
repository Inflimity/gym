// Synthesized audio effects using Web Audio API (no external sound file dependencies)
class SoundFX {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setMuted(muted) {
    this.muted = muted;
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }

  // Play a simple frequency beep
  playTone(freq = 440, duration = 0.1, type = 'sine', gainVal = 0.15) {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio context might fail on uninitiated user interaction
    }
  }

  // Chime when workout / exercise is marked done
  playExerciseDone() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // Two-tone rising futuristic chime
      [
        { f: 523.25, t: 0, d: 0.15 },      // C5
        { f: 659.25, t: 0.12, d: 0.18 },   // E5
        { f: 783.99, t: 0.24, d: 0.35 },   // G5
        { f: 1046.50, t: 0.36, d: 0.5 }   // C6
      ].forEach(note => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note.f, now + note.t);

        gain.gain.setValueAtTime(0.2, now + note.t);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + note.t + note.d);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + note.t);
        osc.stop(now + note.t + note.d);
      });
    } catch {
      // ignore audio context failures
    }
  }

  // Swoosh transition to next workout
  playNextSwoosh() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.2);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.22);
    } catch {
      // ignore
    }
  }

  // Triumphant fanfare when full 1-hour session or daily plan is completed
  playVictory() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      const chords = [
        { f: 440, t: 0, d: 0.3 },     // A4
        { f: 554.37, t: 0.15, d: 0.3 },// C#5
        { f: 659.25, t: 0.3, d: 0.35 },// E5
        { f: 880, t: 0.45, d: 0.6 }    // A5
      ];

      chords.forEach(c => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(c.f, now + c.t);

        gain.gain.setValueAtTime(0.25, now + c.t);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + c.t + c.d);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + c.t);
        osc.stop(now + c.t + c.d);
      });
    } catch {
      // ignore
    }
  }

  // Countdown timer tick
  playTick() {
    this.playTone(800, 0.05, 'sine', 0.05);
  }
}

export const sound = new SoundFX();
