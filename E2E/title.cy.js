
describe("Section 1 validando el titulo ", () =>{

    it("Test validar el titulo ", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq', 'ToolsQA')

        cy.log("Ok la funcion title funciona bien")
    })
})