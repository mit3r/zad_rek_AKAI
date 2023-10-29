// 1. odwróć liczbę
// np dla 12345, funkcja powinna zwrócić 54321
function reverseNumber(n) {
  // uzupełnij tutaj
  let result = 0;
  while (n > 0) {
    result = result * 10 + n % 10;
    n = Math.floor(n / 10);
  }

  return result;
}

console.log("1.", reverseNumber(12345));

// 2. doodaj do siebie wszystkie wartości z tablicy, które są parzyste
// dla tablicy tab powinniśmy otrzymać 2 + 4 + 6 + 8 = 20
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function addEven(array) {
  return array.reduce((prev, curr) => (curr % 2 == 0) ? prev + curr : prev, 0)
}

console.log("2.", addEven(tab));
