module.exports = {
    beforeEach: browser => {
        browser.url("http://localhost:3000")
            .waitForElementPresent("#root")
    },
    after: browser=> {
        browser.end()
    },
    'Check the home page': browser => {
        browser
            .verify.visible('.bm-burger-button')
            .verify.containsText('.titleBar', 'Wanted Queries')
            .verify.containsText('#welcomeScreen', 'Welcome to "Wanted Queries".')
            .verify.containsText('#welcomeScreen', 'Enter Wanted')
            .verify.containsText('#welcomeScreen', 'Modify Wanted')
            .verify.containsText('#welcomeScreen', 'Cancel Wanted')
            .verify.visible('.required')
            .verify.visible('.error')
    },
    // 'Check required fields on warrant': browser => {
    //     browser
    //         .click('.bm-burger-button')
    //         .waitForElementVisible('p[name="enterOption"]')
    //         .click('p[name="enterOption"]')
    //         .waitForElementVisible(/* header input field */)
    //         .verify.attributeContains(/* header input field */, 'class', 'required')
    //         .verify.attributeContains(/* mke input field */, 'class', 'required')
    //         .verify.attributeContains(/* originating agency identifier input field */, 'class', 'required')
    //         .verify.attributeContains(/* name input field */, 'class', 'required')
    //         .verify.attributeContains(/* sex input field */, 'class', 'required')
    //         .verify.attributeContains(/* race / ethnicity input field */, 'class', 'required')
    //         .verify.attributeContains(/* height input field */, 'class', 'required')
    //         .verify.attributeContains(/* weight input field */, 'class', 'required')
    //         .verify.attributeContains(/* hair input field */, 'class', 'required')
    //         .verify.attributeContains(/* offense input field */, 'class', 'required')
    //         .verify.attributeContains(/* date of warrant/violation input field */, 'class', 'required')
    //         browser.getAttribute(/* drivers license input field */, 'class', result=>{
    //             browser.verify.ok(result.value.indexOf('required')===-1, 'Field not required.')
    //         })
    //         browser.getAttribute(/* dl state input field */, 'class', result=>{
    //             browser.verify.ok(result.value.indexOf('required')===-1, 'Field not required.')
    //         })
    //         browser.getAttribute(/* dl expiration date input field */, 'class', result=>{
    //             browser.verify.ok(result.value.indexOf('required')===-1, 'Field not required.')
    //         })
    //         browser.getAttribute(/* license plate input field */, 'class', result=>{
    //             browser.verify.ok(result.value.indexOf('required')===-1, 'Field not required.')
    //         })
    //         browser.getAttribute(/* license state input field */, 'class', result=>{
    //             browser.verify.ok(result.value.indexOf('required')===-1, 'Field not required.')
    //         })
    //         browser.getAttribute(/* license expiration date input field */, 'class', result=>{
    //             browser.verify.ok(result.value.indexOf('required')===-1, 'Field not required.')
    //         })
    // }
}