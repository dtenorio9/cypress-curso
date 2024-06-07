
describe("hola", () =>  {

    it("mi primer test -> hola mundo", () => {
        cy.log("Hola mundo")
        cy.wait(1000)
    })

    it("Segundo test -> campo name", () => {
        cy.visit('https://testingqarvn.com.es/datos-personales/')
        cy.get('#wsf-1-field-21').type('Erick')
        cy.get('#wsf-1-field-22').type('Tenorio')
        cy.get('#wsf-1-field-23').type('daniel.tenorio@capgemini.com')
        cy.get('#wsf-1-field-24').type('12234131')
        cy.wait(4000)    
        cy.get('#wsf-1-field-28').type('Demo direccion')
        cy.get('#wsf-1-field-27').click()   
        cy.wait(2000)
    })
})