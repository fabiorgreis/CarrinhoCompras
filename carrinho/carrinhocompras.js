const Item = require('./item');

module.exports = class CarrinhoCompras{
    /**
    * Construtor da classe CarrinhoCompras.
    * 
    * @constructor
    */
    constructor(){
        this.itens = [];
    }

    /**
    * Adiciona um item no carrinho.
    * 
    * @param {Produto} produto - Instancia da classe Produto.
    * @param {Number} valorUnitario - Valor unitário do Produto.
    * @param {Number} quantidade - Quantidade do Produto.
    */
    adicionarItem(produto, valorUnitario, quantidade){
        this.itens.push(new Item(produto, valorUnitario, quantidade));
    }

    /**
    * Remove um item do carrinho
    *
    * @param {int} posicaoItem - Indice do item no carrinho, iniciando por 0.    
    */
    removerItem(posicaoItem){
        this.itens.splice(posicaoItem, 1);
    }

    /**
    * Retorna o valor total
    */
    getValorTotal(){
        var total = 0.0;
        this.itens.forEach(function(item) {
            total += item.getValorTotal();
        });
		return total;
    } 

    /**
    * Retorna os itens
    */
    getItens(){
        return this.itens;
    }
}