/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */
/* const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
'use strict';
 */

let marketing = document.querySelectorAll('.promo__adv img')
marketing.forEach(market => {
    market.remove('.promo__adv')
})

let bg = document.querySelector('.promo__bg')
bg.style.backgroundImage = 'url(./img/bg.jpg)';

let h1 = document.querySelector('.promo__genre')
h1.innerHTML = 'драма'


let promo__menu = document.querySelectorAll('.promo__menu-item')


let act = document.querySelectorAll('.promo__menu-item')

act.forEach(btn => {
    btn.onclick = () => {
        act.forEach(el => el.classList.remove('promo__menu-item_active'))
        btn.classList.add('promo__menu-item_active')
    }
});

let promo__interactive = document.querySelector('.promo__interactive-list')
let movi = []

for (let i of movies) {
    if (!movi.includes(i.Genre)) {
        movi.push(i.Genre)
    }
}

for (let i of movi) {
    let promo__menu_list = document.querySelector('.promo__menu-list')
    let promo__menu = document.createElement('li')
    promo__menu.classList.add('promo__menu-item')
    promo__menu.innerHTML = i
    promo__menu_list.append(promo__menu)
}   

for (let item of movies) {


    let delite = document.createElement('div')
    delite.classList.add('delete')
    delite.onclick = () => {
        promo__interactive_item.remove()
    }
    let promo__interactive_item = document.createElement('li')
    promo__interactive_item.classList.add('promo__interactive-item"')
    promo__interactive_item.innerHTML = item.Title
    promo__interactive.append(promo__interactive_item)
    promo__interactive_item.append(delite)

    promo__interactive_item.onclick = () => {
        bg.style.backgroundImage = `url(${item.Poster})`
    }

}


