module.exports = {
    beforeEach: browser => {
        browser
        .url('https://www.google.com/')
        .waitForElementPresent('body')

    },
    after: browser => {
        browser 
        .end
    },

    'Searching Google': browser => {
        browser 
        .setValue('input[name="q"]',['Cookie Monster', browser.Keys.ENTER])
        .waitForElementVisible('#res')
        .verify.containsText('#res', 'Cookie Monster')
    },

    'Searching Perez' : browser => {
        browser
        .setValue('input[name="q"]',['Perez Willie-Nwobu', browser.Keys.ENTER])
        .waitForElementVisible('#res')
        .verify.containsText('#res', 'Perez')
    }
}