const Produto = require('./carrinho/produto');
const CarrinhoComprasFactory = require('./carrinho/carrinhocomprasfactory');
const CarrinhoCompras = require('./carrinho/carrinhocompras');

var prod1 = new Produto(1, "Produto 1");
var prod2 = new Produto(2, "Produto 2");
var prod3 = new Produto(3, "Produto 3");

var factory = new CarrinhoComprasFactory();		
var cc = factory.criar("teste1");
cc.adicionarItem(prod1, 1.23, 2);
cc.adicionarItem(prod2, 1.45, 3);
cc.adicionarItem(prod2, 1.45, 3);
console.log(cc.getValorTotal());
cc.removerItem(0);
cc = factory.criar("teste1");
console.log(cc.getValorTotal());
factory.invalidar("teste1");
cc = factory.criar("teste1");
console.log(cc.getValorTotal());

