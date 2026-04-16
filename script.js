let jam = document.getElementById("jam");
let menit = document.getElementById("menit");
let detik = document.getElementById("detik");

setInterval(() => {
    let waktusekarang = new Date();
    jam.innerHTML = (waktusekarang.getHours()<10?"0":"") + waktusekarang.getHours();
    menit.innerHTML = (waktusekarang.getMinutes()<10?"0":"") + waktusekarang.getMinutes();
    detik.innerHTML = (waktusekarang.getSeconds()<10?"0":"") + waktusekarang.getSeconds();
}, 1000)