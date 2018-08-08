
module.exports = class Produto{
    constructor(codigo, descricao){
        this._codigo = codigo;
        this._descricao = descricao;
    }

    getCodigo(){
        this._codigo;
    }

    getDescricao(){
        this._descricao;
    }
}
