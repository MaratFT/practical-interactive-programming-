function greeting() {
  let userName = localStorage.getItem('userName');

  if (userName) {
    alert(`Ваше имя: ${userName}`);
  } else {
    userName = prompt('Представьтесь');

    if (userName !== null && userName !== '') {
      localStorage.setItem('userName', userName);
    } else {
      greeting();
    }
  }
}

greeting();

// Практическая работа № 1 (Типы данных. Приведение типов в JS. Циклы)

function executeTask0() {
  let myVar = prompt('Введите число');

  if (!isNaN(myVar)) {
    alert('Это число');
  } else {
    alert('Это не число');
  }
}

function executeTask1() {
  let result = prompt('Укажите знак зодиака');
  switch (result) {
    case 'Телец':
      alert('Вы телец');
      break;
    case 'Лев':
      alert('Вы лев');
      break;
    case 'Весы':
      alert('Вы весы');
      break;
    default:
      alert('Неизвестный знак зодиака');
  }
}

function executeTask2() {
  for (let i = 1; i <= 40; i++) {
    console.log(i);
  }

  let i = 1;
  while (i <= 40) {
    console.log(i);
    i++;
  }

  let j = 1;

  do {
    console.log(j);
    j++;
  } while (j <= 40);

  alert(
    '2) вывести все числа от 1 до 40, с использованием 3-х разных циклов: \n\n Демонстрация в консоли'
  );
}

function executeTask3() {
  while (true) {
    alert('Бесконечное сообщение');
  }
}

function executeTask4() {
  let result = prompt('Введите число больше 5');
  console.log(result);

  if (result === null || isNaN(Number(result)) || Number(result) <= 5) {
    executeTask4();
  } else {
    alert('Поздравляю!!!');
  }
}

function executeTask5() {
  for (let i = 8; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  alert('5) Выведите четные числа от 8 до 20: \n\n Демонстрация в консоли');
}

function executeTask6() {
  for (let i = 1; i <= 7; i++) {
    if (i === 5) {
      continue;
    }

    if (i % 2 !== 0) {
      console.log(i);
    }
  }

  alert('6) выведите нечетные числа от 1 до 7, пропустив 5: \n\n Демонстрация в консоли');
}

// Практическая работа № 2 (Массивы. Функции)

function executeDemo1() {
  let arr1 = [];
  let arr2 = new Array();
  let arr3 = Array.from('hello');

  alert(
    `1) создать массив 3 разными способами \n
    ${JSON.stringify(arr1)}, ${JSON.stringify(arr2)}, ${JSON.stringify(arr3)}`
  );
}

function executeDemo2() {
  let arr = [1, 2, 3, 4, 5, 6, 7];
  console.log(arr[4]);
  arr[4] = 10;
  console.log(arr[4]);

  alert(
    '2) Выведите на экран 5 член вашего массива затем измените его значение: \n\n Демонстрация в консоли'
  );
}

function executeDemo3() {
  let arr = [1, 2, 3, 4, 5, 6, 7];
  const button = document.getElementById('button-click');
  console.log(button);

  button.addEventListener('mouseenter', () => console.log(arr.length));

  alert(
    '3) узнайте длину вашего массива и выведите ее значение при наведении на любой элемент: \n\n Демонстрация в консоли'
  );
}

function executeDemo4() {
  let arr = [1, 2, 3, 4, 5, 6, 7];

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  alert(`4) выведите все элементы массива, используя цикл for: \n\n Демонстрация в консоли`);
}

function executeDemo5() {
  let arr1 = [1, 2, 3, 4];
  let arr2 = [4, 5, 6, 7];

  // let arr3 = arr1.concat(arr2);  Способ 1

  // let arr3 = [...arr1, ...arr2];  Способ 2

  arr1.push(...arr2);

  console.log(arr1);

  alert(
    `5) создайте 2 массива. Объедините их в один и выведите на экран полученный массив: \n\n Демонстрация в консоли \n
    let arr1 = [1, 2, 3, 4];
    let arr2 = [4, 5, 6, 7];

    arr1.push(...arr2);
`
  );
}

function executeDemo6() {
  let arr1 = [1, 2, 3, 4];

  let firstElem = arr1.shift();
  console.log(firstElem, arr1);

  alert(
    `6) Удалите первый член получившегося массива и выведите это значение на экран: \n\n Демонстрация в консоли \n
    Первоначальный массив: let arr1 = [1, 2, 3, 4];
  `
  );
}

function executeDemo7() {
  let arr1 = [1, 2, 3, 4];

  let lastElem = arr1.pop();
  console.log(lastElem, arr1);

  alert(
    `7) Удалите последний член получившегося массива и выведите это значение на экран: \n\n Демонстрация в консоли \n
      Первоначальный массив: let arr1 = [1, 2, 3, 4];
    `
  );
}

function executeDemo8() {
  let arr1 = [1, 2, 3, 4];

  arr1.unshift(0);
  console.log(arr1);

  alert(
    `8) Добавьте новый элемент в начало вашего объединенного массива: \n\n Демонстрация в консоли \n
        Первоначальный массив: let arr1 = [1, 2, 3, 4];
      `
  );
}

function executeDemo9() {
  let date = new Date();

  console.log(date);

  alert(`9) Получите сегодняшнюю дату и выведите ее на экран: \n\n ${date}`);
}

function executeDemo10() {
  let date = new Date();

  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ];

  const stringDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} года`;

  console.log(stringDate);

  alert(`10) Выведите сегодняшнюю дату в формате 11 ноября 2020 года: \n\n ${stringDate}`);
}

function executeDemo110(num1, num2) {
  if (num1 < 0 || num1 > 50 || num2 < 0 || num2 > 50) {
    return;
  }

  return num1 * num2;
}

function executeDemo11() {
  let res = executeDemo110(10, 20);

  console.log(res);

  alert(
    `11) напишите функцию, подсчитывающую произведение двух случайных чисел в промежутке от нуля до 50: \n\n ${res}`
  );
}

// Практическая работа № 3 ((Разработка интерактивной страницы))

const questions = [
  {
    title: '1. Что будет результатом выражения Boolean(0)?',
    items: ['true', 'false', 'null', 'undefined'],
    answer: 1
  },
  {
    title: '2. Какой метод массива используется для добавления элементов в конец массива?',
    items: ['push()', 'pop()', 'shift()', 'unshift()'],
    answer: 0
  },
  {
    title: '3. Какое ключевое слово используется для создания нового объекта?',
    items: ['new', 'create', 'class', 'object'],
    answer: 0
  },
  {
    title: '4. Какой оператор используется для сравнения с учетом типа?',
    items: ['==', '=', '===', '!='],
    answer: 2
  },
  {
    title: '5. Какая функция используется для преобразования JSON строки в объект JavaScript?',
    items: ['JSON.parse()', 'JSON.stringify()', 'JSON.toObject()', 'JSON.fromString()'],
    answer: 0
  },
  {
    title: '6. Какой метод используется для округления числа до ближайшего целого?',
    items: ['Math.round()', 'Math.floor()', 'Math.ceil()', 'Math.trunc()'],
    answer: 0
  },
  {
    title: '7. Какой метод строк используется для поиска подстроки?',
    items: ['find()', 'search()', 'locate()', 'indexOf()'],
    answer: 3
  },
  {
    title: '8. Какой метод используется для предотвращения дальнейшего всплытия события?',
    items: [
      'event.stop()',
      'event.preventDefault()',
      'event.stopPropagation()',
      'event.pausePropagation()'
    ],
    answer: 2
  },
  {
    title: '9. Какой из следующих вариантов не является допустимым именем переменной?',
    items: ['first_name', '2ndName', '_lastName', '$nickname'],
    answer: 1
  },
  {
    title:
      '10. Какой метод массива используется для удаления последнего элемента и возвращения его?',
    items: ['push()', 'pop()', 'shift()', 'unshift()'],
    answer: 1
  }
];

function test() {
  const testsContainer = document.getElementById('tests');

  for (const [questionIndex, value] of questions.entries()) {
    const itemContainer = document.createElement('div');
    let radioButtons = '';

    for (const [itemIndex, item] of value.items.entries()) {
      radioButtons += `
        <div>
          <input type="radio" name="questions-${questionIndex}" value="${itemIndex}" id="${questionIndex}-${itemIndex}"/>
          <label for="${questionIndex}-${itemIndex}">${item}</label>
        </div>
        `;
    }
    itemContainer.append(`${value.title}`);
    itemContainer.innerHTML += radioButtons;
    testsContainer.append(itemContainer);
  }
}

function checkTest() {
  const checkedItems = document.querySelectorAll('input[type=radio]:checked');

  const answers = [];

  for (const node of checkedItems) {
    answers.push(Number(node.value));
  }

  let rightAnswers = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === questions[i].answer) {
      rightAnswers++;
    }
  }

  const result = document.getElementById('result');
  result.innerText = `Ваш результат: ${rightAnswers} из ${questions.length}`;
}

// Практическая работа № 4

function toggleTheme(node) {
  const theme = node.value;

  if (theme === 'light') {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
  } else {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
  }

  if (theme === 'background-default') {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
  }
}

test();

// Заставка

document.getElementById('showScreen').addEventListener('click', function () {
  document.getElementById('fullScreenCover').style.display = 'block';
  document.getElementById('currentDate').textContent = new Date().toLocaleDateString();
  document.getElementById('userName').textContent = localStorage.getItem('userName');
});

document.getElementById('fullScreenCover').addEventListener('click', function () {
  this.style.display = 'none';
});
