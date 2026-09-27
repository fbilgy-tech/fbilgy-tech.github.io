(function() {
  const EMAIL = 'desnabil.dev@gmail.com';

  // --- 1. DYNAMIC TYPEWRITER EFFECT IN HERO ---
  const words = [
    "Web Applications.",
    "Factory E-Kanban Systems.",
    "PPIC Automation Engines.",
    "Multi-Plant Telemetry Hubs."
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typewriterEl = document.getElementById('typewriterText');

  function typeEffect() {
    if (!typewriterEl) return;
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentWord.length) {
      speed = 2000; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 400;
    }

    setTimeout(typeEffect, speed);
  }
  setTimeout(typeEffect, 600);

  // --- 2. SCROLL PROGRESS BAR & BACK TO TOP ---
  const scrollProgress = document.getElementById('scrollProgress');
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    if (scrollProgress) scrollProgress.style.width = `${progress}%`;

    if (backToTopBtn) {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- 3. SCROLL REVEAL ANIMATION ---
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => revealObserver.observe(el));

  // --- 4. PROJECT FILTER TABS ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.35s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- 5. PROJECT STORY MODAL ---
  const projectStories = {
    sys01: {
      title: "PPIC Digitization & Inventory Platform",
      tps: "Just-In-Time (JIT) & Eliminasi Muda of Waiting: Menghilangkan 4 jam waktu tunggu manual dalam menyusun jadwal perakitan dan mencegah overproduction material.",
      problem: "Sebelum sistem ini berjalan, jadwal produksi harian dan alokasi bahan baku disusun menggunakan file spreadsheet terpisah-pisah. Proses ini memakan waktu lebih dari 4 jam setiap kali pesanan baru masuk dan rawan salah hitung.",
      solution: "Saya merancang sistem web terpusat yang dilengkapi algoritma otomatis (MRP). Begitu pesanan customer dimasukkan, sistem langsung menghitung kebutuhan bahan mentah, mencocokkan stok gudang, dan membagi jadwal kerja ke lini produksi dalam hitungan detik.",
      impact: "Proses pembuatan jadwal produksi yang tadinya 4 jam terpangkas menjadi 15 detik. Perusahaan beralih 100% dari kertas ke digital tanpa ada bahan baku yang terlewat.",
      tech: ["Python", "PHP", "MySQL", "Algoritma MRP", "Full-Stack"]
    },
    sys02: {
      title: "E-Kanban Auto-Cutting Printer Controller",
      tps: "Jidoka (Autonomation) & Eliminasi Muda of Motion: Pemisahan pekerjaan manusia dari mesin; printer otomatis memotong tiket secara otonom tanpa perlu gunting manual operator.",
      problem: "Di lantai pabrik, setiap customer memiliki format label barcode yang berbeda-beda. Sebelumnya operator harus mencetak dan memotong tiket kanban secara manual dengan gunting, menciptakan antrean panjang.",
      solution: "Saya membuat program pengendali yang menghubungkan sistem komputer langsung ke mesin printer thermal dengan fitur pisau pemotong fisik (auto-cutter). Sistem secara cerdas mengatur layout barcode sesuai standar customer dan otomatis memotong kertas setiap 1 tiket selesai.",
      impact: "Lebih dari 5.000 tiket instruksi produksi terpotong otomatis setiap hari secara rapi tanpa perlu tenaga gunting manual, menghilangkan hambatan waktu di lantai produksi.",
      tech: ["Python", "ESC/POS Protocol", "Thermal Printer", "Barcode Standard"]
    },
    sys03: {
      title: "Inter-Plant Logistics & Dispatch Monitoring Web",
      tps: "Mieruka (Visual Control) & Poka-Yoke: Verifikasi barcode ganda (muat & serah terima) sebagai sistem anti-salah guna mencegah selisih part dan menghentikan line stop di lini perakitan tujuan.",
      problem: "Saat memindahkan part dari Plant 1 ke Plant 2 menggunakan truk logistik, sering terjadi selisih jumlah barang saat serah terima, berisiko menghentikan proses perakitan di pabrik tujuan.",
      solution: "Saya membangun website pemantau pengiriman barang yang mewajibkan scan barcode dua arah: saat barang dinaikkan ke truk dan saat diterima di pabrik penerima. Jika ada jumlah yang tidak pas, sistem langsung memunculkan peringatan.",
      impact: "Mencapai zero line stops (nol waktu henti mesin) yang disebabkan oleh kekurangan part antar-pabrik. Seluruh riwayat pengiriman tercatat transparan secara real-time.",
      tech: ["PHP", "JavaScript", "MySQL", "Real-Time Tracking"]
    },
    sys04: {
      title: "Automated Customer EDI Pipeline (n8n)",
      tps: "Kaizen & Eliminasi Muda of Overprocessing: Mengotomatisasi penarikan data pesanan pelanggan dari portal B2B tanpa perlu staf mengetik ribuan baris data berulang setiap pagi.",
      problem: "Setiap pagi staf administrasi harus login ke portal berbagai customer, mengunduh file pesanan (PO), lalu menyalin ribuan baris data ke sistem internal secara manual selama berjam-jam.",
      solution: "Saya menyusun alur kerja otomatis (n8n workflow) yang berjalan otomatis setiap pagi. Sistem otomatis login, mengunduh pesanan, merapikan data, dan memasukkannya langsung ke database internal.",
      impact: "Menghemat 3+ jam kerja manual setiap hari bagi tim administrasi dan menjamin data pesanan pelanggan selalu masuk tepat waktu tanpa kesalahan ketik.",
      tech: ["n8n Workflow", "Node.js", "REST APIs", "Automated ETL"]
    },
    sys05: {
      title: "Export Administration & Logistics Platform (ADM)",
      tps: "Standardized Work & JIT Export Fulfillment (Astra Daihatsu Motor): Memastikan arus dokumen dan pengapalan suku cadang otomotif berjalan sinkron sesuai standar mutu Toyota Group.",
      problem: "Pengiriman ekspor suku cadang kendaraan melibatkan dokumen kepabeanan dan manifes kontainer bervolume tinggi yang sangat ketat regulasinya.",
      solution: "Saya membangun aplikasi web database di PT Astra Daihatsu Motor yang dilengkapi makro Excel otomatis (VBA) untuk validasi data pengiriman serta dashboard visual Power BI untuk memantau performa ekspor.",
      impact: "Mempercepat pembuatan dokumen ekspor secara signifikan dan mempermudah pimpinan memantau pencapaian pengiriman secara visual.",
      tech: ["PHP & MySQL", "Microsoft Excel VBA", "Power BI Dashboards"]
    },
    sys06: {
      title: "Production Demand Time-Series Engine",
      tps: "Heijunka (Production Leveling): Menghaluskan dan meratakan pengadaan bahan baku berdasarkan pola fluktuasi historis agar stok aman (safety stock) tetap presisi tanpa over-inventory.",
      problem: "Fluktuasi pesanan dari produsen otomotif seringkali membuat tim pembelian bingung menentukan berapa banyak bahan baku yang harus dibeli agar tidak mubazir atau kekurangan.",
      solution: "Saya mengembangkan aplikasi komputer berbasis Python yang menganalisis pola pesanan beberapa bulan ke belakang menggunakan rumus statistik time-series untuk memprediksi kebutuhan 3 bulan ke depan.",
      impact: "Membantu perusahaan mengoptimalkan biaya pembelian bahan baku dan menjaga persediaan barang aman (safety stock) secara terukur dan berbasis data.",
      tech: ["Python", "NumPy", "Time-Series Modeling", "Desktop Application"]
    }
  };

  const projectModalBackdrop = document.getElementById('projectModalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  function openProjectModal(key) {
    const data = projectStories[key];
    if (!data || !projectModalBackdrop) return;

    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalProblem').textContent = data.problem;
    document.getElementById('modalSolution').textContent = data.solution;
    document.getElementById('modalImpact').textContent = data.impact;

    const pillsContainer = document.getElementById('modalTechPills');
    if (pillsContainer) {
      pillsContainer.innerHTML = '';
      data.tech.forEach(t => {
        const span = document.createElement('span');
        span.className = 'pill';
        span.textContent = t;
        pillsContainer.appendChild(span);
      });
    }

    projectModalBackdrop.classList.add('active');
    document.body.classList.add('modal-open');
  }

  function closeProjectModal() {
    if (!projectModalBackdrop) return;
    projectModalBackdrop.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  document.querySelectorAll('[data-modal]').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.getAttribute('data-modal');
      if (key) openProjectModal(key);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);

  if (projectModalBackdrop) {
    projectModalBackdrop.addEventListener('click', (e) => {
      if (e.target === projectModalBackdrop) closeProjectModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
  });

  // --- 6. TOAST NOTIFICATION & COPY EMAIL ---
  function showToast(message) {
    const oldToast = document.querySelector('.toast');
    if (oldToast) oldToast.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      showToast('Email copied to clipboard: ' + EMAIL);
    }).catch(() => {
      prompt('Copy email address:', EMAIL);
    });
  }

  const btnHero = document.getElementById('copyEmailBtn');
  if (btnHero) btnHero.addEventListener('click', copyEmail);

  const btnCard = document.getElementById('cardCopyEmailBtn');
  if (btnCard) btnCard.addEventListener('click', copyEmail);

  const btnContact = document.getElementById('copyEmailContactBtn');
  if (btnContact) btnContact.addEventListener('click', copyEmail);

  // Print / Save CV triggers
  ['navPrintBtn', 'heroPrintBtn', 'contactPrintBtn'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.print();
      });
    }
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
