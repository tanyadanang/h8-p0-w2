//Exercises Konversi Menit



function konversiMenit(menit) {
    var sisamenit = menit%60
    var jam = (menit - sisamenit) / 60
    console.log(jam + ":" + sisamenit) 
    
}



  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00



