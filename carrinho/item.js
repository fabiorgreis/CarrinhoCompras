const Produto = require('./produto');

module.exports = class Item{
    /**
    * Construtor da classe Item.
    * 
    * @constructor
    * @param {Produto} produto - Instancia da classe produto.
    * @param {Number} valorUnitario - Valor Unitario do produto.
    * @param {Number} quantidade - Quantidade do produto.
    */
    constructor(produto, valorUnitario, quantidade){
        this._produto = produto;
        this._valorUnitario = valorUnitario;
        this._quantidade = quantidade;
    }

    /**
    * Retorna o produto.
    */
    getProduto(){
        return this._produto;
    }

    /**
    * Retorna o Valor Unitario.
    */
    getValorUnitario(){
        return this._valorUnitario;
    }

    /**
    * Retorna a quantidade.
    */
    getQuantidade(){
        return this._quantidade;
    }

    /**
    * Retorna o Valor total.
    */
    getValorTotal(){
        return this._valorUnitario * this._quantidade;
    }
}