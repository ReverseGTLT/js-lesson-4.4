//- Вивести на сторінку в один рядок через кому числа від 10 до 20
let range = '';
for (let num = 10; num <= 20; num += 1) {
  range =`${range} ${num},`;
}
console.log((range.slice(1,-1)));

//- Вивести квадрати чисел від 10 до 20
let exponent = '';
for (let num = 10; num <= 20; num += 1) {
  exponent =`${exponent} ${num**2},`;
}
console.log((exponent.slice(1,-1)));

//- Вивести таблицю множення на 7
let multiTableSeven = '';
for (let secondNum = 1; secondNum < 10; secondNum += 1) {
  let firstNum = 7;
  multiTableSeven = `${multiTableSeven}${firstNum}*${secondNum}=${firstNum * secondNum}\n`
}
console.log(multiTableSeven);

//-Знайти суму всіх цілих чисел від 1 до 15
let sumOfInt = 0;
for (let num = 1; num <= 15; num +=1) {
  sumOfInt += num;
}
console.log(sumOfInt)

//-Знайти добуток усіх цілих чисел від 15 до 35
let multiplication = 1;
for (let num = 15; num <= 35; num +=1) {
  multiplication *= num;
}
console.log(multiplication)

//-Знайти середнє арифметичне всіх цілих чисел від 1 до 500
let average = 0;
for (let num = 1; num <= 500; num += 1) {
  average += num / 500;
}
console.log(average);

//-Вивести суму лише парних чисел в діапазоні від 30 до 80
let doubleNum = 0;
for (let num = 30; num <= 80; num += 1) {
  doubleNum = doubleNum + (num % 2);
}
console.log(doubleNum);

//- Вивести всі числа в діапазоні від 100 до 200 кратні 3
let multipleOfThree = '';
for (let num = 100; num <= 200; num += 1) {
  if (num % 3 === 0) {
    multipleOfThree =`${multipleOfThree} ${num},`;
  }
}
console.log((multipleOfThree.slice(1,-1)));

//-Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let resultNaturalNumber = '';
let naturalNumber = +prompt('Enter natural number')
for (let divider = 1; divider <= naturalNumber; divider +=1) {
  if (naturalNumber % divider === 0) {
    resultNaturalNumber = `${resultNaturalNumber} ${divider},`
  }
}
console.log((resultNaturalNumber.slice(1,-1)));

//-Визначити кількість його парних дільників
let resultNaturalNumberDouble = '';
let secondNaturalNumber = +prompt('Enter natural number')
for (let divider = 1; divider <= secondNaturalNumber; divider +=1) {
  if (divider % 2 === 0) {
    if (secondNaturalNumber % divider === 0) {
      resultNaturalNumberDouble = `${resultNaturalNumberDouble} ${divider},`
    }
  }
}
console.log((resultNaturalNumberDouble.slice(1,-1)));

//-Знайти суму його парних дільників
let sumOfPairDivisors = 0;
let thirdNaturalNumber = +prompt('Enter natural number')
for (let divider = 1; divider <= thirdNaturalNumber; divider +=1) {
  if (divider % 2 === 0) {
    if (thirdNaturalNumber % divider === 0) {
      sumOfPairDivisors += divider;
    }
  }
}
console.log(sumOfPairDivisors);

//-Надрукувати повну таблицю множення від 1 до 10
let multiTable = '';
for (let firstNum = 1; firstNum <= 10; firstNum += 1){
  for (let secondNum = 1; secondNum <= 10; secondNum += 1) {
    multiTable = `${multiTable}${firstNum}*${secondNum}=${firstNum * secondNum}\n`
  }
  multiTable += `\n`;
}
console.log(multiTable);