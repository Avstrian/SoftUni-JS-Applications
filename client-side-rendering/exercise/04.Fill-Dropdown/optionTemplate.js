import {html} from 'https://unpkg.com/lit-html?module';

export const createOption = (item, id) => html`
<option value=${id}>${item}</option>`