/* =========================================================
   SUZUKI AROEPALA — script.js
   SEMUA HAL YANG SERING DIGANTI ADA DI FILE INI, DI BAGIAN
   "SITE CONFIG" DAN "PRODUCTS" DI BAWAH.
   Anda TIDAK perlu menyentuh index.html atau style.css
   hanya untuk mengganti teks, nomor WA, link, atau produk.
   ========================================================= */

/* =========================================================
   1. SITE CONFIG — ganti semua data umum di sini
   ========================================================= */
const siteConfig = {
  showroomName: "Suzuki Motor Aroepala",
  city: "Makassar, Sulawesi Selatan",

  // Nomor WhatsApp showroom (format internasional, tanpa +, tanpa spasi)
  whatsappNumber: "6285825033412",

  // Nomor telepon yang ditampilkan (boleh format bebas untuk ditampilkan)
  phone: "0858-2503-3412",

  // Link Google Maps ke lokasi showroom
  googleMapsUrl: "https://maps.app.goo.gl/setXAMxxikZGmeEM8",

  hero: {
    title: "SUZUKI AROEPALA",
    subtitle: "Temukan motor Suzuki impianmu untuk setiap kebutuhan dan gaya hidupmu.",
    // pesan WhatsApp default saat tombol hero "CHAT WHATSAPP" diklik
    whatsappMessage: "Hallo Suzuki Aroepala, saya ingin mendapatkan informasi mengenai motor Suzuki."
  },

  showroom: {
    address: "Jl. Aroeppala No.255, Gn. Sari, Kec. Rappocini, Kota Makassar, Sulawesi Selatan 90233",
    hoursWeekday: "Senin - Jumat : 08.00 - 16.00",
    hoursWeekend: "Sabtu : 08.00 - 14.00",
    // pesan WhatsApp saat tombol "CHAT WHATSAPP SEKARANG" (section kontak) diklik
    whatsappMessage: "Hallo Suzuki Aroepala, saya ingin konsultasi mengenai promo, kredit, dan unit yang tersedia."
  },

  promo: {
    badge: "PROMO SPESIAL",
    title: "Dapatkan Penawaran Terbaik Untuk Motor Suzuki Pilihanmu!",
    subtitle: "Promo menarik setiap bulan. Jangan sampai ketinggalan!",
    // link tombol "CEK PROMO SEKARANG", bisa diarahkan ke WhatsApp, Instagram, atau halaman promo
    linkUrl: "https://instagram.com/suzukiaroepala"
  },

  floatingWhatsapp: {
    message: "Hallo Suzuki Aroepala, saya ingin mendapatkan informasi mengenai motor Suzuki."
  },

  footer: {
    copyText: "© 2026 Suzuki Aroepala. All Rights Reserved."
  },

  socialLinks: {
    instagram: "https://instagram.com/suzukiaroepala",
    facebook: "https://web.facebook.com/profile.php?id=61579768707537",
    tiktok: "https://tiktok.com/@suzukiaroepala"
  }
};

/* =========================================================
   2. PRODUCTS — tambah / ganti / hapus produk cukup di sini
   Ganti "image" dengan nama file baru di folder assets/
   jika ingin mengganti foto produk.
   ========================================================= */
const products = [
  {
    name: "Suzuki Burgman Street 125EX",
    description: "Skutik Premium yang Nyaman & Elegan",
    image: "assets/burgman.png",
    specificationUrl: "https://www.suzuki.co.id/motorcycle/burgman-street-125ex",
    whatsappMessage: "Hallo Suzuki Aroepala, saya tertarik dengan Suzuki Burgman Street 125EX. Bisa info harga, promo, dan simulasi kredit?"
  },
  {
    name: "Suzuki Access 125",
    description: "Skutik Klasik Modern, Irit & Bertenaga",
    image: "assets/access.png",
    specificationUrl: "https://www.suzuki.co.id/motorcycle/access125",
    whatsappMessage: "Hallo Suzuki Aroepala, saya tertarik dengan Suzuki Access 125. Bisa info harga, promo, dan simulasi kredit?"
  },
  {
    name: "NEX Crossover",
    description: "Tangguh di Segala Medan, Siap Berpetualang",
    image: "assets/nex-crossover.png",
    specificationUrl: "https://www.suzuki.co.id/motorcycle/nex-crossover",
    whatsappMessage: "Hallo Suzuki Aroepala, saya tertarik dengan Suzuki NEX Crossover. Bisa info harga, promo, dan simulasi kredit?"
  },
  {
    name: "NEX II",
    description: "Praktis untuk Harian, Nyaman di Perjalanan",
    image: "assets/nex-2.png",
    specificationUrl: "https://www.suzuki.co.id/motorcycle/nex-ii-elegant",
    whatsappMessage: "Hallo Suzuki Aroepala, saya tertarik dengan Suzuki NEX II. Bisa info harga, promo, dan simulasi kredit?"
  },
  {
    name: "Address FI",
    description: "Praktis untuk Aktivitas, Nyaman di Perjalanan",
    image: "assets/address.png",
    specificationUrl: "https://www.suzuki.co.id/motorcycle/address-fi",
    whatsappMessage: "Hallo Suzuki Aroepala, saya tertarik dengan Suzuki Address FI. Bisa info harga, promo, dan simulasi kredit?"
  },
  {
    name: "V-Strom 250 SX",
    description: "Siap Menjelajah, Tangguh di Setiap Perjalanan",
    image: "assets/vstrom.png",
    specificationUrl: "https://www.suzuki.co.id/motorcycle/v-strom-250sx",
    whatsappMessage: "Hallo Suzuki Aroepala, saya tertarik dengan Suzuki V-Strom 250 SX. Bisa info harga, promo, dan simulasi kredit?"
  },
  {
    name: "GSX-R150/GSX-S150",
    description: "Sporty dan Agresif, Siap Melaju Lebih Jauh",
    image: "assets/GSX.png",
    specificationUrl: "https://www.suzuki.co.id/motorcycle/gsx-r150",
    whatsappMessage: "Hallo Suzuki Aroepala, saya tertarik dengan Suzuki GSX-R150 / GSX-S150. Bisa info harga, promo, dan simulasi kredit?"
  },
  {
    name: "Satria Pro/Satria F150",
    description: "Bertenaga, Lincah, Siap Menang",
    image: "assets/satria.png",
    specificationUrl: "https://www.suzuki.co.id/motorcycle/satria",
    whatsappMessage: "Hallo Suzuki Aroepala, saya tertarik dengan Suzuki Satria F150 / Satria Pro. Bisa info harga, promo, dan simulasi kredit?"
  }
];

/* =========================================================
   3. FEATURES — keunggulan dealer
   ========================================================= */
const features = [
  {
    title: "UNIT RESMI SUZUKI",
    text: "100% Unit Asli dengan Garansi Resmi Suzuki",
    icon: "shield"
  },
  {
    title: "PELAYANAN TERBAIK",
    text: "Sales Ramah & Siap Membantu dengan Solusi Terbaik",
    icon: "smile"
  },
  {
    title: "PEMBAYARAN FLEKSIBEL",
    text: "Tersedia Pembelian Cash & Kredit Ringan",
    icon: "card"
  },
  {
    title: "AFTER SALES TERJAMIN",
    text: "Servis & Suku Cadang Resmi Suzuki",
    icon: "tool"
  }
];

/* =========================================================
   BAGIAN DI BAWAH INI ADALAH LOGIKA WEBSITE.
   Tidak perlu diubah kecuali Anda ingin mengubah perilaku.
   ========================================================= */

const featureIcons = {
  shield: '<path d="M12 3l7 3v6c0 4.8-3 8.4-7 9-4-.6-7-4.2-7-9V6l7-3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  smile: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M8.5 14s1.5 2 3.5 2 3.5-2 3.5-2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M9 9.5h.01M15 9.5h.01" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
  card: '<rect x="3" y="6" width="18" height="13" rx="2.5" stroke="currentColor" stroke-width="1.8"/><path d="M3 10.5h18" stroke="currentColor" stroke-width="1.8"/><path d="M7 15h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  tool: '<path d="M14.7 6.3a4 4 0 0 0-5.4 4.8L4 16.4V20h3.6l5.3-5.3a4 4 0 0 0 4.8-5.4l-2.6 2.6-2.1-2.1 2.7-2.5Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>'
};

/** Membuat link WhatsApp dari nomor + pesan */
function buildWhatsappLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

/** Render header lokasi & judul dari config */
function renderStaticText() {
  document.getElementById("headerCity").textContent = siteConfig.city;
  document.getElementById("heroTitle").textContent = siteConfig.hero.title;
  document.getElementById("heroSubtitle").textContent = siteConfig.hero.subtitle;

  document.getElementById("showroomName").textContent = siteConfig.showroomName;
  document.getElementById("showroomAddress").textContent = siteConfig.showroom.address;
  document.getElementById("showroomPhone").textContent = siteConfig.phone;

  document.getElementById("footerCopy").textContent = siteConfig.footer.copyText;
}

/** Pasang semua link (WhatsApp, Maps, Promo, Semua Produk) */
function wireLinks() {
  document.getElementById("btnHeroWhatsapp").href = buildWhatsappLink(siteConfig.hero.whatsappMessage);
  document.getElementById("btnHeroWhatsapp").target = "_blank";
  document.getElementById("btnHeroWhatsapp").rel = "noopener";

  document.getElementById("floatingWhatsapp").href = buildWhatsappLink(siteConfig.floatingWhatsapp.message);
  document.getElementById("floatingWhatsapp").target = "_blank";
  document.getElementById("floatingWhatsapp").rel = "noopener";

  document.getElementById("btnContactWhatsapp").href = buildWhatsappLink(siteConfig.showroom.whatsappMessage);
  document.getElementById("btnContactWhatsapp").target = "_blank";
  document.getElementById("btnContactWhatsapp").rel = "noopener";

  document.getElementById("btnMaps").href = siteConfig.googleMapsUrl;
  document.getElementById("btnMaps").target = "_blank";
  document.getElementById("btnMaps").rel = "noopener";
}

/** Render kartu produk secara otomatis dari array `products` */
function renderProducts() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = products.map((p) => `
    <article class="product-card reveal">
      <div class="product-media">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="product-body">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.description}</p>
        <div class="product-actions">
          <a class="btn btn-outline" href="${p.specificationUrl}" target="_blank" rel="noopener">SPESIFIKASI</a>
          <a class="btn btn-whatsapp" href="${buildWhatsappLink(p.whatsappMessage)}" target="_blank" rel="noopener">CHAT WHATSAPP</a>
        </div>
      </div>
    </article>
  `).join("");
}

/** Render kartu keunggulan dealer dari array `features` */
function renderFeatures() {
  const grid = document.getElementById("featureGrid");
  grid.innerHTML = features.map((f) => `
    <div class="feature-card reveal">
      <div class="feature-icon">
        <svg class="icon" viewBox="0 0 24 24" fill="none">${featureIcons[f.icon] || ""}</svg>
      </div>
      <h3 class="feature-title">${f.title}</h3>
      <p class="feature-text">${f.text}</p>
    </div>
  `).join("");
}

/** Render ikon social media di footer dari `siteConfig.socialLinks` */
function renderSocial() {
  const socialIcons = {
    instagram: '<path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z" stroke="currentColor" stroke-width="1.6"/><rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" stroke-width="1.6"/><path d="M16.6 7.4h.01" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
    facebook: '<path d="M13.5 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.4 1.4-1.4h1.5V5.3c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7v2.1H8.3v2.8h2.4V21h2.8Z" fill="currentColor"/>',
    tiktok: '<path d="M14 4c.4 2 1.8 3.4 3.8 3.6v2.4c-1.4 0-2.7-.4-3.8-1.2v5.7A5 5 0 1 1 9 9.6v2.5a2.5 2.5 0 1 0 2.5 2.5V4H14Z" fill="currentColor"/>'
  };

  const social = document.getElementById("footerSocial");
  social.innerHTML = Object.entries(siteConfig.socialLinks).map(([key, url]) => `
    <a href="${url}" target="_blank" rel="noopener" aria-label="${key}">
      <svg class="icon" viewBox="0 0 24 24" fill="none">${socialIcons[key] || ""}</svg>
    </a>
  `).join("");
}

/** Animasi fade-in saat elemen masuk viewport */
function initScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

  items.forEach((el) => observer.observe(el));
}

/** Inisialisasi seluruh halaman */
function init() {
  renderStaticText();
  renderProducts();
  renderFeatures();
  renderSocial();
  wireLinks();
  initScrollReveal();
}

document.addEventListener("DOMContentLoaded", init);
