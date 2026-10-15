const wadah = document.querySelector("#galeri-film");
const barisFilter = document.querySelector("#filter");
const kosong = document.querySelector("#kosong");
const muat = document.querySelector("#muat");   
const galat = document.querySelector("#galat"); 
const form = document.querySelector("#form-film");

[wadah, barisFilter, kosong, muat, galat, form].forEach((el, i) => {
  if (!el) console.error(`Elemen nomor ${i} nggak ketemu, cek lagi id-nya di profil.html`);
});

let semuaProyek = [];

function buatKartu(film) {
  const artikel = document.createElement("article");
  artikel.className = "kartu";

  const judul = document.createElement("h3");
  judul.className = "kartu__judul";
  judul.textContent = film.judul;

  const isi = document.createElement("div");
  isi.className = "kartu__isi";
  const sutradara = document.createElement("p");
  sutradara.textContent = `Sutradara: ${film.sutradara}`;
  const tahun = document.createElement("p");
  tahun.textContent = `Tahun: ${film.tahun}`;
  isi.append(sutradara, tahun);

  const kaki = document.createElement("div");
  kaki.className = "kartu__kaki";
  const label = document.createElement("span");
  label.textContent = "Rating saya";
  const lencana = document.createElement("span");
  lencana.className = "lencana";
  lencana.textContent = `${film.rating}/10`;
  kaki.append(label, lencana);

  artikel.append(judul, isi, kaki);
  return artikel;
}

export function render(daftar) {
  wadah.textContent = "";              
  if (daftar.length === 0) {           
    kosong.hidden = false;
    return;
  }
  kosong.hidden = true;

  daftar.forEach((film) => wadah.append(buatKartu(film))); 
}

export function aturMemuat(sedangMemuat) {
  muat.hidden = !sedangMemuat;
}

export function tampilkanGalat(pesan) {
  if (pesan) {
    galat.textContent = pesan;
    galat.hidden = false;
  } else {
    galat.hidden = true; 
  }
}

export function aturSumberFilter(daftar) {
  semuaProyek = daftar;
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return; 

  const kategori = tombol.dataset.kategori;
  const terpilih =
    kategori === "semua"
      ? semuaProyek
      : semuaProyek.filter((film) => film.kategori === kategori);

  tandaiTombolAktif(tombol);
  render(terpilih);
});


const kolomJudul = document.querySelector("#judul-film");
const kolomTahun = document.querySelector("#tahun-film");
const kolomRating = document.querySelector("#rating-film");
const semuaKolom = [kolomJudul, kolomTahun, kolomRating];
const tombolKirim = form.querySelector('button[type="submit"]');

function cekKolom(input) {
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

function cekSemuaKolom() {
  const hasil = semuaKolom.map(cekKolom);
  const semuaSah = hasil.every(Boolean);
  tombolKirim.disabled = !semuaSah;
  return semuaSah;
}

semuaKolom.forEach((input) => input.addEventListener("input", cekSemuaKolom));

form.addEventListener("submit", (event) => {
  event.preventDefault(); 
  if (!cekSemuaKolom()) {
    const kolomSalah = semuaKolom.find(
      (input) => input.getAttribute("aria-invalid") === "true"
    );
    kolomSalah?.focus();
    return;
  }

  console.log("Form sah, siap dikirim:", {
    judul: kolomJudul.value,
    tahun: kolomTahun.value,
    rating: kolomRating.value,
  });
  form.reset();
  cekSemuaKolom(); 
});

tombolKirim.disabled = true; 

console.log("== dom.js kelar jalan, gak ada error ==");

window.render = render;
window.aturMemuat = aturMemuat;
window.tampilkanGalat = tampilkanGalat;