var rem = [];

function fibonacci(num, memo) {
    rem.push(memo);
    memo = memo || {};

    if (memo[num]) return memo[num];
    if (num <= 1) return 1;

    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}
fibonacci(60, {});
rem = Object.values(rem[0]);
console.log(rem);
rem.unshift(1);
rem.unshift(1);

function sumFibs(limit) {
    let sum = 0;
    if (rem.includes(limit)) {
        sum = rem.reduce((total, amount) => {
            if (amount <= limit && amount %2 !== 0) {
                 total += amount;
            }
            return total;
        });
        console.log(sum);
    } else {
        sum = rem.reduce((total, amount) => {
            if (amount < limit && amount % 2 !== 0) {
                total += amount;
            }
            return total;
        });
    }
    //console.log(sum);
    return (sum) ? sum : 1;
}
sumFibs(20);
sumFibs(75025);