


function remove(T, x) {
    const T1 = [];

    for ( let i = 0; i < T.length; i++) {
        if(T[i] !== x) {
            T1.push(T[i]);
        }
    }
    return T1;
}

const result = remove([1, 2, 3 , 4 , 5], 2);

console.log(result);









