const {chromium} = require('playwright-chromium');
const {expect} = require('chai');

let browser, page; // Declare reusable variables

describe('E2E tests', async function() {
    this.timeout(5000);
    before(async () => { browser = await chromium.launch(); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    it('shows all messages', async () => {
        await page.goto('http://localhost:5500/exercise/01.Messenger');

        await page.click('text="Refresh"');

        const content = await page.inputValue('textarea');

        expect(content).to.contains('Spami');
        expect(content).to.contains('Hello, are you there?');
        expect(content).to.contains('nice to see you! :)))');

    })

    it('can send messages', async () => {
        await page.goto('http://localhost:5500/exercise/01.Messenger');

        await page.fill('#author', 'Test');
        await page.fill('#content', 'TestText');

        const [request] = await Promise.all([
            page.waitForRequest(request => request.method() == 'POST'),
            page.click('text="Send"')
        ]);

        await page.click('text="Refresh"');

        const content = await page.inputValue('textarea');

        expect(content).to.contains('Test:');
        expect(content).to.contains('TestText');
    })
});