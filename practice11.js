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





