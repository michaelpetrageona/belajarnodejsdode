const nilai = "B";

switch (nilai) {
  case "A":
    console.log("<p>Wow Anda Lulus Dengan Baik </p>");
    break;
  case "B":
  case "C":
    console.log("<p> Anda Lulus </p>");
    break;
  case "D":
    console.log("<p> Anda Tidak Lulus </p>");
    break;
  default:
    console.log("<p> Mungkin Anda Salah Jurusan</p>");
}
