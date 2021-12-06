import { html, render } from 'https://unpkg.com/lit-html?module';
import {cats} from './catSeeder.js';
import { createCatCard } from './catTemplate.js';

const catList = (cats) => html`
<ul>
    ${cats.map(cat => html`${createCatCard(cat.id, cat.statusCode, cat.statusMessage, cat.imageLocation)}`)}
</ul>`

const section = document.getElementById('allCats');

render(catList(cats), section);

section.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.tagName == 'BUTTON') {
        const hiddenDiv = event.target.parentElement.querySelector('.status');

        if (hiddenDiv.style.display == 'none') {
            hiddenDiv.style.display = 'block';
            event.target.textContent = 'Hide status code';
        } else {
            hiddenDiv.style.display = 'none';
            event.target.textContent = 'Show status code';
        }
    }
})
