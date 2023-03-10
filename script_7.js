// Дано число. Напишите функцию, которая сложит его цифры.
// Если сумма получилась более 9-ти, опять сложите его цифры. 
// И так, пока сумма не станет однозначным числом (9 и менее).

// Input: 345

// Output: 3

const sumNumber = (number) => {
  const strNumber = String(number);
  let result = 0;

  for (const element of strNumber) {
    result += Number(element);
  };

  return result > 9 ? sumNumber(result) : result;
};

console.log(sumNumber(345));
