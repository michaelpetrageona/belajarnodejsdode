const nilai = 80;
let ucapan;

if (nilai >= 75) {
  ucapan = "Selamat Anda Lulus";
} else {
  ucapan = "Silahkan Coba Lagi";
}

console.log(`<p>${ucapan} </p>`);

ucapan = nilai >= 75 ? "Selamat Anda Lulus" : "Silahkan Coba Lagi";

console.log(`<p>${ucapan}</p>`);
