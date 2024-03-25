const sum = (a,b) => {
    return a + b 
}
console.log(sum(7,3))

 // funcion euro a dollar 

const fromEuroToDollar = function (valueInEuro) {

     let valueInDollar = valueInEuro * 1.07;
     return valueInDollar;
}

// Función de app.js: fromDollarToYen
const fromDollarToYen = function (valueInDollars) {
    // Tasa de conversión de dólares a yenes
    let oneDollarIs = 146.26; // 1 dólar es 146.26 yenes
    return valueInDollars * oneDollarIs;
}

// Función de app.js: fromYenToPound
const fromYenToPound = function (valueInYen) {
    // Tasa de conversión de yenes a libras
    let oneYenIs = 0.0063; // 1 yen es 0.0063 libras
    return valueInYen * oneYenIs;
}
module.exports = {sum,fromEuroToDollar,fromDollarToYen,fromYenToPound}

