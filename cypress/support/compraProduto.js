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
        cy.contains('span','1').click
        cy.get('.showcart').click()
        cy.wait(5000)
        cy.contains('span','Proceed to Checkout').click()
        cy.wait(7000)
        cy.get('[name="company"]').type('Teste')
        cy.get('[name="street[0]"]').type('6146 Honey Bluff Parkway')
        cy.get('[name="region_id"]').select('Michigan')
        cy.get('[name="city"]').type('Calder')
        cy.get('[name="postcode"]').type('49628-7978')
        cy.get('[name="telephone"]').type('(555) 229-3326')
        cy.contains('td','Table Rate').click()
        cy.contains('span','Next').click()
        cy.wait(4000)
        cy.contains('span','Place Order').click()
        cy.contains('span','Thank you for your purchase!').should('be.visible')
    }

}
export default new compraProduto();