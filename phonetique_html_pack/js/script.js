// Global active steps definition for Method Section
const stepsData = [
  {
    phase: "Fase 01 del plan de obra",
    title: "Los Cimientos",
    subtitle: "Sonidos esenciales del francés",
    desc: "Comenzamos dominando los sonidos que no existen en español. Entender las vocales nasales y la emblemática 'R' francesa desde su colocación física, sin misterios.",
    num: "#01",
    ref: "Puesta a nivel y cimentación profunda.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800",
    imageTag: "📷 Fichas & Grafía"
  },
  {
    phase: "Fase 02 del plan de obra",
    title: "La Estructura",
    subtitle: "Pronunciación y prosodia",
    desc: "Aprendemos a conectar las palabras mediante la 'liaison' y el ritmo del idioma. El francés es una música continua; te enseñamos a construir el esqueleto de tus frases.",
    num: "#02",
    ref: "Vigas de carga, uniones y estabilidad.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800",
    imageTag: "📷 Biomecánica Vocal"
  },
  {
    phase: "Fase 03 del plan de obra",
    title: "Los Ajustes",
    subtitle: "Errores frecuentes y corrección",
    desc: "Identificamos y corregimos de inmediato los hábitos del español que ensucian la claridad del francés. Ajustes milimétricos en la mandíbula y labios para un gran cambio de sonido.",
    num: "#03",
    ref: "Nivelación, plomada y rectificación.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    imageTag: "📷 Feedback en Directo"
  },
  {
    phase: "Fase 04 del plan de obra",
    title: "Los Espacios Habitables",
    subtitle: "Conversación y aplicación real",
    desc: "Llevamos la teoría a situaciones cotidianas, laborales and sociales. De nada sirve una estructura hermosa si no puedes habitarla y comunicarte en el mundo real.",
    num: "#04",
    ref: "Distribución interior y habitabilidad.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    imageTag: "📷 Aula Virtual Zoom"
  },
  {
    phase: "Fase 05 del plan de obra",
    title: "Los Acabados",
    subtitle: "Naturalidad, confianza y fluidez",
    desc: "Pulimos la entonación y el acento natural para que hables sin miedo a ser juzgado. Ganas esa confianza que te hace sonar seguro, auténtico y dueño de tu proceso.",
    num: "#05",
    ref: "Revestimiento, pintura y detalles finales.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    imageTag: "📷 Confianza & Fluidez"
  }
];

function setActiveStep(index) {
  const step = stepsData[index];
  if (!step) return;

  // Update content
  document.getElementById('detail-phase-num').textContent = step.phase;
  document.getElementById('detail-title').textContent = step.title;
  document.getElementById('detail-subtitle').textContent = step.subtitle;
  document.getElementById('detail-desc').textContent = step.desc;
  document.getElementById('detail-large-num').textContent = step.num;
  document.getElementById('detail-ref').textContent = step.ref;

  const imgElem = document.getElementById('detail-img');
  if (imgElem) {
    imgElem.src = step.image;
    imgElem.alt = step.title;
  }
  const tagElem = document.getElementById('detail-img-tag');
  if (tagElem) {
    tagElem.textContent = step.imageTag;
  }

  // Update active state class on buttons
  const buttons = document.querySelectorAll('.step-btn');
  buttons.forEach((btn, idx) => {
    const numText = btn.querySelector('.step-num');
    const iconContainer = btn.querySelector('.shrink-0');
    const titleText = btn.querySelector('h4');
    const subtitleText = btn.querySelector('.step-subtitle');
    const chevron = btn.querySelector('.step-chevron');

    if (idx === index) {
      // Active state
      btn.className = "step-btn w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between gap-4 group cursor-pointer bg-brand-marine border-brand-marine text-white shadow-md";
      if (numText) {
        numText.className = "step-num font-mono text-sm font-bold text-brand-or";
      }
      if (iconContainer) {
        iconContainer.className = "shrink-0 p-2 rounded-lg bg-brand-ivoire/20 text-brand-or group-hover:scale-105 transition-transform";
      }
      if (titleText) {
        titleText.className = "font-serif text-base font-bold leading-tight text-white";
      }
      if (subtitleText) {
        subtitleText.className = "step-subtitle font-sans text-xs text-brand-ivoire/80";
      }
      if (chevron) {
        chevron.className = "step-chevron w-4 h-4 text-brand-or translate-x-1 transition-all duration-300";
      }
    } else {
      // Inactive state
      btn.className = "step-btn w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between gap-4 group bg-white border-brand-ivoire text-brand-marine hover:border-brand-ciel/50 cursor-pointer";
      if (numText) {
        numText.className = "step-num font-mono text-sm font-bold text-brand-ardoise";
      }
      if (iconContainer) {
        iconContainer.className = "shrink-0 p-2 rounded-lg bg-brand-ivoire/50 text-brand-marine group-hover:scale-105 transition-transform";
      }
      if (titleText) {
        titleText.className = "font-serif text-base font-bold leading-tight text-brand-marine";
      }
      if (subtitleText) {
        subtitleText.className = "step-subtitle font-sans text-xs text-brand-ardoise";
      }
      if (chevron) {
        chevron.className = "step-chevron w-4 h-4 text-brand-ardoise opacity-0 group-hover:opacity-100 transition-all duration-300";
      }
    }
  });
}

// Bind to window to guarantee inline onclick attributes can access it
window.setActiveStep = setActiveStep;

document.addEventListener('DOMContentLoaded', () => {
  // Programmatically bind click event listeners to steps for absolute reliability
  const buttons = document.querySelectorAll('.step-btn');
  buttons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      setActiveStep(idx);
    });
  });

  // Initialize active method step
  setActiveStep(0);
  
  // 1. Mobile Drawer Navigation
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleMobileMenu() {
    const isHidden = mobileDrawer.classList.contains('hidden');
    if (isHidden) {
      mobileDrawer.classList.remove('hidden');
      hamburgerIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    } else {
      mobileDrawer.classList.add('hidden');
      hamburgerIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  }

  mobileToggle.addEventListener('click', toggleMobileMenu);
  
  // Close mobile drawer upon click on any navigation link
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.add('hidden');
      hamburgerIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });


  // 2. Interactive Video Player with French/Spanish Subtitles & Equalizer Pulse
  const subtitles = [
    { time: 0, fr: "La phonétique est la bête noire de l'enseignement des langues...", es: "La fonética es el 'patio feo' de la enseñanza de los idiomas..." },
    { time: 6, fr: "On a la sensation que c'est difficile, ennuyeux et théorique...", es: "Tenemos la sensación de que es difícil, aburrido y teórico..." },
    { time: 13, fr: "Mon grand défi a toujours été d'en faire un terrain de jeu accessible.", es: "Mi gran reto siempre ha sido hacer de ella un terreno de juego accesible." },
    { time: 20, fr: "L'écriture trompe l'oreille. Le cerveau lit d'une façon et parle d'une autre.", es: "La escritura engaña al oído. El cerebro lee de una forma y habla de otra." },
    { time: 28, fr: "En déconstruisant le texte écrit, on libère la voix et la vraie prononciation.", es: "Al deconstruir el texto escrito, liberamos la voz y la verdadera pronunciación." },
    { time: 36, fr: "Chaque petit ajustement physique apporte une clarté et une confiance immédiates.", es: "Cada pequeño ajuste físico aporta una claridad y una confianza inmediatas." },
    { time: 45, fr: "Rejoignez-moi pour construire une voix solide, claire et naturelle en français.", es: "Únete a mí para construir una voz sólida, clara y natural en francés." }
  ];

  const duration = 60; // seconds
  let currentTime = 0;
  let isPlaying = false;
  let playbackInterval = null;

  const videoEl = document.getElementById('sergio-intro-video');
  const videoImage = document.getElementById('video-image');
  const centerPlayWrapper = document.getElementById('center-play-wrapper');
  const centerPlayBtn = document.getElementById('video-play-btn');
  const barPlayBtn = document.getElementById('video-bar-play-btn');
  const playBarIcon = document.getElementById('play-bar-icon');
  const resetBtn = document.getElementById('video-reset-btn');
  const timelineProgress = document.getElementById('video-timeline-progress');
  const timelineContainer = document.getElementById('video-timeline-container');
  const timeTxt = document.getElementById('video-time-txt');
  const subFr = document.getElementById('sub-fr');
  const subEs = document.getElementById('sub-es');
  const dot = document.getElementById('playback-status-dot');
  const statusText = document.getElementById('playback-status-text');
  const equalizerContainer = document.getElementById('equalizer-container');

  // Initialize equalizer bars
  const barHeights = [20, 50, 80, 40, 90, 30, 70, 100, 60, 40];
  barHeights.forEach((height, i) => {
    const bar = document.createElement('div');
    bar.className = 'w-0.5 bg-brand-ciel rounded-t-xs equalizer-bar transition-all duration-200';
    bar.style.height = '4px';
    bar.style.setProperty('--pulse-duration', `${0.4 + Math.random() * 0.6}s`);
    bar.style.setProperty('--pulse-delay', `${i * 0.05}s`);
    equalizerContainer.appendChild(bar);
  });

  const eqBars = document.querySelectorAll('.equalizer-bar');

  function formatTime(secs) {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  function updateUI() {
    const totalDuration = (videoEl && !isNaN(videoEl.duration) && videoEl.duration > 0) ? videoEl.duration : duration;
    const percent = (currentTime / totalDuration) * 100;
    timelineProgress.style.width = `${percent}%`;
    timeTxt.textContent = `${formatTime(currentTime)} / ${formatTime(totalDuration)}`;

    // Active subtitle index lookup
    let activeIdx = 0;
    for (let i = 0; i < subtitles.length; i++) {
      if (currentTime >= subtitles[i].time) {
        activeIdx = i;
      }
    }
    if (subFr) subFr.textContent = `"${subtitles[activeIdx].fr}"`;
    if (subEs) {
      const span = subEs.querySelector('span');
      if (span) span.textContent = subtitles[activeIdx].es;
      else subEs.textContent = subtitles[activeIdx].es;
    }

    // Equalizer status
    eqBars.forEach((bar, idx) => {
      if (isPlaying) {
        bar.style.height = `${barHeights[idx % barHeights.length]}%`;
        bar.classList.add('equalizer-active');
      } else {
        bar.style.height = '4px';
        bar.classList.remove('equalizer-active');
      }
    });
  }

  function playVideo() {
    isPlaying = true;
    if (centerPlayWrapper) centerPlayWrapper.classList.add('hidden');
    if (dot) {
      dot.classList.remove('bg-brand-or');
      dot.classList.add('bg-red-500', 'animate-pulse');
    }
    if (statusText) statusText.textContent = 'EN REPRODUCCIÓN';
    if (playBarIcon) {
      playBarIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />';
    }

    if (videoEl) {
      videoEl.play().catch(err => {
        console.log("HTML5 Video play fallback to simulated interval", err);
      });
    }

    clearInterval(playbackInterval);
    playbackInterval = setInterval(() => {
      if (videoEl && !isNaN(videoEl.currentTime) && videoEl.currentTime > 0) {
        currentTime = videoEl.currentTime;
      } else {
        currentTime += 1;
        const totalDur = (videoEl && !isNaN(videoEl.duration)) ? videoEl.duration : duration;
        if (currentTime >= totalDur) {
          pauseVideo();
          currentTime = 0;
        }
      }
      updateUI();
    }, 250);

    updateUI();
  }

  function pauseVideo() {
    isPlaying = false;
    clearInterval(playbackInterval);
    if (videoEl) videoEl.pause();
    if (centerPlayWrapper) centerPlayWrapper.classList.remove('hidden');
    if (dot) {
      dot.classList.add('bg-brand-or');
      dot.classList.remove('bg-red-500', 'animate-pulse');
    }
    if (statusText) statusText.textContent = 'MENSAJE EN VIDEO';
    if (playBarIcon) {
      playBarIcon.innerHTML = '<path d="M8 5v14l11-7z"></path>';
    }
    updateUI();
  }

  function togglePlay() {
    if (isPlaying) {
      pauseVideo();
    } else {
      playVideo();
    }
  }

  if (videoEl) {
    videoEl.addEventListener('timeupdate', () => {
      currentTime = videoEl.currentTime;
      updateUI();
    });
    videoEl.addEventListener('ended', () => {
      pauseVideo();
      currentTime = 0;
      updateUI();
    });
  }

  if (centerPlayBtn) centerPlayBtn.addEventListener('click', togglePlay);
  if (barPlayBtn) barPlayBtn.addEventListener('click', togglePlay);

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      pauseVideo();
      if (videoEl) videoEl.currentTime = 0;
      currentTime = 0;
      playVideo();
    });
  }

  if (timelineContainer) {
    timelineContainer.addEventListener('click', (e) => {
      const rect = timelineContainer.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      const totalDur = (videoEl && !isNaN(videoEl.duration) && videoEl.duration > 0) ? videoEl.duration : duration;
      const newTime = pos * totalDur;
      currentTime = newTime;
      if (videoEl) videoEl.currentTime = newTime;
      updateUI();
    });
  }


  // 3. Form Submission Handler with localStorage Simulation
  const form = document.getElementById('diagnostic-form');
  const successMessage = document.getElementById('form-success-message');
  const resetFormBtn = document.getElementById('reset-form-btn');
  const successName = document.getElementById('success-user-name');
  const successEmail = document.getElementById('success-user-email');

  // Check for saved form responses on startup
  const savedSubmission = localStorage.getItem('sergio_tomassi_diagnostic');
  if (savedSubmission) {
    try {
      const data = JSON.parse(savedSubmission);
      showSuccessState(data.fullName, data.email);
    } catch (e) {
      console.error(e);
    }
  }

  function showSuccessState(name, email) {
    form.classList.add('hidden');
    successMessage.classList.remove('hidden');
    successName.textContent = name;
    successEmail.textContent = email;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameVal = document.getElementById('fullName').value;
    const emailVal = document.getElementById('email').value;
    const levelVal = document.getElementById('frenchLevel').value;
    const challengeVal = document.getElementById('mainChallenge').value;
    const messageVal = document.getElementById('customMessage').value;

    const submission = {
      fullName: nameVal,
      email: emailVal,
      frenchLevel: levelVal,
      mainChallenge: challengeVal,
      customMessage: messageVal,
      date: new Date().toLocaleDateString()
    };

    // Persist to local storage
    localStorage.setItem('sergio_tomassi_diagnostic', JSON.stringify(submission));
    showSuccessState(nameVal, emailVal);
  });

  resetFormBtn.addEventListener('click', () => {
    localStorage.removeItem('sergio_tomassi_diagnostic');
    form.classList.remove('hidden');
    successMessage.classList.add('hidden');
    form.reset();
  });

  // 4. Sticky Floating Enrollment CTA Bar visibility on scroll
  const stickyCta = document.getElementById('sticky-cta-bar');
  if (stickyCta) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        stickyCta.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
        stickyCta.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
      } else {
        stickyCta.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
        stickyCta.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
      }
    });
  }

});
