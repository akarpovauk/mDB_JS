
'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoSection = document.querySelector(".promo"),
      adv = promoSection.querySelectorAll('.promo__adv img'),
      promoBg = promoSection.querySelector('.promo__bg'),
      genre = promoSection.querySelector('.promo__genre');
let movieList = promoSection.querySelector('.promo__interactive-list');
const movieItem = movieList.querySelectorAll('.promo__interactive-item');

adv.forEach(item => {
    item.remove();
});

genre.textContent = "драма";
promoBg.style.backgroundImage = "url('img/bg.jpg')";

function createMovieList(list) {
    list.sort();
    movieList.innerHTML = "";
    list.forEach((film, i) => {
        movieList.innerHTML += `
            <li class="promo__interactive-item">${i+1}. ${film}
                <div class="delete"></div>
            </li>
        `;
        
    });
} 

createMovieList(movieDB.movies);