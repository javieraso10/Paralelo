<reference types='Cypress'/>
import 'cypress-file-upload'
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')

    describe('pruebas',()=>{
        it('prueab', () => {
            cy.visit('url')
            cy.title().should('eq','titulo')
            cy.wait(1000)
    });
})