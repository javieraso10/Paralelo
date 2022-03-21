///<reference types="Cypress"/>
import 'cypress-file-upload';
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe("Mouse",()=>{

    it('Drag and Drop', () => {
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
        cy.title().should('eq','The Internet')
        cy.wait(1000)
        cy.get('#column-a').drag("#column-b")
    });

    it.only('Slider', () => {
        cy.visit("https://www.w3schools.com/howto/howto_js_rangeslider.asp")
        cy.title().should('eq','How To Create Range Sliders')
        cy.wait(1000)
        cy.get('#slidecontainer > input[type=range]').invoke("attr","value",10);
        
    });
})