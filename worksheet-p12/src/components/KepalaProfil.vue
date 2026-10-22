<script setup>
const props = defineProps({
  profil: { type: Object, required: true },
})
</script>

<template>
  <header>
    <input type="checkbox" id="tema" class="pengalih-tema">
    <div class="navbar">
      <div>
        <h1>Daftar Film Saya</h1>
        <p>{{ props.profil.nama }} — {{ props.profil.peran }}</p>
      </div>
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
</template>