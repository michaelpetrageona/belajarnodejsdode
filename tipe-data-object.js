const orang = {
  "nama lengkap": "Michael Petra",
  alamat: "Indonesia",
  umur: 23,
};

// Ubah property / attribute
orang["nama lengkap"] = "Michael Petra";
orang.alamat = "Indonesia";
orang.umur = 30;

console.info(`Nama : ${orang["nama lengkap"]}`);
console.info(`Alamat : ${orang.alamat}`);
console.info(`Umur : ${orang.umur}`);

console.table(orang);

delete orang.umur;

console.table(orang);
