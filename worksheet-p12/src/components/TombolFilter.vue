<script setup>
import { state, pilihKategori, aturUlang } from '../state.js'

const daftarKategori = [
  { nilai: 'semua', label: 'Semua' },
  { nilai: 'Aksi', label: 'Aksi' },
  { nilai: 'Horror', label: 'Horror' },
  { nilai: 'Animasi', label: 'Animasi' },
]
</script>

<template>
  <div class="baris-filter" id="filter">
    <button
      v-for="kat in daftarKategori"
      :key="kat.nilai"
      type="button"
      :class="{ aktif: state.kategoriAktif === kat.nilai }"
      @click="pilihKategori(kat.nilai)"
    >
      {{ kat.label }}
    </button>
  </div>

  <button type="button" id="atur-ulang" @click="aturUlang">
    Atur ulang
  </button>
</template>