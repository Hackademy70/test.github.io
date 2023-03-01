// 02 -  A partire da un array di valori numerici da prendere in analisi,
// scrivere una funzione che restituisca la sommatoria tra i valori 

// input array da prendere in analisi => [35, 35, 50, 45]
let numbers = [35, 35, 50, 45];

function calcSum(myarray) {
    let sum = 0;

    for (let i = 0; i < myarray.length; i++) {
        sum = sum + myarray[i];
    }    
    return sum;    
}

console.log(calcSum(numbers)); 
console.log(calcSum([10, 11, 12])); 

// 03 -  A partire da un array di valori numerici da prendere in analisi, scrivere una funzione che trovi il valore minimo 

// input array da prendere in analisi => [1,2,3]  valore atteso: 1 
// input array da prendere in analisi => [10,50,100] valore atteso 10
// input array da prendere in analisi => [-1,-20,-30] valore atteso -30
let myarray1 = [1,2,3];
let myarray2 = [10,50,100];
let myarray3 = [-1,-20,-30];

function findMin(array) {
    let min = Math.min(...array);

    return min;    
}

console.log(findMin(myarray1));
console.log(findMin(myarray2));
console.log(findMin(myarray3));


// 04 - Scrivere una funzione sumMul che trovi la somma di tutti i multipli di n sotto m, tenendo presente che n e m sono numeri interi naturali positivi e m é escluso dai multipli

// Esempio => sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20 
// Esempio => sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// Esempio => sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
function sumMul(num1, num2) {
    let sum = 0;

    for (let i = num1; i < num2; i++) {
        if (i % num1 == 0) {
            sum = sum + i;            
        }
    }
    return sum;
}

console.log('sumMul: ',sumMul(2, 9));

// 05 - A partire da un array di risultati di partite giocate in casa, scrivi una funzione che determini l'ammontare totale di punti accumulati dalla squadra di casa. 

// input array da prendere in analisi => ["1:0","2:0","3:0","4:4","1:2"]  valore atteso: 10 pts
let arrayScore = ["1:0","2:0","3:0","4:4","1:2"];
function calcTot(array) {
    let punti = 0;

    for (let i = 0; i < array.length; i++) {
        console.log(array[i].split(':')); 
        let result1 = Number(array[i].split(':')[0]);
        let result2 = Number(array[i].split(':')[1]);
        if (result1 > result2) {
            punti += 3;
        } else if(result1 == result2) {
            punti +=1;
        }
    
    }
    return punti;    
}

console.log(calcTot(arrayScore));
