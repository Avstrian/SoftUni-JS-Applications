import {render} from 'https://unpkg.com/lit-html?module';
import { createRow } from './rowTemplate.js';

async function getRows() {
   const res = await fetch('http://localhost:3030/jsonstore/advanced/table');
   const data = await res.json();

   const dataObjects = [...Object.values(data)];
   const tableBody = document.querySelector('.container tbody');

   render(dataObjects.map(el => createRow(el.firstName, el.lastName, el.email, el.course)), tableBody);
}

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const rows = document.querySelectorAll('.container tr');
      const search = document.getElementById('searchField');

      for (let row = 1; row < rows.length - 1; row++) {
         let currentRow = rows[row];
         let column = currentRow.querySelectorAll('td');
         for (let col = 0; col < 3; col++) {
            let currentCol = column[col];
            let currentText = currentCol.textContent.toLowerCase();
            if (currentText.includes(search.value)) {
               currentRow.className = 'select';
            }
         }
      }
   }
}

getRows();
solve();
