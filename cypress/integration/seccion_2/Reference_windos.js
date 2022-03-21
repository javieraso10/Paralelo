///<reference types="Cypress"/>

require('cypress-xpath')
require('cypress-plugin-tab')

describe("reference windows",()=>{

    it('reference charset', () => {
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should('eq','The Number Game')
        cy.wait(1000)
        cy.document().should("have.property","charset").and("eq","UTF-8")
    });
    it.only('reference url', () => {
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should('eq','The Number Game')
        cy.wait(1000)
        cy.url().should("include","random-number.html")
        cy.url().should("eq","https://testsheepnz.github.io/random-number.html")

    });

})