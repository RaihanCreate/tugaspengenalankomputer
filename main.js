import './style.css'

// ===== Data =====
const navSections = [
  { id: 'pengenalan', label: 'Pengenalan' },
  { id: 'cpu-diagram', label: 'Anatomi CPU' },
  { id: 'siklus-instruksi', label: 'Siklus Instruksi' },
  { id: 'arsitektur', label: 'Arsitektur' },
  { id: 'pipeline', label: 'Pipelining' },
  { id: 'cache', label: 'Cache & Memori' },
]

const cpuParts = {
  cu: {
    name: 'Control Unit (CU)',
    desc: 'Pusat kendali CPU yang mengatur dan mengoordinasikan semua operasi. CU menerjemahkan instruksi menjadi sinyal kontrol yang dikirim ke komponen lain.',
    tags: ['Mengatur operasi', 'Menerjemahkan instruksi', 'Sinyal kontrol'],
  },
  alu: {
    name: 'ALU (Arithmetic Logic Unit)',
    desc: 'Bagian CPU yang melakukan semua perhitungan aritmatika (penjumlahan, pengurangan, perkalian, pembagian) dan operasi logika (AND, OR, NOT, perbandingan).',
    tags: ['Aritmatika', 'Operasi logika', 'Perhitungan'],
  },
  registers: {
    name: 'Registers',
    desc: 'Memori super-cecil dan super-cepat di dalam CPU. Registers menyimpan data dan instruksi yang sedang aktif diproses. Contoh: Program Counter (PC), Instruction Register (IR), Accumulator.',
    tags: ['Super cepat', 'Penyimpanan sementara', 'PC, IR, ACC'],
  },
  cache: {
    name: 'Cache Memory',
    desc: 'Memori kecepatan tinggi yang berada dekat dengan inti CPU. Cache menyimpan data yang sering dipakai agar CPU tidak perlu bolak-balik ke RAM. Terdiri dari L1 (terkecil & tercepat), L2, dan L3.',
    tags: ['L1, L2, L3', 'Super cepat', 'Mengurangi latensi'],
  },
  bus: {
    name: 'System Bus',
    desc: 'Jalur komunikasi yang menghubungkan komponen-komponen CPU dan memori. Terdiri dari Data Bus (mengirim data), Address Bus (mengirim alamat lokasi), dan Control Bus (mengirim sinyal kendali).',
    tags: ['Data Bus', 'Address Bus', 'Control Bus'],
  },
  clock: {
    name: 'Clock Generator',
    desc: 'Menghasilkan sinyal clock yang menentukan kecepatan eksekusi instruksi. Diukur dalam GHz (miliar siklus per detik). Semakin tinggi frekuensi clock, semakin banyak instruksi yang dapat diproses per detik.',
    tags: ['GHz', 'Sinyal sinkronisasi', 'Kecepatan CPU'],
  },
}

// ===== Render =====
function render() {
  const app = document.querySelector('#app')
  app.innerHTML = `
    ${renderNav()}
    ${renderHero()}
    ${renderPengenalan()}
    ${renderCpuDiagram()}
    ${renderSiklusInstruksi()}
    ${renderArsitektur()}
    ${renderPipeline()}
    ${renderCache()}
    ${renderFooter()}
  `
}

function renderNav() {
  return `
    <nav class="nav">
      <div class="nav-inner">
        <div class="nav-logo">
          <span class="dot"></span>
          CPU Architecture
        </div>
        <ul class="nav-links" id="navLinks">
          ${navSections.map(s => `<li><a href="#${s.id}" data-nav="${s.id}">${s.label}</a></li>`).join('')}
        </ul>
        <button class="nav-mobile-toggle" id="navToggle" aria-label="Toggle navigation">☰</button>
      </div>
    </nav>
  `
}

function renderHero() {
  return `
    <section class="hero" id="top">
      <div class="hero-bg">
        <div class="hero-grid-pattern"></div>
      </div>
      <div class="hero-content">
        <div class="hero-badge">
          <span class="dot"></span>
          Pengenalan Arsitektur & Organisasi Komputer
        </div>
        <h1>
          Memahami <span class="gradient">CPU</span><br>
          dari Dalam ke Luar
        </h1>
        <p>
          Jelajahi jantung setiap komputer — bagaimana CPU terdiri dari komponen-komponen
          yang bekerja sama untuk mengeksekusi instruksi, menyimpan data sementara,
          dan mengatur seluruh sistem.
        </p>
        <div class="hero-cta">
          <a href="#cpu-diagram" class="btn btn-primary">
            Lihat Anatomi CPU
            <span>→</span>
          </a>
          <a href="#pengenalan" class="btn btn-ghost">Mulai Belajar</a>
        </div>
        <div class="hero-stats">
          <div class="hero-stat">
            <div class="num">6</div>
            <div class="label">Komponen Utama</div>
          </div>
          <div class="hero-stat">
            <div class="num">5</div>
            <div class="label">Tahap Eksekusi</div>
          </div>
          <div class="hero-stat">
            <div class="num">2</div>
            <div class="label">Arsitektur</div>
          </div>
        </div>
      </div>
      <div class="scroll-hint">
        <span>Scroll untuk menjelajah</span>
        <div class="arrow"></div>
      </div>
    </section>
  `
}

function renderPengenalan() {
  return `
    <section class="section" id="pengenalan">
      <div class="section-header reveal">
        <div class="section-label">01 — Pengenalan</div>
        <h2 class="section-title">Apa itu CPU?</h2>
        <p class="section-subtitle">
          CPU (Central Processing Unit) adalah "otak" komputer yang bertanggung jawab
          untuk mengeksekusi instruksi program dan memproses data.
        </p>
      </div>

      <div class="cards-grid">
        ${renderCard('🧠', 'Otak Komputer', 'CPU memproses semua instruksi dari program — mulai dari perhitungan matematis, pengambilan keputusan logika, hingga mengendalikan perangkat keras lainnya.')}
        ${renderCard('⚡', 'Kecepatan Eksekusi', 'CPU modern dapat mengeksekusi miliaran instruksi per detik, diukur dalam Gigahertz (GHz). Satu GHz berarti satu miliar siklus clock per detik.')}
        ${renderCard('🔧', 'Dua Sisi Konsep', 'Arsitektur Komputer = atribut yang terlihat programmer (instruction set, jumlah bit). Organisasi Komputer = bagaimana fitur itu diimplementasikan secara fisik.')}
        ${renderCard('📦', 'Komponen Terpadu', 'CPU mengintegrasikan Control Unit, ALU, Registers, dan Cache dalam satu chip kecil yang terhubung ke memori melalui system bus.')}
      </div>

      <div class="info-banner reveal">
        <div class="banner-icon">💡</div>
        <div class="banner-content">
          <h4>Arsitektur vs Organisasi — Apa bedanya?</h4>
          <p>
            <strong>Arsitektur</strong> menjawab "apa yang CPU bisa lakukan?" — misalnya instruction set, jumlah register, dan lebar data (32-bit vs 64-bit).
            <strong>Organisasi</strong> menjawab "bagaimana CPU melakukannya?" — misalnya teknologi cache, pipeline, dan frekuensi clock.
            Satu arsitektur bisa punya banyak organisasi berbeda.
          </p>
        </div>
      </div>
    </section>
  `
}

function renderCard(icon, title, text) {
  return `
    <div class="card reveal">
      <div class="card-icon">${icon}</div>
      <h3>${title}</h3>
      <p>${text}</p>
    </div>
  `
}

function renderCpuDiagram() {
  return `
    <section class="cpu-diagram-section" id="cpu-diagram">
      <div class="section-header reveal" style="max-width:800px;margin:0 auto 3rem;text-align:center;">
        <div class="section-label" style="justify-content:center;">02 — Anatomi CPU</div>
        <h2 class="section-title">Struktur Internal CPU</h2>
        <p class="section-subtitle" style="margin:0 auto;">
          Klik pada setiap komponen diagram untuk mempelajari fungsinya lebih detail.
        </p>
      </div>

      <div class="cpu-diagram-wrapper">
        <div class="cpu-svg-container reveal">
          ${renderCpuSvg()}
        </div>

        <div class="cpu-info-panel reveal" id="cpuInfoPanel">
          <div class="info-label">Komponen Terpilih</div>
          <h3 id="infoTitle">Klik sebuah komponen</h3>
          <p id="infoDesc">
            Diagram di samping menampilkan struktur internal CPU. Setiap blok warna
            mewakili komponen penting yang memiliki peran spesifik dalam memproses
            instruksi. Arahkan kursor atau klik untuk menjelajah.
          </p>
          <div class="info-tags" id="infoTags"></div>
          <div class="info-hint">
            <span>👆</span>
            <span>Klik komponen pada diagram untuk info detail</span>
          </div>
        </div>
      </div>
    </section>
  `
}

function renderCpuSvg() {
  return `
    <svg viewBox="0 0 600 520" xmlns="http://www.w3.org/2000/svg" id="cpuSvg">
      <defs>
        <linearGradient id="chipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1a2338;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0f1525;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="cuGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1d66f5;stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:#1551e1;stop-opacity:0.7" />
        </linearGradient>
        <linearGradient id="aluGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:#0891b2;stop-opacity:0.7" />
        </linearGradient>
        <linearGradient id="regGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#10b981;stop-opacity:0.75" />
          <stop offset="100%" style="stop-color:#059669;stop-opacity:0.65" />
        </linearGradient>
        <linearGradient id="cacheGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f59e0b;stop-opacity:0.75" />
          <stop offset="100%" style="stop-color:#d97706;stop-opacity:0.65" />
        </linearGradient>
        <linearGradient id="clockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#a855f7;stop-opacity:0.7" />
          <stop offset="100%" style="stop-color:#9333ea;stop-opacity:0.6" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- Chip outline -->
      <rect x="20" y="20" width="560" height="480" rx="20" fill="url(#chipGrad)" stroke="rgba(99,165,255,0.2)" stroke-width="2"/>
      
      <!-- Chip pins (top) -->
      ${[0,1,2,3,4,5,6,7,8,9,10,11].map(i => `<rect x="${70 + i * 40}" y="10" width="16" height="14" rx="2" fill="#334155" stroke="#475569" stroke-width="1"/>`).join('')}
      <!-- Chip pins (bottom) -->
      ${[0,1,2,3,4,5,6,7,8,9,10,11].map(i => `<rect x="${70 + i * 40}" y="496" width="16" height="14" rx="2" fill="#334155" stroke="#475569" stroke-width="1"/>`).join('')}
      <!-- Chip pins (left) -->
      ${[0,1,2,3,4,5,6,7,8,9,10,11].map(i => `<rect x="6" y="${60 + i * 35}" width="14" height="16" rx="2" fill="#334155" stroke="#475569" stroke-width="1"/>`).join('')}
      <!-- Chip pins (right) -->
      ${[0,1,2,3,4,5,6,7,8,9,10,11].map(i => `<rect x="580" y="${60 + i * 35}" width="14" height="16" rx="2" fill="#334155" stroke="#475569" stroke-width="1"/>`).join('')}

      <!-- CPU label -->
      <text x="300" y="48" text-anchor="middle" fill="#5a6a8a" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600" letter-spacing="2">CPU CHIP</text>

      <!-- Control Unit -->
      <g class="cpu-part" data-part="cu">
        <rect class="part-bg" x="50" y="70" width="220" height="130" rx="12" fill="url(#cuGrad)" stroke="#59a6ff" stroke-width="2" stroke-opacity="0.5"/>
        <text class="part-label" x="160" y="125" text-anchor="middle" fill="#bcdcff" font-size="15">Control Unit</text>
        <text x="160" y="148" text-anchor="middle" fill="#d9ecff" font-size="10" opacity="0.7" font-family="JetBrains Mono, monospace">CU</text>
        <text x="160" y="175" text-anchor="middle" fill="#d9ecff" font-size="9" opacity="0.5" font-family="JetBrains Mono, monospace">Mengatur &amp; Mengoordinasi</text>
      </g>

      <!-- ALU -->
      <g class="cpu-part" data-part="alu">
        <rect class="part-bg" x="50" y="220" width="220" height="130" rx="12" fill="url(#aluGrad)" stroke="#22d3ee" stroke-width="2" stroke-opacity="0.5"/>
        <text class="part-label" x="160" y="275" text-anchor="middle" fill="#cffafe" font-size="15">ALU</text>
        <text x="160" y="298" text-anchor="middle" fill="#cffafe" font-size="10" opacity="0.7" font-family="JetBrains Mono, monospace">Arithmetic Logic Unit</text>
        <text x="160" y="325" text-anchor="middle" fill="#cffafe" font-size="9" opacity="0.5" font-family="JetBrains Mono, monospace">Hitung &amp; Logika</text>
      </g>

      <!-- Clock -->
      <g class="cpu-part" data-part="clock">
        <rect class="part-bg" x="50" y="370" width="220" height="70" rx="12" fill="url(#clockGrad)" stroke="#c084fc" stroke-width="2" stroke-opacity="0.5"/>
        <text class="part-label" x="160" y="400" text-anchor="middle" fill="#f3e8ff" font-size="14">Clock</text>
        <text x="160" y="422" text-anchor="middle" fill="#f3e8ff" font-size="9" opacity="0.6" font-family="JetBrains Mono, monospace">GHz · Sinkronisasi</text>
      </g>

      <!-- Registers -->
      <g class="cpu-part" data-part="registers">
        <rect class="part-bg" x="290" y="70" width="120" height="130" rx="12" fill="url(#regGrad)" stroke="#34d399" stroke-width="2" stroke-opacity="0.5"/>
        <text class="part-label" x="350" y="115" text-anchor="middle" fill="#d1fae5" font-size="13">Registers</text>
        <rect x="305" y="130" width="90" height="14" rx="3" fill="rgba(16,185,129,0.3)" stroke="#34d399" stroke-width="1" stroke-opacity="0.3"/>
        <text x="350" y="141" text-anchor="middle" fill="#a7f3d0" font-size="8" font-family="JetBrains Mono, monospace">PC</text>
        <rect x="305" y="148" width="90" height="14" rx="3" fill="rgba(16,185,129,0.3)" stroke="#34d399" stroke-width="1" stroke-opacity="0.3"/>
        <text x="350" y="159" text-anchor="middle" fill="#a7f3d0" font-size="8" font-family="JetBrains Mono, monospace">IR</text>
        <rect x="305" y="166" width="90" height="14" rx="3" fill="rgba(16,185,129,0.3)" stroke="#34d399" stroke-width="1" stroke-opacity="0.3"/>
        <text x="350" y="177" text-anchor="middle" fill="#a7f3d0" font-size="8" font-family="JetBrains Mono, monospace">ACC</text>
      </g>

      <!-- Cache -->
      <g class="cpu-part" data-part="cache">
        <rect class="part-bg" x="420" y="70" width="130" height="130" rx="12" fill="url(#cacheGrad)" stroke="#fbbf24" stroke-width="2" stroke-opacity="0.5"/>
        <text class="part-label" x="485" y="115" text-anchor="middle" fill="#fef3c7" font-size="14">Cache</text>
        <rect x="435" y="128" width="100" height="16" rx="3" fill="rgba(245,158,11,0.25)" stroke="#fbbf24" stroke-width="1" stroke-opacity="0.3"/>
        <text x="485" y="140" text-anchor="middle" fill="#fde68a" font-size="8" font-family="JetBrains Mono, monospace">L1</text>
        <rect x="435" y="148" width="100" height="16" rx="3" fill="rgba(245,158,11,0.2)" stroke="#fbbf24" stroke-width="1" stroke-opacity="0.3"/>
        <text x="485" y="160" text-anchor="middle" fill="#fde68a" font-size="8" font-family="JetBrains Mono, monospace">L2</text>
        <rect x="435" y="168" width="100" height="16" rx="3" fill="rgba(245,158,11,0.15)" stroke="#fbbf24" stroke-width="1" stroke-opacity="0.3"/>
        <text x="485" y="180" text-anchor="middle" fill="#fde68a" font-size="8" font-family="JetBrains Mono, monospace">L3</text>
      </g>

      <!-- Internal Bus (connecting components) -->
      <g class="cpu-part" data-part="bus">
        <line x1="270" y1="135" x2="290" y2="135" class="cpu-bus" stroke="#59a6ff" stroke-width="3" stroke-opacity="0.6"/>
        <line x1="410" y1="135" x2="420" y2="135" class="cpu-bus" stroke="#59a6ff" stroke-width="3" stroke-opacity="0.6"/>
        <line x1="160" y1="200" x2="160" y2="220" class="cpu-bus" stroke="#59a6ff" stroke-width="3" stroke-opacity="0.6"/>
        <line x1="160" y1="350" x2="160" y2="370" class="cpu-bus" stroke="#59a6ff" stroke-width="3" stroke-opacity="0.6"/>
        <line x1="160" y1="285" x2="290" y2="285" class="cpu-bus" stroke="#59a6ff" stroke-width="3" stroke-opacity="0.4" stroke-dasharray="6 4"/>
        <line x1="350" y1="200" x2="350" y2="285" class="cpu-bus" stroke="#59a6ff" stroke-width="3" stroke-opacity="0.4" stroke-dasharray="6 4"/>
        <line x1="485" y1="200" x2="485" y2="285" class="cpu-bus" stroke="#59a6ff" stroke-width="3" stroke-opacity="0.4" stroke-dasharray="6 4"/>

        <rect class="part-bg" x="290" y="260" width="260" height="50" rx="10" fill="rgba(89,166,255,0.08)" stroke="#59a6ff" stroke-width="1.5" stroke-opacity="0.3"/>
        <text class="part-label" x="420" y="285" text-anchor="middle" fill="#8ec5ff" font-size="11">Internal Bus</text>
        <text x="420" y="300" text-anchor="middle" fill="#8ec5ff" font-size="8" opacity="0.5" font-family="JetBrains Mono, monospace">Data · Address · Control</text>
      </g>

      <!-- System Bus (external connection) -->
      <g>
        <rect x="290" y="370" width="260" height="70" rx="12" fill="rgba(89,166,255,0.05)" stroke="rgba(89,166,255,0.25)" stroke-width="1.5" stroke-dasharray="4 4"/>
        <text x="420" y="400" text-anchor="middle" fill="#5a6a8a" font-size="11" font-weight="600">System Bus →</text>
        <text x="420" y="420" text-anchor="middle" fill="#5a6a8a" font-size="9" opacity="0.6" font-family="JetBrains Mono, monospace">ke RAM / I/O</text>
      </g>
      <line x1="350" y1="310" x2="350" y2="370" class="cpu-bus" stroke="#59a6ff" stroke-width="3" stroke-opacity="0.3" stroke-dasharray="6 4"/>
      <line x1="485" y1="310" x2="485" y2="370" class="cpu-bus" stroke="#59a6ff" stroke-width="3" stroke-opacity="0.3" stroke-dasharray="6 4"/>

      <!-- Data flow arrows -->
      <polygon points="280,135 288,130 288,140" fill="#59a6ff" opacity="0.6"/>
      <polygon points="418,135 412,130 412,140" fill="#22d3ee" opacity="0.6"/>
    </svg>
  `
}

function renderSiklusInstruksi() {
  const stages = [
    { icon: '📥', label: 'Fetch', sub: 'Ambil instruksi' },
    { icon: '🔍', label: 'Decode', sub: 'Terjemahkan' },
    { icon: '📖', label: 'Read Operand', sub: 'Baca data' },
    { icon: '⚡', label: 'Execute', sub: 'Eksekusi' },
    { icon: '✍️', label: 'Write Back', sub: 'Simpan hasil' },
  ]

  return `
    <section class="cycle-section" id="siklus-instruksi">
      <div class="section-header reveal">
        <div class="section-label">03 — Siklus Instruksi</div>
        <h2 class="section-title">Bagaimana CPU Menjalankan Instruksi</h2>
        <p class="section-subtitle">
          Setiap instruksi yang dijalankan CPU melalui 5 tahap berurutan.
          Tekan tombol untuk melihat animasi siklus instruksi secara interaktif.
        </p>
      </div>

      <div class="cycle-visual reveal">
        <div class="cycle-stages" id="cycleStages">
          <div class="cycle-line"><div class="progress" id="cycleProgress"></div></div>
          ${stages.map((s, i) => `
            <div class="cycle-stage" data-stage="${i}">
              <div class="cycle-stage-circle">${s.icon}</div>
              <div class="cycle-stage-label">${s.label}</div>
              <div class="cycle-stage-sub">${s.sub}</div>
            </div>
          `).join('')}
        </div>

        <div class="cycle-controls">
          <button class="btn btn-primary" id="cyclePlayBtn">
            <span id="cyclePlayIcon">▶</span>
            <span id="cyclePlayText">Mulai Animasi</span>
          </button>
          <button class="btn btn-ghost" id="cycleResetBtn">Reset</button>
        </div>

        <div class="cycle-display" id="cycleDisplay" style="margin-top:1.5rem;">
          Tekan <span class="step-name">"Mulai Animasi"</span> untuk memulai simulasi siklus instruksi
        </div>
      </div>

      <div class="cards-grid">
        ${renderCard('📥', 'Fetch (Pengambilan)', 'CPU mengambil instruksi dari memori pada alamat yang ditunjuk oleh Program Counter (PC). Instruksi kemudian disimpan di Instruction Register (IR).')}
        ${renderCard('🔍', 'Decode (Pengodean)', 'Control Unit menerjemahkan instruksi di IR untuk memahami operasi apa yang harus dilakukan dan data apa yang dibutuhkan.')}
        ${renderCard('📖', 'Read Operand', 'CPU membaca data/operand yang dibutuhkan dari register atau memori. Operand adalah nilai yang akan diproses oleh instruksi.')}
        ${renderCard('⚡', 'Execute (Eksekusi)', 'ALU melakukan operasi yang diminta — perhitungan aritmatika atau evaluasi logika — berdasarkan instruksi yang sudah diterjemahkan.')}
        ${renderCard('✍️', 'Write Back (Simpan)', 'Hasil eksekusi disimpan kembali ke register atau memori pada alamat tujuan. Program Counter dinaikkan untuk instruksi berikutnya.')}
      </div>
    </section>
  `
}

function renderArsitektur() {
  return `
    <section class="section" id="arsitektur">
      <div class="section-header reveal">
        <div class="section-label">04 — Arsitektur</div>
        <h2 class="section-title">Von Neumann vs Harvard</h2>
        <p class="section-subtitle">
          Dua arsitektur CPU paling fundamental yang menentukan bagaimana memori
          instruksi dan memori data diorganisir.
        </p>
      </div>

      <div class="compare-grid">
        <div class="compare-card von-neumann reveal">
          <div class="compare-header">
            <span class="compare-badge">Klasik</span>
            <h3>Von Neumann</h3>
          </div>
          <ul>
            <li>Memori tunggal untuk instruksi dan data</li>
            <li>Bus tunggal — tidak bisa fetch instruksi dan data bersamaan</li>
            <li>Sederhana dan fleksibel</li>
            <li>Risiko "Von Neumann bottleneck" — keterbatasan bandwidth bus</li>
            <li>Digunakan pada kebanyakan komputer modern</li>
          </ul>
        </div>

        <div class="compare-card harvard reveal">
          <div class="compare-header">
            <span class="compare-badge">Terpisah</span>
            <h3>Harvard</h3>
          </div>
          <ul>
            <li>Memori terpisah untuk instruksi dan data</li>
            <li>Bus terpisah — bisa fetch instruksi dan data bersamaan</li>
            <li>Lebih cepat untuk eksekusi paralel</li>
            <li>Lebih kompleks secara fisik</li>
            <li>Digunakan pada DSP, mikrokontroler, dan CPU modern (modified Harvard)</li>
          </ul>
        </div>
      </div>

      <div class="info-banner reveal">
        <div class="banner-icon">🔄</div>
        <div class="banner-content">
          <h4>Modified Harvard — Dunia Nyata</h4>
          <p>
            CPU modern seperti Intel dan AMD memakai <strong>Modified Harvard Architecture</strong>:
            cache L1 dipisah menjadi L1 Instruction dan L1 Data (mirip Harvard), tetapi
            memori utama tetap menyatu (mirip Von Neumann). Ini menggabungkan kecepatan
            Harvard dengan kesederhanaan Von Neumann.
          </p>
        </div>
      </div>
    </section>
  `
}

function renderPipeline() {
  const stages = [
    { num: 'Tahap 1', name: 'IF', desc: 'Instruction Fetch' },
    { num: 'Tahap 2', name: 'ID', desc: 'Instruction Decode' },
    { num: 'Tahap 3', name: 'OF', desc: 'Operand Fetch' },
    { num: 'Tahap 4', name: 'IE', desc: 'Instruction Execute' },
    { num: 'Tahap 5', name: 'WB', desc: 'Write Back' },
  ]

  return `
    <section class="section" id="pipeline">
      <div class="section-header reveal">
        <div class="section-label">05 — Pipelining</div>
        <h2 class="section-title">Pipelining: Eksekusi Berlapis</h2>
        <p class="section-subtitle">
          Pipelining adalah teknik organisasi CPU yang memungkinkan beberapa instruksi
          diproses bersamaan pada tahap yang berbeda — seperti jalur perakitan pabrik.
        </p>
      </div>

      <div class="pipeline-visual reveal">
        ${stages.map(s => `
          <div class="pipeline-stage">
            <div class="stage-num">${s.num}</div>
            <div class="stage-name">${s.name}</div>
            <div class="stage-desc">${s.desc}</div>
          </div>
        `).join('')}
      </div>

      <div class="cards-grid" style="margin-top:2rem;">
        ${renderCard('🏭', 'Seperti Pabrik', 'Bayangkan jalur perakitan mobil: saat mobil pertama sedang dicat, mobil kedua sedang dirakit, dan mobil ketiga sedang diinspeksi. Semua tahap berjalan bersamaan.')}
        ${renderCard('🚀', 'Throughput Lebih Tinggi', 'Pipeline tidak mempercepat satu instruksi tunggal, tetapi meningkatkan throughput — jumlah instruksi yang selesai per satuan waktu.')}
        ${renderCard('⚠️', 'Pipeline Hazard', 'Tiga jenis hazard: Data Hazard (dependensi data), Control Hazard (branch/jump), dan Structural Hazard (konflik sumber daya). CPU modern menanganinya dengan prediksi branch dan forwarding.')}
      </div>
    </section>
  `
}

function renderCache() {
  return `
    <section class="section" id="cache">
      <div class="section-header reveal">
        <div class="section-label">06 — Cache & Memori</div>
        <h2 class="section-title">Hierarki Memori</h2>
        <p class="section-subtitle">
          CPU bekerja dengan kecepatan sangat tinggi, jauh lebih cepat dari RAM.
          Cache menjembatani kesenjangan kecepatan ini dengan menyimpan data yang
          paling sering dipakai.
        </p>
      </div>

      <div class="cards-grid">
        ${renderCard('🏃', 'L1 Cache', 'Terkecil (32-64 KB) dan tercepat. Terpisah menjadi L1 Instruction dan L1 Data. Berada langsung di inti CPU, akses dalam ~1-2 siklus clock.')}
        ${renderCard('🚶', 'L2 Cache', 'Lebih besar (256 KB - 1 MB) dan sedikit lebih lambat dari L1. Berada di dalam chip CPU, akses dalam ~5-10 siklus clock.')}
        ${renderCard('🚌', 'L3 Cache', 'Terbesar (4-50 MB) dan paling lambat di antara cache. Dibagi oleh semua inti CPU. Akses dalam ~30-40 siklus clock.')}
        ${renderCard('🏙️', 'RAM (Main Memory)', 'Memori utama, jauh lebih besar (GB) tetapi jauh lebih lambat. Akses membutuhkan ~100-200 siklus clock. Terhubung via system bus.')}
      </div>

      <div class="info-banner reveal">
        <div class="banner-icon">🎯</div>
        <div class="banner-content">
          <h4>Prinsip Lokalitas</h4>
          <p>
            Cache bekerja berdasarkan dua prinsip: <strong>Lokalitas Spasial</strong> —
            jika sebuah data diakses, data di sekitarnya kemungkinan juga akan diakses
            (itulah mengapa cache mengambil blok data, bukan satu byte).
            <strong>Lokalitas Temporal</strong> — jika sebuah data diakses, ia kemungkinan
            akan diakses lagi dalam waktu dekat.
          </p>
        </div>
      </div>
    </section>
  `
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-line"></div>
        <h2 style="font-size:1.4rem;font-weight:700;margin-bottom:0.5rem;">Disusun Oleh</h2>
        <p style="color:var(--text-muted);font-size:0.9rem;margin-bottom:2.5rem;">
          Mata Kuliah: Arsitektur dan Organisasi Komputer
        </p>

        <div class="footer-credits">
          <div class="footer-credit-card reveal">
            <div class="credit-name">Sulthan Saizul Ramadhan</div>
            <div class="credit-nim">NIM: 231011402688</div>
            <div class="credit-role">Mahasiswa</div>
          </div>
          <div class="footer-credit-card reveal">
            <div class="credit-name">Raihan Nur Hidayat</div>
            <div class="credit-nim">NIM: 2310111402418</div>
            <div class="credit-role">Mahasiswa</div>
          </div>
        </div>

        <div class="footer-copy">
          Pengenalan Arsitektur dan Organisasi Komputer — CPU &copy; 2026
        </div>
      </div>
    </footer>
  `
}

// ===== Interactivity =====
function setupNavigation() {
  const toggle = document.getElementById('navToggle')
  const links = document.getElementById('navLinks')
  if (toggle) {
    toggle.addEventListener('click', () => links.classList.toggle('open'))
  }
  document.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', () => links.classList.remove('open'))
  })

  // Nav background on scroll
  const nav = document.querySelector('.nav')
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.padding = '0'
      nav.style.background = 'rgba(10, 15, 30, 0.92)'
    } else {
      nav.style.background = 'rgba(10, 15, 30, 0.75)'
    }
  })
}

function setupCpuDiagram() {
  const parts = document.querySelectorAll('.cpu-part')
  const titleEl = document.getElementById('infoTitle')
  const descEl = document.getElementById('infoDesc')
  const tagsEl = document.getElementById('infoTags')

  parts.forEach(part => {
    part.addEventListener('click', () => {
      const key = part.dataset.part
      const info = cpuParts[key]
      if (!info) return

      parts.forEach(p => p.classList.remove('active'))
      part.classList.add('active')

      titleEl.textContent = info.name
      titleEl.style.color = getPartColor(key)
      descEl.textContent = info.desc
      tagsEl.innerHTML = info.tags.map(t => `<span class="tag">${t}</span>`).join('')
    })

    part.addEventListener('mouseenter', () => {
      const key = part.dataset.part
      const info = cpuParts[key]
      if (!info) return
      if (!part.classList.contains('active')) {
        titleEl.textContent = info.name
        titleEl.style.color = getPartColor(key)
        descEl.textContent = info.desc
        tagsEl.innerHTML = info.tags.map(t => `<span class="tag">${t}</span>`).join('')
      }
    })
  })
}

function getPartColor(key) {
  const colors = {
    cu: '#59a6ff',
    alu: '#22d3ee',
    registers: '#34d399',
    cache: '#fbbf24',
    bus: '#8ec5ff',
    clock: '#c084fc',
  }
  return colors[key] || '#59a6ff'
}

function setupCycleAnimation() {
  const stages = document.querySelectorAll('.cycle-stage')
  const progress = document.getElementById('cycleProgress')
  const display = document.getElementById('cycleDisplay')
  const playBtn = document.getElementById('cyclePlayBtn')
  const playIcon = document.getElementById('cyclePlayIcon')
  const playText = document.getElementById('cyclePlayText')
  const resetBtn = document.getElementById('cycleResetBtn')

  const stageInfo = [
    { name: 'FETCH', desc: 'CPU mengambil instruksi dari memori pada alamat di Program Counter (PC)' },
    { name: 'DECODE', desc: 'Control Unit menerjemahkan instruksi menjadi sinyal kontrol' },
    { name: 'READ OPERAND', desc: 'CPU membaca data/operand dari register atau memori' },
    { name: 'EXECUTE', desc: 'ALU melakukan operasi aritmatika atau logika' },
    { name: 'WRITE BACK', desc: 'Hasil disimpan ke register/memori, PC dinaikkan' },
  ]

  let currentStage = -1
  let isPlaying = false
  let timer = null

  function updateStage(index) {
    stages.forEach((s, i) => {
      s.classList.remove('active', 'completed')
      if (i < index) s.classList.add('completed')
      if (i === index) s.classList.add('active')
    })
    progress.style.width = `${(index / (stages.length - 1)) * 100}%`

    if (index >= 0 && index < stageInfo.length) {
      display.innerHTML = `Tahap <span class="step-name">${stageInfo[index].name}</span> — ${stageInfo[index].desc}`
    }
  }

  function nextStage() {
    currentStage++
    if (currentStage >= stages.length) {
      currentStage = 0
      stages.forEach(s => s.classList.remove('completed', 'active'))
    }
    updateStage(currentStage)
  }

  function play() {
    if (isPlaying) {
      clearInterval(timer)
      isPlaying = false
      playIcon.textContent = '▶'
      playText.textContent = 'Lanjutkan'
      display.innerHTML = `Dijeda di tahap <span class="step-name">${stageInfo[currentStage]?.name || '?'}</span>`
      return
    }
    isPlaying = true
    playIcon.textContent = '⏸'
    playText.textContent = 'Jeda'
    nextStage()
    timer = setInterval(nextStage, 2000)
  }

  function reset() {
    clearInterval(timer)
    isPlaying = false
    currentStage = -1
    playIcon.textContent = '▶'
    playText.textContent = 'Mulai Animasi'
    stages.forEach(s => s.classList.remove('active', 'completed'))
    progress.style.width = '0%'
    display.innerHTML = 'Tekan <span class="step-name">"Mulai Animasi"</span> untuk memulai simulasi siklus instruksi'
  }

  playBtn.addEventListener('click', play)
  resetBtn.addEventListener('click', reset)
}

function setupRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.15 }
  )
  reveals.forEach((el) => observer.observe(el))
}

// ===== Init =====
render()
setupNavigation()
setupCpuDiagram()
setupCycleAnimation()
setupRevealAnimations()
