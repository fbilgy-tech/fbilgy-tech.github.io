/**
 * BIEL07.DEV — Internationalization (i18n) Dictionary
 * Supported Languages:
 *   - 'en': English (Default international standard)
 *   - 'id': Bahasa Indonesia (Formal & professional)
 *   - 'jp': 日本語 (Authentic Japanese industrial / Monozukuri terminology)
 *   - 'zh': 简体中文 (Authentic industrial manufacturing & smart factory terminology)
 */

const TRANSLATIONS = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About",
    nav_expertise: "Expertise",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_approach: "Approach",
    nav_connect: "Connect",
    status_available: "AVAILABLE FOR WORK",
    nav_cta: "LinkedIn ↗",
    mobile_cta: "Connect on LinkedIn ↗",

    // Hero Section
    hero_eyebrow: "SOFTWARE ENGINEER / INDUSTRIAL DIGITALIZATION",
    hero_headline: "Building Digital<br><span class=\"headline-gradient\">Systems That Work.</span>",
    hero_desc: "I build practical software solutions that connect technology, manufacturing operations, and process improvement — turning complex workflows into efficient digital systems.",
    hero_cta_explore: "Explore My Work",
    hero_cta_connect: "Connect on LinkedIn ↗",
    hero_meta_label: "CORE DOMAINS",
    hero_meta_web: "Web Application Development",
    hero_meta_mfg: "Manufacturing Systems",
    hero_meta_auto: "Workflow Automation",
    hero_scroll: "SCROLL",

    // About Section
    about_eyebrow: "01 // ABOUT IDENTITY",
    about_title: "Engineering Beyond the Code.",
    about_sub: "Where modern software engineering disciplines meet real-world industrial plant floor execution.",
    about_lead: "I am a Software Engineer based in Cikarang Barat, West Java, specializing in the intersection of full-stack web applications and manufacturing operational digitalization.",
    about_p1: "Unlike purely theoretical software development, my engineering background is anchored directly inside Tier-1 automotive manufacturing environments. I don't just develop software interfaces; I analyze how material moves across factory floors, how takt time drives production pacing, and how frontline operators interact with physical hardware.",
    about_p2: "With professional experience at <strong>PT Namicoh Indonesia Component</strong> and <strong>PT Astra Daihatsu Motor</strong>, my work focuses on eliminating operational waste (<em>Muda</em>), preventing manual calculation discrepancies (<em>Poka-Yoke</em>), and establishing transparent data flows between inventory, planning, and delivery.",
    about_h1_title: "Software Development & System Integration:",
    about_h1_desc: "Architecting robust web backends, responsive dashboards, and hardware-connected drivers.",
    about_h2_title: "Manufacturing Workflow Understanding:",
    about_h2_desc: "Direct floor experience in automotive assembly logistics, stamping, and supply chain timelines.",
    about_h3_title: "Production Planning & Inventory Processes:",
    about_h3_desc: "Translating BOM structures, daily demand schedules, and stock levels into automated calculation engines.",
    about_h4_title: "Process Automation & Data Visualization:",
    about_h4_desc: "Eliminating multi-hour manual data entry routines via scheduled pipelines, Power BI, and VBA tools.",
    about_h5_title: "Continuous Improvement Mindset:",
    about_h5_desc: "Practicing Kaizen discipline to optimize system reliability, execution speed, and operator safety.",

    // About Side Panel
    panel_title: "SYSTEM_PILLARS // SPECS",
    panel_badge: "CORE DNA",
    pillar_1_title: "SYSTEM THINKING",
    pillar_1_desc: "Viewing code not as isolated scripts, but as interdependent links within a living enterprise manufacturing pipeline.",
    pillar_2_title: "PROCESS OPTIMIZATION",
    pillar_2_desc: "Systematically auditing root-cause bottlenecks before writing a line of code to eliminate operational waste.",
    pillar_3_title: "DATA-DRIVEN SOLUTIONS",
    pillar_3_desc: "Replacing subjective estimates with automated time-series models, live telemetry, and structured validation tables.",
    pillar_4_title: "CONTINUOUS IMPROVEMENT",
    pillar_4_desc: "Iterating software based on measurable floor operator feedback, runtime metrics, and long-term maintainability.",
    panel_location_label: "LOCATION",
    panel_location_val: "Cikarang Barat, West Java, ID",
    panel_role_label: "ROLE",
    panel_role_val: "PPIC & Software Developer",
    panel_profile_label: "PROFILE",
    panel_profile_val: "LinkedIn Profile ↗",

    // Technical Expertise
    exp_eyebrow: "02 // TECHNICAL MATRIX",
    exp_title: "Technical Expertise.",
    exp_sub: "A verified stack combining modern software engineering with industrial plant operations and automation tools.",
    exp_d1_title: "Web Development",
    exp_d1_desc: "Building reliable internal portals, RESTful services, and responsive operational interfaces.",
    exp_d1_status: "Verified in automotive production environments",
    exp_d2_title: "Database & Data Sources",
    exp_d2_desc: "Relational schema design, query optimization, and structured operational storage.",
    exp_d2_status: "High-volume transactional query design",
    exp_d3_title: "Automation & Analytics",
    exp_d3_desc: "Eliminating multi-hour manual data workflows through scheduled ETL routines and reports.",
    exp_d3_status: "Production-grade ETL and dashboard generation",
    exp_d4_title: "Infrastructure & Networking",
    exp_d4_desc: "Server maintenance, networking fundamentals, and production deployment environments.",
    exp_d4_status: "Data center Tier-3 & plant server support",
    exp_d5_badge: "PLANT FLOOR SPECIALIZATION",
    exp_d5_title: "Industrial Systems & Manufacturing Digitalization",
    exp_d5_desc: "Domain expertise in lean manufacturing workflows, production planning calculations, and physical hardware floor controls.",
    exp_d5_status: "Direct floor alignment: Bridging operators, line leaders, and executive systems",

    // Featured Projects
    proj_eyebrow: "03 // SELECTED WORK",
    proj_title: "Featured Projects.",
    proj_sub: "High-impact operational systems, automation pipelines, and manufacturing digitalization concepts.",
    label_problem: "PROBLEM STATEMENT",
    label_solution: "SOLUTION OVERVIEW",
    btn_view_details: "View Details",

    // Project 1
    p1_cat: "MANUFACTURING CONCEPT / PRODUCTION SYSTEM",
    p1_title: "PPIC & Kanban Management System",
    p1_problem: "Assembly planning and inventory allocation were calculated across segregated spreadsheets, consuming 4+ hours per order batch with elevated risk of calculation drift.",
    p1_solution: "A manufacturing-oriented centralized web application for organizing production planning, inventory levels, bill-of-materials explosion (MRP), and floor operational visibility.",
    p1_badge: "✓ Floor Tested Architecture",

    // Project 2
    p2_cat: "PRODUCTION MONITORING / VISUAL CONTROL",
    p2_title: "Manufacturing Andon Monitoring",
    p2_problem: "Assembly line supervisor stations lacked real-time visibility over line pacing, hourly output discrepancies, and immediate downtime notification across shifts.",
    p2_solution: "A production monitoring interface concept for visualizing plan versus actual, hourly achievement curves, operational takt status, and automated anomaly alert thresholds.",
    p2_badge: "✓ Real-Time UI Concept",

    // Project 3
    p3_cat: "LOGISTICS & COMPLIANCE / WEB PLATFORM",
    p3_title: "Export & Delivery Process System",
    p3_problem: "Cross-plant component transfers and export documentation reconciliation relied on paper manifests, creating part discrepancy risks and downstream assembly line-stop vulnerabilities.",
    p3_solution: "A web-based operational workflow system managing dispatch verification, automated dual-barcode scanning, manifest compilation, and real-time shipment reconciliation.",
    p3_badge: "✓ Zero Line-Stop Record",

    // Project 4
    p4_cat: "DATA WORKFLOW & HARDWARE AUTOMATION",
    p4_title: "Excel Automation & QR Label Generation",
    p4_problem: "Operators printed uncut sheets of custom barcode labels and hand-trimmed 5,000+ labels daily with scissors, creating human bottlenecks and layout mismatch errors.",
    p4_solution: "Automation workflows for structured data extraction, automatic QR/Barcode string formatting, and direct hardware printer driver integration with automated physical cutting.",
    p4_badge: "✓ 5,000+ Auto-Cuts Daily",

    // Professional Experience
    career_eyebrow: "04 // VERIFIED CAREER",
    career_title: "Professional Experience.",
    career_sub: "Verified industry trajectory delivering software systems, digitalization initiatives, and plant floor operations.",

    exp1_company: "PT Namicoh Indonesia Component",
    exp1_role: "PPIC and Software Development / Digitalization",
    exp1_period: "Mar 2025 – Present",
    exp1_loc: "Cikarang Selatan, West Java, Indonesia",
    exp1_b1: "Architected and deployed a centralized <strong>Full-Stack PPIC Digitization Platform</strong> to migrate spreadsheet-based production scheduling into a real-time web portal.",
    exp1_b2: "Developed a Python-based calculation engine for <strong>Material Requirements Planning (MRP)</strong>, reducing calculation cycle time from 4 hours to under 15 seconds.",
    exp1_b3: "Engineered an automated <strong>E-Kanban Hardware Integration</strong> using ESC/POS thermal printer controller protocols and automated physical cutting, processing 5,000+ daily tickets.",
    exp1_b4: "Built an <strong>Inter-Plant Logistics Monitoring Web Portal</strong> implementing two-way barcode scans to ensure accurate parts dispatch and maintain zero line-stop occurrences.",
    exp1_b5: "Constructed scheduled <strong>n8n ETL automation pipelines</strong> to automatically ingest and synchronize customer purchase orders without daily manual re-keying.",

    exp2_company: "PT Astra Daihatsu Motor",
    exp2_role: "Web Development / Export Development System",
    exp2_period: "Feb 2023 – Jan 2025",
    exp2_loc: "North Jakarta, Indonesia",
    exp2_b1: "Developed internal web application modules for managing automotive export components documentation and logistics tracking.",
    exp2_b2: "Engineered <strong>Advanced Excel VBA Macros</strong> to automate validation of thousands of export manifest data rows, eliminating manual typing errors and expediting shipment approvals.",
    exp2_b3: "Created interactive <strong>Microsoft Power BI KPI Dashboards</strong> providing management transparency over component export fulfillment rates.",
    exp2_b4: "Maintained MySQL operational databases supporting continuous 24/7 export documentation operations.",

    exp3_company: "PT Dhecyber Flow Indonesia",
    exp3_role: "IT Support Specialist — Data Center & NOC",
    exp3_period: "Feb 2021 – Apr 2021",
    exp3_loc: "South Jakarta, Indonesia",
    exp3_b1: "Performed structured hardware maintenance, server rack management, and cabling audits inside Tier-3 Data Center infrastructure.",
    exp3_b2: "Monitored network telemetry at the <strong>Network Operations Center (NOC)</strong>, logging incident tickets and executing standardized escalation SOPs.",

    // Engineering Approach
    appr_eyebrow: "05 // METHODOLOGY",
    appr_title: "From Operational Problems to Digital Solutions.",
    appr_sub: "A disciplined, five-step engineering framework converting complex shop-floor realities into resilient software.",
    appr_s1_badge: "STEP // 01",
    appr_s1_title: "Understand the Process",
    appr_s1_desc: "Go directly to the floor (<em>Genba</em>). Shadow operators, audit manual handoffs, and document actual material and information flows before defining technical scope.",
    appr_s1_metric: "Floor observation & takt time mapping",
    appr_s2_badge: "STEP // 02",
    appr_s2_title: "Identify Inefficiencies",
    appr_s2_desc: "Pinpoint operational waste (<em>Muda</em>): redundant spreadsheets, repeated data entry, manual cutting bottlenecks, and unverified transport handoffs.",
    appr_s2_metric: "Root-cause failure mode analysis",
    appr_s3_badge: "STEP // 03",
    appr_s3_title: "Design the System",
    appr_s3_desc: "Architect normalized database schemas, RESTful APIs, and ergonomic UI views tailored for rapid, error-proof operator interaction (<em>Poka-Yoke</em>).",
    appr_s3_metric: "Human-centered system architecture",
    appr_s4_badge: "STEP // 04",
    appr_s4_title: "Develop and Validate",
    appr_s4_desc: "Write clean, modular code. Test hardware communication protocols under realistic shift loads, edge-case network dropouts, and live transaction volumes.",
    appr_s4_metric: "Zero-defect deployment validation",
    appr_s5_badge: "STEP // 05",
    appr_s5_title: "Measure and Improve",
    appr_s5_desc: "Quantify operational gains: calculation time reduction, zero line stops, and paperless transition. Continuously gather operator feedback (<em>Kaizen</em>).",
    appr_s5_metric: "Measured performance accountability",

    // Connect Section
    conn_eyebrow: "06 // PROFESSIONAL NETWORK",
    conn_title: "Connect on LinkedIn.",
    conn_sub: "Open for professional networking, engineering discussions, and manufacturing digitalization opportunities.",
    conn_badge: "VERIFIED IDENTITY // ID.LINKEDIN.COM",
    conn_role: "Software Engineer • Industrial Digitalization • Manufacturing Systems",
    conn_bio: "Connecting software engineering principles with automotive plant operations, operational automation, and manufacturing data systems.",
    conn_btn: "View LinkedIn Profile",

    // Footer
    foot_tagline: "Software Engineering × Industrial Digitalization",
    foot_badge: "PRODUCTION READY ARCHITECTURE",
    foot_nav_title: "NAVIGATION",
    foot_meth_title: "METHODOLOGY",
    foot_net_title: "NETWORK",
    foot_copy: "Desnabil Gymnastiar (BIEL07.DEV). All rights reserved.",
    foot_loc: "Cikarang Barat, West Java, Indonesia · Built with semantic HTML5, CSS3 & Vanilla JS."
  },

  id: {
    // Navigation
    nav_home: "Beranda",
    nav_about: "Tentang",
    nav_expertise: "Keahlian",
    nav_projects: "Proyek",
    nav_experience: "Pengalaman",
    nav_approach: "Pendekatan",
    nav_connect: "Kontak",
    status_available: "TERSEDIA UNTUK PEKERJAAN",
    nav_cta: "LinkedIn ↗",
    mobile_cta: "Hubungkan di LinkedIn ↗",

    // Hero Section
    hero_eyebrow: "SOFTWARE ENGINEER / DIGITALISASI INDUSTRI",
    hero_headline: "Membangun Sistem Digital<br><span class=\"headline-gradient\">Yang Terbukti Bekerja.</span>",
    hero_desc: "Saya membangun solusi perangkat lunak praktis yang menghubungkan teknologi, operasional manufaktur, dan continuous improvement — mentransformasi alur kerja rumit menjadi sistem digital yang efisien.",
    hero_cta_explore: "Lihat Karya Saya",
    hero_cta_connect: "Hubungkan di LinkedIn ↗",
    hero_meta_label: "DOMAIN UTAMA",
    hero_meta_web: "Pengembangan Aplikasi Web",
    hero_meta_mfg: "Sistem Manufaktur",
    hero_meta_auto: "Otomasi Alur Kerja",
    hero_scroll: "GULIR",

    // About Section
    about_eyebrow: "01 // TENTANG IDENTITAS",
    about_title: "Rekayasa Melampaui Baris Kode.",
    about_sub: "Di mana disiplin rekayasa perangkat lunak modern bertemu langsung dengan eksekusi lantai pabrik manufaktur nyata.",
    about_lead: "Saya adalah Software Engineer yang berdomisili di Cikarang Barat, Jawa Barat, dengan spesialisasi pada integrasi aplikasi web full-stack dan digitalisasi operasional manufaktur.",
    about_p1: "Berbeda dari pengembangan perangkat lunak yang murni teoritis, fondasi rekayasa saya berakar langsung di lingkungan manufaktur otomotif Tier-1. Saya tidak hanya membuat antarmuka perangkat lunak; saya menganalisis aliran material di lantai pabrik, pacing takt time produksi, dan ergonomi operator saat berinteraksi dengan perangkat keras.",
    about_p2: "Berbekal pengalaman profesional di <strong>PT Namicoh Indonesia Component</strong> dan <strong>PT Astra Daihatsu Motor</strong>, fokus kerja saya adalah mengeliminasi pemborosan operasional (<em>Muda</em>), mencegah kesalahan perhitungan manual (<em>Poka-Yoke</em>), dan membangun transparansi data yang akurat antara inventory, planning, dan delivery.",
    about_h1_title: "Pengembangan Perangkat Lunak & Integrasi Sistem:",
    about_h1_desc: "Merancang backend web yang tangguh, dashboard responsif, dan driver penghubung hardware.",
    about_h2_title: "Pemahaman Alur Kerja Manufaktur:",
    about_h2_desc: "Pengalaman langsung di lantai pabrik assembly otomotif, stamping, dan timeline rantai pasok.",
    about_h3_title: "Perencanaan Produksi & Proses Inventory (PPIC):",
    about_h3_desc: "Menerjemahkan struktur BOM, jadwal demand harian, dan buffer stok ke dalam mesin komputasi otomatis.",
    about_h4_title: "Otomasi Proses & Visualisasi Data:",
    about_h4_desc: "Mengeliminasi rutinitas entri data manual berjam-jam melalui pipeline terjadwal, Power BI, dan VBA.",
    about_h5_title: "Pola Pikir Continuous Improvement (Kaizen):",
    about_h5_desc: "Menerapkan disiplin Kaizen untuk mengoptimalkan keandalan sistem, kecepatan eksekusi, dan keselamatan kerja.",

    // About Side Panel
    panel_title: "PILAR_SISTEM // SPESIFIKASI",
    panel_badge: "DNA INTI",
    pillar_1_title: "SYSTEM THINKING",
    pillar_1_desc: "Memandang kode bukan sebagai skrip terisolasi, melainkan mata rantai terintegrasi dalam pipeline manufaktur perusahaan.",
    pillar_2_title: "PROCESS OPTIMIZATION",
    pillar_2_desc: "Menganalisis akar penyebab hambatan (bottleneck) sebelum menulis kode guna mengeliminasi pemborosan.",
    pillar_3_title: "DATA-DRIVEN SOLUTIONS",
    pillar_3_desc: "Menggantikan estimasi subjektif dengan model komputasi terstruktur, telemetri real-time, dan validasi data akurat.",
    pillar_4_title: "CONTINUOUS IMPROVEMENT",
    pillar_4_desc: "Mengembangkan iterasi perangkat lunak berdasarkan feedback operator lantai pabrik dan metrik runtime terukur.",
    panel_location_label: "LOKASI",
    panel_location_val: "Cikarang Barat, Jawa Barat, ID",
    panel_role_label: "PERAN",
    panel_role_val: "PPIC & Software Developer",
    panel_profile_label: "PROFIL",
    panel_profile_val: "Profil LinkedIn ↗",

    // Technical Expertise
    exp_eyebrow: "02 // MATRIKS TEKNIS",
    exp_title: "Keahlian Teknis.",
    exp_sub: "Tech stack terverifikasi yang memadukan rekayasa perangkat lunak modern dengan operasional pabrik dan otomasi industri.",
    exp_d1_title: "Pengembangan Web",
    exp_d1_desc: "Membangun portal internal yang andal, RESTful API, dan antarmuka operasional yang responsif.",
    exp_d1_status: "Teruji di lingkungan produksi otomotif",
    exp_d2_title: "Database & Sumber Data",
    exp_d2_desc: "Desain skema relasional, optimasi query, dan penyimpanan data operasional terstruktur.",
    exp_d2_status: "Desain query transaksional volume tinggi",
    exp_d3_title: "Otomasi & Analitik",
    exp_d3_desc: "Mengeliminasi jam kerja manual melalui pipeline ETL terjadwal, Power BI, dan skrip otomasi.",
    exp_d3_status: "Pemrosesan ETL dan visualisasi dashboard kelas produksi",
    exp_d4_title: "Infrastruktur & Jaringan",
    exp_d4_desc: "Pemeliharaan server, dasar-dasar jaringan komputer, dan lingkungan deployment produksi.",
    exp_d4_status: "Dukungan server pabrik & Data Center Tier-3",
    exp_d5_badge: "SPESIALISASI LANTAI PABRIK",
    exp_d5_title: "Sistem Industri & Digitalisasi Manufaktur",
    exp_d5_desc: "Keahlian domain dalam alur lean manufacturing, kalkulasi PPIC, dan integrasi perangkat keras di shop floor.",
    exp_d5_status: "Penghubung langsung: Operator lini, Line Leader, dan sistem manajemen eksekutif",

    // Featured Projects
    proj_eyebrow: "03 // KARYA TERPILIH",
    proj_title: "Proyek Unggulan.",
    proj_sub: "Sistem operasional berimpak tinggi, alur kerja otomasi, dan konsep digitalisasi manufaktur.",
    label_problem: "MASALAH OPERASIONAL",
    label_solution: "SOLUSI TEKNIS",
    btn_view_details: "Lihat Detail",

    // Project 1
    p1_cat: "KONSEP MANUFAKTUR / SISTEM PRODUKSI",
    p1_title: "Sistem Manajemen PPIC & Kanban",
    p1_problem: "Perencanaan lini perakitan dan alokasi stok dihitung secara terpisah di berbagai spreadsheet, memakan 4+ jam per batch dengan risiko deviasi perhitungan yang tinggi.",
    p1_solution: "Aplikasi web terpusat untuk mengelola perencanaan produksi, stok inventory, kalkulasi BOM explosion (MRP), dan visibilitas operasional lantai pabrik.",
    p1_badge: "✓ Arsitektur Teruji di Lapangan",

    // Project 2
    p2_cat: "MONITORING PRODUKSI / KONTROL VISUAL",
    p2_title: "Monitoring Andon Manufaktur",
    p2_problem: "Pos supervisor perakitan tidak memiliki visibilitas real-time terhadap takt time lini, deviasi output per jam, dan notifikasi downtime seketika antar shift.",
    p2_solution: "Konsep antarmuka visual Andon untuk memantau rencana vs aktual, kurva pencapaian per jam, status takt operasional, dan ambang batas peringatan anomali.",
    p2_badge: "✓ Konsep UI Real-Time",

    // Project 3
    p3_cat: "LOGISTIK & KEPATUHAN / PLATFORM WEB",
    p3_title: "Sistem Proses Ekspor & Pengiriman",
    p3_problem: "Transfer komponen antar-pabrik dan rekonsiliasi dokumen ekspor mengandalkan manifes kertas, memicu risiko salah kirim part dan bahaya line-stop perakitan.",
    p3_solution: "Sistem alur kerja web yang mengelola verifikasi pengiriman, pemindaian dual-barcode otomatis, kompilasi manifes, dan rekonsiliasi pengiriman real-time.",
    p3_badge: "✓ Rekor Zero Line-Stop",

    // Project 4
    p4_cat: "ALUR KERJA DATA & OTOMASI HARDWARE",
    p4_title: "Otomasi Excel & Cetak Label QR",
    p4_problem: "Operator mencetak lembaran label barcode utuh dan memotong manual 5.000+ label setiap hari dengan gunting, menimbulkan bottleneck dan risiko deviasi ukuran.",
    p4_solution: "Alur kerja otomasi untuk ekstraksi data terstruktur, format string QR/Barcode otomatis, dan integrasi driver printer termal dengan pemotong mekanis otomatis.",
    p4_badge: "✓ 5.000+ Potong Otomatis / Hari",

    // Professional Experience
    career_eyebrow: "04 // KARIR TERVERIFIKASI",
    career_title: "Pengalaman Profesional.",
    career_sub: "Rekam jejak industri dalam membangun sistem perangkat lunak, inisiatif digitalisasi, dan operasional manufaktur.",

    exp1_company: "PT Namicoh Indonesia Component",
    exp1_role: "PPIC dan Pengembangan Perangkat Lunak / Digitalisasi",
    exp1_period: "Mar 2025 – Sekarang",
    exp1_loc: "Cikarang Selatan, Jawa Barat, Indonesia",
    exp1_b1: "Merancang dan menerapkan <strong>Platform Digitalisasi PPIC Full-Stack</strong> terpusat untuk memigrasi penjadwalan berbasis spreadsheet ke portal web real-time.",
    exp1_b2: "Mengembangkan kalkulator berbasis Python untuk <strong>Material Requirements Planning (MRP)</strong>, memangkas durasi hitung dari 4 jam menjadi kurang dari 15 detik.",
    exp1_b3: "Mengintegrasikan <strong>Perangkat Keras E-Kanban</strong> menggunakan protokol printer termal ESC/POS dan pemotong fisik otomatis, memproses 5.000+ tiket per hari.",
    exp1_b4: "Membangun <strong>Portal Web Monitoring Logistik Antar-Pabrik</strong> dengan verifikasi dual-barcode dua arah untuk memastikan akurasi pengiriman dan menjaga rekor zero line-stop.",
    exp1_b5: "Membangun <strong>Pipeline Otomasi ETL n8n</strong> terjadwal untuk menyinkronkan purchase order pelanggan secara otomatis tanpa entri data manual harian.",

    exp2_company: "PT Astra Daihatsu Motor",
    exp2_role: "Web Development / Export Development System",
    exp2_period: "Feb 2023 – Jan 2025",
    exp2_loc: "Jakarta Utara, Indonesia",
    exp2_b1: "Mengembangkan modul aplikasi web internal untuk pengelolaan dokumentasi ekspor komponen otomotif dan pelacakan logistik.",
    exp2_b2: "Membuat <strong>Macro Excel VBA Lanjutan</strong> untuk mengotomatisasi validasi ribuan baris data manifes ekspor, mengeliminasi kesalahan pengetikan dan mempercepat persetujuan.",
    exp2_b3: "Membangun <strong>Dashboard KPI Interaktif Microsoft Power BI</strong> yang menyajikan transparansi data pencapaian ekspor bagi jajaran manajemen.",
    exp2_b4: "Memelihara database operasional MySQL yang mendukung kelancaran operasional dokumentasi ekspor 24/7.",

    exp3_company: "PT Dhecyber Flow Indonesia",
    exp3_role: "IT Support Specialist — Data Center & NOC",
    exp3_period: "Feb 2021 – Apr 2021",
    exp3_loc: "Jakarta Selatan, Indonesia",
    exp3_b1: "Melakukan pemeliharaan perangkat keras terstruktur, manajemen rak server, dan audit pengkabelan di infrastruktur Data Center Tier-3.",
    exp3_b2: "Memantau telemetri jaringan di <strong>Network Operations Center (NOC)</strong>, mencatat tiket insiden, dan menjalankan SOP eskalasi terstandarisasi.",

    // Engineering Approach
    appr_eyebrow: "05 // METODOLOGI",
    appr_title: "Dari Masalah Operasional ke Solusi Digital.",
    appr_sub: "Kerangka kerja 5 langkah rekayasa terstruktur untuk mengubah realitas shop floor menjadi perangkat lunak yang tangguh.",
    appr_s1_badge: "LANGKAH // 01",
    appr_s1_title: "Pahami Prosesnya",
    appr_s1_desc: "Terjun langsung ke lantai pabrik (<em>Genba</em>). Mengamati operator, mengaudit serah terima manual, dan memetakan aliran aktual material sebelum menentukan ruang lingkup teknis.",
    appr_s1_metric: "Observasi lantai pabrik & pemetaan takt time",
    appr_s2_badge: "LANGKAH // 02",
    appr_s2_title: "Identifikasi Inefisiensi",
    appr_s2_desc: "Menemukan pemborosan operasional (<em>Muda</em>): spreadsheet ganda, entri data berulang, bottleneck pemotongan manual, dan serah terima logistik tanpa validasi.",
    appr_s2_metric: "Analisis akar penyebab (Root-cause analysis)",
    appr_s3_badge: "LANGKAH // 03",
    appr_s3_title: "Rancang Sistemnya",
    appr_s3_desc: "Merancang skema database ternormalisasi, REST API, dan antarmuka ergonomis untuk meminimalkan kesalahan interaksi manusia (<em>Poka-Yoke</em>).",
    appr_s3_metric: "Arsitektur sistem yang berpusat pada manusia",
    appr_s4_badge: "LANGKAH // 04",
    appr_s4_title: "Kembangkan & Validasi",
    appr_s4_desc: "Menulis kode yang bersih dan modular. Menguji komunikasi hardware dalam beban shift nyata, gangguan jaringan tak terduga, dan volume transaksi tinggi.",
    appr_s4_metric: "Validasi deployment tanpa cacat (Zero-defect)",
    appr_s5_badge: "LANGKAH // 05",
    appr_s5_title: "Ukur & Tingkatkan",
    appr_s5_desc: "Mengukur dampak operasional: penghematan waktu hitung, rekor zero line-stop, dan transisi paperless. Mengumpulkan feedback operator secara berkelanjutan (<em>Kaizen</em>).",
    appr_s5_metric: "Akuntabilitas performa terukur",

    // Connect Section
    conn_eyebrow: "06 // JARINGAN PROFESIONAL",
    conn_title: "Terhubung di LinkedIn.",
    conn_sub: "Terbuka untuk diskusi profesional seputar rekayasa sistem, otomasi proses, dan digitalisasi manufaktur.",
    conn_badge: "IDENTITAS TERVERIFIKASI // ID.LINKEDIN.COM",
    conn_role: "Software Engineer • Digitalisasi Industri • Sistem Manufaktur",
    conn_bio: "Menghubungkan prinsip rekayasa perangkat lunak dengan operasional pabrik otomotif, otomasi alur kerja, dan arsitektur data industri.",
    conn_btn: "Lihat Profil LinkedIn",

    // Footer
    foot_tagline: "Software Engineering × Digitalisasi Industri",
    foot_badge: "ARSITEKTUR KELAS PRODUKSI",
    foot_nav_title: "NAVIGASI",
    foot_meth_title: "METODOLOGI",
    foot_net_title: "JARINGAN",
    foot_copy: "Desnabil Gymnastiar (BIEL07.DEV). Hak cipta dilindungi undang-undang.",
    foot_loc: "Cikarang Barat, Jawa Barat, Indonesia · Dibangun dengan HTML5 semantik, CSS3 & Vanilla JS."
  },

  jp: {
    // Navigation
    nav_home: "ホーム",
    nav_about: "概要",
    nav_expertise: "技術領域",
    nav_projects: "実績",
    nav_experience: "経歴",
    nav_approach: "開発思想",
    nav_connect: "コンタクト",
    status_available: "案件・相談受付中",
    nav_cta: "LinkedIn ↗",
    mobile_cta: "LinkedInで繋がる ↗",

    // Hero Section
    hero_eyebrow: "ソフトウェアエンジニア / 産業DX・製造システム",
    hero_headline: "現場で確実に機能する、<br><span class=\"headline-gradient\">産業デジタルシステムを構築。</span>",
    hero_desc: "最先端のWeb技術と現場の製造オペレーション、業務改善（カイゼン）を直結させ、複雑な製造ワークフローを高効率なデジタル基盤へと昇華させます。",
    hero_cta_explore: "開発実績を見る",
    hero_cta_connect: "LinkedInで繋がる ↗",
    hero_meta_label: "中核領域",
    hero_meta_web: "Webアプリケーション開発",
    hero_meta_mfg: "製造管理・PPICシステム",
    hero_meta_auto: "ワークフロー自動化・データ連携",
    hero_scroll: "スクロール",

    // About Section
    about_eyebrow: "01 // プロフィール",
    about_title: "コードの枠を超えるエンジニアリング。",
    about_sub: "現代のソフトウェア開発規律と、リアルな製造現場（モノづくり）の融合。",
    about_lead: "西ジャワ州チカランを拠点とするソフトウェアエンジニア。フルスタックWeb開発と製造現場のデジタル化（産業DX）の架け橋を担っています。",
    about_p1: "単なる机上の理論的な開発にとどまらず、私のエンジニアリングの根底にはTier-1自動車部品製造現場での実務経験があります。UIの見た目を作るだけでなく、部材がどのように工場フロアを流れ、タクトタイムがラインをどう駆動し、作業者が物理端末とどう対話するかを徹底分析して設計します。",
    about_p2: "<strong>PT Namicoh Indonesia Component</strong> および <strong>PT Astra Daihatsu Motor</strong> での実務を通じ、現場のムダ排除（<em>Muda</em>）、ポカヨケ（<em>Poka-Yoke</em>）、在庫・生産計画・出荷間のシームレスなデータ連携を実現してきました。",
    about_h1_title: "ソフトウェア開発 ＆ システム統合:",
    about_h1_desc: "堅牢なWebバックエンド、レスポンシブダッシュボード、現場ハードウェア連携ドライバの構築。",
    about_h2_title: "製造現場・モノづくりの理解:",
    about_h2_desc: "自動車アセンブリ、プレス工程、サプライチェーン納期管理など現場に根ざした深い理解。",
    about_h3_title: "生産計画 ＆ 在庫管理（PPIC）:",
    about_h3_desc: "BOM（部品表）展開、日次需要スケジュール、安全在庫管理を高速自動計算エンジンへ昇華。",
    about_h4_title: "工程自動化 ＆ データ可視化:",
    about_h4_desc: "Power BI、定期ETLパイプライン、VBAを活用し、長時間の反復データ入力を完全自動化。",
    about_h5_title: "継続的カイゼン（Kaizen）の精神:",
    about_h5_desc: "現場のオペレーターの声に基づき、システムの信頼性・処理速度・作業安全性を継続改善。",

    // About Side Panel
    panel_title: "システム中核指針 // 仕様",
    panel_badge: "コアDNA",
    pillar_1_title: "システム思考（System Thinking）",
    pillar_1_desc: "単体のスクリプトではなく、企業全体の製造パイプラインをつなぐ有機的なチェーンとしてコードを設計。",
    pillar_2_title: "プロセス最適化（Process Optimization）",
    pillar_2_desc: "コードを書く前にボトルネックの根本原因を現場で特定し、業務上のムダを根本から排除。",
    pillar_3_title: "データ主導の解決（Data-Driven Solutions）",
    pillar_3_desc: "属人的な勘に頼らず、リアルタイムテレメトリ、構造化DB、自動照合テーブルで意思決定を支援。",
    pillar_4_title: "継続的カイゼン（Continuous Improvement）",
    pillar_4_desc: "現場オペレーターの実フィードバックと稼働メトリクスを基に、保守性の高い改善サイクルを継続。",
    panel_location_label: "拠点",
    panel_location_val: "インドネシア 西ジャワ州 チカラン",
    panel_role_label: "役職",
    panel_role_val: "PPIC ＆ ソフトウェアエンジニア",
    panel_profile_label: "プロフィール",
    panel_profile_val: "LinkedInプロフィール ↗",

    // Technical Expertise
    exp_eyebrow: "02 // 技術スタック",
    exp_title: "技術マトリクス。",
    exp_sub: "最新のWebエンジニアリングと、製造現場のオペレーション・自動化技術を融合させた実績あるスタック。",
    exp_d1_title: "Webアプリケーション開発",
    exp_d1_desc: "高可用性な社内ポータル、RESTful API、高応答性な現場端末UIの設計・実装。",
    exp_d1_status: "自動車部品の量産製造現場で本番稼働実績あり",
    exp_d2_title: "データベース ＆ データ基盤",
    exp_d2_desc: "リレーショナルスキーマ設計、クエリ最適化、高信頼性の業務トランザクションストレージ。",
    exp_d2_status: "高頻度トランザクション処理クエリの最適化",
    exp_d3_title: "業務自動化 ＆ アナリティクス",
    exp_d3_desc: "スケジュール実行ETLパイプライン、Power BI、VBAにより手作業ルーチンを完全排除。",
    exp_d3_status: "実運用レベルのETLパイプラインとリアルタイムダッシュボード",
    exp_d4_title: "インフラ ＆ ネットワーク",
    exp_d4_desc: "Linuxサーバー運用保守、工場ネットワーク基盤、Gitバージョン管理と本番環境デプロイ。",
    exp_d4_status: "Tier-3データセンター運用監視 ＆ 工場内オンプレミスサーバー",
    exp_d5_badge: "製造現場・工場特化ドメイン",
    exp_d5_title: "産業システム ＆ 製造現場のデジタル化（DX）",
    exp_d5_desc: "リーン生産方式（TPS）、生産管理・所要量計算（MRP）、カンバンプルシステム、サーマル印刷連携。",
    exp_d5_status: "現場オペレーター・ラインリーダー・経営層をデータで直結",

    // Featured Projects
    proj_eyebrow: "03 // 開発実績",
    proj_title: "主要プロジェクト。",
    proj_sub: "高い現場導入効果を上げた製造DXシステム、自動化パイプライン、運用コンセプト。",
    label_problem: "現場の課題",
    label_solution: "技術的解決策",
    btn_view_details: "詳細を見る",

    // Project 1
    p1_cat: "製造DXコンセプト / 生產管理システム",
    p1_title: "PPIC ＆ かんばん管理システム",
    p1_problem: "アセンブリ計画と在庫引当が複数のスプレッドシートに分散し、ロットあたり4時間以上を消費。計算ミスや欠品リスクが常に存在していた。",
    p1_solution: "生産計画、在庫状況、BOM所要量計算（MRP）、現場進捗をリアルタイムに一元管理するWeb統合プラットフォーム。",
    p1_badge: "✓ 工場実証済みのアーキテクチャ",

    // Project 2
    p2_cat: "製造モニタリング / アンドン可視化",
    p2_title: "製造アンドン・稼働監視システム",
    p2_problem: "組立ラインのリーダー端末で、タクトタイムの遅れや計画対実績の乖離、突発停止をリアルタイムに把握できず事後対応に留まっていた。",
    p2_solution: "計画対実績、時間別出来高推移、タクト進捗、異常検知アラートを即時表示する現場向けリアルタイム・アンドンUI。",
    p2_badge: "✓ リアルタイムUIコンセプト",

    // Project 3
    p3_cat: "物流・出荷管理 / Webプラットフォーム",
    p3_title: "輸出・工場間部品納入管理システム",
    p3_problem: "工場間の部品移管や輸出書類の照合作業が紙ベースで行われており、誤品出荷のリスクとそれに伴う後工程ライン停止の危険性が高かった。",
    p3_solution: "出荷前2重バーコード照合、輸出マニフェスト自動集計、移動ステータスの即時追跡を行うWeb出荷管理システム。",
    p3_badge: "✓ ライン停止ゼロ（Zero Line-Stop）達成",

    // Project 4
    p4_cat: "データ自動化 ＆ 現場ハードウェア連携",
    p4_title: "Excel自動化 ＆ QR現品票自動カッター連携",
    p4_problem: "毎日5,000枚以上の現品票ラベルをシート状に印刷し、作業者がハサミで手作業カットしていたため、重大なボトルネックと疲労が生じていた。",
    p4_solution: "計画データの自動抽出、QR・バーコード生成、ESC/POS制御によるサーマルプリンターの自動ギロチンカット（0.2秒）連携。",
    p4_badge: "✓ 日次5,000枚以上の自動カット稼働",

    // Professional Experience
    career_eyebrow: "04 // 職務経歴",
    career_title: "職務経歴・実績。",
    career_sub: "製造現場での実務とソフトウェア開発、産業DXを牽引してきた経歴。",

    exp1_company: "PT Namicoh Indonesia Component（ナミコー・インドネシア）",
    exp1_role: "生産管理（PPIC） ＆ ソフトウェア開発 / デジタル化推進",
    exp1_period: "2025年3月 – 現在",
    exp1_loc: "インドネシア 西ジャワ州 南チカラン",
    exp1_b1: "スプレッドシート中心の生産スケジュール運用を刷新し、リアルタイムWebポータルへ移行する<strong>フルスタックPPICデジタル基盤</strong>を設計・構築。",
    exp1_b2: "Pythonベースの<strong>所要量計算（MRP）エンジン</strong>を開発し、計算サイクル時間を従来の4時間から15秒未満へと劇的に短縮。",
    exp1_b3: "ESC/POS制御による<strong>e-かんばん自動発行システム</strong>を構築。日次5,000枚以上の現品票を自動物理カット処理。",
    exp1_b4: "2系統バーコード検証を備えた<strong>工場間物流監視ポータル</strong>を構築し、部品誤送を防止しライン停止ゼロ（Zero Line-Stop）を継続。",
    exp1_b5: "<strong>n8nによるETL自動化パイプライン</strong>を整備し、顧客からの発注データを日次手動入力なしで自動同期。",

    exp2_company: "PT Astra Daihatsu Motor（アストラ・ダイハツ・モーター）",
    exp2_role: "Web開発 / 輸出管理システム（Export Development System）",
    exp2_period: "2023年2月 – 2025年1月",
    exp2_loc: "インドネシア 北ジャカルタ",
    exp2_b1: "自動車輸出部品の帳票管理および物流トレースを行う社内Webアプリケーションモジュールを開発・運用。",
    exp2_b2: "<strong>高度Excel VBAマクロ</strong>を開発し、数千行に及ぶ輸出マニフェストデータの自動整合性チェックを実現。入力ミス排除と承認スピード向上を達成。",
    exp2_b3: "<strong>Microsoft Power BI</strong>を活用したKPIダッシュボードを作成し、部品輸出進捗率を経営層へリアルタイムに可視化。",
    exp2_b4: "24時間365日の安定稼働が求められる輸出帳票システムのMySQLデータベースを運用・最適化。",

    exp3_company: "PT Dhecyber Flow Indonesia",
    exp3_role: "ITサポートスペシャリスト — データセンター ＆ NOC監視",
    exp3_period: "2021年2月 – 2021年4月",
    exp3_loc: "インドネシア 南ジャカルタ",
    exp3_b1: "Tier-3データセンター施設内にて、サーバーラック保守、配線監査、物理ハードウェアの点検作業を実施。",
    exp3_b2: "<strong>ネットワークオペレーションセンター（NOC）</strong>での回線テレメトリ監視、インシデント起票、標準化SOPに基づくエスカレーションを担当。",

    // Engineering Approach
    appr_eyebrow: "05 // 開発思想",
    appr_title: "現場の課題からデジタルソリューションへ。",
    appr_sub: "泥臭い製造現場の現実を、堅牢で信頼できるソフトウェアへと具現化する5段階のエンジニアリング規律。",
    appr_s1_badge: "ステップ // 01",
    appr_s1_title: "現場を観察する（Genba）",
    appr_s1_desc: "現場（Genba）に足を運び、作業者に寄り添い、手作業の手渡しやモノと情報の流れを直に確認して要件を定義。",
    appr_s1_metric: "現場観察とタクトタイムの実測マッピング",
    appr_s2_badge: "ステップ // 02",
    appr_s2_title: "ムダを特定する（Muda）",
    appr_s2_desc: "重複した帳票、反復データ入力、手作業によるハサミ切り、未検証の搬送など、業務上のムダ（Muda）を徹底特定。",
    appr_s2_metric: "根本原因・故障モード解析（RCA）",
    appr_s3_badge: "ステップ // 03",
    appr_s3_title: "システムを設計する",
    appr_s3_desc: "正規化されたDB設計、REST API、そして作業者が誤操作を起こさないポカヨケ（Poka-Yoke）設計のUIを構築。",
    appr_s3_metric: "作業者目線に立った人間工学的システム設計",
    appr_s4_badge: "ステップ // 04",
    appr_s4_title: "開発 ＆ 現場検証",
    appr_s4_desc: "モジュール化されたクリーンなコードを記述。実際のシフト負荷、突発的な通信断、大量トランザクション下でハードウェア検証を実施。",
    appr_s4_metric: "不良ゼロ（Zero-Defect）本番検証",
    appr_s5_badge: "ステップ // 05",
    appr_s5_title: "測定 ＆ カイゼン（Kaizen）",
    appr_s5_desc: "計算時間削減、ライン停止ゼロ、ペーパーレス率などの効果を定量測定。現場からのフィードバックを基に継続的改善（Kaizen）を反復。",
    appr_s5_metric: "数値で証明する成果と責任",

    // Connect Section
    conn_eyebrow: "06 // コンタクト",
    conn_title: "LinkedInで繋がる。",
    conn_sub: "産業DX、生産管理システム、業務自動化、ソフトウェア開発のご相談やネットワーキングをお待ちしています。",
    conn_badge: "本人確認済み // ID.LINKEDIN.COM",
    conn_role: "ソフトウェアエンジニア • 産業DX • 製造管理システム",
    conn_bio: "ソフトウェア工学の規律と、自動車工場の現場オペレーション、業務自動化、製造データ基盤を直結させるエンジニアリングを提供します。",
    conn_btn: "LinkedInプロフィールを見る",

    // Footer
    foot_tagline: "ソフトウェアエンジニアリング × 産業DX・製造管理",
    foot_badge: "本番運用対応アーキテクチャ",
    foot_nav_title: "ナビゲーション",
    foot_meth_title: "開発思想",
    foot_net_title: "ネットワーク",
    foot_copy: "Desnabil Gymnastiar (BIEL07.DEV). All rights reserved.",
    foot_loc: "インドネシア 西ジャワ州 チカラン · セマンティックHTML5、CSS3、Vanilla JSにて構築。"
  },

  zh: {
    // Navigation
    nav_home: "首页",
    nav_about: "个人简介",
    nav_expertise: "技术矩阵",
    nav_projects: "项目案例",
    nav_experience: "工作履历",
    nav_approach: "工程方法",
    nav_connect: "联系合作",
    status_available: "开放合作与交流",
    nav_cta: "领英 LinkedIn ↗",
    mobile_cta: "在 LinkedIn 上联系 ↗",

    // Hero Section
    hero_eyebrow: "软件工程师 / 工业数字化与制造系统",
    hero_headline: "构建真正行之有效的<br><span class=\"headline-gradient\">数字化工业系统。</span>",
    hero_desc: "我专注于构建实用的软件解决方案，将现代技术、制造车间运营与精益持续改善（Kaizen）深度融合 —— 将复杂的车间业务流程转化为高可用、高效率的数字化系统。",
    hero_cta_explore: "浏览项目案例",
    hero_cta_connect: "在 LinkedIn 上联系 ↗",
    hero_meta_label: "核心领域",
    hero_meta_web: "Web 应用程序开发",
    hero_meta_mfg: "制造与生产管理系统",
    hero_meta_auto: "业务自动化与数据集成",
    hero_scroll: "下滑浏览",

    // About Section
    about_eyebrow: "01 // 关于本人",
    about_title: "超越代码本身的工程思维。",
    about_sub: "现代软件工程学科与实际工厂车间一线运营的深度结合。",
    about_lead: "我是一名常驻西爪哇省西芝卡朗（Cikarang Barat）的软件工程师，专注于全栈 Web 应用程序与制造运营数字化（工业 DX）的交叉领域。",
    about_p1: "不同于纯粹纸上谈兵的软件开发，我的工程背景深深扎根于一级汽车零部件制造企业（Tier-1）的车间现场。我不仅设计软件交互界面，更深入分析物料如何在车间内部流转、生产节拍（Takt Time）如何驱动产能节奏，以及一线操作工如何与物理设备进行交互。",
    about_p2: "凭借在 <strong>PT Namicoh Indonesia Component</strong> 和 <strong>PT Astra Daihatsu Motor（大发汽车）</strong>的专业实战经验，我的工作重心在于消除生产浪费（<em>Muda</em>）、杜绝手工计算失误（<em>Poka-Yoke 防错</em>），并在库存、生产计划与物流发运之间建立透明、实时的数据链路。",
    about_h1_title: "软件开发与系统集成：",
    about_h1_desc: "构建高可用 Web 后端、响应式看板界面以及物理硬件通讯驱动。",
    about_h2_title: "制造车间工作流深度理解：",
    about_h2_desc: "深入了解汽车总装车间物流、冲压工序以及供应链准时交付节拍。",
    about_h3_title: "生产计划与物料控制（PPIC）：",
    about_h3_desc: "将 BOM 清单展开、日生产排程与安全库存量转化为高效的自动化计算引擎。",
    about_h4_title: "流程自动化与数据可视化：",
    about_h4_desc: "通过定时数据流水线、Power BI 及 VBA 脚本，彻底告别长达数小时的手工重复录入。",
    about_h5_title: "精益持续改善（Kaizen）理念：",
    about_h5_desc: "秉持持续改进精神，不断优化系统可靠性、响应速度与现场作业人机工效。",

    // About Side Panel
    panel_title: "系统支柱 // 技术规范",
    panel_badge: "核心基因",
    pillar_1_title: "系统性思维（System Thinking）",
    pillar_1_desc: "代码绝非孤立运行的脚本，而是企业整个工业生产流水线中环环相扣的核心链路。",
    pillar_2_title: "流程精益优化（Process Optimization）",
    pillar_2_desc: "在编写任何代码之前，必须先在车间现场排查痛点根因，从源头消除业务浪费。",
    pillar_3_title: "数据驱动决策（Data-Driven Solutions）",
    pillar_3_desc: "摒弃主观推测，依托实时时序数据、结构化数据库与自动校验表实现精准决策。",
    pillar_4_title: "持续改善（Continuous Improvement）",
    pillar_4_desc: "根据现场操作人员的实际反馈与运行指标，持续迭代软件的可靠性与长期可维护性。",
    panel_location_label: "常驻地区",
    panel_location_val: "印度尼西亚 西爪哇省 西芝卡朗",
    panel_role_label: "当前岗位",
    panel_role_val: "生产计划（PPIC）兼软件工程师",
    panel_profile_label: "个人主页",
    panel_profile_val: "领英 LinkedIn 主页 ↗",

    // Technical Expertise
    exp_eyebrow: "02 // 技术矩阵",
    exp_title: "专业技能矩阵。",
    exp_sub: "将现代软件工程与工厂车间生产管控、自动化工具相融合的经过实战检验的技术栈。",
    exp_d1_title: "Web 应用程序开发",
    exp_d1_desc: "开发稳定可靠的内部业务门户、RESTful API 以及车间现场高响应操作终端。",
    exp_d1_status: "已在汽车零部件规模化量产环境中稳定运行",
    exp_d2_title: "数据库与数据源架构",
    exp_d2_desc: "关系型数据库设计、SQL 性能调优以及高并发事务型业务数据存储。",
    exp_d2_status: "高频交易与高负荷查询结构设计优化",
    exp_d3_title: "流程自动化与商业智能",
    exp_d3_desc: "通过定时 ETL 数据处理管道、Power BI 与自动化宏彻底消除手工数据处理环节。",
    exp_d3_status: "工业级自动化数据提取与高管运营看板",
    exp_d4_title: "系统基础设施与网络",
    exp_d4_desc: "Linux 运维管理、计算机网络基础、Git 版本管理以及生产环境持续部署。",
    exp_d4_status: "Tier-3 数据中心网络运维与工厂本地私有服务器支持",
    exp_d5_badge: "工业制造车间深度专精",
    exp_d5_title: "工业管理系统与制造数字化（工业 DX）",
    exp_d5_desc: "精益生产体系（TPS）、生产计划与物料需求计算（MRP）、看板拉动系统、热敏打印协议通信。",
    exp_d5_status: "贯通车间一线操作员、生产班组长与企业高管运营层",

    // Featured Projects
    proj_eyebrow: "03 // 精选成果",
    proj_title: "精选实战项目。",
    proj_sub: "具有高业务价值的工业数字化系统、自动化数据流水线与制造管理方案。",
    label_problem: "业务痛点",
    label_solution: "技术方案",
    btn_view_details: "查看详情",

    // Project 1
    p1_cat: "制造管理方案 / 生产管控系统",
    p1_title: "生产计划（PPIC）与电子看板管理系统",
    p1_problem: "总装排产计划与产线库存分摊依靠多张独立 Excel 计算，每个批次耗时 4 小时以上，存在极高的人为偏差与缺料风险。",
    p1_solution: "构建集中式 Web 运营管理平台，实现物料需求计划（MRP）自动计算、主生产计划跟踪与车间拉动物流透明化。",
    p1_badge: "✓ 车间现场实证运行架构",

    // Project 2
    p2_cat: "生产可视化监控 / 安灯（Andon）系统",
    p2_title: "智能制造安灯（Andon）可视化监控系统",
    p2_problem: "总装车间班长站台无法实时掌握产线节拍、每小时产量偏差以及即时异常停线报警，往往只能滞后复盘。",
    p2_solution: "实时呈现生产计划对实际产出、小时产量达成率曲线、节拍时间（Takt Time）以及自动停线异常报警的高可用安灯大屏。",
    p2_badge: "✓ 实时可视化交互概念方案",

    // Project 3
    p3_cat: "物流发运管控 / Web 业务平台",
    p3_title: "汽车零部件跨厂移库与出口发运系统",
    p3_problem: "厂区间零部件调拨与出口清单核对长期依赖纸质单据人工复核，极易发生错装漏装，面临装配线停产（Line-Stop）的严峻风险。",
    p3_solution: "搭建 Web 发运管控系统，实现双重条码扫描校验、发运单据自动生成与在途物流实时对账。",
    p3_badge: "✓ 保持零停线（Zero Line-Stop）卓越纪录",

    // Project 4
    p4_cat: "数据自动化与智能硬件集成",
    p4_title: "Excel 智能数据处理与二维码标签自动切刀系统",
    p4_problem: "车间每天打印 5,000 多张未分切条码看板，工人需用剪刀逐张手工剪裁，造成严重的劳动疲劳、工时延误与尺寸参差不齐。",
    p4_solution: "实现数据自动提取转换、工业标准 QR 码生成，并通过 ESC/POS 协议直接驱动热敏打印机物理切刀实现 0.2 秒极速自动切张。",
    p4_badge: "✓ 每日稳定自动切刀 5,000+ 次",

    // Professional Experience
    career_eyebrow: "04 // 履历经验",
    career_title: "专业工作履历。",
    career_sub: "在工业数字化、企业软件系统研发与车间一线现场沉淀的真实职业轨迹。",

    exp1_company: "PT Namicoh Indonesia Component",
    exp1_role: "生产计划与物料控制（PPIC）兼软件研发 / 数字化工程师",
    exp1_period: "2025年3月 – 至今",
    exp1_loc: "印度尼西亚 西爪哇省 南芝卡朗",
    exp1_b1: "主导架构并落地集中的<strong>全栈 PPIC 数字化管控平台</strong>，将传统表格排产全面升级为实时 Web 系统。",
    exp1_b2: "研发基于 Python 的<strong>物料需求计划（MRP）计算引擎</strong>，将排产物料计算周期从 4 小时大幅缩减至 15 秒以内。",
    exp1_b3: "开发<strong>电子看板（E-Kanban）智能硬件集成方案</strong>，利用 ESC/POS 热敏打印协议与自动机械切刀，日均处理 5,000 多张票卡。",
    exp1_b4: "搭建<strong>厂区跨工厂物流监控 Web 门户</strong>，引入双向条码复核机制，确保发运零误差并保持产线零停线（Zero Line-Stop）。",
    exp1_b5: "构建定时 <strong>n8n ETL 自动化数据流水线</strong>，实现客户订单自动同步入库，免除繁琐的手工逐笔录入。",

    exp2_company: "PT Astra Daihatsu Motor（阿斯特拉大发汽车）",
    exp2_role: "Web 研发 / 出口业务系统开发（Export Development System）",
    exp2_period: "2023年2月 – 2025年1月",
    exp2_loc: "印度尼西亚 北雅加达",
    exp2_b1: "负责汽车出口零部件单证管理及跨国物流跟踪等内部核心 Web 应用程序模块的开发与维护。",
    exp2_b2: "编写<strong>高级 Excel VBA 宏算法</strong>自动化校验数千行出口报关与发运数据，杜绝输入差错并大幅提升通关审核效率。",
    exp2_b3: "构建 <strong>Microsoft Power BI 交互式 KPI 驾驶舱</strong>，为高管团队提供实时的零部件出口履约率透视。",
    exp2_b4: "维护支持 24/7 全天候高频出口报关操作的 MySQL 业务数据库。",

    exp3_company: "PT Dhecyber Flow Indonesia",
    exp3_role: "IT 技术支持工程师 — Tier-3 数据中心与 NOC 网络运营中心",
    exp3_period: "2021年2月 – 2021年4月",
    exp3_loc: "印度尼西亚 南雅加达",
    exp3_b1: "在 Tier-3 级数据中心负责服务器机架理线、硬件维护检测及机房基础设施合规审计。",
    exp3_b2: "在<strong>网络运营中心（NOC）</strong>负责网络遥测与流量告警监控，按标准 SOP 进行故障排查与工单流转。",

    // Engineering Approach
    appr_eyebrow: "05 // 工程方法论",
    appr_title: "将车间运营痛点转化为高可靠数字化系统。",
    appr_sub: "一套严谨实效的五步工程框架，将复杂的现场制造现实淬炼为健壮的软件系统。",
    appr_s1_badge: "步骤 // 01",
    appr_s1_title: "深入车间现场（Genba）",
    appr_s1_desc: "亲临生产现场（<em>Genba</em>）。跟随现场工人实地作业，实测人工作业交接，彻底梳理物料与信息的真实走向后再定义系统边界。",
    appr_s1_metric: "车间现场实地调研与生产节拍测绘",
    appr_s2_badge: "步骤 // 02",
    appr_s2_title: "全面排查业务浪费（Muda）",
    appr_s2_desc: "深度排查作业浪费（<em>Muda</em>）：多头表格、重复录入、手工裁剪瓶颈以及缺乏校验的物料流转交接。",
    appr_s2_metric: "故障模式与根本原因分析（RCA）",
    appr_s3_badge: "步骤 // 03",
    appr_s3_title: "规范架构系统设计",
    appr_s3_desc: "设计高内聚范式数据库结构、RESTful API，以及针对车间工人设计的符合人体工程学的高容错防呆界面（<em>Poka-Yoke</em>）。",
    appr_s3_metric: "以人为本的工业级系统架构",
    appr_s4_badge: "步骤 // 04",
    appr_s4_title: "严密开发与现场实证",
    appr_s4_desc: "编写整洁、模块化代码。在真实两班制负荷、边缘网络弱网断连及高频交易冲击下严密验证硬件协议通讯。",
    appr_s4_metric: "零缺陷（Zero-Defect）生产级验证",
    appr_s5_badge: "步骤 // 05",
    appr_s5_title: "量化评估与持续改善（Kaizen）",
    appr_s5_desc: "严格量化业务效益：排产耗时削减、零停线运行与全无纸化进度。持续收集车间一线反馈进行精益迭代（<em>Kaizen</em>）。",
    appr_s5_metric: "以数据说话的量化绩效交付",

    // Connect Section
    conn_eyebrow: "06 // 专业人脉网络",
    conn_title: "在 LinkedIn 上建立联系。",
    conn_sub: "欢迎就软件工程、工业数字化改造、生产管理系统与技术咨询展开交流合作。",
    conn_badge: "官方认证身份 // ID.LINKEDIN.COM",
    conn_role: "软件工程师 • 工业数字化 • 生产管理系统",
    conn_bio: "致力于将现代软件工程标准与汽车制造车间作业、自动化控制及工业数据架构紧密连接。",
    conn_btn: "访问 LinkedIn 个人主页",

    // Footer
    foot_tagline: "软件工程 × 工业数字化与制造系统",
    foot_badge: "工业级高可用架构",
    foot_nav_title: "网站导航",
    foot_meth_title: "工程方法",
    foot_net_title: "社交网络",
    foot_copy: "Desnabil Gymnastiar (BIEL07.DEV). 保留所有权利。",
    foot_loc: "印度尼西亚 西爪哇省 西芝卡朗 · 基于语义化 HTML5、CSS3 及原生 JavaScript 构建。"
  }
};

// Modal project details in 3 languages
const PROJECT_MODAL_I18N = {
  p1: {
    en: {
      code: "SYS_DETAIL // 01",
      title: "PPIC & Kanban Management System",
      problem: "In automotive manufacturing environments, production planning, bill of materials (BOM) explosion, and assembly line inventory allocations were traditionally computed across disparate spreadsheets. This manual workflow routinely consumed 4+ hours per shift, creating high risks of calculation drift, mismatched part replenishment, and delayed production pacing.",
      solution: "Architected a centralized web-based operational platform integrating automated MRP calculations, master schedule tracking, and inventory status visibility. The system provides real-time shop-floor operational transparency, pulling live demand requirements directly into assembly staging buffers.",
      features: [
        "Automated Material Requirements Planning (MRP) reducing calculation cycles from hours to under 15 seconds.",
        "Dynamic Kanban pull-system logic synchronizing parts buffer levels across assembly and sub-assembly lines.",
        "Real-time inventory discrepancy detection preventing assembly line shortages.",
        "Paperless digital staging views accessible by line leaders and inventory dispatchers.",
        "Role-based access control protecting master scheduling data integrity."
      ],
      outcome: "Verified floor architecture eliminating manual spreadsheet errors and transitioning the facility toward a 100% paperless scheduling workflow."
    },
    id: {
      code: "SYS_DETAIL // 01",
      title: "Sistem Manajemen PPIC & Kanban",
      problem: "Dalam manufaktur otomotif, perencanaan perakitan, kalkulasi BOM explosion, dan alokasi buffer lini sebelumnya dihitung di berbagai spreadsheet terpisah. Rutinitas manual ini memakan waktu 4+ jam per shift dengan risiko tinggi kesalahan perhitungan part dan keterlambatan pacing produksi.",
      solution: "Merancang platform operasional berbasis web terpusat yang memadukan kalkulasi otomatis MRP, jadwal induk produksi, dan visibilitas inventory real-time. Sistem memberikan transparansi lantai pabrik dengan menarik kebutuhan demand langsung ke staging lini.",
      features: [
        "Kalkulator MRP otomatis yang memangkas siklus hitung dari berjam-jam menjadi di bawah 15 detik.",
        "Logika pull-system Kanban dinamis yang menyinkronkan stok buffer antar lini perakitan.",
        "Deteksi dini disparitas stok guna mencegah kekurangan part di lini perakitan.",
        "Tampilan staging digital tanpa kertas yang mudah diakses oleh line leader dan petugas inventory.",
        "Kontrol akses berbasis peran (RBAC) untuk melindungi integritas data master jadwal."
      ],
      outcome: "Arsitektur teruji di lapangan yang mengeliminasi kesalahan spreadsheet dan membawa fasilitas menuju alur kerja penjadwalan 100% paperless."
    },
    jp: {
      code: "SYS_DETAIL // 01",
      title: "PPIC ＆ かんばん管理システム",
      problem: "自動車部品製造において、生産計画、BOM（部品表）展開、組立ラインの在庫引当は複数のスプレッドシートで手作業計算されていました。この作業には毎シフト4時間以上を要し、計算ミスや欠品、ライン遅延のリスクを常にはらんでいました。",
      solution: "自動MRP計算、大日程・日次計画追跡、在庫推移の可視化を統合したWeb集中管理プラットフォームを構築。工場のリアルタイムな透明性を確保し、需要変動に即応したライン供給を実現しました。",
      features: [
        "所要量計算（MRP）を自動化し、計算時間を数時間から15秒未満へと短縮。",
        "組立ラインとサブライン間の部品バッファを同期する動的カンバンプルシステム。",
        "ライン欠品を未然に防ぐリアルタイム在庫乖離アラート機能。",
        "ラインリーダーや出庫担当者が現場端末から即確認できるペーパーレス出庫画面。",
        "生産計画データの改ざんを防ぐ堅牢なロールベース権限管理。"
      ],
      outcome: "手作業の計算ミスを完全排除し、工場全体の100%ペーパーレス計画管理への移行を達成。"
    },
    zh: {
      code: "SYS_DETAIL // 01",
      title: "生产计划（PPIC）与电子看板管理系统",
      problem: "在汽车零部件制造环境中，总装生产计划、BOM 物料清单展开以及产线线边库库存分摊历来依赖离散的电子表格手工核算。每个班次平均耗时 4 小时以上，存在极高的数据偏差、缺料以及产线节拍脱节风险。",
      solution: "主导架构集中式 Web 运营管控平台，深度整合自动 MRP 运算、主生产排程（MPS）跟踪以及产线库存透明化监控。系统直接拉动实际需求至线边缓存，实现车间现场作业完全透明。",
      features: [
        "物料需求计划（MRP）自动化引擎，将运算周期从数小时压缩至 15 秒以内。",
        "动态看板拉动算法，实时同步总装线与分装线之间的零件缓冲水位。",
        "库存偏差早期预警机制，杜绝总装线发生因缺料导致的被动停工。",
        "无纸化数字线边作业看板，供班组长与出库物料员实时查阅与操作。",
        "基于角色的权限控制体系（RBAC），严格保障主生产计划数据的安全性与真实性。"
      ],
      outcome: "经过工厂车间实战验证的稳健架构，彻底消除人工表格核算漏洞，推动全厂实现 100% 无纸化智能排产。"
    }
  },

  p2: {
    en: {
      code: "SYS_DETAIL // 02",
      title: "Manufacturing Andon Monitoring",
      problem: "Shop floor supervisors and engineering leads lacked instant visibility into assembly line pacing, hourly cycle-time variations, and immediate downtime signals. Discrepancies between planned hourly output and actual assembly run-rates were often reviewed only at shift end, preventing timely countermeasures.",
      solution: "Engineered an industrial Andon visual monitoring interface visualizing planned vs. actual output in real time, takt time adherence, and overall equipment efficiency (OEE). Integrated automated visual anomaly alert thresholds to flag line imbalances instantaneously.",
      features: [
        "Real-time takt time tracking with visual warning triggers whenever cycle times drift beyond target.",
        "Live hourly production output curves contrasting planned shift quota against actual unit completions.",
        "Instant multi-stage downtime escalation alerts designed for high-visibility terminal displays.",
        "Historical shift telemetry recording for root-cause bottleneck analysis during Kaizen reviews."
      ],
      outcome: "Real-time visual control concept designed for immediate countermeasure execution and zero hidden operational downtime."
    },
    id: {
      code: "SYS_DETAIL // 02",
      title: "Monitoring Andon Manufaktur",
      problem: "Supervisor dan leader lini perakitan tidak memiliki visibilitas seketika terhadap pacing takt time, deviasi siklus kerja per jam, dan sinyal downtime lini. Kesenjangan output rencana vs aktual sering kali baru diketahui di akhir shift, sehingga penanganan masalah terlambat dilakukan.",
      solution: "Membangun antarmuka visual Andon industri yang menampilkan perbandingan rencana vs aktual secara langsung, kepatuhan takt time, dan OEE. Mengintegrasikan ambang batas visual otomatis untuk mendeteksi ketidakseimbangan lini seketika.",
      features: [
        "Pelacakan takt time real-time dengan sinyal visual otomatis jika cycle time melebihi batas standar.",
        "Kurva output per jam yang membandingkan target kuota shift dengan unit aktual yang terselesaikan.",
        "Notifikasi eskalasi downtime bertingkat yang dioptimalkan untuk layar display visual pabrik.",
        "Pencatatan telemetri shift historis untuk mempermudah analisis akar masalah saat evaluasi Kaizen."
      ],
      outcome: "Konsep kontrol visual real-time yang memungkinkan tindakan pencegahan cepat dan mengeliminasi downtime tersembunyi."
    },
    jp: {
      code: "SYS_DETAIL // 02",
      title: "製造アンドン・稼働監視システム",
      problem: "現場監督者やエンジニアは、ラインタクトの進捗、時間別の出来高ズレ、突発的な停止シグナルを即座に把握できず、日次の反省会まで対策が後手に回る構造的課題がありました。",
      solution: "計画対実績、タクトタイム遵守状況、稼働率（OEE）をリアルタイムに可視化する産業アンドンUIを開発。異常閾値を自動検知して即座に画面へアラートを発報する仕組みを構築しました。",
      features: [
        "目標サイクルタイムからの乖離を即座に視覚警告するリアルタイムタクト監視。",
        "シフト目標数量と実際の完成実績を時間帯別に対比する出来高カーブ表示。",
        "大型モニターでの視認性に特化した多段階ダウンタイム・エスカレーション通知。",
        "カイゼン検討会でのボトルネック分析に直結するシフト稼働テレメトリの履歴保存。"
      ],
      outcome: "即座の異常処置（カイゼン）を可能にし、潜在的ダウンタイムの撲滅を推進する現場可視化コンセプト。"
    },
    zh: {
      code: "SYS_DETAIL // 02",
      title: "智能制造安灯（Andon）可视化监控系统",
      problem: "总装车间主管与产线工程师无法实时洞察产线节拍波动、小时工时产量偏差及设备突发停机信号。实际生产节拍与计划产出之间的脱节往往只能在交班后被动分析，错失第一响应时机。",
      solution: "研发工业级安灯（Andon）可视化管控终端，实时直观呈现计划产量对实际产出、节拍时间（Takt Time）达标率及综合设备效率（OEE）。集成多级异常视觉告警机制，实时捕捉产线不平衡信号。",
      features: [
        "实时生产节拍跟踪，一旦工位周期时间超时立即触发动态视觉警报。",
        "小时产量动态推移曲线，将班次计划定额与实际完工件数逐小时直观比对。",
        "专为车间高能见度显示大屏设计的多级停线异常快速升级报警。",
        "完整记录班次运行遥测数据，为精益改善（Kaizen）复盘提供客观数据支撑。"
      ],
      outcome: "实时工业级可视化控制方案，赋能一线快速异常响应，彻底消除车间隐性停机工时。"
    }
  },

  p3: {
    en: {
      code: "SYS_DETAIL // 03",
      title: "Export & Delivery Process System",
      problem: "Cross-plant component transfers and export documentation reconciliation relied heavily on paper manifests and manual cross-checking. This created part mismatch risks, dispatch bottlenecks, and the critical danger of automotive assembly line stops due to delayed delivery confirmations.",
      solution: "Developed a web-based operational logistics platform managing dispatch verification, automated dual-barcode scanning, manifest compilation, and real-time shipment reconciliation between manufacturing plants and export docks.",
      features: [
        "Dual-barcode verification protocol ensuring 100% component part-number and lot validation prior to container loading.",
        "Automated export manifest generation eliminating manual data entry across thousands of line items.",
        "Real-time transport status tracking providing origin-to-destination visibility.",
        "Comprehensive audit logging and historical shipment archive for compliance tracking."
      ],
      outcome: "Flawless operational dispatch tracking achieving a verified zero line-stop record across inter-plant supply transfers."
    },
    id: {
      code: "SYS_DETAIL // 03",
      title: "Sistem Proses Ekspor & Pengiriman",
      problem: "Transfer komponen antar-pabrik dan rekonsiliasi manifes ekspor sangat bergantung pada dokumen fisik dan pencocokan manual. Ini memicu risiko kesalahan pengiriman part, hambatan dispatch, dan bahaya fatal terhentinya lini perakitan otomotif (line-stop).",
      solution: "Mengembangkan platform logistik berbasis web untuk memvalidasi verifikasi pengiriman, pemindaian dual-barcode otomatis, kompilasi manifes instan, dan rekonsiliasi pengiriman antar pabrik dan dermaga ekspor secara real-time.",
      features: [
        "Protokol verifikasi dual-barcode yang memastikan 100% kesesuaian part number dan nomor lot sebelum muat kontainer.",
        "Pembuatan manifes ekspor otomatis yang mengeliminasi input manual ribuan baris data.",
        "Pelacakan status transit real-time dari plant asal hingga receiving dock tujuan.",
        "Audit trail lengkap dan arsip riwayat pengiriman untuk kepatuhan regulasi."
      ],
      outcome: "Pelacakan dispatch operasional sempurna yang mencatatkan rekor zero line-stop dalam pengiriman antar-pabrik."
    },
    jp: {
      code: "SYS_DETAIL // 03",
      title: "輸出・工場間部品納入管理システム",
      problem: "工場間の部品移動や輸出ドキュメントの照合が紙のマニフェストと目視確認に依存しており、誤品出荷のリスクと、納入遅延による後工程アセンブリライン停止の脅威に直面していました。",
      solution: "出荷前検証、二次元バーコードによる2重照合スキャン、マニフェスト自動生成、拠点間輸送ステータスの即時追跡を一元管理するWeb物流管理システムを開発。",
      features: [
        "コンテナ積込前に品番とロット番号の一致を100%保証する二重バーコード照合プロトコル。",
        "数千行におよぶ輸出マニフェストの手動入力をゼロにする自動ドキュメント生成。",
        "出荷元から納入先ドックまでの輸送動態をリアルタイムで追跡・可视化。",
        "法規制や品質監査に完全準拠する包括的な監査ログと出荷履歴アーカイブ。"
      ],
      outcome: "工場間納入において部品誤品出荷によるライン停止ゼロ（Zero Line-Stop）の連続記録を達成。"
    },
    zh: {
      code: "SYS_DETAIL // 03",
      title: "汽车零部件跨厂移库与出口发运系统",
      problem: "跨工厂零部件调拨与汽车出口单据对账长期严重依赖纸质货单和人工核对。这不仅造成严重的出库发运拥堵，更潜伏着零件错配导致主机厂总装线停产（Line-Stop）的致命风险。",
      solution: "开发基于 Web 的工业物流操作平台，集成发运出库验证、双重条码扫描防错机制、报关舱单自动生成及跨厂区运输全流程实时对账。",
      features: [
        "双重条码验证协议，确保集装箱装箱前零件号与生产批号 100% 正确匹配。",
        "出口发运舱单自动生成引擎，免除数千项物料行的人工逐笔键入。",
        "在途运输状态实时追踪，实现自发运工厂至目的码头全链路透明监控。",
        "完备的审计操作日志与历史发运档案，完全符合汽车行业严苛质检追溯要求。"
      ],
      outcome: "实现零差错的卓越运营发运追踪，跨厂零部件供应链保持零停线（Zero Line-Stop）纪录。"
    }
  },

  p4: {
    en: {
      code: "SYS_DETAIL // 04",
      title: "Excel Automation & QR Label Generation",
      problem: "Manufacturing operators spent hours printing uncut sheets of barcode tickets, manually measuring and cutting over 5,000+ labels daily with scissors. This manual cutting routine caused severe labor fatigue, production bottlenecks, and frequent label size inconsistencies.",
      solution: "Built an automated data processing and hardware printer workflow that extracts structured work orders, generates standard industrial QR/barcodes, and interfaces directly with ESC/POS thermal printer hardware equipped with automated mechanical cutters.",
      features: [
        "Automated batch ingestion from structured Excel schedules without manual copy-pasting.",
        "High-density 2D QR Code and Code-128 barcode generation compliant with automotive tier standards.",
        "Direct ESC/POS hardware printer protocol communication controlling physical guillotine cuts (0.2s cycle).",
        "Intuitive one-click execution interface designed for shop floor operators."
      ],
      outcome: "Fully eliminated manual scissors trimming for 5,000+ daily tickets, reclaiming over 2 hours of operator time per shift."
    },
    id: {
      code: "SYS_DETAIL // 04",
      title: "Otomasi Excel & Cetak Label QR",
      problem: "Operator pabrik menghabiskan waktu berjam-jam mencetak lembaran tiket barcode utuh dan memotong manual lebih dari 5.000 label setiap hari menggunakan gunting. Rutinitas ini menyebabkan kelelahan operator, bottleneck kerja, dan inkonsistensi ukuran label.",
      solution: "Membangun alur otomasi pemrosesan data dan integrasi hardware printer yang mengekstrak jadwal kerja, membuat QR/Barcode standar industri, dan berkomunikasi langsung dengan printer termal ESC/POS yang dilengkapi pemotong fisik otomatis.",
      features: [
        "Penarikan batch data otomatis dari file jadwal Excel tanpa perlu salin-tempel manual.",
        "Generasi kode QR 2D dan Code-128 berdensitas tinggi sesuai standar industri otomotif.",
        "Komunikasi protokol hardware ESC/POS langsung yang memicu pemotongan mekanis (siklus 0.2 detik).",
        "Antarmuka satu tombol yang sangat mudah dioperasikan oleh operator lantai pabrik."
      ],
      outcome: "Menghapus total rutinitas memotong gunting manual untuk 5.000+ label per hari, menghemat lebih dari 2 jam kerja operator di setiap shift."
    },
    jp: {
      code: "SYS_DETAIL // 04",
      title: "Excel自動化 ＆ QR現品票自動カッター連携",
      problem: "現場のオペレーターは毎日5,000枚以上のかんばん・現品票ラベルをシート状に印刷し、ハサミを使って1枚ずつ手作業で切り分けていました。この作業は作業者の激しい疲労とライン供給のボトルネックを招いていました。",
      solution: "計画データから必要項目を自動抽出し、産業標準のQR・バーコードを生成、オートカッター付きESC/POSサーマルプリンターハードウェアへ直接印字・切断命令を送る統合自動化ワークフローを開発。",
      features: [
        "Excel計画表から手動コピペなしでバッチデータを直接取り込む自動抽出機能。",
        "自動車Tier基準に準拠した高密度2次元QRコードおよびCode-128の自動描画・生成。",
        "物理ギロチンカッター（0.2秒サイクル）を直接トリガーするESC/POS制御プロトコル通信。",
        "現場作業者が迷わずワンクリックで実行できる人間工学に基づいた操作画面。"
      ],
      outcome: "日次5,000枚以上のハサミ手切り作業を100%撲滅し、1シフトあたり2時間以上の作業時間を現場へ還元。"
    },
    zh: {
      code: "SYS_DETAIL // 04",
      title: "Excel 智能数据处理与二维码标签自动切刀系统",
      problem: "一线操作工每日需打印 5,000 多张连页未分切的条码现品票标签，并使用普通剪刀逐张测量手剪。繁复手工剪裁引发严重的肢体疲劳、工时延误，并造成标签尺寸规格参差不齐。",
      solution: "构建自动化数据提取与工业硬件整合流水线，智能解析 Excel 排产计划，批量绘制汽车级二维码及条形码，并基于底层 ESC/POS 通讯协议直接控制工业热敏打印机物理切刀实现极速自动裁切。",
      features: [
        "从排产计划表格中批量自动化抽取标签要素，告别人工复制粘贴。",
        "符合国际汽车行业标准的高密度 2D 二维码及 Code-128 条码图形生成。",
        "基于底层 ESC/POS 硬件协议精准触发 0.2 秒级物理机械切刀联动。",
        "为车间操作工量身定制的人性化一键式自动化作业界面。"
      ],
      outcome: "100% 根除每日 5,000 多张标签的手工剪刀裁剪，每班次为车间净释放 2 小时以上有效工时。"
    }
  }
};
