///<reference types='Cypress'/>
import 'cypress-file-upload'
require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')

    describe('hooks',()=>{
        
        before(()=> {
            cy.log('esto se pinta antes de todo SOLO UNA VEZ');
        })

        beforeEach(()=>{
            cy.log('esto se pinta antes de CADA TEST ');
        })

        afterEach(()=>{
            cy.log('esto se pinta despues de CADA TEST');
        })

        after(()=>{
            cy.log('esto se pinta al FINAL DEL TODO');
        })

        it('test uno', () => {
            cy.log("test uno")
        });

        it('test dos', () => {
            cy.log("test uno")
        });

        
})