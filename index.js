(async () => {
    const database = require('./config');
    const Produto = require('./models/produto');
    try {
        const resultado = await database.sync();
        console.log('Conexão realizada com sucesso!\n', resultado);
    } catch (error) {
        console.log('Erro: conexão mal-sucedida!\n', error);
    }//verifica os modelos do projeto comparado com as tabelas do db e garante que ambos sejam iguais

    //INSERT de novo produto (CREATE)
    const novoProduto = await Produto.create({
        nome: 'Mouse USB',
        preco: 15,
        descricao: 'Mouse bacana'
    })
    console.log(novoProduto);

    //LISTAGEM de todos os produtos (READ)
    const produtos = await Produto.findAll();
    console.log(produtos);

    //LISTAR produto buscado por ID (READ)
    const pRoduto = await Produto.findByPk(1);
    console.log(pRoduto);

    //ALTERAÇÃO de um produto (UPDATE)
    const prOduto = await Produto.findByPk(1);
    console.log(prOduto);

    prOduto.descricao = 'Fiz uma alteração';
    await prOduto.save();

    //DELETAR um produto (DELETE)
    const prodUto = await Produto.findByPk(1);
    console.log(prodUto);

    await prodUto.destroy();

})();