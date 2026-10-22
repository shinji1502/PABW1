<script setup>
import { computed } from 'vue'
import { saring } from '../data.js'
import { state, tambahFavorit } from '../state.js'

const tampil = computed(() => saring(state.daftarProyek, state.kategoriAktif))
</script>

<template>
  <p v-if="state.memuat" class="pesan-kosong">Memuat film...</p>
  <p v-else-if="state.galat" class="pesan-galat-global">{{ state.galat }}</p>
  <p v-else-if="tampil.length === 0" class="pesan-kosong">Belum ada film buat kategori ini.</p>

  <div v-else class="galeri grid" id="galeri-film">
    <article v-for="proyek in tampil" :key="proyek.id" class="kartu">
      <h3 class="kartu__judul">{{ proyek.judul }}</h3>
      <div class="kartu__isi">
        <p>Sutradara: {{ proyek.sutradara }}</p>
        <p>Tahun: {{ proyek.tahun }}</p>
      </div>
      <div class="kartu__kaki">
        <span>Rating saya</span>
        <span class="lencana">{{ proyek.rating }}/10</span>
        <button
          type="button"
          class="favorit"
          @click="tambahFavorit(proyek.id)"
        >
          {{ state.favorit.includes(proyek.id) ? '★' : '☆' }}
        </button>
      </div>
    </article>
  </div>
</template>