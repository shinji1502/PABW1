export const profil = {
  nama: "Hideaki Hayyi Shinji",
  peran: "Mahasiswa Informatika yang suka ngoding sambil nonton film",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

export function saring(daftar, kategori) {
  return kategori === "semua" ? daftar : daftar.filter((item) => item.kategori === kategori);
}
