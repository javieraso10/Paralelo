///<reference types="Cypress"/>

require('cypress-xpath')
require('cypress-plugin-tab')

describe("prueba selects",()=>{

    it(' select', () => {
        cy.visit("https://yosoy.dev/listas-desplegables-en-los-formularios-html/")
        cy.title().should('eq','Listas desplegables en los formularios HTML - Michelle Torres')
        cy.wait(1000)
        cy.get('#post-285 > div.td-container > div > div > div > div.td-post-content > p:nth-child(24) > select').should("be.visible").select("Fedora").should("have.value","10")
        .then(()=>{
            cy.get('#post-285 > div.td-container > div > div > div > div.td-post-content > p:nth-child(33) > a').click();
        })
    });

    it.only(' select dos', () => {
        cy.visit("https://demoqa.com/select-menu")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        cy.get('#cars').select("Volvo");
        
    });

    it(' select tres', () => {
        cy.visit("https://demos.telerik.com/kendo-ui/multiselect/index")
        cy.title().should('eq','Demo of core features in jQuery MultiSelect widget | Kendo UI for jQuery')
        cy.wait(1000)
        //cy.xpath("").select(["Steven White","Vicdcn dfsjdj"])
        //cy.get('.G43f7e > :nth-child(4)').click()
    });
})