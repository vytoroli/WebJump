import usuario from "../support/usuario";
import compraProduto from "../support/compraProduto";
describe('Cadastro usuário, login e compra completa', () => {

     beforeEach(() => {
          cy.visit('/')
     })

     it('Cadastro de usuário', () => {
          usuario.cadastroUsuario()
     })

     it('Login', ()=>{
          usuario.login()
     })

     it('Compra produto', () => {
          usuario.login()
          compraProduto.produto_no_carrinho()
          compraProduto.finalizar_compra()
      })
     

})
