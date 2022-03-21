///<reference types="Cypress"/>
import 'cypress-file-upload';
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe("ALIAS",()=>{

    it('alias', () => {
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should('eq','Input Validation')
        cy.wait(1000)
        cy.get('#firstname').as("nom")
        cy.get('@nom').type("Pedro");

    });
})