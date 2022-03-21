///<reference types="Cypress"/>

describe(" opciones click",()=>{

    it(' click sencillo', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title('OrangeHRM')
        cy.wait(1400)
        cy.get('#txtUsername').type("Admin").should("be.visible");
        cy.get('#txtPassword').type("admin123").should("be.visible");
        cy.get('#btnLogin').should("be.visible").click();
        cy.get('#menu_admin_viewAdminModule > b').should('be.visible').click()
        cy.get('#menu_pim_viewPimModule > b').should("be.visible").click()
    });


    it(' click force: true', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title('OrangeHRM')
        cy.wait(1400)
        cy.get('#txtUsername').type("Admin").should("be.visible");
        cy.get('#txtPassword').type("admin123").should("be.visible");
        cy.get('#btnLogin').should("be.visible").click();
        cy.get('#menu_admin_viewAdminModule > b').should('be.visible').click()
        cy.get('#menu_pim_viewPimModule > b').should("be.visible").click({force: true})
    });

    it.only(' click por coordenadas', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title('OrangeHRM')
        cy.wait(1400)
        cy.get('#txtUsername').type("Admin").should("be.visible");
        cy.get('#txtPassword').type("admin123").should("be.visible");
        cy.get('#btnLogin').should("be.visible").click();

        cy.wait(1400)
        cy.get('#menu_dashboard_index > b').click(5,5)
    });
})