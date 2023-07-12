//Comenzar a hacer comparaciones de elementos adyacentes.
//Clcilar hasta conseguir un recorrido completo sin swap.


function bubbleSort(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length -1; j++) {
            if(array[j] > array[j + 1]) {
                aux = array[j + 1 ];
                array[j + 1] = array[j];
                array[j] = aux;
            
            }; 
        };

    };
    return array
};

let a = [5,7,3,1,9,4,6,8,2];


console.log(bubbleSort(a))
