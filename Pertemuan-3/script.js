document.writeln("<CENTER>");
document.writeln("<HR WIDTH=600 COLOR=Black>");
document.writeln("<H1>INSTITUTE BISNIS DAN INFORMATIK KESATUAN BOGOR</H1>");
document.writeln("<H2>FAKULTAS INFORMATIKA DAN PARIWISATA<H2>");
document.writeln("<H3>JURUSAN TEKNOLOGI INFORMASI<H3>");
document.writeln("<HR WIDTH=600 COLOR=Black>");
document.writeln("</CENTER>");

function jumlah() {
  var bilangan_1 = parseFloat(document.fform.bilangan_1.value);
  var bilangan_2 = parseFloat(document.fform.bilangan_2.value);
  var hasil;
  if (isNaN(bilangan_1)) {
    bilangan_1 = 0.0;
  }
  if (isNaN(bilangan_2)) {
    bilangan_2 = 0.0;
  }
  hasil = bilangan_1 + bilangan_2;
  alert("Hasil Penjumlahan = " + hasil);
}

function tekan() {
  var namastr = document.fform.nama.value;
  var alamatstr = document.fform.alamat.value;
  document.fform.onama.value = namastr;
  document.fform.oalamat.value = alamatstr;
}
function radio_box(form) {
  var ket = "";
  if (form.wanita.checked == true) {
    ket = "Wanita";
  } else {
    ket = "Pria";
  }
  alert("Anda adalah seorang " + ket);
}

function radio_box(form) {
  var ket = "";
  var ket1 = "";
  if (form.bola.checked == true) {
    ket = "Nonton Bola";
  }
  if (form.tv.checked == true) {
    ket1 = " Nonton Tv";
  }
  alert("Hobby anda " + ket + "" + ket1);
}

function tekan() {
  var ketstr = document.fform.Ket.value;
  document.fform.Oket.value = ketstr;
}

function tekan() {
  var jurusanstr = document.fform.Jurusan.value;
  document.fform.Ojurusan.value = jurusanstr;
}

function tanyabilangan() {
  var bil = parseFloat(document.fform.bilangan.value);
  var jenis = " ";
  if (isNaN(bil)) {
    alert("Anda Belum memasukkan Bilangan");
  } else {
    if (bil > 0) {
      jenis = " Adalah bilangan Positif";
    } else if (bil < 0) {
      jenis = " Adalah bilangan Negatif";
    } else {
      jenis = " Adalah Nol";
    }
    alert(bil + " " + jenis);
  }
}

function hitungip() {
  var quis = parseFloat(document.fform.iquis.value);
  var tugas = parseFloat(document.fform.itugas.value);
  var uts = parseFloat(document.fform.iuts.value);
  var uas = parseFloat(document.fform.iuas.value);
  var ip = " ";
  var ket = " ";
  var na = 0.1 * quis + 0.2 * tugas + 0.3 * uts + 0.4 * uas;
  if (na > 80 && na <= 100) {
    ip = "A";
    ket = "Lulus dengan Sangat Baik";
  } else if (na > 68 && na <= 80) {
    ip = "B";
    ket = "Lulus dengan Baik";
  } else if (na > 55 && na <= 68) {
    ip = "C";
    ket = "Lulus dengan Cukup";
  } else if (na > 38 && na <= 55) {
    ip = "D";
    ket = "Lulus dengan Kurang";
  } else {
    ip = "E";
    ket = "Tidak Lulus";
  }
  document.fform.oip.value = ip;
  document.fform.oket.value = ket;
  // gunakan untuk mengecek alert (ip+""+na);
}

function tanyabulan() {
  var bulan = parseFloat(document.fform.ibulan.value);
  var namabulan = " ";
  switch (bulan) {
    case 1:
      namabulan = "Bulan ke 1 adalah = Januari";
      break;
    case 2:
      namabulan = "Bulan ke 2 adalah = Februari";
      break;
    case 3:
      namabulan = "Bulan ke 3 adalah = Maret";
      break;
    case 4:
      namabulan = "Bulan ke 4 adalah = April";
      break;
    case 5:
      namabulan = "Bulan ke 5 adalah = Mei";
      break;
    case 6:
      namabulan = "Bulan ke 6 adalah = Juni";
      break;
    case 7:
      namabulan = "Bulan ke 7 adalah = Juli";
      break;
    case 8:
      namabulan = "Bulan ke 8 adalah = Agustus";
      break;
    case 9:
      namabulan = "Bulan ke 9 adalah = September";
      break;
    case 10:
      namabulan = "Bulan ke 10 adalah = Oktober";
      break;
    case 11:
      namabulan = "Bulan ke 11 adalah = November";
      break;
    case 12:
      namabulan = "Bulan ke 12 adalah = Desember";
      break;
    default:
      namabulan = "Anda salah mengisi";
  }
  alert(namabulan);
}

// Jawaban Nomor Satu
function a() {
  var nim = document.fform.nim.value;
  var nama = document.fform.nama.value;
  var gender = document.fform.jenisKelamin.value;
  var agama = document.fform.agama.value;
  alert(nim + " " + nama + " " + agama + " " + gender);
}