let url = 'http://localhost:3030/jsonstore/collections/books';

async function getBooks() {
    const res = await fetch(url);
    const data = res.json();
    
}

function attachEvents() {
    document.getElementById('loadBooks').addEventListener('click', getBooks);

}