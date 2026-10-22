<script setup>
import { ref, computed } from 'vue'

const judul = ref('')
const tahun = ref('')
const rating = ref('')

const judulSah = computed(() => judul.value.trim() !== '')
const tahunSah = computed(() => {
  const angka = Number(tahun.value)
  return angka >= 1888 && angka <= 2026
})
const ratingSah = computed(() => {
  const angka = Number(rating.value)
  return angka >= 1 && angka <= 10
})
const semuaSah = computed(() => judulSah.value && tahunSah.value && ratingSah.value)

function simpanFilm() {
  if (!semuaSah.value) return
  alert(`Film ${judul.value} berhasil disimpan!`)
  judul.value = ''
  tahun.value = ''
  rating.value = ''
}
</script>

<template>
  <section id="bagian-2">
    <h2>Tambah Film</h2>
    <form class="kartu" id="form-film" @submit.prevent="simpanFilm" novalidate>
      <p class="form-kolom">
        <label for="judul-film">Judul film</label>
        <input type="text" id="judul-film" v-model="judul" required>
        <span class="pesan-galat" :hidden="judulSah || judul === ''">Judul film wajib diisi.</span>
      </p>
      <p class="form-kolom">
        <label for="tahun-film">Tahun rilis</label>
        <input type="number" id="tahun-film" min="1888" max="2026" v-model="tahun" required>
        <span class="pesan-galat" :hidden="tahunSah || tahun === ''">Tahun harus antara 1888 dan 2026.</span>
      </p>
      <p class="form-kolom">
        <label for="rating-film">Rating saya (1–10)</label>
        <input type="number" id="rating-film" min="1" max="10" v-model="rating" required>
        <span class="pesan-galat" :hidden="ratingSah || rating === ''">Rating harus antara 1 dan 10.</span>
      </p>
      <button type="submit" :disabled="!semuaSah">Simpan</button>
    </form>
  </section>
</template>