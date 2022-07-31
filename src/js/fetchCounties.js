const BASE_URL=`https://restcountries.com/v3.1`


function fetchCountries(name) {
   return fetch(`${BASE_URL}/name/${name}?fields=name,capital,population,flags,languages`).then(r => r.json()).catch(error=> {
         return Promise.reject(new Error(error))
      }
   )
}

export default fetchCountries