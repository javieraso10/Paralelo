///<reference types="Cypress"/>
import 'cypress-file-upload';
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe("Invoke",()=>{

    it(' invoke text', () => {
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should('eq','Input Validation')
        cy.wait(1000)
        cy.get('.page-body > :nth-child(5)').invoke("text").as("info")
        cy.get('@info').should("contain","The information will be submitted to the server if it passes client side validation.")
        cy.get('body > div > div:nth-child(7) > form > label:nth-child(1)').invoke("text").as("labelNombre")
        cy.get('@labelNombre').should("contain","First name").then(()=>{
            cy.get('#firstname').type("katalon")
        })
    });

    it(' invoke style', () => {
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should('eq','Input Validation')
        cy.wait(1000)
        cy.get('.page-body > :nth-child(5)').invoke("attr","style","color:Blue; font-size: 80px")
    
    });

    it(' invoke ocultar', () => {
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should('eq','Input Validation')
        cy.wait(1000)
        cy.get('.page-body > :nth-child(5)').invoke("hide")
        cy.wait(2000);
        cy.get('.page-body > :nth-child(5)').invoke("show","2s")
    });

    it.only(' invoke reto', () => {
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should('eq','Input Validation')
        cy.wait(1000)
        cy.get('[for="surname"]').invoke("hide")
        cy.get('#surname').invoke("hide")  
        
        cy.get('#firstname').type("mostrar")

        cy.get('#firstname').should("have.value","mostrar")

        cy.get('#firstname').invoke("text").as("mostrar").then(()=>{
            cy.wait(2000);
            cy.get('[for="surname"]').invoke("show")
            cy.get('#surname').invoke("show") 
        }) 
    });
})