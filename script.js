let tanggalPernikahan = new Date("jul 16, 2031 09:00:00").getTime();


let x = setInterval(function() {

    let sekarang = new Date().getTime();

    let selisih = tanggalPernikahan - sekarang;

    let hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    let jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
    let detik = Math.floor((selisih % (1000 * 60)) / 1000);

    document.getElementById("hari").innerHTML = hari + " <span>Hari</span>";
    document.getElementById("jam").innerHTML = jam + " <span>Jam</span>";
    document.getElementById("menit").innerHTML = menit + " <span>Menit</span>";
    document.getElementById("detik").innerHTML = detik + " <span>Detik</span>";

    if (selisih < 0) {
        clearInterval(x);
        document.getElementById("hari").innerHTML = "0 <span>Hari</span>";
        document.getElementById("jam").innerHTML = "0 <span>Jam</span>";
        document.getElementById("menit").innerHTML = "0 <span>Menit</span>";
        document.getElementById("detik").innerHTML = "0 <span>Detik</span>";
    }
}, 1000);

const form = document.getElementById('rsvpForm');
const ucapanList = document.getElementById('ucapanList');

form.addEventListener('submit', function(event) {
    event.preventDefault();  

    const nama = document.getElementById('nama').value;
    const ucapan = document.getElementById('ucapan').value;
    
    const listItem = document.createElement('li');
    listItem.textContent = `${nama}: ${ucapan}`;
    
    ucapanList.appendChild(listItem);
    
    form.reset();
});