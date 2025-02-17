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
                    <td><button onclick="excluirProduto(${produto.produto_id})" class="btn btn-danger">Excluir</button></td>
                    <td><button onclick="alterar(${produto.produto_id})" class="btn btn-danger">Alterar</button></td>
                `;
                tabela.appendChild(linha);
            });
        })

        function alterar(e) {
            const id = e.parentNode.parentNode.children[0].textContent
            const corpo = {
                nome: e.parentNode.parentNode.children[1].textContent,
                valor: e.parentNode.parentNode.children[2].textContent,
                descricao: e.parentNode.parentNode.children[3].textContent
            }
            fetch(`http://localhost:4000/produtos/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(corpo)
            })
                .then(response => response.status)
                .then(status => {
                    if (status === 202) {
                        msg3('Produto alterado com sucesso');
                    } else {
                        msg3('Erro ao alterar produto');
                    }
                });
        }

function msg3(mensagem) {
    const msg = document.getElementById('msg');
    msg.innerHTML = mensagem;
    setTimeout(() => {
        window.location.reload();
    }, 3000);
}
