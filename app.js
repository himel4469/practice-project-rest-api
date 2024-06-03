'use strict';
const CountriesElem = document.querySelector('.Countries');
const dropDown = document.querySelector('.dropDown');
const dropElm = document.querySelector('.drop');
const region = document.querySelectorAll('.region');
const search = document.querySelector('.search');
const toggle = document.querySelector('.toggle');
const moon = document.querySelector('.moon');

async function getcountry() {
  const url = await fetch('https://restcountries.com/v3.1/all');
  const res = await url.json();
  res.forEach(element => {
    showCountry(element);
  });
}
getcountry();

function showCountry(data) {
  const country = document.createElement('div');
  country.classList.add('Country');
  country.innerHTML = `<div class="Country-img">
        <img src='${data.flags.png}' alt="country-flag">
      </div>
      <div class="Country-info">
        <h3 class="CountryName" >*${data.name.common}</h3>
        <h4 class="CountryName" >${data.name.official}</h4>
        <p class="regionName"><strong>Region: </strong>${data.region}</p>
        <p><strong>Capital: </strong>${data.capital}</p>
        <p><strong>continents: </strong>${data.continents}</p>
        <p><strong>Population: </strong>${data.population}</p>
        <p><strong>Area: </strong>${data.area} km²</p>
      </div>`;

  CountriesElem.appendChild(country);
}

dropDown.addEventListener('click', () => {
  dropElm.classList.toggle('showdropdown');
});

const regionName = document.getElementsByClassName('regionName');
const CountryName = document.getElementsByClassName('CountryName');
region.forEach(element => {
  element.addEventListener('click', () => {
    Array.from(regionName).forEach(elem => {
      if (
        elem.innerText.includes(element.innerText) ||
        element.innerText == 'All'
      ) {
        elem.parentElement.parentElement.style.display = 'grid';
      } else {
        elem.parentElement.parentElement.style.display = 'none';
      }
    });
  });
});

search.addEventListener('input', () => {
  Array.from(CountryName).forEach(elem => {
    if (elem.innerText.toLowerCase().includes(search.value.toLowerCase())) {
      elem.parentElement.parentElement.style.display = 'grid';
    } else {
      elem.parentElement.parentElement.style.display = 'none';
    }
  });
});

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  moon.classList.toggle('fas');
});
