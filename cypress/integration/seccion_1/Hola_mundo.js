describe("Bienvenido al curso seccion1",()=>{

    it('prueba', () => {
        cy.log("prueba victoooor")
        cy.wait(5000)
    });

    it('segundo test', () => {
        cy.visit("https://demoqa.com/text-box")
        cy.get("#userName").type("HUERTINAAAAA")
        cy.wait(4000)

    });
})//cierre