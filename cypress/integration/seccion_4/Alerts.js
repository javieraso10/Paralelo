///<reference types="Cypress"/>
import 'cypress-file-upload';
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe("ALERTS",()=>{

    it('alerta', () => {
        cy.visit("https://demoqa.com/alerts")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        cy.get('#alertButton').click()
        cy.on("window:alert",(str)=>{
            expect(str).to.equal("You clicked a button")
            return true;
        })
    });
})