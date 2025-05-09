// Menghitung volume kubus dengan variabel yang dideklarasikan menggunakan `var`
function hitungVolumeKubusVar(sisi) {
    var volume = sisi * sisi * sisi;
    console.log("Menggunakan var: Volume kubus dengan sisi " + sisi + " adalah " + volume);
    return volume;
}

hitungVolumeKubusVar(5); // Output: Menggunakan var: Volume kubus dengan sisi 5 adalah 125