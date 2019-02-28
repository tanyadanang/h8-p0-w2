var tanggal=1
var bulan=1
var tahun=2200

if (tanggal =>31){
    console.log ('Masukan tanggal antara 1 sampai dengan 31')
} 
else {
    console.log (tanggal)

}
if (tahun < 1900 && tahun > 2200){
    console.log ('Masukan tahun antara 1900 - 2200')
} else {
    console.log(tahun)
}

switch (bulan){
    case 1: {console.log ('Januari')break}
    case 2: {console.log ('Februari')break}
    case 3: {console.log ('Maret')break}
    case 4: {console.log ('April')break}
    case 5: {console.log ('Mei')break}
    case 6: {console.log ('Juni')break}
    case 7: {console.log ('Juli')break}
    case 8: {console.log ('Agustus')break}
    case 9: {console.log ('September')break}
    case 10: {console.log ('Oktober')break}
    case 11: {console.log ('November')break}
    case 12: {console.log ('Desember')break}
    default: {console.log ('masukan angka 1-12')}
}

console.log(taggal+bulan+tahun)