'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  // Extract languages (values of object)
  const languages = data.languages
    ? Object.values(data.languages).join(', ')
    : 'N/A';

  // Extract currencies (get the first currency name)
  const currency = data.currencies
    ? Object.values(data.currencies)[0].name
    : 'N/A';

  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)}M People</p>
          <p class="country__row"><span>🗣️</span>${languages}</p>
          <p class="country__row"><span>💰</span>${currency}</p>
        </div>
      </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     console.log(data);
//     // Extract languages (values of object)
//     const languages = data.languages
//       ? Object.values(data.languages).join(', ')
//       : 'N/A';

//     // Extract currencies (get the first currency name)
//     const currency = data.currencies
//       ? Object.values(data.currencies)[0].name
//       : 'N/A';

//     const html = `
//       <article class="country">
//         <img class="country__img" src="${data.flags.svg}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name.common}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(
//             +data.population / 1000000
//           ).toFixed(1)}M People</p>
//           <p class="country__row"><span>🗣️</span>${languages}</p>
//           <p class="country__row"><span>💰</span>${currency}</p>
//         </div>
//       </article>
//     `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('India');

///////////////////////////
//Lec 262 - Callback Hell

/*
const getCountryAndNeighbourData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    // get neighbour country
    const neighbour = data.borders?.[0];
    console.log(neighbour);
    if (!neighbour) return;

    //2nd AJAX call
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbourData('russia');
*/

/////////////////////////////////////
// Lec 264 - Consuming Promises

// const request = fetch('https://restcountries.com/v2/name/india');
// console.log(request);

// const getCountryData = function (country) {
//   const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) return;

//       //country 2 - neighbour
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} Error :(`);
//       renderError(`Error ahise bhai: ${err.message}.`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };
// btn.addEventListener('click', function () {
//   getCountryData('russia');
// });

///////////////////////////////////
//Lec 267 - Throwing Errors Manually

const getJSON = function (url) {
  return fetch(url).then(response => {
    // console.log(response);
    if (!response.ok)
      throw new Error(`Country not found :( ${response.status}`);
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`)
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) throw new Error(`Neighbour not found`);

      //country 2 - neighbour
      return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} Error.`);
      renderError(`Something went wrong: ${err.message}.`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};
// btn.addEventListener('click', function () {
//   getCountryData('russia');
// });

///////////////////////////////////
// Lec 268 - Coding challenge 1

// const whereAmI = function (lat, lng) {
//   fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}
// `)
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding: ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       // console.log(data);
//       console.log(`country: ${data.countryName}, city: ${data.city}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.countryCode}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding: ${res.status}`);
//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.log(`${err.message}`));
// };

// whereAmI(65, 94);
// whereAmI(1, 10);
// whereAmI(26, 91);

///////////////////////////////////////////////
// Lec 271 - Building a promise

// const lottery = new Promise(function (resolve, reject) {
//   console.log('lottery draw has started... ');
//   setTimeout(function () {
//     if (Math.random() > 0.5) {
//       resolve('you won.. :)');
//     } else {
//       reject(new Error('you lost.. :('));
//     }
//   }, 3000);
// });

// lottery.then(res => console.log(res)).catch(err => console.error(err));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('waited 1 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('waited 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('waited 3 seconds'));

// // make direct promise resolve and promise rejects
// Promise.resolve('a resolved promise').then(res => console.log(res));
// Promise.reject(new Error('Promise rejected')).catch(x => console.error(x));

////////////////////////////////////////////////////
// Lec 272 - Promisifying the geolocation API

// navigator.geolocation.getCurrentPosition(
//   pos => console.log(pos),
//   err => console.error(err)
// );

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      // console.log(pos);
      // console.log(pos.coords);
      // console.log(lat, lng);
      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding: ${res.status}`);
      return res.json();
    })
    .then(data => {
      // console.log(data);
      console.log(`country: ${data.countryName}, city: ${data.city}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.countryName}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding: ${res.status}`);
      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.log(`${err.message}`))
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', whereAmI);
