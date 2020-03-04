module.exports = {
    beforeEach: browser => {
        browser.url('https://www.google.com/')
            .waitForElementPresent('body')
    },
    after: browser => {
        browser.end()
    },
    'Searching Google': browser => {
        browser
            .setValue('input[name="q"]', ['Perez Willie-Nwobu', browser.Keys.ENTER])
            .waitForElementVisible('#res')
            .assert.containsText('#res', 'Perez Willie-Nwobu')
            .clearValue('input[name="q"]')
            .setValue('input[name="q"]', ['Cookie', browser.Keys.ENTER])
            .assert.containsText('#res', 'Cookie')
            .clearValue('input[name="q"]')
            .setValue('input[name="q"]', ['jungle', browser.Keys.ENTER])
            .expect.element('input[name="q"]').value.equal('jungle')
        browser
            .clearValue('input[name="q"]')
            .setValue('input[name="q"]', ['Hello', browser.Keys.ENTER])
            .expect.element('input[name="q"]').value.equal('Hello')
        browser.pause(10000)


    }
}