Pertemuan 11 — Modul, State, dan Penyimpanan Klien
Lanjutan “Daftar Film Saya” dari Pertemuan 10, disalin ke folder worksheet-p11/.

Yang baru:

js/data.js — modul data: objek profil, fungsi buatPerkenalan() dan formatKeahlian() (dipindah dari app.js), serta fungsi murni saring() untuk menyaring daftar proyek berdasarkan kategori.
js/state.js — satu objek state tunggal (kategoriAktif, favorit, daftarProyek) beserta fungsi-fungsi pengubahnya (pilihKategori, tambahFavorit, isiProyek, aturUlang). Juga berisi simpan()/muat()/pulihkan() untuk localStorage, lengkap dengan penanda versi skema.
js/events.js — seluruh addEventListener dikumpulkan di sini (klik filter, klik favorit, klik atur ulang, validasi form), dipanggil lewat satu fungsi pasangPendengar().
Tombol favorit (★/☆) di tiap kartu film, dan tombol “Atur ulang” baru di profil.html.

Yang berubah secara tampilan:

app.js sekarang benar-benar cuma perakit: isinya cuma import dari lima modul lain dan satu fungsi mulai(), tanpa logika apa pun.
dom.js dipangkas jadi cuma pemilih elemen, render(state), dan perubahan kelas — nggak ada lagi addEventListener di berkas ini.
Keadaan aplikasi (kategori aktif, daftar favorit) nggak lagi dibaca dari class di tombol HTML, tapi dari satu objek state di state.js.
Pilihan kategori dan daftar favorit sekarang diingat lewat localStorage — ditutup tab dan dibuka lagi, pilihan terakhir tetap ada. Data proyek dari server sengaja nggak ikut disimpan, biar selalu fetch yang terbaru.
Simpanan yang rusak (bukan JSON valid, atau beda nomor versi skema) otomatis dibuang dan diganti nilai bawaan, halaman tetap kebuka normal.

Catatan penggunaan AI:

Dibantu AI:

Dibantu merancang pemecahan lima modul (data.js, state.js, dom.js, events.js, app.js) supaya tiap berkas cuma punya satu tanggung jawab.
Dibantu mengerjakan worksheet panduan cara mengerjakannya .

Aku kerjain sendiri:

Mindahin isi app.js dan dom.js versi lama ke lima berkas baru sesuai pembagian tanggung jawabnya.
menulis fungsi simpan()/muat()/pulihkan() di state.js, termasuk penanganan simpanan rusak pakai try/catch dan pengecekan nomor versi.
Nambahin tombol favorit dan tombol atur ulang di profil.html, nyesuain style-nya di komponen.css.
Nguji state langsung dari Console (window.state sementara) buat mastiin semua keadaan ada di satu objek, nggak nempel di DOM.
Nguji localStorage beneran: ganti kategori, tandai favorit, tutup tab, buka lagi — pastiin pilihannya masih ada.
Ngerusakin localStorage sengaja lewat Console (isi bukan JSON, nomor versi beda) buat mastiin halaman tetap kebuka.
Mengisi seluruh evaluasi mandiri, tabel refleksi, dan pertanyaan tiket keluar di lembar F.
Commit dan push semua perubahan proyek Pertemuan 11 ke GitHub.