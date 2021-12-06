import { showView } from './dom.js';
import { showHome } from './home.js';

const section = document.getElementById('add-movie');
const form = section.querySelector('form');
form.addEventListener('submit', onCreate);
section.remove();

export function showCreate() {
    showView(section)
}

const { token } = JSON.parse(sessionStorage.getItem('userData'));

async function onCreate(event) {
    event.preventDefault();

    const result = {}

    const formData = new FormData(form);
    const title = formData.get('title').trim();
    if (title != '') {
        result.title = title
    }
    const description = formData.get('description').trim();
    if (description != '') {
        result.description = description
    }
    const imageUrl = formData.get('imageUrl').trim();
    if (imageUrl != '') {
        result.url = imageUrl
    }

    const res = await fetch('http://localhost:3030/data/movies', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(result)
    });

    form.reset()
    showHome();
}
