/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let btn = document.createElement('button');
    btn.innerHTML = 'Удали меня';
    btn.addEventListener('click', (ev) => {
        ev.target.remove();
    });
    document.body.append(btn);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/

const showtitle = (ev) => {
    ev.target.setAttribute('title', ev.target.innerHTML);
};
export function createArrList(arr) {
    let list = document.createElement('ul'),
        list_elem = document.createElement('li'),
        clone;
    document.body.append(list);
    arr.forEach((element) => {
        clone = list_elem.cloneNode();
        list.append(clone);
        clone.innerHTML = element;
        clone.addEventListener('mouseover', showtitle);
    });
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
const firstClickCallback = (ev) => {
    ev.preventDefault();
    ev.target.innerHTML =
        ev.target.innerHTML + ' ' + ev.target.getAttribute('href');
    ev.target.removeEventListener('click', firstClickCallback);
};
export function createLink() {
    let link = document.createElement('a');
    link.setAttribute('href', 'https://tensor.ru/');
    link.innerHTML = 'tensor';
    link.addEventListener('click', firstClickCallback);
    document.body.append(link);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
function createListItem() {
    let list_elem = document.createElement('li');
    list_elem.innerHTML = 'Пункт';
    list_elem.addEventListener('click', askQuestion);
    return list_elem;
}
const askQuestion = (ev) => {
    ev.target.innerHTML = ev.target.innerHTML + '!';
};
const addItem = (ev) => {
    let list_elem = createListItem();
    let list = document.body.getElementsByTagName('ul')[0];
    console.log(list);
    list.append(list_elem);
};
export function createList() {
    let list = document.createElement('ul'),
        list_elem = createListItem();
    list.appendChild(list_elem);
    let btn = document.createElement('button');
    btn.innerHTML = 'Добавить пункт';
    btn.addEventListener('click', addItem);

    document.body.append(list);
    document.body.append(btn);
}
