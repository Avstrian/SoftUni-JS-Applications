import { html } from 'https://unpkg.com/lit-html?module';


export const createCatCard = (id, statusCode, statusMessage, imgLink) => html`
<li id=${id}>
    <img src="./images/${imgLink}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn">Show status code</button>
        <div class="status" style="display: none" id="100">
            <h4>Status Code: ${statusCode}</h4>
            <p>${statusMessage}</p>
        </div>
    </div>
</li>`