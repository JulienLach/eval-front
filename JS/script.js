// Afficher tous les chiffres de 1 à 100.
// Pour les nombres divisibles par 3, affichez "Fizz".
// Pour les nombres divisibles par 5, affichez "Buzz".
// Pour les nombres divisibles par 3 et 5, affichez "FizzBuzz".
// Sinon, affichez simplement le chiffre.


for (let nombre = 1; nombre <= 100; nombre++) {
    if (nombre % 3 === 0) {
        console.log(nombre + " Fizz");
    }
    if (nombre % 5 === 0) {
        console.log(nombre + " Buzz")
    }
    if (nombre % 3 === 0 && nombre % 5 === 0) {
        console.log(nombre + " FizzBuzz")
    }
    else {
        console.log(nombre)
    }
}

