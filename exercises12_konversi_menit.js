//Exercises Konversi Menit

function konversiMenit(menit) {
    var num = menit
    var jam = (num/60) // 63/60=1.0333
    var xjam = Math.floor(jam) // ambil angka integer bawah 1.0333 = 1
    var jumlahmenit = (jam - xjam)*60 //(1.033-1)x60 = 
    var xjumlahmenit = Math.round(jumlahmenit)
        if( xjumlahmenit.toString().length < 2 ) {
            xjumlahmenit='0'+xjumlahmenit
        }

    return xjam+':'+xjumlahmenit
    
}

  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00



