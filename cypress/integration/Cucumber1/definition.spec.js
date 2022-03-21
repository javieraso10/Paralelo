Given ('abrir el navegador',()=>{
    cy.visit("https://demoqa.com/text-box")
})

When ('Cargando el nombre {word}',(Name)=>{
    cy.get('#userName').should("be.visible").type(Name);
    cy.wait(500);
})

When ('cargando el email {word}',(Email)=>{
    cy.get('#userEmail').should("be.visible").type(Email);
    cy.wait(500);
})

And ('cargando la direccion',()=>{
    cy.get('#currentAddress').should("be.visible").type("direccion uno");
    cy.wait(500);
})

Then('validamos el nombre de la pagina',()=>{
    cy.title('eq',"ToolsQA")
    cy.wait(1500);
})