///<reference types="Cypress"/>
require('cypress-plugin-tab')


describe(" type tab",()=>{

    it(' type tab', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title('ToolsQA')
        cy.wait(1500)
        cy.get('#userName').type('VITI')
        .tab().type('pelaez@gmail.com')
        .tab().type('descripcion loco')
        .tab().type('no se que del mail');
    
    });
})