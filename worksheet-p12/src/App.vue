<script setup>
import { onMounted, watch } from 'vue'
import { profil } from './data.js'
import { state, simpan, muat, pulihkan, isiProyek } from './state.js'
import { ambilProyek } from './api.js'

import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

onMounted(async () => {
  pulihkan(muat())
  state.memuat = true
  try {
    isiProyek(await ambilProyek())
  } catch (galat) {
    state.galat = 'Data gagal dimuat. Periksa koneksi, lalu muat ulang.'
    console.error(galat)
  } finally {
    state.memuat = false
  }
})

watch(state, (nilai) => simpan(nilai), { deep: true })
</script>

<template>
  <div class="page">
    <!-- Komponen 1: Kepala Profil (Menerima props profil) -->
    <KepalaProfil :profil="profil" />

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

          <!-- Komponen 2: Tombol Filter Kategori & Atur Ulang -->
          <TombolFilter />

          <!-- Komponen 3: Daftar Kartu Film & Rating -->
          <DaftarProyek />
        </section>

        <!-- Komponen 4: Form Tambah Film -->
        <FormKontak />
      </main>
    </div>

    <footer>
      <p>Nama= Hideaki Hayyi Shinji</p>
      <p>NIM= 25523219</p>
      <p>Tahun= 2026</p>
    </footer>
  </div>
</template>