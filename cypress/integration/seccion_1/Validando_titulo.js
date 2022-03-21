///<reference types="Cypress"/>

describe(" seccion 1- validanto titulo",()=>{

    it('validar el titulo', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.log('Ok');
        
    });

})


