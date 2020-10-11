let num = 266219;
let numLength = String(num).length;
let numArr = String(num).split("").map(Number);
let mult = 1;

for (let i = 0; i < numLength; i++){
  mult *= numArr[i];
}
console.log("Произведение цифр числа 266219: " + mult);


mult = String(mult ** 3).substring(0, 2);
console.log("Первые 2 цифры полученного числа от степени 3: " + mult);
