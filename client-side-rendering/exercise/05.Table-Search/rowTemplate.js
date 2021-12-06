import {html} from 'https://unpkg.com/lit-html?module';

export const createRow = (firstName, lastName, email, course) => html`
<tr>
    <td>${firstName} ${lastName}</td>
    <td>${email}</td>
    <td>${course}</td>
</tr>
`;
