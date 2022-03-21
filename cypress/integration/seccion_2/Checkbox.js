///<reference types="Cypress"/>

require('cypress-xpath')
require('cypress-plugin-tab')

describe("nueva seccion checkbox ",()=>{

    it(' check uno', () => {
        cy.visit("https://www.w3.org/TR/wai-aria-practices-1.1/examples/checkbox/checkbox-2/checkbox-2.html")
        cy.title().should('eq','Checkbox Example (Mixed-State) | WAI-ARIA Authoring Practices 1.1')
        cy.wait(1000)
        cy.get('#cond2').should("be.visible").uncheck().should("not.be.checked");
        cy.wait(1000)
        cy.get("#cond3").check().should("be.checked")
    });



    it.only(' radiobuttons', () => {
        cy.visit("https://designsystem.digital.gov/components/radio-buttons/")
        cy.title().should('eq','Radio buttons | U.S. Web Design System (USWDS)')
        cy.wait(1000)
        cy.get('.usa-form > .usa-fieldset > :nth-child(3) > .usa-radio__label').should("be.visible").click()
        //cy.visit('https://demoqa.com/radio-button')
        //cy.get('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(2) > div:nth-child(3)').click();
    });
})