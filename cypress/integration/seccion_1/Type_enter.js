///<reference types="Cypress"/>

describe(" funciones para type",()=>{

    it(' type --> enter', () => {
        cy.visit("https://www.google.com/")
        cy.title().should("eq","Google")
        cy.wait(1500)
        cy.get("#L2AGLb > div").click();
        cy.get("[name='q']")
        .type("cypress io {enter}")
        cy.get('#rso > div:nth-child(1) > div > div > div > div > div > div > div.yuRUbf > a > h3').click();
        
    });
})