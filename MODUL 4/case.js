// Deklarasi beberapa variabel dengan perbedaan huruf kapital
var unname = "Muhammad";
var Unname = "Rhosid";
var UNname = "Narendra";

// Menampilkan nilai dari masing-masing variabel
console.log(unname); // Output: Muhammad
console.log(Unname); // Output: Rhosid
console.log(UNname); // Output: Narendra

// Mencoba mengakses variabel dengan penulisan yang berbeda (akan error)
// console.log(unNam); // Uncaught ReferenceError: unNam is not defined

// Contoh penggunaan keyword yang benar dan salah
var angka = 5;
while (angka > 0) { // Penulisan keyword 'while' yang benar
  console.log("Angka saat ini: " + angka);
  angka--;
}

// // Contoh penulisan keyword 'While' yang salah (akan error)
// var nomor = 3;
// While (nomor > 0) {
//   console.log("Nomor saat ini: " + nomor);
//   nomor--;
// }

// Contoh fungsi dengan perbedaan huruf kapital
function sapaUnname(unname) {
  console.log("Halo, " + unname + "!");
}

function SapaUnname(unname) {
  console.warn("Fungsi ini memiliki nama yang mirip tapi berbeda karena case.");
}

sapaUnname("Rhosid"); // Output: Halo, Rhosid!
SapaUnname("Narendra");  // Output: Peringatan di konsol: Fungsi ini memiliki nama yang mirip tapi berbeda karena case.

// // Memanggil fungsi dengan penulisan berbeda yang tidak dideklarasikan
// Sapaunname("Cid"); // akan error jika tidak dideklarasikan