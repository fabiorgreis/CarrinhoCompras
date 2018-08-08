const Item = require('./item');

module.exports = class CarrinhoCompras{
    constructor(){
        this.itens = [];
    }

    adicionarItem(produto, valorUnitario, quantidade){
        this.itens.push(new Item(produto, valorUnitario, quantidade));
    }

    removerItem(posicaoItem){
        this.itens.splice(posicaoItem, 1);
    }

    getValorTotal(){
        var total = 0.0;
        this.itens.forEach(function(item) {
            total += item.getValorTotal();
        });
		return total;
    } 

    getItens(){
        return this.itens;
    }
}