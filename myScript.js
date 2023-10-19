// const city = (kotabogor);
// const date = new Date();
// const dd = String(date.getDate()).padStart(2, '0');
// const mm = String(date.getMonth()+1).padStart(2, '0');
// const yyyy = date.getFullYear();
// const now = yyyy + "-" + mm + "-" + dd;

// const jadwalApi = "https://api.myquran.com/v1/sholat/jadwal/$(city)/$(yyyy)/$(mm)";

// Nama2 surah
window.onload = function(){
    getData();
    dapatData();

}

function getData(){
    fetch('https://api.banghasan.com/quran/format/json/surat')
    .then(function(response){
        if (!response.ok){
            throw new Error('Gagal memuat data!');
        }
        return response.json();
    })
    .then (function(data){
        console.log(data);
        displayData(data);
    })
    .catch(function(error){
        console.log("Terjadi sebuah kesalahan")
    })
}

function displayData(data){
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    data.hasil.forEach(function (surat){
        var suratDiv = document.createElement("div");
        suratDiv.classList.add("surah");
        suratDiv.className = "containerSurah";

        var namaSurah = document.createElement("h2");
        namaSurah.textContent = surat.nama;
        namaSurah.className = "namaSurah";

        var asmaSurah = document.createElement("h3");
        asmaSurah.textContent = surat.asma;
        asmaSurah.className = "asmaSurah";

        var ayatSurah = document.createElement("p");
        ayatSurah.textContent = surat.ayat +" "+"Ayat";
        asmaSurah.className = "ayatSurah";

        var tipeSurah = document.createElement("p");
        tipeSurah.textContent = surat.type;
        tipeSurah.className = "tipeSurah";

        var artiSurah = document.createElement("p");
        artiSurah.textContent = surat.arti;
        artiSurah.className = "artiSurah";

        suratDiv.appendChild(namaSurah);
        suratDiv.appendChild(asmaSurah);
        suratDiv.appendChild(ayatSurah);
        suratDiv.appendChild(tipeSurah);
        suratDiv.appendChild(artiSurah);

        resultDiv.appendChild(suratDiv);
    })
    
}

// Asmaul husna

function dapatData(){
    fetch('https://api.aladhan.com/v1/asmaAlHusna')
    .then(function(response){
        if (!response.ok){
            throw new Error('Gagal memuat data!');
        }
        return response.json();
    })
    .then (function(data){
        console.log(data);
        dataDisplay(data);
    })
    .catch(function(error){
        console.log("Terjadi sebuah kesalahan")
    })
}

function dataDisplay(data){
    var hasilDiv = document.getElementById("result2");
    hasilDiv.innerHTML = "";

    data.data.forEach(function (asmaul){
        var asmaulDiv = document.createElement("div");
        asmaulDiv.classList.add("asmaul");
        asmaulDiv.className = "containerAsmaul";

        var namaAsmaul = document.createElement("h2");
        namaAsmaul.textContent = asmaul.name;
        namaAsmaul.className = "namaAsmaul";

        var artiAsmaul = document.createElement("h3");
        artiAsmaul.textContent = asmaul.transliteration;
        artiAsmaul.className = "artiAsmaul";

        asmaulDiv.appendChild(namaAsmaul);
        asmaulDiv.appendChild(artiAsmaul);

        hasilDiv.appendChild(asmaulDiv);
    })
    
}

// jadwal sholat
const city = 1222;
const date = new Date();
const dd = String(date.getDate()).padStart(2, "0");
const mm = String(date.getMonth() + 1 ).padStart(2, "0");
const yyyy = date.getFullYear();
const now = yyyy + "-" + mm + "-" + dd;

const jadwalApi = `https://api.myquran.com/v1/sholat/jadwal/${city}/${yyyy}/${mm}`

fetch(jadwalApi)
.then(function(response){
    if (!response.ok){
        throw new Error("Ada yang salah shalihah")
    } return response.json();
})
.then((data) => {
    const jadwal = data.data;
    const list = jadwal.jadwal;
    const listJadwal = document.getElementById("list-jadwal");
    const kota = document.getElementById("city");
    const prov = document.getElementById("prov");

    kota.innerHTML = jadwal.lokasi;
    prov.innerHTML = jadwal.daerah;

    list.forEach((el) => {
        const tr = document.createElement("tr");
        if(el.date === now){
            tr.classList.add("table-primary")
        }

        // tanggal
        const dd = document.createElement("td");
        dd.innerText = el.tanggal;
        dd.className = ("tanggal");

        // imsak
        const imsak = document.createElement("td");
        imsak.innerText = el.imsak;

        // shubuh
        const shubuh = document.createElement("td");
        shubuh.innerText = el.subuh;

        // terbit
        const terbit = document.createElement("td");
        terbit.innerText = el.terbit;

        // dzhuhur
        const dzuhur = document.createElement("td");
        dzuhur.innerText = el.dzuhur;

        // ashar
        const ashar = document.createElement("td");
        ashar.innerText = el.ashar;

        // maghrib
        const maghrib = document.createElement("td");
        maghrib.innerText = el.maghrib;

        // isya
        const isya = document.createElement("td");
        isya.innerText = el.isya;

        listJadwal.appendChild(tr);

        tr.appendChild(dd);
        tr.appendChild(imsak);
        tr.appendChild(shubuh);
        tr.appendChild(terbit);
        tr.appendChild(dzuhur);
        tr.appendChild(ashar);
        tr.appendChild(maghrib);
        tr.appendChild(isya);
    })
})

// navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}
window.onscroll=() =>{
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

