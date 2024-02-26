class compraProduto {

    produto_no_carrinho() {
        cy.visit('/')
        cy.contains('span','Shop New Yoga').click()
        cy.contains('a','Overnight Duffle ').click()
        cy.get('#product-addtocart-button').click()
        cy.wait(3000)

    }

    finalizar_compra() {
        cy.visit('/')
        cy.get('.showcart').click()
       // cy.contains('span','My Cart').click()
        cy.get('#top-cart-btn-checkout').click()
        cy.get('#C5HDOK8').type('Teste')
        cy.get('#XCF5UCC').type('6146 Honey Bluff Parkway')
        cy.get('#OVIP4WK').click().type('Mic').type('{enter}')
        cy.get('#P051EJF').type('Calder')
        cy.get('#T774UQD').type('49628-7978')
        cy.get('#DOU66JS').type('(555) 229-3326')
        cy.contains('td','Table Rate').click()
        cy.contains('span','Next').click()
        cy.contains('span','Place Order').click()
        cy.contains('span','Thank you for your purchase!').should('be.visible')
    }

}
export default new compraProduto();