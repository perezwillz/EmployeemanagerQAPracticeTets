module.exports = {
   beforeEach: browser => {
       browser
       .url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
       .waitForElementPresent('body') // we are waiting for the website body to show
   },

   after: browser => {
       browser
       .end
   },

   // Search for employee
   'Verify elements before selection': browser => {
       browser
       .waitForElementVisible('.titleText')
       .waitForElementVisible('#noEmployee')
       .verify.containsText('.titleText', 'Employee Manager')
       .verify.containsText('#noEmployee', 'No Employee Selected')
   },
    'Click All Employees': browser => {
        browser
        .click('li[name="employee1"]')
        .click('li[name="employee2"]')
        .click('li[name="employee3"]')
        .click('li[name="employee5"]')
        .click('li[name="employee9"]')
        .click('li[name="employee4"]')
        .click('li[name="employee5"]')
        .click('li[name="employee9"]')
        .click('li[name="employee4"]')
       
    },
    'Add New Employee': browser => {
        browser
        .expect.element('li[name="addEmployee"]').text.equal('+ Add Employee')
        browser
        .click('li[name="addEmployee"]')
        .click('li[name="employee11"]')
        .click('li[name="addEmployee"]')
        .click('li[name="employee12"]')
        .click('li[name="addEmployee"]')
        .click('li[name="employee13"]')
        .click('li[name="addEmployee"]')
        .click('li[name="employee14"]')
    },
    'Edit Employee and Submit': browser => {
        browser
        .click('li[name="employee1"]')
        .clearValue('input[name="nameEntry"]')
        .setValue('input[name="nameEntry"]', 'Perez willie-Nwobu') 
        .clearValue('input[name="phoneEntry"]')
        .setValue('input[name="phoneEntry"]', '1234567899')
        .clearValue('input[name="titleEntry"]')
        .setValue('input[name="titleEntry"]', 'Product Manager') 
        .click('#saveBtn')
        .click('li[name="employee1"]')
        .verify.valueContains('input[name="nameEntry"]', 'Perez willie-Nwobu')
    },

    'Make sure employee does not save invalid arguments': browser => {
        browser
        .click('li[name="employee1"]')
        .clearValue('input[name="nameEntry"]')
        .setValue('input[name="nameEntry"]', 'Perez willie-Nwobu') 
        .clearValue('input[name="phoneEntry"]')
        .setValue('input[name="phoneEntry"]', '1234567899lkdjdjsafaksbfbkh') 
        .click('#saveBtn')
        .waitForElementVisible('.errorMessage')
        .waitForElementVisible('.errorCard')
        .clearValue('input[name="phoneEntry"]')
        .clearValue('input[name="titleEntry"]')
        .setValue('input[name="phoneEntry"]', '1234567899') 
        .setValue('input[name="titleEntry"]', '') 
        .click('#saveBtn')
        .waitForElementVisible('.errorMessage')
        .waitForElementVisible('.errorCard')
        // Error message for invalid title does not show
        .pause(10000)
        
    }


}
