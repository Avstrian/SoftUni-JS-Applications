function attachEvents() {
    let url = 'http://localhost:3030/jsonstore/messenger';
    document.getElementById('submit').addEventListener('click', onSend);
    document.getElementById('refresh').addEventListener('click', onRefresh);

    async function onSend(ev) {
        ev.preventDefault();
        const author = document.querySelector('input[name="author"]');
        const content = document.querySelector('input[name="content"]');

        const data =  {
            author: author.value,
            content: content.value
        }

        const options = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }

        const res = await fetch(url, options);

        author.value = '';
        content.value = '';
    }

    async function onRefresh() {
        const textArea = document.getElementById('messages');
        textArea.value = '';

        const res = await fetch(url);
        const data = await res.json();

        const result = [];

        for (let value of Object.values(data)) {
            let message = `${value.author}: ${value.content}`;
            result.push(message);
        }

        textArea.value = result.join('\n');
    }
    
}

attachEvents();