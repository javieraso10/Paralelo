///<reference types='Cypress'/>
import 'cypress-file-upload';
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')

    describe('navegacion pagians back forward',()=>{
        it('navegacion', () => {
            cy.visit('https://demoqa.com/')
            cy.title().should('eq','ToolsQA')
            cy.wait(1000)
            cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
            cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').click()
            cy.wait(2000)
            cy.go('back')
            cy.go("back")
            cy.go("forward")
            cy.go("forward")

    });

    it.only('navegacion reload', () => {
        cy.visit('https://demoqa.com/')
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').click()
        cy.wait(2000)
        cy.get('#userName').type("rodidrgo")
        cy.wait(2000)
        cy.reload()
        cy.go("back")

});

})