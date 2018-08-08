
module.exports = class Produto{
    /**
    * Construtor da classe Produto.
    * 
    * @constructor
    * @param {String} codigo - Codigo do produto.
    * @param {String} descricao - Descricao do produto.
    */
    constructor(codigo, descricao){
        this._codigo = codigo;
        this._descricao = descricao;
    }

    /**
    * Retorna o codigo.
    */
    getCodigo(){
        this._codigo;
    }

    /**
    * Retorna a descricao.
    */
   getDescricao(){
        this._descricao;
    }
}
