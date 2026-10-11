/**
 * BIEL07.DEV — Professional Portfolio Client Script
 * Owner: Desnabil Gymnastiar
 * Focus: High Performance, Multilingual (EN / ID / JP), Accessible, Production-Ready
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. DATA REPOSITORY: VERIFIED PROJECT TECH STACKS
  // -------------------------------------------------------------------------
  const PROJECT_STACKS = {
    p1: ['PHP', 'JavaScript', 'MySQL', 'MRP Engine', 'Kanban Logic', 'CSS3'],
    p2: ['JavaScript (ES6+)', 'HTML5 / CSS3', 'MySQL', 'Real-Time Telemetry', 'Andon Logic'],
    p3: ['PHP', 'MySQL', 'Excel VBA', 'Power BI', 'Dual Barcode Verification', 'Audit Logging'],
    p4: ['Python', 'ESC/POS Protocol', 'Excel VBA', 'Thermal Hardware Drivers', 'Auto-Cutter']
  };

  let activeModalProjectId = null;

  // -------------------------------------------------------------------------
  // 2. INTERNATIONALIZATION (i18n) ENGINE (EN | ID | JP | ZH)
  // -------------------------------------------------------------------------
  let currentLang = localStorage.getItem('biel07_lang') || 'en';
  if (!['en', 'id', 'jp', 'zh'].includes(currentLang)) {
    currentLang = 'en';
  }

  const applyLanguage = (lang) => {
    if (typeof TRANSLATIONS === 'undefined' || !TRANSLATIONS[lang]) {
      lang = 'en';
    }
    currentLang = lang;
    localStorage.setItem('biel07_lang', lang);

    // Update html lang attribute
    document.documentElement.lang = lang === 'jp' ? 'ja' : lang === 'zh' ? 'zh-CN' : lang;

    // Update active class on all language buttons across desktop & mobile
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    const dict = TRANSLATIONS[lang];
    if (!dict) return;

    // Translate text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Translate HTML content (preserves <strong>, <em>, <br>, etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // If modal is open, refresh modal contents in the selected language
    if (activeModalProjectId && projectModal && projectModal.classList.contains('open')) {
      populateModal(activeModalProjectId);
    }
  };

  // Wire up language switch buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang && targetLang !== currentLang) {
        applyLanguage(targetLang);
      }
    });
  });

  // -------------------------------------------------------------------------
  // 3. DYNAMIC YEAR
  // -------------------------------------------------------------------------
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear().toString();
  }

  // -------------------------------------------------------------------------
  // 4. SCROLL PROGRESS BAR & BACK TO TOP BUTTON
  // -------------------------------------------------------------------------
  const scrollProgress = document.getElementById('scrollProgress');
  const backToTopBtn = document.getElementById('backToTop');

  const handleScroll = () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;

    if (scrollProgress) {
      scrollProgress.style.width = `${scrolled}%`;
    }

    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // -------------------------------------------------------------------------
  // 5. MOBILE NAVIGATION DRAWER
  // -------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-cta-btn');

  const closeMobileMenu = () => {
    if (mobileMenu && mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      if (mobileToggle) {
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    }
  };

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        mobileMenu.classList.add('open');
        mobileMenu.setAttribute('aria-hidden', 'false');
        mobileToggle.setAttribute('aria-expanded', 'true');
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close mobile menu if clicked outside
    document.addEventListener('click', (e) => {
      if (mobileMenu.classList.contains('open') &&
          !mobileMenu.contains(e.target) &&
          !mobileToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }

  // -------------------------------------------------------------------------
  // 6. ACTIVE NAVIGATION OBSERVER (SCROLLSPY)
  // -------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-desktop .nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -50% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        desktopNavLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => sectionObserver.observe(sec));

  // -------------------------------------------------------------------------
  // 7. PROJECT DETAIL MODAL DIALOG (MULTILINGUAL)
  // -------------------------------------------------------------------------
  const projectModal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const modalCloseBottom = document.getElementById('modalCloseBottom');
  const openModalButtons = document.querySelectorAll('.open-modal-btn');

  const modalCode = document.getElementById('modalCode');
  const modalTitle = document.getElementById('modalTitle');
  const modalProblem = document.getElementById('modalProblem');
  const modalSolution = document.getElementById('modalSolution');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalOutcome = document.getElementById('modalOutcome');
  const modalTechStack = document.getElementById('modalTechStack');

  const populateModal = (projectId) => {
    if (typeof PROJECT_MODAL_I18N === 'undefined') return;
    const projectTranslations = PROJECT_MODAL_I18N[projectId];
    if (!projectTranslations) return;

    const data = projectTranslations[currentLang] || projectTranslations['en'];
    if (!data) return;

    if (modalCode) modalCode.textContent = data.code;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalProblem) modalProblem.textContent = data.problem;
    if (modalSolution) modalSolution.textContent = data.solution;
    if (modalOutcome) modalOutcome.textContent = data.outcome;

    if (modalFeatures && Array.isArray(data.features)) {
      modalFeatures.innerHTML = '';
      data.features.forEach(feat => {
        const li = document.createElement('li');
        li.textContent = feat;
        modalFeatures.appendChild(li);
      });
    }

    if (modalTechStack) {
      modalTechStack.innerHTML = '';
      const stack = PROJECT_STACKS[projectId] || [];
      stack.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'tech-tag';
        span.textContent = tech;
        modalTechStack.appendChild(span);
      });
    }
  };

  const openModal = (projectId) => {
    activeModalProjectId = projectId;
    populateModal(projectId);

    if (projectModal) {
      projectModal.classList.add('open');
      projectModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      if (modalClose) modalClose.focus();
    }
  };

  const closeModal = () => {
    if (!projectModal) return;
    activeModalProjectId = null;
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  openModalButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.getAttribute('data-project');
      if (pid) openModal(pid);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalCloseBottom) modalCloseBottom.addEventListener('click', closeModal);

  // Close modal on backdrop click
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeModal();
      }
    });
  }

  // Close modal on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('open')) {
      closeModal();
    }
  });

  // -------------------------------------------------------------------------
  // 8. INITIALIZE CURRENT LANGUAGE
  // -------------------------------------------------------------------------
  applyLanguage(currentLang);
});
