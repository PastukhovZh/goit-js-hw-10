import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './css/styles.css';
import fetchCountries from './js/fetchCounties';
//Создать функцию по поиску стран fetchCountries [V]
//Сдeлать связь между введенными значениями в инпуте #search-box и функцией fetchCountries через функцию onInputValue [V]

// Создать проверку на количество найденых стран, чтобы было не больше 10 стран, если больше АЛЕРТ [V]
// Создать функцию обработки успешного нахождения[V]
//Создать функцию обработки НЕ успешного нахождения[V]
//Рендер разметки к countryList и countryInfo через шаблонніе строки[V]






const fetchValue = fetchCountries;

const inputTextValue = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');


const cleanCardOfCountry = country => country.innerHTML = '';


const DEBOUNCE_DELAY = 300;

// const onInputValue = (e) => {

//     const textValue = e.target.value.trim();

//     console.log(fetchValue(textValue).then(r => {
//         if (r.length > 10) {
//             console.log('Hea')
//         }
//     }))  
// }




const onInputValue = (e) => {

    const textValue = e.target.value.trim();
    if (!textValue) {
        cleanCardOfCountry(countryList);
        cleanCardOfCountry(countryInfo)
}
    fetchValue(textValue).then(r => {
        if(r.length > 10) {
            Notify.info('Too many matches found. Please enter a more specific name');
        return;
        }
        renderMarkupCardOfCountry(r)
    }).catch(err => {
        cleanCardOfCountry(countryInfo);
        cleanCardOfCountry(countryList)
      Notify.failure(`Oops, there is no country with that name`)
    });

}


const renderMarkupCardOfCountry = (e) => {
    if (e.length === 1) {
    cleanCardOfCountry(countryList);
    countryInfo.innerHTML = renderInfoCountry(e);
    } 
    else {
    cleanCardOfCountry(countryInfo);
    countryList.innerHTML = renderListCountry(e);
  }
    }
    

const renderListCountry = (e) => {
    return e.map(({ name, flags }) =>
        `<li><img src="${flags.png}" alt="${name.official}" width="60" height="40">${name.official}</li>`
    ).join('')
    
}

const renderInfoCountry = (e) => {
    return e.map(({ name, population, flags, languages }) => {
    `<h1>
    <img src="${flags.png}" alt="${name.official}" width="40" height="40">
    ${name.official}
    </h1>
    <p>Capital: ${capital}</p>
    <p>Population: ${population}</p>
    <p>Languages: ${Object.values(languages)}</p>`
    })
    
}

inputTextValue.addEventListener('input', onInputValue)