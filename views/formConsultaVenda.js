<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabela de Negócios</title>
    <link rel="stylesheet" type="text/css" href="http://localhost:3000/css/style.css">
    <script src="http://localhost:3000/js/validador.js"></script> 
</head> 
<body>
    <h1>Tabela de Negócios</h1> 
    <main>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome do Cliente</th>
                    <th>Destino</th>
                    <th>Data da Viagem</th>
                    <th>Número de Pessoas</th>
                    <th>Tipo de Pacote</th>
                    <th>Valor (R$)</th>
                    <th>Total (R$)</th>
                    <th>Observações</th>
                </tr>
            </thead>
            <tbody>
                <!-- Os dados dos negócios serão inseridos aqui dinamicamente -->
                <% negocios.forEach((negocio) => { %>
                    <tr>
                        <td><%= negocio.id %></td>
                        <td><%= negocio.nomeCliente %></td>
                        <td><%= negocio.destino %></td>
                        <td><%= new Date(negocio.dataViagem).toLocaleDateString('pt-BR') %></td>
                        <td><%= negocio.numeroPessoas %></td>
                        <td><%= negocio.tipoPacote %></td>
                        <td>R$ <%= parseFloat(negocio.valor).toFixed(2).replace('.', ',') %></td>
                        <td>R$ <%= parseFloat(negocio.total).toFixed(2).replace('.', ',') %></td>
                        <td><%= negocio.observacoes %></td>
                    </tr>
                <% }) %>
            </tbody>
        </table>
    </main>
    <footer>
        <ul>
            <li><a href="http://localhost:3000/">Voltar</a></li>
        </ul>
    </footer>
</body>
</html>
