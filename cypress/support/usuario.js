
function gerarString() {
  var letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var numeros = '0123456789';
  var string = '';
  for (var i = 0; i < 5; i++) {
    var indice = Math.floor(Math.random() * letras.length);
    string += letras.charAt(indice);
  }
  var indiceNumero = Math.floor(Math.random() * numeros.length);
  string += numeros.charAt(indiceNumero);
  return string;
}

const usuaruiox = gerarString();


class usuario {

    cadastroUsuario() {
        cy.visit('customer/account/create/')
        cy.get('#firstname').type('Teste')
        cy.get('#lastname').type('Automatizado')

        cy.get('#email_address').type(usuaruiox+'@testvicauto.com')
        cy.get('#password').type('Autoteste@223')
        cy.get('#password-confirmation').type('Autoteste@223')
        cy.get('[title="Create an Account"]').click()
    }

    login() {
        cy.visit('customer/account/login/')
        cy.get('#email').type(usuaruiox+'@testvicauto.com')
        cy.get('#pass').type('Autoteste@223')
        cy.get('#send2').click()

    }


}
export default new usuario();