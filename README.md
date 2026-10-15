Pertemuan 10 — JavaScript Asinkron: fetch, Promise, dan JSON
Lanjutan "Daftar Film Saya" dari Pertemuan 9, disalin ke folder worksheet-p10/.

Yang baru:
- data/proyek.json — berkas JSON lokal berisi data daftar film/proyek lengkap dengan ID, judul, tahun, dan kategori.
- js/api.js — lapisan data baru yang bertugas memanggil data via fetch(), memeriksa respons.ok, serta mengekspor fungsi ambilProyek().
- js/app.js — sekarang bertugas sebagai perakit; memanggil ambilProyek() dari api.js pakai async/await dan try/catch, lalu ngirim datanya ke render() di dom.js.
- profil.html — ditambah elemen pesan penanda keadaan "<p id="muat" hidden>Memuat data...</p>" untuk indikator loading.

Yang berubah secara tampilan:
- Data film nggak di-load dari array lokal di app.js lagi, melainkan ditarik secara asinkron langsung dari tautan raw GitHub (raw.githubusercontent.com) saat halaman dibuka.
- Antarmuka memiliki 4 keadaan visual: Memuat (loading), Berhasil (kartu film tampil), Gagal (pesan error jika jaringan mati/404), dan Kosong (pesan jika data array kosong).

Catatan penggunaan AI:

Dibantu AI:
- dibantu menambahkan script bagian api.js dan app.js.
- Membantu pemetaan format JSON dan penanganan error 404/galat jaringan.

Aku kerjain sendiri:
- Bikin file data/proyek.json dan mindahin data array film ke bentuk JSON yang valid.
- Nambahin elemen pesan muat/loading (#muat) di profil.html dan ngatur atribut hidden-nya.
- Menguji 4 keadaan antarmuka (berhasil, gagal, memuat, kosong) di DevTools panel Network.
- Mengambil URL Raw GitHub (raw.githubusercontent.com) dari repository PABW1 dan menetapkannya di ALAMAT pada js/api.js.
- Mengisi seluruh evaluasi mandiri, tabel refleksi, dan pertanyaan tiket keluar di lembar F.
- Commit dan push semua perubahan proyek Pertemuan 10 ke GitHub.