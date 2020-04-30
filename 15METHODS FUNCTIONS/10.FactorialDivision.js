// function factorialDivision(num1,num2) {
//     let n1 = Math.min(num1,num2);
//     let n2 = Math.max(num1,num2);
//     let result  = 1;
//     for (let i = n1 + 1; i <= n2; i++){
//         result *= i;
//     }
//     console.log(result.toFixed(2));
// }
// factorialDivision(5,2);
// factorialDivision(6,2);

function factorial(num1, num2) {
    console.log((fact1(num1) / fact1(num2)).toFixed(2));
    function fact1(num) {
        if (num === 1) {
            return 1;
        }
        return num * fact1(num - 1);
    }
}
factorial(6, 2);




// function solve(list) {
//     function callBack(list) {
//         var newList = [];
//         for (let i = 0; i < list.length; i++) {
//            if(list[i] > 5) {
//                newList.push(list[i]);
//            }
//         }
//         return newList;
//     }

//     function filter(list, callBack) {
//         return callBack(list);
//     }

//     var filtered = filter(list, callBack);
//     console.log(filtered);
// }
// solve([5,8,9,2,7,6,3,1,4]);