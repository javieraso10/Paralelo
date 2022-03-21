///<reference types="Cypress"/>

describe("type pageup pagedown",()=>{

    it(' pageUp', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title('ToolsQA')
        cy.wait(1400)
                cy.get('#userName').type('{pageUp}')
        //cy.get('#userName').type('{pageDown}')
        cy.wait(1400)

    });

    it(' pageUp', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title('ToolsQA')
        cy.wait(1400)
        //cy.get('#userName').type('{pageUp}')
        cy.get('#userName').type('{pageDown}')
        cy.wait(1400)

    });
    it.only(' pageUp', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title('ToolsQA')
        cy.wait(1400)
        //cy.get('#userName').type('{pageUp}')
        cy.get('#userName').type('{pageDown}')
        cy.wait(1400)

    });
})