// every----------------------------
var arr = [1,2,3,4];

var res = arr.every(function(el){
    return el>=0;
});

console.log(res);

function every(el,index) {
    for (var index = 0; index < arr.length; index++) {
        if (arr[index]<0) {
            res=false;
            break;
        }
    } 
    return res;
}

var result = (every(arr,function(el,index) {
    return index>0;
}));

console.log(result);

// some----------------------------------

var arr = [4,-5,-6,-7];

var res=arr.some(function(el){
    return el>0;
})

console.log(res);

function some(el,index) {
    for (var index = 0; index < arr.length; index++) {
        if (arr[index]>0) {
            res=true;
            break;
        }
    } 
    return res;
}

var result = (some(arr,function(el,index) {
    return index>0;
}));

console.log(result);

// reduce---------------------------------------

var arr = [1,2,3,4];

var res=arr.reduce(function(total,el) {
    return total + el
}, 0);

console.log(res);

var total = 0;

function reduce(total,el) {
    for (var index = 0; index < arr.length; index++) {
        total += arr[index]; 
    }
    return total;
}

console.log(reduce(total));

