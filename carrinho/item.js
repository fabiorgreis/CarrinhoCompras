const Produto = require('./produto');

module.exports = class Item{
    constructor(produto, valorUnitario, quantidade){
        this._produto = produto;
        this._valorUnitario = valorUnitario;
        this._quantidade = quantidade;
    }

    getProduto(){
        return this._produto;
    }

    getValorUnitario(){
        return this._valorUnitario;
    }

    getQuantidade(){
        return this._quantidade;
    }

    getValorTotal(){
        return this._valorUnitario * this._quantidade;
    }
}