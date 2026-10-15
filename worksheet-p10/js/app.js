import { ambilProyek } from "./api.js";
import { render, tampilkanGalat, aturMemuat, aturSumberFilter } from "./dom.js";

const nama = "Hideaki Hayyi Shinji";
const peran = "Mahasiswa Informatika yang suka ngoding sambil nonton film";
const keahlian = ["HTML", "CSS", "JavaScript"]; 
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

async function muat() {
  aturMemuat(true);        
  tampilkanGalat(null);    

  try {
    const data = await ambilProyek(); 
    aturSumberFilter(data);           
    render(data);                    
  } catch (galatnya) {
    tampilkanGalat("Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.");
    console.error(galatnya.message); 
  } finally {
    aturMemuat(false);      
  }
}

muat();

console.log("== app.js kelar jalan, gak ada error ==");