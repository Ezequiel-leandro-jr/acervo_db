(async () => {
    const database = require('ACERVO_DB/config');
    const Produto = require('ACERVO_DB/produto')
    await database.sync();//verifica os modelos do projeto comparado com as tabelas do db e garante que ambos sejam iguais

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
    const produto = await Produto.findByPk(1);
    console.log(produto);

    //ALTERAÇÃO de um produto (UPDATE)
    const produto = await Produto.findByPk(1);
    console.log(produto);

    produto.descricao = 'Fiz uma alteração';
    await produto.save();

    //DELETAR um produto (DELETE)
    const produto = await Produto.findByPk(1);
    console.log(produto);

    await produto.destroy();

})();