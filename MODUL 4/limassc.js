// Fungsi untuk menghitung volume limas segiempat
function hitungLimas() {
    let sisiAlas = document.getElementById("sisiAlas").value;
    let tinggiLimas = document.getElementById("tinggiLimas").value;

    // Menghitung volume limas segiempat dengan rumus: (1/3) * sisiAlas^2 * tinggiLimas
    let volumeLimas = (1 / 3) * Math.pow(sisiAlas, 2) * tinggiLimas;
    
    // Menampilkan hasil volume limas segiempat
    document.getElementById("hasilLimas").innerText = "Volume Limas Segiempat: " + volumeLimas.toFixed(2) + " cm³";
}
