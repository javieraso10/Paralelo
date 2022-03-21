///<reference types="Cypress"/>
import 'cypress-file-upload';
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe(" ",()=>{

    it(' ', () => {
        cy.visit("")
        cy.title().should('eq','')
        cy.wait(1000)
    });
})


/// NO LO HE REALIZADO AUN VOLVER AL FINAL DEL CURSO