//1. Melakukan Looping Menggunakan While
console.log('1. Melakukan Looping Menggunakan While')
var deret=0

console.log ('LOOPING PERTAMA')
while (deret <20){
    deret+=2
    console.log (deret+ ' - I love coding')
}

console.log ('LOOPING KEDUA')

var deret=22

while (deret >2){
    deret-=2
    console.log (deret+ ' - I will become fullstack developer')
}

//2. Melakukan Looping Menggunakan For

console.log(' ')
console.log('2. Melakukan Looping Menggunakan For')
console.log ('LOOPING PERTAMA')
for (var deret=1; deret<21;deret+=1){
    console.log(deret+' - I love coding')
}
console.log ('LOOPING KEDUA')
for (var deret=20; deret>0; deret -=1){
    console.log (deret+ ' - I will become fullstack developer')
}

//3. Angka Ganjil dan Genap
console.log ('')
console.log ('3. Angka Ganjil dan Genap')
var counter=1;

while (counter < 101){
    if(counter%2 === 0 ){
        console.log ('GENAP')
    }
    else{
        console.log ('GANJIL')
    }
counter++
}

console.log(' ')
var counter=1
for (var i=counter;i<=100;i=i+2)
if(i%3===0){
  console.log(i +" kelipatan 3")
}

console.log(' ')
var counter=1
for (var i=counter;i<=100;i=i+5)
if(i%6===0){
  console.log(i+" kelipatan 6")
}

console.log(' ')
var counter=1
for (var i=counter;i<=100;i=i+9)
if(i%10===0){
  console.log(i+" kelipatan 10")
}

