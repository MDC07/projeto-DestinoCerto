const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('./database/data.db');

const CRIAR_TABELA_PASSEIO = 
`
CREATE TABLE IF NOT EXISTS passeios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    local TEXT NOT NULL, 
    valor REAL NOT NULL,
    data TEXT NOT NULL,
    vagas REAL NOT NULL,
    tipo TEXT NOT NULL,
    idioma TEXT NOT NULL,
    guia TEXT NOT NULL,
    transporte BOOLEAN,
    alimentacao  BOOLEAN,
    cafedamanha  BOOLEAN,
    almoco  BOOLEAN,
    fotografia  BOOLEAN,
    primeirossocorros  BOOLEAN,
    equipamentos  BOOLEAN,
    lembrancas  BOOLEAN,
    criancas  BOOLEAN,
    interprete  BOOLEAN,
    descricao TEXT DEFAULT ('') NOT NULL
)
`;

const CRIAR_TABELA_VENDA = 
`
CREATE TABLE IF NOT EXISTS vendas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nomeCliente TEXT NOT NULL,
    destino TEXT NOT NULL,
    dataViagem TEXT NOT NULL, 
    numeroPessoas INTEGER NOT NULL, 
    tipoPacote VARCHAR(100) NOT NULL,
    valor REAL NOT NULL,
    total REAL NOT NULL,
    observacoes TEXT DEFAULT '' 
    
)
`;

bd.serialize(() => {
    bd.run(CRIAR_TABELA_PASSEIO);
});

bd.serialize(() => {
    bd.run(CRIAR_TABELA_VENDA);
});

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;
