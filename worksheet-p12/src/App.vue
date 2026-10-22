<template>
  <div class="page">
    <header>
      <input type="checkbox" id="tema" class="pengalih-tema">
      <div class="navbar">
        <h1>Daftar Film Saya</h1>
        <nav aria-label="Navigasi utama">
          <ul>
            <li><a href="#bagian-1">Daftar Film</a></li>
            <li><a href="#bagian-2">Tambah Film</a></li>
            <li><a href="#film-favorit">Film Favorit</a></li>
          </ul>
        </nav>
        <label for="tema" class="tombol-tema">Tema gelap</label>
      </div>
    </header>

    <div class="isi content">
      <aside class="sisi kartu">
        <h2>Menu</h2>
        <ul class="menu-samping">
          <li><a href="#bagian-1">Tabel film</a></li>
          <li><a href="#galeri-film">Kartu film</a></li>
          <li><a href="#bagian-2">Form tambah film</a></li>
        </ul>
      </aside>

      <main class="utama">
        <section id="bagian-1">
          <h2>Daftar Film</h2>
          <div class="tabel-gulir" tabindex="0" role="region" aria-label="Tabel daftar film">
            <table>
              <caption>Film yang pernah saya tonton beserta rating saya</caption>
              <thead>
                <tr>
                  <th scope="col">Judul</th>
                  <th scope="col">Tahun</th>
                  <th scope="col">Sutradara</th>
                  <th scope="col">Rating saya (1–10)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Marvel</th>
                  <td>2014</td>
                  <td>Christopher Nolan</td>
                  <td>9</td>
                </tr>
                <tr>
                  <th scope="row">Spider-Man</th>
                  <td>2001</td>
                  <td>Sam Raimi</td>
                  <td>9</td>
                </tr>
                <tr>
                  <th scope="row">Pengapdi-setan</th>
                  <td>2019</td>
                  <td>Bong Joon-ho</td>
                  <td>8</td>
                </tr>
                <tr>
                  <th scope="row">Khodam</th>
                  <td>2016</td>
                  <td>Siti</td>
                  <td>8</td>
                </tr>
              </tbody>
            </table>
          </div>

          <figure id="film-favorit">
            <img src="/film-1.jpg" alt="Ilustrasi pita film" width="640" height="360" loading="lazy">
            <figcaption>Ilustrasi film favorit saya.</figcaption>
          </figure>

          <div class="baris-filter" id="filter">
            <button type="button" data-kategori="semua" class="aktif">Semua</button>
            <button type="button" data-kategori="Aksi">Aksi</button>
            <button type="button" data-kategori="Horror">Horror</button>
            <button type="button" data-kategori="Animasi">Animasi</button>
          </div>

          <button type="button" id="atur-ulang">Atur ulang</button>
          <div class="galeri grid" id="galeri-film"></div>
        </section>

        <section id="bagian-2">
          <h2>Tambah Film</h2>
          <form class="kartu" id="form-film" action="/simpan" method="post" novalidate>
            <p class="form-kolom">
              <label for="judul-film">Judul film</label>
              <input type="text" id="judul-film" name="judul-film" required>
            </p>
            <p class="form-kolom">
              <label for="tahun-film">Tahun rilis</label>
              <input type="number" id="tahun-film" name="tahun-film" min="1888" max="2026" required>
            </p>
            <p class="form-kolom">
              <label for="rating-film">Rating saya (1–10)</label>
              <input type="number" id="rating-film" name="rating-film" min="1" max="10" required>
            </p>
            <button type="submit">Simpan</button>
          </form>
        </section>
      </main>
    </div>

    <footer>
      <p>Nama= Hideaki Hayyi Shinji</p>
      <p>NIM= 25523219</p>
      <p>Tahun= 2026</p>
    </footer>
  </div>
</template>