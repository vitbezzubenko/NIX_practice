// Завдання №1. Перевірка на пустоту 

function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }

// Завдання №2. Помножуємо всі числові властивості на 2

function multiplyNumeric(obj) {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === "number") {
        obj[key] = obj[key] + 2;
      }
    }
}

// Завдання №3. Введення числового значення

function readNumber() {
    let enteredValue = prompt("Enter numeric value: ");
    while (isNaN(enteredValue)) {
      enteredValue = prompt("Enter numeric value: ");
      if (!enteredValue) return null;
    }
    return enteredValue;
}

// Завдання №4. Випадкове число від min до max з плаваючою точкою 

  function random(min, max) {
    return Math.random() * (max - min) + min;
}

// Завдання №5. Випадкове ціле число від min до max, яка генерує випадкове ціле число

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Завдання №6. Зробити перший символ великим 

function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

// Завдання №7. Перевірка на спам 

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }

// Завдання №8. Усічення рядка

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
}

// Завдання №9. Виділити число 

extractCurrencyValue("$120");
function extractCurrencyValue(str) {
    let del = /[0-9/.]+/;
    extractCurrencyValue = str.match(del);
    alert(extractCurrencyValue);
}

// Завдання №10. Сума введених чисел

function sumInput() {
  const numbers = [];
      while (true) {
      let value = prompt("Введите число", 0);      
          if (value === "" || value === null || !isFinite(value)) break;
          numbers.push(+value);
      }
      let sum = 0;
      for (let number of numbers) {
      sum += number;
      }
      return sum;
}
alert(sumInput());

// Завдання №11. Чи обов'язковий "else"? 

    // else  - не обов'язково, результат той самий. 

// Завдання №12. Перепишіть функцію за допомогою оператора '?' або '||' 

function checkAge(age) {
  return age > 18 ? true : confirm('Батьки дозволили?');
}

function checkAge(age) {
  return age > 18 || confirm('Батьки дозволили?');
}

// Завдання №13. Функція min ( a, b) 

function min(a,b) {
  let min = (a,b) => {
      if (a<b) {
          return a;
      }
      return b;
  }
  console.log(min(2,7));
  console.log(min(4,1));
  console.log(min(1,-3));
}

// Завдання №14. Функція pow( x, n ) 

function pow(x, n) {
  const result = x;
  for (let i = 1; i < n; i++) {
      result *= x;
  }
  return result;
  }
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  if (n < 1) {
  alert(`Степінь ${n} не підтримується, вікористайте наутральне число`);
  } else {
  alert(pow(x, n));
}

// Завдання №15. Перепишіть за допомогою функції-стрілки

function ask() {
  let ask = (question, yes, no) => (confirm(question))? yes() : no();
  ask("Ви згодні?", () => alert("Ви погодилися."), () => alert("Ви скасували виконання."));
}

// Завдання №16. Робінзон Крузо

cruso(3333, 8000, 1750);
function cruso(income, palm, expense) {
    let period = palm / (income - expense);
     return console.log(`Необхідний проміжок часу ${Math.ceil(period)} місяці(в).`);
}

// Завдання №17. Запитання користувачеві    





