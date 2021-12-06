import {render} from 'https://unpkg.com/lit-html?module';
import { createOption } from './optionTemplate.js'


async function generateOptions() {
    const res = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
    const data = await res.json();
    const dataObjects = [...Object.values(data)];
    
    const menu = document.getElementById('menu');

    render(dataObjects.map(el => createOption(el.text, el._id)), menu);
}

generateOptions()

document.querySelector('input[type="submit"]').addEventListener('click', addItem);

async function addItem(event) {
    event.preventDefault();

    const text = document.getElementById('itemText');

    const res = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text.value })  
    });
    
    if (res.ok) {
        generateOptions();
    }

    text.value = '';

}