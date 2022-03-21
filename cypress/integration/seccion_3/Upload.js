///<reference types="Cypress"/>
import 'cypress-file-upload';
require('cypress-xpath')
require('cypress-plugin-tab')

describe("pruebas varias ",()=>{

    it('uplodad file', () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        const ruta='maxresdefault.jpg'
        cy.get('#uploadPicture').attachFile(ruta)
        cy.wait(3000);
    });
})