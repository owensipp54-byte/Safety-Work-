/* =============================================
   SafeWork Emergency Guide — script.js
   Semua interaktivitas website ada di sini.
   ============================================= */

/* ===========================================
   DATA PANDUAN DARURAT
   Semua isi panduan disimpan di objek ini.
   =========================================== */
const dataPanduan = {
  kebakaran: {
    judul: "🔥 Kebakaran",
    lakukan: [
      "Tetap tenang dan jangan panik.",
      "Aktifkan alarm kebakaran jika tersedia.",
      "Beri tahu orang di sekitar.",
      "Matikan peralatan listrik jika masih aman.",
      "Gunakan jalur evakuasi terdekat.",
      "Jika ada asap, berjalan merunduk dan tutup hidung.",
      "Pergi ke titik kumpul.",
      "Laporkan kondisi kepada petugas K3 atau security."
    ],
    larangan: [
      "Jangan menggunakan lift.",
      "Jangan kembali mengambil barang pribadi.",
      "Jangan membuka pintu yang terasa panas.",
      "Jangan mencoba memadamkan api besar sendiri.",
      "Jangan menghalangi jalur evakuasi."
    ],
    kontak: [
      "Tim K3 perusahaan",
      "Security",
      "Atasan langsung",
      "Pemadam kebakaran",
      "Nomor darurat setempat"
    ]
  },

  gempa: {
    judul: "🌍 Gempa Bumi",
    lakukan: [
      "Lindungi kepala dan leher.",
      "Berlindung di bawah meja yang kuat jika memungkinkan.",
      "Jauhi kaca, lemari tinggi, rak, dan benda berat.",
      "Tunggu sampai guncangan berhenti.",
      "Setelah aman, keluar melalui jalur evakuasi.",
      "Menuju titik kumpul.",
      "Ikuti instruksi petugas evakuasi."
    ],
    larangan: [
      "Jangan berlari saat guncangan masih kuat.",
      "Jangan menggunakan lift.",
      "Jangan berdiri dekat jendela.",
      "Jangan kembali masuk gedung sebelum dinyatakan aman.",
      "Jangan menyebarkan informasi yang belum jelas."
    ],
    kontak: [
      "Koordinator evakuasi",
      "Tim K3",
      "Security",
      "Atasan langsung",
      "Layanan darurat jika ada korban"
    ]
  },

  kecelakaan: {
    judul: "🩹 Kecelakaan Kerja",
    lakukan: [
      "Pastikan area aman sebelum mendekati korban.",
      "Hentikan mesin atau sumber bahaya jika aman dilakukan.",
      "Panggil petugas P3K atau tim K3.",
      "Jangan memindahkan korban jika dicurigai cedera kepala atau tulang belakang.",
      "Berikan pertolongan pertama sesuai kemampuan.",
      "Catat waktu, lokasi, dan jenis kejadian.",
      "Laporkan insiden kepada atasan atau petugas K3."
    ],
    larangan: [
      "Jangan mengerumuni korban.",
      "Jangan memberi makan atau minum kepada korban yang tidak sadar.",
      "Jangan memindahkan korban sembarangan.",
      "Jangan menyentuh darah tanpa pelindung.",
      "Jangan menyembunyikan kejadian kecelakaan."
    ],
    kontak: [
      "Petugas P3K",
      "Tim K3",
      "Atasan langsung",
      "Klinik perusahaan",
      "Ambulans atau rumah sakit terdekat"
    ]
  },

  listrik: {
    judul: "⚡ Tersengat Listrik",
    lakukan: [
      "Jangan langsung menyentuh korban.",
      "Matikan sumber listrik dari saklar utama jika aman.",
      "Gunakan benda isolator kering (kayu atau plastik) untuk menjauhkan korban dari sumber listrik jika benar-benar aman.",
      "Panggil petugas K3 atau petugas medis.",
      "Periksa respons dan pernapasan korban.",
      "Jauhkan orang lain dari area berbahaya.",
      "Pasang tanda peringatan sementara."
    ],
    larangan: [
      "Jangan menyentuh korban saat masih terhubung listrik.",
      "Jangan menggunakan benda logam untuk menolong.",
      "Jangan berdiri di area basah.",
      "Jangan menyalakan kembali listrik sebelum diperiksa teknisi.",
      "Jangan menganggap sengatan kecil selalu aman."
    ],
    kontak: [
      "Teknisi listrik",
      "Tim K3",
      "Petugas P3K",
      "Atasan langsung",
      "Ambulans jika korban tidak sadar atau mengalami luka serius"
    ]
  },

  kimia: {
    judul: "🧪 Tumpahan Bahan Kimia",
    lakukan: [
      "Jauhi area tumpahan.",
      "Jangan menyentuh atau menghirup bahan.",
      "Beri tahu orang sekitar.",
      "Gunakan APD jika sudah terlatih menangani bahan kimia.",
      "Tutup area agar tidak dilewati orang lain.",
      "Periksa label bahan atau SDS.",
      "Hubungi petugas K3 atau tim tanggap darurat.",
      "Jika terkena kulit, bilas dengan air mengalir.",
      "Jika terkena mata, bilas dengan air bersih dan segera cari bantuan medis."
    ],
    larangan: [
      "Jangan mencampur bahan kimia dengan bahan lain.",
      "Jangan membersihkan tumpahan tanpa APD.",
      "Jangan membuang bahan kimia ke saluran air sembarangan.",
      "Jangan menghirup uap bahan kimia.",
      "Jangan makan atau minum di area tumpahan."
    ],
    kontak: [
      "Tim K3",
      "Petugas laboratorium atau gudang bahan kimia",
      "Atasan langsung",
      "Petugas medis",
      "Pemadam kebakaran jika bahan mudah terbakar"
    ]
  }
};

/* ===========================================
   DAFTAR TIPS K3
   Tips acak diambil dari array ini.
   =========================================== */
const daftarTips = [
  "🦺 Periksa APD sebelum mulai bekerja.",
  "🚪 Jangan menghalangi jalur evakuasi.",
  "⚠️ Laporkan kabel terkelupas, lantai licin, atau alat rusak.",
  "🔧 Jangan bercanda saat menggunakan alat kerja.",
  "📍 Ketahui lokasi APAR, kotak P3K, dan titik kumpul.",
  "🧪 Simpan bahan kimia sesuai label.",
  "🪜 Gunakan tangga yang aman, bukan kursi atau meja.",
  "🔌 Matikan alat kerja setelah selesai digunakan."
];

/* ===========================================
   FUNGSI: NAVBAR HAMBURGER (untuk HP)
   Saat tombol hamburger diklik, menu terbuka/tutup.
   =========================================== */
const navToggle = document.getElementById("navToggle");
const navMenu   = document.getElementById("navMenu");

navToggle.addEventListener("click", function () {
  // Toggle class 'open' untuk membuka/menutup menu
  navMenu.classList.toggle("open");
});

// Tutup menu saat link diklik (supaya menu langsung menutup di HP)
document.querySelectorAll(".nav-link").forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("open");
  });
});

/* ===========================================
   FUNGSI: MODE DARURAT
   Tampilkan/sembunyikan panel kontak darurat.
   =========================================== */
const btnModeDarurat = document.getElementById("btnModeDarurat");
const panelDarurat   = document.getElementById("panelDarurat");
const btnTutupPanel  = document.getElementById("btnTutupPanel");

btnModeDarurat.addEventListener("click", function () {
  if (panelDarurat.style.display === "block") {
    // Jika panel sudah terlihat, sembunyikan
    panelDarurat.style.display = "none";
    btnModeDarurat.textContent = "🚨 Mode Darurat";
  } else {
    // Jika panel tersembunyi, tampilkan
    panelDarurat.style.display = "block";
    btnModeDarurat.textContent = "✕ Tutup Panel";
  }
});

// Tombol tutup di dalam panel
btnTutupPanel.addEventListener("click", function () {
  panelDarurat.style.display = "none";
  btnModeDarurat.textContent = "🚨 Mode Darurat";
});

/* ===========================================
   FUNGSI: TAMPILKAN DETAIL PANDUAN
   Saat card diklik, tampilkan isi panduan.
   =========================================== */
const cardsDarurat = document.querySelectorAll(".card-darurat");
const detailPanduan = document.getElementById("detailPanduan");

cardsDarurat.forEach(function (card) {
  card.addEventListener("click", function () {

    // Ambil jenis darurat dari atribut data-type
    const jenis = this.getAttribute("data-type");

    // Hilangkan class 'active' dari semua card terlebih dahulu
    cardsDarurat.forEach(function (c) {
      c.classList.remove("active");
    });

    // Tambahkan class 'active' ke card yang diklik
    this.classList.add("active");

    // Ambil data panduan sesuai jenis
    const panduan = dataPanduan[jenis];

    // Buat HTML untuk kolom "Yang Harus Dilakukan"
    let htmlLakukan = panduan.lakukan.map(function (item) {
      return "<li>" + item + "</li>";
    }).join("");

    // Buat HTML untuk kolom "Yang Tidak Boleh Dilakukan"
    let htmlLarangan = panduan.larangan.map(function (item) {
      return "<li>" + item + "</li>";
    }).join("");

    // Buat HTML untuk kolom "Siapa yang Harus Dihubungi"
    let htmlKontak = panduan.kontak.map(function (item) {
      return "<li>" + item + "</li>";
    }).join("");

    // Gabungkan menjadi HTML lengkap dan masukkan ke dalam detail area
    detailPanduan.innerHTML = `
      <div class="detail-header">
        <h3>${panduan.judul} — Panduan Darurat</h3>
      </div>
      <div class="detail-body">
        <div class="detail-kolom kolom-lakukan">
          <h4>✅ Yang Harus Dilakukan</h4>
          <ul>${htmlLakukan}</ul>
        </div>
        <div class="detail-kolom kolom-larangan">
          <h4>🚫 Yang Tidak Boleh Dilakukan</h4>
          <ul>${htmlLarangan}</ul>
        </div>
        <div class="detail-kolom kolom-kontak">
          <h4>📞 Siapa yang Harus Dihubungi</h4>
          <ul>${htmlKontak}</ul>
        </div>
      </div>
    `;

    // Tampilkan kotak detail panduan
    detailPanduan.style.display = "block";

    // Scroll ke bagian detail panduan (sedikit di atasnya agar terlihat rapi)
    setTimeout(function () {
      detailPanduan.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  });
});

/* ===========================================
   FUNGSI: TIPS K3 ACAK
   Tampilkan tips secara acak setiap kali tombol diklik.
   =========================================== */
const btnTips    = document.getElementById("btnTips");
const tipsDisplay = document.getElementById("tipsDisplay");

// Simpan index tips terakhir agar tidak muncul dua kali berturut-turut
let tipsSebelumnya = -1;

btnTips.addEventListener("click", function () {
  let indexAcak;

  // Pilih index acak yang berbeda dari sebelumnya
  do {
    indexAcak = Math.floor(Math.random() * daftarTips.length);
  } while (indexAcak === tipsSebelumnya);

  tipsSebelumnya = indexAcak;

  // Tampilkan tips ke layar
  tipsDisplay.innerHTML = `<span class="tips-isi">${daftarTips[indexAcak]}</span>`;
});

/* ===========================================
   FUNGSI: CHECKLIST INTERAKTIF
   Hitung progress dan tampilkan pesan selesai.
   =========================================== */
const checkboxes      = document.querySelectorAll(".checklist-cb");
const progressBar     = document.getElementById("progressBar");
const progressText    = document.getElementById("progressText");
const checklistSelesai = document.getElementById("checklistSelesai");

const totalItem = checkboxes.length; // Total = 6

// Fungsi untuk memperbarui progress setiap kali checkbox berubah
function updateProgress() {
  // Hitung berapa checkbox yang sudah dicentang
  let jumlahCentang = 0;
  checkboxes.forEach(function (cb) {
    if (cb.checked) jumlahCentang++;
  });

  // Hitung persentase untuk lebar progress bar
  const persen = (jumlahCentang / totalItem) * 100;

  // Update lebar progress bar
  progressBar.style.width = persen + "%";

  // Ganti warna progress bar: biru → hijau saat semua selesai
  if (jumlahCentang === totalItem) {
    progressBar.style.backgroundColor = "#1e7e34"; // hijau
  } else {
    progressBar.style.backgroundColor = "#1e5799"; // biru
  }

  // Update teks progress
  if (jumlahCentang === totalItem) {
    // Semua sudah dicentang — tampilkan pesan selesai
    progressText.textContent = "Semua poin sudah dicek! 🎉";
    checklistSelesai.style.display = "block";
  } else {
    // Belum selesai — tampilkan hitungan
    progressText.textContent = jumlahCentang + " dari " + totalItem + " poin sudah dicek.";
    checklistSelesai.style.display = "none";
  }
}

// Pasang event listener ke setiap checkbox
checkboxes.forEach(function (cb) {
  cb.addEventListener("change", updateProgress);
});

// Jalankan sekali saat halaman dimuat (untuk kondisi awal)
updateProgress();

/* ===========================================
   CATATAN TAMBAHAN
   Semua fitur sudah terhubung. Untuk mengubah:
   - Nomor kontak: edit di index.html (section kontak) dan dataPanduan.kontak
   - Warna utama: edit variabel CSS di :root dalam style.css
   - Tips baru: tambahkan ke array daftarTips di atas
   - Panduan baru: tambahkan objek baru ke dataPanduan
   =========================================== */
