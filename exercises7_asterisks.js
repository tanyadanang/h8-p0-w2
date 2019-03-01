//1.
console.log('1. Menyusun Barisan Bintang')
var rows1 = 0;
while (rows1 < 5) {
  console.log('*')
  rows1++;
}


//2. Menyusun Barisan Bintang Dengan Nested Looping
console.log(' ')
console.log("2. Menyusun Barisan Bintang Dengan Nested Looping")

var rows2=0
var output=''
while (rows2<5){
    var inside =''
    var j=0
    while (j<5) {
        inside += '*'
        j++
    }
output += inside + '\n'
rows2++
}

console.log (output)

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log(' ')
console.log("3. Menyusun Barisan Tangga Bintang Dengan Nested Looping")
console.log ('')
console.log ('while bintang segitiga dengan "while"')
//while bintang segitiga dengan "while"
var raws3 = '' // **
var i = 0 // 1
while(i < 5){  // 0 < 5
    raws3 += '*' // **
    console.log(raws3) // *
    i++ // 1
}

//while bintang segitiga dengan "for"
console.log('')
console.log('while bintang segitiga dengan "for"')
var line =''
for(var i = 0; i < 5 ; i++){
  line += '*'
  console.log (line)
}
