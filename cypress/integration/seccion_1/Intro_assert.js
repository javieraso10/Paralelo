///<reference types="Cypress"/>

describe("intro asserts ",()=>{

    it(' intro asserts', () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title('ToolsQA')
        cy.wait(1400)
        cy.get('#firstName').should("be.visible").type("Juan")
        cy.get('#lastName').should("be.visible").type("Perez");
        cy.get('#userEmail').should("be.visible").should("be.enabled").type("ejneja@gmail.com");
    });
})