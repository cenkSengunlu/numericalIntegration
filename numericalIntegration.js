/*
    UYGULAYACAĞIMIZ METOTLAR

    a) Soldan Dikdörtgen
    b) Sağdan Dikdörtgen
    c) Mid Point
    d) Yamuklar Yöntemi
    e) Simpson 1/3
    f) Simpson 3/8
    g) Weddle
    h) Boole
*/

// Linspace Fonksiyonu
function linspace(start, stop, cardinality){
    let arr = [];
    let step = (stop - start) / (cardinality - 1);
    for(let i = 0; i < cardinality; i++){
        arr.push(start + (step * i));
    }
    return arr;
}

// Global Değişkenler
let a = 1; // Alt Değer
let b = 3; // Üst Değer
let n = 30; // Aralık
let h = (b - a) / n; // Yükseklik Değeri (Bazı Formüllerde Delta x olarak da geçiyor)
let arr = linspace(a, b, n); /* Linspace Fonksiyonu ile a ve b arasındaki 
                                n sayıda eşit sayıdan oluşan array */

// İntegral Fonksiyonu
function f(x){
    return Math.exp(x);
}

// a) Soldan Dikdörtgen
function soldanDikdortgen(){
    let sum = 0;

    for(let i = 1; i < n; i++) {
        sum += f(arr[i - 1]) * h;
    }

    console.log(`Soldan Dikdörtgen: ${sum.toFixed(4)}`);
}
soldanDikdortgen();

// b) Sağdan Dikdörtgen
function sagdanDikdortgen(){
    let sum = 0;

    for(let i = 1; i < n; i++) {
        sum += f(arr[i]) * h;
    }

    console.log(`Sağdan Dikdörtgen: ${sum.toFixed(4)}`);
}
sagdanDikdortgen();

// c) Mid Point
function midPoint(){
    let sum = 0;
    
    for(let i = 0; i < n - 1; i++) {
        sum += (f((arr[i] + arr[i + 1]) / 2) * (arr[i + 1] - arr[i]));
    }

    console.log(`Mid Point: ${sum.toFixed(4)}`);
}
midPoint();

// d) Yamuklar Yöntemi
function yamuklarYontemi(){
    let sum = 0;
    let head;
    let end;

    for(let i = 0; i < n - 1; i++) {
        head = arr[i];
        end = arr[i + 1];
        sum += (end - head) * ((f(head) + f(end)) / 2);
    }

    console.log(`Yamuklar Yöntemi: ${sum.toFixed(4)}`);
}
yamuklarYontemi();

// e) Simpson 1/3
function simpsonOneThree(){
    let res = f(a) + f(b);
    let lim = n / 2;
    let oddSum = 0;
    let evenSum = 0;
    
    for(let i = 1; i <= lim; i++){
        oddSum += f(a + (2 * i - 1) * h);
    }
    oddSum *= 4;

    for(let j = 1; j < lim; j++){
        evenSum += f(a + (2 * j) * h);
    }
    evenSum *= 2;

    res += oddSum + evenSum;
    res *= (h / 3);

    console.log(`Simpson 1/3: ${res.toFixed(4)}`);
}
simpsonOneThree();

// f) Simpson 3/8
function simpsonThreeEight() {
    let sum = f(a) + f(b);

    for(let i = 1 ; i < n ; i++)
    {
        if(i % 3 === 0){
            sum += 2 * f(a + i * h);
        } else{
            sum += 3 * f(a + i * h);
        }
    }

    console.log(`Simpson 3/8: ${((3 * h / 8) * sum).toFixed(4)}`);
}
simpsonThreeEight();


// g) Weddle
function weddle(){
    let h = (b - a) / 6;
    let sum = 0;
  
    sum += (((3 * h) / 10) *
        (f(a) + f(a + 2 * h) + 5 * f(a + h) +
            6 * f(a + 3 * h) + f(a + 4 * h) +
            5 * f(a + 5 * h) + f(a + 6 * h)));
  
    console.log(`Weddle: ${sum.toFixed(4)}`);
}
weddle();

// h) Boole
function booleYontemi(){
    let sum = 0;
    n = 4;
    h = (b - a) / n;
    
    let bl = (7 * f(a) + 32 * f(a + h)
                       + 12 * f(a + 2 * h)
                       + 32 * f(a + 3 * h)
                       + 7 * f(a + 4 * h))
                       * 2 * h / 45;
   
    sum += bl;

    console.log(`Boole: ${sum.toFixed(4)}`);  
}
booleYontemi();