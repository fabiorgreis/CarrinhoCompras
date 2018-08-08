const CarrinhoCompras = require('./carrinhocompras');

module.exports = class CarrinhoComprasFactory{
    /**
    * Construtor da classe CarrinhoComprasFactory.
    * 
    * @constructor
    */
    constructor(){
        this.carrinhos = {};
    }

    /**
    * Cria uma instancia do carrinho ou retorna uma já criada
    * 
    * @param {String} cliente - Uma identificação para o carrinho.
    */
    criar(cliente){
		if(cliente in this.carrinhos){
			return this.carrinhos[cliente];
		}else{
			var carrinho = new CarrinhoCompras();
			this.carrinhos[cliente] = carrinho;
			return carrinho;
		}			
    }

    /**
    * Invalida um carrinho
    * 
    * @param {String} cliente - Uma identificação para o carrinho.
    */
    invalidar(cliente){
        delete this.carrinhos[cliente]
    }

}