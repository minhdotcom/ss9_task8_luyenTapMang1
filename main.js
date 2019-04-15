var array = [0,1,12,3,23,5,15,7,8,9];
var array2 = [];
var max = 0;

for (let i = 0; i < array.length; i++) {
    find_max();
    array2.push(max);
    cut_off(max);
    max = 0;
}
console.log(array2);
