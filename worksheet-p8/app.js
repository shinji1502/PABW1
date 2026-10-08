const nama = "Hideaki Hayyi Shinji";
const peran = "Mahasiswa Informatika yang suka nonton film basket";
const keahlian = ["mudah menghafal, mudah bergaul"]; 
const jumlahFilmDitonton = 4;

const profil = {
  nama,
  peran,
  keahlian,
};

const kalimatProfil = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;

console.log("== LEMBAR B ==");
console.log(profil);
console.log(kalimatProfil);

function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log("== LEMBAR C ==");
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

const daftarFilm = [
  { judul: "Marvel", tahun: 2014, sutradara: "Christopher Nolan", rating: 9 },
  { judul: "Spider-Man", tahun: 2001, sutradara: "Sam Raimi", rating: 9 },
  { judul: "Pengapdi-setan", tahun: 2019, sutradara: "Bong Joon-ho", rating: 8 },
  { judul: "Khodam", tahun: 2016, sutradara: "Siti", rating: 8 },
];

console.log("== LEMBAR D ==");
console.table(daftarFilm);

const filmRatingTinggi = daftarFilm.filter((film) => film.rating >= 9);
console.table(filmRatingTinggi);

const filmDicari = daftarFilm.find((film) => film.judul === "Spider-Man");
console.log(filmDicari);

const judulSemuaFilm = daftarFilm.map((film) => film.judul);
console.log(judulSemuaFilm);

const filmUrutTahun = [...daftarFilm].sort((a, b) => a.tahun - b.tahun);
console.table(filmUrutTahun);
console.table(daftarFilm);

console.log("== app.js kelar jalan, gak ada error ==");