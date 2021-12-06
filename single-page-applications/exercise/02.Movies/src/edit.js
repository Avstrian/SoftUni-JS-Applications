import { showView } from './dom.js';
import { showDetails, filmId } from './details.js';

const section = document.getElementById('edit-movie');
const form = section.querySelector('form');
form.addEventListener('submit', onEdit);
section.remove();

export function showEdit() {
    showView(section)
}

async function onEdit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const imageUrl = formData.get('imageUrl').trim();

    const res = await fetch('http://localhost:3030/data/movies/' + filmId, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': userData.token
        },
        body: JSON.stringify({
            title,
            description,
            imageUrl
        })
    });

    const data = await res.json();

    form.reset()
    showDetails(filmId);
}

