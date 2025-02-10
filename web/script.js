const cadastro = document.getElementById('cadastro');

cadastro.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const corpo = {
        nome: cadastro.nome.value,
        valor: parseFloat(cadastro.valor.value), 
        descricao: cadastro.descricao.value
    };

    fetch('http://localhost:4000/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(corpo)
    })
    .then(response => {
        if (response.ok) {
            msg3('Produto cadastrado com sucesso');
            carregarProdutos();
        } else {
            msg3('Erro ao cadastrar produto');
        }
    })
});

function excluirProduto(id) {
    fetch(`http://localhost:4000/produtos/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            msg3('Produto excluído com sucesso');
        } else {
            msg3('Erro ao excluir produto');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        msg3('Erro ao excluir produto');
    });
}
    fetch('http://localhost:4000/produtos')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar produtos');
            }
            return response.json();
        })
        .then(produtos => {
            const tabela = document.getElementById('produtos');
            tabela.innerHTML = '';
            
            produtos.forEach(produto => {
                const linha = document.createElement('tr');
                linha.innerHTML = `
                    <td>${produto.produto_id}</td>
                    <td contenteditable="true">${produto.nome}</td>
                    <td contenteditable="true">${produto.valor.toFixed(2)}</td>
                    <td contenteditable="true">${produto.descricao}</td>
                    <td><button onclick="editarProduto(${produto.produto_id}), (${produto.nome}), (${produto.valor}), (${produto.descricao}) " class="btn btn-primary">Editar</button></td>
                    <td><button onclick="excluirProduto(${produto.produto_id})" class="btn btn-danger">Excluir</button></td>
                `;
                tabela.appendChild(linha);
            });
        })

        function editarProduto(id, nome, valor, descricao){
            corpo={
                nome: nome,
                valor: parseFloat(valor),
                descricao: descricao
            }
            fetch(`http://localhost:4000/produtos/${id}`, {
                method: 'PUT',
                content: 'application/json',
                body: JSON.stringify(corpo)
            })
            .then(response => response.status)
            .then(status => {
                if(status == 202){
                    msg3('Produto editado com sucesso');
                    carregarProdutos();
                }else{
                    msg3('Erro ao editar produto');
                }
            })
        }

function msg3(mensagem) {
    const msg = document.getElementById('msg');
    msg.innerHTML = mensagem;
    setTimeout(() => {
        window.location.reload();
    }, 3000);
}
