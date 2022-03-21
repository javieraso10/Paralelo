///<reference types="Cypress"/>
import 'cypress-file-upload';
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe("fechas ",()=>{

    it('fecha', () => {
        cy.visit("https://demoqa.com/date-picker")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        cy.get("#datePickerMonthYearInput").click()
        cy.get('[aria-label="Choose Friday, February 11th, 2022"]').click();
    });
})