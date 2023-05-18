
function mayorArray(array){

    if(array.length === 0){ /**array vacio */
        return null;

    }else if(array.length === 1){ /**arrayncon 1 solo elemento */
        return array[0];

    }else{

        let max = array[0];/**inicializa variable max */

        for(let i = 1; i < array.length; i++){
            /**i < array.length. recorre la longitud del array */
            if(array[i] > max){
                max = array[i];
            }
        }
   
        let index = 0;

        while(index < array.length){
            console.log(array[index]);
            index++;
        }

        let count = 0;
        let j = 0;

        do{
            if(array[j] % 2 !== 0){
                count++;
                console.log("Estos son los numeros impares:", array[j])
            }
            j++
        }while(j < (array.length))
        
        return max;
    }
}

const numeros = [5, 10, 2, 8, 3]
const resultado = mayorArray(numeros);

console.log("El numero mayor es: ")