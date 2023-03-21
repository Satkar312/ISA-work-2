function getTriangleArea(base, height){
    return (base * height) / 2;
}
console.log(getTriangleArea(7, 4));


function addSomething(str){
    return `something ${str}`;
}
console.log(addSomething("is better than nothing."));


let calculateExpression = (a, b) => {
    return 2 * a + 3 * b;
}
console.log(calculateExpression(7, 5));


function isSumLessThan100(a, b){
    if ((a + b) < 100){
        return true;
    } else {
        return false;
    }
}
console.log(isSumLessThan100(99, 0));


function sumUpTo(a){
    if (a >= 1000){
        let sum = 0;
        for (let i = 1; i <= a; i++){
            sum = sum + i;
        }
        return sum;
    } else {
        return "Invalid number.";
    }
}
console.log(sumUpTo(600));


function isOddishOrEvenish(a){
    let sum = 0;
    while (a > 0){
        let x = a % 10;
        a = Math.trunc(a / 10);
        sum = sum + x;
    }
    if (sum % 2 == 0){
        return "Evenish";
    } else {
        return "Oddish";
    }
}
console.log(isOddishOrEvenish(121));


function isPrime(a){
    let response = true;
    for (let i = 2; i < a; i++){
        if (a % i == 0){
            response = false;
            break;
        }
    }
    return response;
}


function hasPrimeInRange(x, y){
    if (y > x && x >= 0 && y >= 0){
        let count = 0;
        while (x <= y){
            if (isPrime(x) == true && x != 0 && x != 1){
                count = count + 1;
            }
            x = x + 1;
        }
        if (count > 0){
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
console.log(hasPrimeInRange(62, 66));

function bitShift(num, shift){
    if (shift >= 0){
        return (num * (2**shift));
    } else {
        return "Negative number found.";
    }
}

console.log(bitShift(46, 6));

function decimalToBinary(num){
    binaryStr = "";
    if (num > 0 && num < 1024){
        while (num > 0){
            remainder = num % 2;
            binaryStr = remainder + binaryStr;
            num = Math.trunc(num / 2);
        }
    } else if (num == 0){
        binaryStr = binaryStr + 0;
    } else {
        binaryStr = "Number more than 1024 is not accepted.";
    }
    return binaryStr; 
}
console.log(decimalToBinary(10));

