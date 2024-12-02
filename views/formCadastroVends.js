<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastrar Venda</title>
    <link rel="stylesheet" type="text/css" href="http://localhost:3000/css/style.css">
    <script src="http://localhost:3000/js/validador.js"></script> 
</head> 
<body>
    <h1>Cadastrar Venda</h1> 
        <main>
    <form name="cadastra_venda" action="/passeios/form" method="post" onsubmit="return validarDadosVenda()">
        <label for="nomeCliente">Nome do Cliente:</label>
        <input type="text" id="nomeCliente" name="nomeCliente" placeholder="Nome do cliente"/>
        <br>

        <label for="destino">Destino:</label>
        <input type="text" id="destino" name="destino" placeholder="Destino da viagem"/>
        <br>

        <label for="dataViagem">Data da Viagem:</label>
        <input type="date" id="dataViagem" name="dataViagem"/>
        <br>

        <label for="numeroPessoas">Número de Pessoas:</label>
        <input type="number" id="numeroPessoas" name="numeroPessoas" placeholder="Número de pessoas"/>
        <br>

        <label for="tipoPacote">Tipo de Pacote:</label>
        <select id="tipoPacote" name="tipoPacote">
            <option value=""  disabled selected></option>
            <option value="combinado">Pacote Combinado</option>
            <option value="fechado">Pacote Fechado</option>
            <option value="completo">Pacote Completo</option>
        </select>
        <br>

        <label for="valor">Valor (R$): </label>
            <input type="number" id="valor" name="valor" step="0.01" min="0" placeholder="R$ 0,00" oninput="formatarMoeda(this)"/>
        <br>


        <label for="total">Total:</label>
        <input type="text" id="total" name="total" placeholder="Total" oninput="validarNumeroComVirgula(event)"/>
        <br>

        <label for="observacoes">Observações:</label>
        <textarea cols="20" rows="10" id="observacoes" name="observacoes" placeholder="Informações adicionais"></textarea>
        <br>
         <input type="submit" value="Salvar"/>
        </form>
    </main>
    <footer>
        <ul>
            <li><a href="http://localhost:3000/">Voltar</a></li>
        </ul>
    </footer>
        <br/>
        <br/>
        <script>
          function validarDadosVenda() {
              const nomeCliente = document.getElementById('nomeCliente').value.trim();
              const destino = document.getElementById('destino').value.trim();
              const dataViagem = document.getElementById('dataViagem').value.trim();
              const numeroPessoas = document.getElementById('numeroPessoas').value.trim();
              const tipoPacote = document.getElementById('tipoPacote').value.trim();
              const valor = document.getElementById('valor').value.trim();
              const observacoes = document.getElementById('observacoes').value.trim();
      
              if (!nomeCliente || !destino || !dataViagem || !numeroPessoas || !tipoPacote || !valor || !observacoes) {
                  alert('Por favor, preencha todos os campos antes de salvar.');
                  return false; // Impede o envio do formulário
              }
      
              // Se todos os campos estiverem preenchidos, o formulário é enviado
              return true;
          }
      </script>
      <script>
        function validarNumeroComVirgula(event) {
            let valor = event.target.value;
            valor = valor.replace(/[^0-9,]/g, '');
            event.target.value = valor;
        }
      </script>
    </form> 
</body>
</html>
