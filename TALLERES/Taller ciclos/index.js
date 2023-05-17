const miArray = [5, 8, 2, 9, 6, 10,25];

function mayorArray(array) {
    if (array.length === 0) {
        return null;

    } else if (array.length === 1) {
        return array[0];

    } else {
        let mayor = array[0];

        for (let i = 1; i < array.length; i++) {

            if (array[i] > mayor) {
                mayor = array[i];
            }
        }

        let i = 0;
        while (i < array.length) {
            console.log(array[i]);
            i++;
        }

        let count_impares = 0;
        let j = 0;
        do {
            if (array[j] % 2 !== 0) {
                count_impares++;
            }
            j++;

        } while (j < array.length);
        return mayor;
    }
}

const resultado = mayorArray(miArray);
console.log("El número mayor es: " + resultado);