function find_max () {
    for (let i = 0; i < array.length; i++) {
        if (array [i] > max) {
            max = array [i];
        }
    }
    console.log(max);
}

function cut_off (element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == element) {
            for (j = 0; j < array.length - i - 1; j++) {
                array[i + j] = array[i + j + 1];
            }
        }
    }
    array[array.length - 1] = 0;
}