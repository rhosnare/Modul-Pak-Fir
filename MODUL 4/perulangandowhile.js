// Contoh penggunaan perulangan do...while

// Menampilkan angka dari 1 sampai 5
let i = 1;
do {
    console.log(i);  // Output: 1, 2, 3, 4, 5
    i++;  // Increment nilai i setiap kali perulangan
} while (i <= 5);

// Menjumlahkan angka dari 1 sampai 10
let total = 0;
let j = 1;
do {
    total += j;  // Menambahkan nilai j ke total
    j++;  // Increment nilai j setiap kali perulangan
} while (j <= 10);
console.log("Jumlah total dari 1 sampai 10 adalah:", total);  // Output: 55

// Perulangan dengan kondisi lebih kompleks
let angka = 1;
do {
    if (angka % 2 === 0) {  // Memeriksa apakah angka genap
        console.log(angka);  // Output: 2, 4, 6, 8, 10
    }
    angka++;
} while (angka <= 10);
