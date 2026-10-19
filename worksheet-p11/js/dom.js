import { saring } from "./data.js";

const wadah = document.querySelector("#galeri-film");
const kosong = document.querySelector("#kosong");
const muatEl = document.querySelector("#muat");
const galatEl = document.querySelector("#galat");

const kolomJudul = document.querySelector("#judul-film");
const kolomTahun = document.querySelector("#tahun-film");
const kolomRating = document.querySelector("#rating-film");
const semuaKolom = [kolomJudul, kolomTahun, kolomRating];
const tombolKirim = document.querySelector('#form-film button[type="submit"]');

[wadah, kosong, muatEl, galatEl, ...semuaKolom, tombolKirim].forEach((el, i) => {
  if (!el) console.error(`Elemen nomor ${i} nggak ketemu, cek lagi id-nya di profil.html`);
});

function tandaiTombolAktif(kategoriAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.kategori === kategoriAktif);
  });
}

export function buatKartu(proyek, favorit) {
  const artikel = document.createElement("article");
  artikel.className = "kartu";

  const judul = document.createElement("h3");
  judul.className = "kartu__judul";
  judul.textContent = proyek.judul;

  const isi = document.createElement("div");
  isi.className = "kartu__isi";
  const sutradara = document.createElement("p");
  sutradara.textContent = `Sutradara: ${proyek.sutradara}`;
  const tahun = document.createElement("p");
  tahun.textContent = `Tahun: ${proyek.tahun}`;
  isi.append(sutradara, tahun);

  const kaki = document.createElement("div");
  kaki.className = "kartu__kaki";
  const label = document.createElement("span");
  label.textContent = "Rating saya";
  const lencana = document.createElement("span");
  lencana.className = "lencana";
  lencana.textContent = `${proyek.rating}/10`;

  const tombolFavorit = document.createElement("button");
  tombolFavorit.type = "button";
  tombolFavorit.className = "favorit";
  tombolFavorit.dataset.id = proyek.id;
  tombolFavorit.textContent = favorit.includes(proyek.id) ? "★" : "☆";

  kaki.append(label, lencana, tombolFavorit);
  artikel.append(judul, isi, kaki);
  return artikel;
}

export function render(state) {
  tandaiTombolAktif(state.kategoriAktif);
  wadah.textContent = "";
  const tampil = saring(state.daftarProyek, state.kategoriAktif);
  if (tampil.length === 0) {
    kosong.hidden = false;
    return;
  }
  kosong.hidden = true;
  tampil.forEach((item) => wadah.append(buatKartu(item, state.favorit)));
}

export function aturMemuat(sedangMemuat) {
  muatEl.hidden = !sedangMemuat;
}

export function tampilkanGalat(pesan) {
  if (pesan) {
    galatEl.textContent = pesan;
    galatEl.hidden = false;
  } else {
    galatEl.hidden = true;
  }
}

export function cekKolom(input) {
  const pesan = input.closest(".form-kolom").querySelector(".pesan-galat");
  let sah = true;

  if (input.value.trim() === "") {
    sah = false;
  } else if (input.type === "number") {
    const angka = Number(input.value);
    if (angka < Number(input.min) || angka > Number(input.max)) sah = false;
  }

  input.setAttribute("aria-invalid", String(!sah));
  pesan.hidden = sah;
  return sah;
}

export function cekSemuaKolom() {
  const hasil = semuaKolom.map(cekKolom);
  const semuaSah = hasil.every(Boolean);
  tombolKirim.disabled = !semuaSah;
  return semuaSah;
}

tombolKirim.disabled = true;
