# Pertemuan 12 — Build Tooling, npm, dan Framework SPA
Lanjutan Daftar Film Saya dari Pertemuan 11, dipindahkan ke worksheet-p12 dan dibuat ulang pakai Vue dan Vite.

Nama: Hideaki Hayyi Shinji
NIM: 25523219
Kelas: SIF302

Versi Perkakas:
- node -v: v20.18.0 (LTS)
- npm -v: 10.8.2
- Port Dev: http://localhost:5173/
- Port Preview: http://localhost:4173/

Yang baru:
- Proyek baru dibuat di folder worksheet-p12 pakai npm create vite.
- Empat komponen di src/components/: KepalaProfil.vue, TombolFilter.vue, DaftarProyek.vue, dan FormKontak.vue.
- state.js sekarang pakai reactive Vue tanpa render manual.
- App.vue pakai onMounted buat ambil data dan watch buat simpan ke localStorage otomatis.
- Hasil build siap kirim ada di folder dist/ lewat npm run build dan dicek lewat npm run preview.

Ukuran sebelum dan sesudah build:
- Sebelum build (npm run dev): sekitar 215 kB, 22 berkas terpisah.
- Sesudah build (npm run preview): sekitar 64 kB (24 kB gzip), 5 berkas saja.

Catatan penggunaan AI:

Dibantu AI:
- Dibantu memecah halaman lama jadi 4 komponen Vue.
- Dibantu mengubah state.js lama jadi reactive dan menyambungkan ke localStorage.
- Dibantu menjawab beberapa soal di lembar kerja worksheet.

Aku kerjain sendiri:
- Cek versi node dan npm di terminal.
- Bikin folder baru, install paket, dan pindahin 6 CSS asli ke folder src/.
- Pindahin film-1.jpg dan proyek.json ke folder public/.
- Nguji filter, bintang favorit, dan localStorage di browser.
- Jalanin npm run build dan npm run preview.
- Ngisi seluruh lembar kerja worksheet dan push ke GitHub.