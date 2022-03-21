///<reference types="Cypress"/>
import 'cypress-file-upload';
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')


describe("eachs ",()=>{

    it('each', () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq','My Store')
        cy.wait(3000)
        cy.get('.product-name').each(($el,index,$list)=>{
            cy.log($el.text());

        })
    });

    it('each', () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq','My Store')

            cy.wait(1000)
        cy.get('.product-name').each(($el,index,$list)=>{
          let vestido=$el.text();
          if(vestido.includes("Blouse")){
            cy.wrap($el).click()
          }
        })  
    });

    it.only('each 2', () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq','My Store')

        cy.wait(1000)
        for (let index = 0; index < 3; index++) {
            cy.get('#center_column .product-name').eq(index).click({force:true})
            cy.wait(1500);
            cy.get('#quantity_wanted').clear().type("4")
            cy.get('#group_1').select("M")
            cy.get('.exclusive > span').click()
            cy.get('.button-container').click()
            cy.get('[title="My Store"]').click()
        }
        
        
    });

})