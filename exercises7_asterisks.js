//1.
console.log('1. Menyusun Barisan Bintang')
var i=0
var output=''

while (i<5){
    var inside =''
    var j=0
    while (j<1) {
        inside += '*'
        j++
    }
output += inside + '\n'
i+=1
}

console.log (output)


//2. Menyusun Barisan Bintang Dengan Nested Looping
console.log(' ')
console.log("2. Menyusun Barisan Bintang Dengan Nested Looping")

var i=0
var output=''

while (i<5){
    var inside =''
    var j=0
    while (j<5) {
        inside += '*'
        j++
    }
output += inside + '\n'
i+=1
}

console.log (output)

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log(' ')
console.log("3. Menyusun Barisan Tangga Bintang Dengan Nested Looping")

var i=0
var output=''

while (i<5){
    var inside =''
    var j=0
    while (j<2) {
        inside += '*'
        j++
    }
output += inside + '\n'
i+=1
}

console.log (output)


