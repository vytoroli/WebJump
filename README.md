Bem vindo ao projeto - Teste técnico da WebJump

Para rodar o teste automatizado de forma local, siga os passos abaixo:
- Node.js instalado - https://nodejs.org/pt-br/download
- Editor de codigo fonte - (Sugiro VSCode)

Como rodar:
- Baixar o repositório
      - utilizando o comando  git clone https://github.com/vytoroli/WebJump.git' no terminal no VScode ou baixando o arquivo .zip dos arquivos;
- No VScode, abra a pasta do arquivo.
- Abra o terminal
- Digite o comando npm install -D cypress@13.6.4
- Depois de instalado, digite o comando npx cypress open.
- Quando a aplicação abrir, selecione E2E testing.
- Na pagina seguinte, click em continue e depois selecione o navegador. 
- Click star E2E...
- Ao abrir o navegador, click em CadastroUsuario&Compra para rodar o teste.

*Outra opção é rodar o teste de forma headless(codigo roda no terminal sem a demonstração visual) que pode ser feita através do comando npx cypress run no terminal ou no menu Actions do Github nesse repositório.
