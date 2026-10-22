import { pilihKategori, tambahFavorit, aturUlang } from "./state.js";
import { cekSemuaKolom } from "./dom.js";

export function pasangPendengar() {
  document.querySelector("#filter").addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;
    pilihKategori(tombol.dataset.kategori);
  });

  document.querySelector("#galeri-film").addEventListener("click", (event) => {
    const tombol = event.target.closest(".favorit");
    if (!tombol) return;
    tambahFavorit(Number(tombol.dataset.id)); // dataset selalu teks
  });

  document.querySelector("#atur-ulang").addEventListener("click", aturUlang);

  const form = document.querySelector("#form-film");
  const semuaKolom = [
    document.querySelector("#judul-film"),
    document.querySelector("#tahun-film"),
    document.querySelector("#rating-film"),
  ];
  semuaKolom.forEach((input) => input.addEventListener("input", cekSemuaKolom));

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!cekSemuaKolom()) {
      semuaKolom.find((input) => input.getAttribute("aria-invalid") === "true")?.focus();
      return;
    }
    console.log("Form sah, siap dikirim:", Object.fromEntries(semuaKolom.map((i) => [i.name, i.value])));
    form.reset();
    cekSemuaKolom();
  });
}
