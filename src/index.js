import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './css/styles.css';
import fetchCountries from './js/fetchCounties';
//Создать функцию по поиску стран fetchCountries [V]
//Сдeлать связь между введенными значениями в инпуте #search-box и функцией fetchCountries через функцию onInputValue [V]

// Создать проверку на количество найденых стран, чтобы было не больше 10 стран, если больше АЛЕРТ 
// Создать функцию обработки успешного нахождения
//Создать функцию обработки НЕ успешного нахождения
//Рендер разметки к countryList и countryInfo через шаблонніе строки






const fetchValue = fetchCountries

const inputTextValue = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list')
const countryInfo = document.querySelector('.country-info')

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

    console.log(fetchValue(textValue))  
}


inputTextValue.addEventListener('input', onInputValue)