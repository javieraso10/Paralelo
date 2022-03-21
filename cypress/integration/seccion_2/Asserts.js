///<reference types="Cypress"/>

require('cypress-xpath')
require('cypress-plugin-tab')

describe("asserts",()=>{

    it(' assert contains', () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq','My Store')
        cy.wait(1000)
        cy.get('#block_top_menu').contains("Women").click();
    });

    it(' assert find eq', () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq','My Store')
        cy.wait(1000)
        cy.wait(1000)
        cy.get('.product-container').find(".product-image-container").eq(0).click();
    });

    it(' assert find eq, validando estado producto', () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq','My Store')
        cy.wait(1000)
        cy.wait(1000)
        cy.get('.product-container').find(".product-image-container").eq(0).click();
        cy.get('#product_condition').find(".editable").then((e)=>{
            let estado=e.text();
            if(estado=="New"){
                cy.log('es nuevo');
            }
        });
    });

    it(' assert find eq, validando estado del producto y precio', () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq','My Store')
        cy.wait(1000)
        cy.wait(1000)
        cy.get('.product-container').find(".product-image-container").eq(0).click();
        cy.get('#product_condition').find(".editable").then((e)=>{
            let estado=e.text();
            if(estado=="New"){
                cy.log('es nuevo');
            }
        });
        cy.get('#our_price_display').then((e)=>{
            let precio=e.text()
            precio=precio.slice(1,6)
            cy.log(precio);
            if(precio<15){
                cy.log('dentro del presupuesto');
                cy.get('.exclusive > span').click()
            }else{
                cy.log('fuera del presupuesto');
            }
        })
    });

    it(' assert contain.text y have.text', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title('ToolsQA')
        cy.wait(1500)
        cy.get('#userName').type('VITI')
        .tab().type('pelaez@gmail.com')
        .tab().type('descripcion loco')
        .tab().type('no se que del mail');
        cy.get('#submit').click()
        cy.get('#name').should("have.text","Name:VITI")
        cy.get('#name').should("contain.text","VITI")
    
    });

    it(' assert have.value', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title('ToolsQA')
        cy.wait(1500)
        cy.get('#userName').type('VITI')
        cy.get('#userName').should("have.value","VITI").then(()=>{
            cy.get('#userEmail').type('pelaez@gmail.com')
            cy.get('#submit').click()
        })
    });

    it(' assert have.class', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title('ToolsQA')
        cy.wait(1500)
        cy.get('#userName').should("be.visible").should("have.class","mr-sm-2").then(()=>{
            cy.get('#userName').type("VITI");
        })
        
    });

    it(' assert varias condiciones con AND', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title('ToolsQA')
        cy.wait(1500)
        cy.get('#userName').should("be.visible").and("have.class","mr-sm-2").then(()=>{
            cy.get('#userName').type("VITI");
        })
        
    });

    it(' assert con not.*****.***** ', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title('ToolsQA')
        cy.wait(1500)
        cy.get('#userName').should("be.visible").and("not.have.class","mr-sm-22").then(()=>{
            cy.get('#userName').type("VITI");
        })
        
    });

    it(' assert length ', () => {
        cy.visit("https://www.freecodecamp.org/news/html-tables-table-tutorial-with-css-example-code/")
        cy.wait(1500)
        cy.get('#site-main > div > article > section > div.post-and-sidebar > section > table.default').should("have.length","1")
        
    });
    it.only(' assert  with invoke', () => {
        cy.visit("https://ibazan.000webhostapp.com/Reto_Asserts.html")
        let espera =1500
        cy.wait(espera)
        let a=10
        let b=a+20
        cy.get('#numeroA').should("be.visible").and("have.class","numA").type(a);
        cy.get('#numeroB').should("be.visible").and("have.class","numB").type(b);
        cy.contains('Sumar').click();
        cy.get('#resultado').should("have.text","40").then((e)=>{
            cy.log(e.text());
            let res=e.text()
            if(res>30){
                a=a-10
                b=b-10
                cy.get('#numeroA').invoke("attr","placeholder").should("contain","Ingresar valor").then(()=>{
                    cy.get('#numeroA').type(a);
                    cy.get('#numeroA').invoke("attr","style","color:yellow")
                })
                cy.wait(espera)
                cy.get('#numeroB').should("be.visible").and("have.class","numB").clear().type(b);
                cy.wait(espera)
                cy.contains('Sumar').click();
            }else{
                a=a+10
                b=b+10
                cy.get('#numeroA').should("be.visible").and("have.class","numA").clear().type(a);
                cy.wait(espera)
                cy.get('#numeroB').should("be.visible").and("have.class","numB").clear().type(b);
                cy.wait(espera)
                cy.contains('Sumar').click();
            }
        });
        
    });

})