///<reference types='Cypress'/>
import 'cypress-file-upload'
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')

    describe('Comando Personalizados',()=>{
    let tiempo=1000
    before(()=>{
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)
    })
    it('Demo 1', () => {
        cy.RellenarCampo('#userName','rodidrgo',500)
    });
})