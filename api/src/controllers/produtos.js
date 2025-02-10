const con = require('../connect');

function create(req, res) {
    const { nome, valor, descricao } = req.body;
    const sql = `INSERT INTO produtos (nome, valor, descricao) VALUES ('${nome}', '${valor}', '${descricao}')`;
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao cadastrar produtos');
        } else {
            res.status(201).json('Produto cadastrado com sucesso');
        }
    });
};

function del(req, res) {
    const id = req.params.id;
    const sql = `DELETE FROM produtos WHERE produto_id = ${id}`;
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao deletar produto');
        } else {
            res.status(200).json('Produto deletado com sucesso');
        }
    });
}

function update(req, res) {
    const id = req.params.id;
    const sql = `UPDATE produtos SET nome = ${nome}, valor = ${valor}, descricao = ${descricao} WHERE produto_id = ${id}`;
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao editar produto');
        } else {
            res.status(202).json('Produto editado com sucesso');
        }
    });
}
function read(req, res) {
    const sql = 'SELECT * FROM produtos';
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao consultar produtos');
        } else {
            res.status(200).json(result);
        }
    });
}

module.exports = {
    create,
    read,
    del,
    update
}