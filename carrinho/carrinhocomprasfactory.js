const CarrinhoCompras = require('./carrinhocompras');

module.exports = class CarrinhoComprasFactory{
    constructor(){
        this.carrinhos = {};
    }

    criar(cliente){
		if(cliente in this.carrinhos){
			return this.carrinhos[cliente];
		}else{
			var carrinho = new CarrinhoCompras();
			this.carrinhos[cliente] = carrinho;
			return carrinho;
		}			
    }

    invalidar(cliente){
        delete this.carrinhos[cliente]
    }

}