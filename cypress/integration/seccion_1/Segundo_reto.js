///<reference types="Cypress"/>
require('cypress-xpath')
require('cypress-plugin-tab')

describe("segundo reto",()=>{

    it('search', () => {
        cy.visit("https://computer-database.gatling.io/computers")
        cy.title("Computers database")
        cy.xpath("//*[@id='searchbox']").type("ASCI")
        cy.get('#searchsubmit').should("be.visible").click()
        cy.wait(1000)
    });
    it('add', () => {
        cy.get("#add").should("be.visible").click()
        cy.wait(1000)
        cy.get('#name').should("be.visible").type("ASCI NUEVO JAVI")
        .tab().type("2000-12-12")
        .tab().type("2001-12-03")
        cy.get('#company').should("be.enabled").select("Nokia").should("have.value","16")
        cy.get('.primary').should("be.visible").should("be.enabled").click()
    });
    it('search', () => {
        cy.xpath("//*[@id='searchbox']").type("ASCI NUEVO")
        cy.get('#searchsubmit').should("be.visible").click()
        cy.wait(1000)
    });
})