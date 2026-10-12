Pertemuan 9 — Data nongol di halaman (DOM + Event)
Lanjutan "Daftar Film Saya" dari Pertemuan 8, disalin ke folder worksheet-p9/.

Yang baru:
- js/dom.js — render kartu film dari daftarFilm (bukan HTML tulis tangan lagi), filter kategori dengan 1 pendengar di #filter, dan validasi form tanpa reload halaman.
- app.js — ditambah field kategori per film, dan export { daftarFilm } biar bisa dipakai dom.js.
- profil.html — galeri film sekarang kosong dari sananya (diisi JS), ditambah baris tombol filter + pesan "kosong", form dapat id dan novalidate.
- komponen.css — gaya baris filter baru, pesan galat sekarang dikontrol atribut hidden dari JS (bukan CSS :has() lagi).

Yang berubah secara tampilan:
Kartu "Marvel" yang dulu lebih besar (class sorotan, span 2 kolom) sekarang jadi kartu biasa, soalnya semua kartu digambar dari fungsi yang sama (buatKartu()). Nggak ada lagi kartu "unggulan".

Dibantu AI:
- Nyesuain struktur app.js, profil.html, sama komponen.css biar nge-link dan nyambung mulus ke js/dom.js.
- Ngerapihin logika dasar buat render data array film ke halaman web.
- Nyusun kerangka validasi form biar fungsi error-nya jalan pas disubmit.

Aku kerjain sendiri:
- Nyalain Live Server di browser buat mastiin semua pemilih/selector clean dari error null.
- Nulis skrip utama di js/dom.js (mulai dari fungsi render, filter pakai event delegation, sampai validasi form interaktif).
- Nge-tes langsung fitur filter, render kartu, sama validasi form di browser (ngisi lembar B.3, C.2, dan D.3).
- Eksperimen nyoba 3 kasus error di Lembar E, benerin kodenya, terus ambil 3 screenshot bukti error.
- Commit dan push semua kodenya ke repository GitHub sampai aman.