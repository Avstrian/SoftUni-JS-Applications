import { html, render } from 'https://unpkg.com/lit-html?module';

const root = document.getElementById('root');

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const towns = document.getElementById('towns')
        .value.split(', ')
        .map(t => t.trim());

    render(createTowns(towns), root);
})

const createTowns = (items) => html`
    <ul>
        ${items.map(item => html`<li>${item}</li>`)}
    </ul>`;

