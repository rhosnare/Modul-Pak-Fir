document.getElementById("demo").innerHTML = "Teks ini diubah oleh JavaScript dari file eksternal!";
console.log("Halo dari file script.js!");
function sapa(nama) {
    alert("Halo, " + nama + "!");
}

setTimeout(function() {
    sapa("Rhosid");
}, 3000);