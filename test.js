
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar, } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

// Importar las funciones a testear
const { fromDollarToYen, fromYenToPound } = require('./app.js');

// Prueba para la función fromDollarToYen
test("One dollar should be 146.26 yen", function() {
    // Uso la función como debe ser usada
    const yens = fromDollarToYen(1);

    // Si 1 dólar son 146.26 yenes, entonces 1 dólar debería ser 146.26 yenes
    expect(yens).toBe(146.26);
})

// Prueba para la función fromYenToPound
test("One yen should be 0.0063 pounds", function() {
    // Uso la función como debe ser usada
    const pounds = fromYenToPound(1);

    // Si 1 yen es 0.0063 libras, entonces 1 yen debería ser 0.0063 libras
    expect(pounds).toBe(0.0063);
})






