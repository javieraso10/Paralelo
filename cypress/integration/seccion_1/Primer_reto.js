///<reference types="Cypress"/>
require('cypress-plugin-tab')

describe("PRIMER RETO",()=>{

    it('reto añadir', () => {
        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq','ToolsQA')
        cy.get('#addNewRecordButton').should("be.visible").click()
        cy.get('#firstName').should("be.visible").type("Javier")
        .tab().type('Alvarez')
        .tab().type('sndjdsnjsd@gmail.com')
        .tab().type('23')
        .tab().type('1700')
        .tab().type('DIGITAL')

        cy.get('#submit').should('be.visible').click()
        cy.wait(2000);
    });

    it('reto editar', () => {
        cy.get('#edit-record-1 > svg').click({force:true})
        cy.get('#firstName').clear()
        cy.wait(2000)
        cy.get('#firstName').type('editado')
        cy.get('#submit').click()
    });

    it('reto filtrar', () => {
        cy.get('#searchBox').should('be.visible').type('Javier')

    });

    it('reto eliminar', () => {
        cy.get('#delete-record-4').should('be.visible').click({force:true})
        cy.get('#searchBox').clear()
    });
})