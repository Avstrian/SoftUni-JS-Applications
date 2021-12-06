import {html, render} from 'https://unpkg.com/lit-html?module';
import { towns } from './towns.js'


const townList = (towns) => html`
<ul id="townList">
   ${towns.map(town => html`<li>${town}</li>`)}
</ul>`

const matchesElement = (matchNumber) => html`<p>${matchNumber} matches found</p>`

render(townList(towns), document.getElementById('towns'));

document.querySelector('button').addEventListener('click', search);


function search() {
   let matches = 0;

   function checkForMatch(element) {
      const searchText = document.getElementById('searchText').value.toLowerCase();
      let lowerCaseElement = element.textContent.toLowerCase();

      if (lowerCaseElement.includes(searchText)) {
         element.className = 'active';
         matches += 1;
      }
      else {
         element.classList.remove('active');
      }
   }

   function showMatches() {
      const resultDiv = document.getElementById('result');
      render(matchesElement(matches), resultDiv)

   }

   const townList = [...document.getElementById('townList').children];
   townList.map(checkForMatch);
   showMatches();
}