// 1 
function numsAdd(min, max) {
    if (max < min) return 'error'
    let sum = new Number
    for (let i = min; i <= max; i++) {
        sum += i
    }
    return sum
}
console.log(numsAdd(100, 200));  // 15150

// 2
function numSelect1(min, max) {
    let nums = new Array
    for (let i = min; i <= max; i++) {
        if (i % 10 * parseInt((i % 100) / 10) == 21 && i % 10 + parseInt((i % 100) / 10) == 10) nums.push(i)
    }
    return nums
}
console.log(numSelect1(200, 300)); // [ 237, 273 ]

//3
function daffodils() {
    let daffNums = new Array
    for (let i = 100; i < 1000; i++) {
        if (Math.pow(i % 10, 3) + Math.pow((i % 100) / 10, 3) + Math.pow(parseInt(i / 100), 3) == i) daffNums.push(i)
    }
    return daffNums
}
console.log(daffodils()); // [ 370 ]

// 4,5
function reverse(num) {
    let numRev = new String
    num += ''
    num = num.split('')
    for (let i = num.length - 1; i >= 0; i--) {
        numRev += num[i]
    }
    numRev = Number(numRev)
    return numRev
}
console.log(reverse(12345678910)); // 1987654321

// 6
function odd(min, max) {
    let oddNums = new Array
    for (let i = min; i <= max; i++) {
        if (i % 2 == 1) oddNums.push(i)
    }
    return oddNums
}
console.log(odd(1, 20)); // [1,  3,  5,  7,  9,11, 13, 15, 17, 19]

// 7
console.log(numsAdd(1, 10)); // 55

// 8

function numsMulti(min, max) {
    let cum = 1
    for (let i = min; i <= max; i++) {
        cum *= i
    }
    return cum
}
console.log(numsMulti(1, 10)); // 3628800

// 9

function numSelect2(min, max, num) {
    let nums = new Array
    for (let i = min; i <= max; i++) {
        if (i % num == 0) nums.push(i)
    }
    return nums
}
console.log(numSelect2(1, 100, 7)); // [0,  7, 14, 21, 28, 35,42, 49, 56, 63, 70, 77,84, 91, 98]

// 10

console.log(numSelect2(1, 100, 3)); //[3, 6, 9, 12, 15, 18, 21, 24, 27,30, 33, 36, 39, 42, 45, 48, 51, 54,57, 60, 63, 66, 69, 72, 75, 78, 81,84, 87, 90, 93, 96, 99]

// 11
function prime(number) {
    let count = 0
    for (let i = 1; i < number; i++) {
        if (number % i == 0) count++;
        if (count > 1) return '不是素数'
    }
    return '是素数'
}
console.log(prime(537)); // 不是素数

// 12
function Fibonacci(number) {
    let before = 1, now = 1, lost, fib = 2
    while (fib < number) {
        lost = before
        before = now
        now = lost + now
        fib++
    }
    return now
}
console.log(Fibonacci(24));  // 46368

// 13
function peach(num, times) {
    for (let i = 0; i <= times; i++) {
        num = (num + 1) * 2
    }
    return num
}
console.log(peach(1, 7)); // 766

//14 
function getDate(year, month, day) {
    let date = new Number
    let usual = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    function calcuDate(month, day) {
        usual.forEach((i, idx) => {
            if (idx < month - 1) date += i
        })
        date += day
    }
    if (month <= 2) {
        calcuDate(month, day)
    } else {
        if ((year % 100 != 0 && year % 4 == 0) || (year % 100 == 0 && year % 400 == 0)) {
            calcuDate(month, day)
            date++
        } else {
            calcuDate(month, day)
        }
    }
    return date
}

console.log(getDate(2022,12,3)); // 337

// 15 
function common(num1, num2){
    let divisor = [], multiple =[], maxDivisor, minMultiple
    for(let i = 1; i <= Math.max(num1, num2); i++){
        if(num1%i == 0 && num2%i == 0)  divisor.push(i)
    }
    maxDivisor = Math.max(...divisor)
    for (let i = Math.max(num1, num2); i <= num1 * num2; i++){
        if(i%num1 == 0 && i%num2 == 0) {
            minMultiple = i 
            return [maxDivisor, minMultiple]
        }
    }
}
console.log(common(12,15)); // [ 3, 60]


