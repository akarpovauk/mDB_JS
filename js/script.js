
'use strict';

document.addEventListener('DOMContentLoaded', () => {

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
          genre = promoSection.querySelector('.promo__genre'),
          movieList = promoSection.querySelector('.promo__interactive-list'),
          addForm = promoSection.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type = "checkbox"]');

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = "драма";
        promoBg.style.backgroundImage = "url('img/bg.jpg')";
    };
    
    const sortArr = (arr) => {
        arr.sort();
    };
    
    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1}. ${film}
                    <div class="delete"></div>
                </li>
            `; 
        });

        let bins = movieList.querySelectorAll('.delete');
        bins.forEach((bin, i) => {
            bin.addEventListener('click', () => {
                bin.parentElement.remove();
                films.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    } 
    
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addInput.value;
        const favourite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 19) {
                newFilm = `${newFilm.slice(0, 19)}...`;
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);

            if(favourite) {
                console.log("Добавляем любимый фильм");
            }
        }
        e.target.reset();
    });
     
    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});
