///<reference types="Cypress"/>
require('cypress-xpath')
require('cypress-plugin-tab')

describe("selectores ",()=>{

    it('selector ID', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        cy.get('#userName').should('be.visible').type('escribimos por id');
    });

    it('selector por atributo', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        cy.get('[placeholder="Full Name"]').should('be.visible').type('escribimos por atributo');
    });


    it('selector por XPath', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        cy.xpath('//*[@id="userName"]').should('be.visible').type('escribimos por xpath')
    });

    it.only('selector por contains', () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        cy.get('.custom-control-label').contains('Reading').click()
    });

    it.only('selector por selector', () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        cy.get('#firstName').should('be.visible').type('escribimos por selector')
    });
})