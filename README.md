# Pertemuan 8 — Data jadi JavaScript

Lanjutan **"Daftar Film Saya"** dari Pertemuan 6, disalin ke folder `worksheet-p8/`, ditambah folder `js/` berisi `app.js`.

## Yang Ditambah
* **`js/app.js`**: Berisi data profil (`nama`, `peran`, `keahlian`), `daftarFilm` (*array of object*), 2 fungsi murni (`buatPerkenalan`, `formatKeahlian`), serta penggunaan *array methods* (`map`, `filter`, `find`) yang diperiksa melalui `console.table()`.
* **`profil.html`**: Menambahkan baris `<script type="module" src="js/app.js"></script>` tepat sebelum tag penutup `</body>`. CSS dan struktur HTML tidak diubah.
* *Catatan*: Data belum ditampilkan ke antarmuka halaman HTML (akan dipelajari pada Pertemuan 9 menggunakan DOM). Minggu ini seluruh pengujian data dicek melalui **Console DevTools**.


## Catatan Penggunaan AI

### Dibantu AI:
* Memperbaiki galat `404 Not Found` pada jalur skrip (*script path*).
* Menyusun penggunaan `console.table()` 
* dibantu benerin error di script app.js

### Dikerjakan Sendiri:
* Membuka halaman menggunakan `python -m http.server 8000` dan memastikan Console bersih dari pesan merah.
* Menguji 3 kasus galat di Lembar E secara langsung di peramban dan mengambil 3 *screenshot* sebagai bukti.
* Menjalankan *breakpoint debugging* di panel DevTools Sources.
* Mengisi Lembar E.5 untuk Kasus 2 & 3 berdasarkan hasil pengujian mandiri.
* Menyimpan (*commit*) dan mengunggah (*push*) seluruh pekerjaan ke GitHub.