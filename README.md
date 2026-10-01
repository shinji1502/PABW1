## Pertemuan 6 — Responsif Mobile-First

Melanjutkan halaman **Daftar Film Saya** dari Pertemuan 5 dan menambahkan `responsif.css`.

### Yang diubah

- Menambahkan responsif.css untuk tampilan mobile, tablet, dan desktop.
- profil.html ditambahkan link responsif.css serta class content dan grid.
- Beberapa aturan layout yang lama dipindahkan ke`responsif.css.
- Menghapus aturan yang tidak diperlukan dari layout.css dan komponen.css.
- Memperbaiki tombol tema supaya bisa berganti dari gelap ke terang.

### Bug tombol tema

Sebelumnya tema gelap masih dipengaruhi oleh pengaturan tema sistem. Akibatnya, saat sistem sedang dark mode, tombol tidak bisa kembali ke mode terang.

Solusinya, aturan tema dari sistem dihapus sehingga tema hanya diatur lewat tombol.

### Penggunaan AI

Saya menggunakan Claude untuk membantu:
- Membuat dan menyesuaikan `responsif.css`.
- Membantu mencari dan memperbaiki bug tema.

Sedangkan pengujian di DevTools pada **360px, 768px, dan 1.280px**, screenshot, pengecekan hasil, dan pengumpulan ke GitHub saya lakukan sendiri. dll