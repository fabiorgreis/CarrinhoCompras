const assert = require('assert');
const Produto = require('../carrinho/produto');
const CarrinhoComprasFactory = require('../carrinho/carrinhocomprasfactory');
const CarrinhoCompras = require('../carrinho/carrinhocompras');

const prod1 = new Produto(1, "Produto 1");
const prod2 = new Produto(2, "Produto 2");
const factory = new CarrinhoComprasFactory();		

describe('Carrinho Compras', function() {
    it('deve calcular valor total do carrinho como 11.16', function() {
        var cc = factory.criar("teste1");
        cc.adicionarItem(prod1, 1.23, 2);
        cc.adicionarItem(prod2, 1.45, 3);
        cc.adicionarItem(prod2, 1.45, 3);
        assert.equal(cc.getValorTotal(), 11.16);
    });
    it('deve calcular valor total do carrinho como 8.7', function() {
        var cc = factory.criar("teste1");
        cc.removerItem(0);
        assert.equal(cc.getValorTotal(), 8.7);
    });
    it('deve calcular valor total 0 depois de invalidado', function() {
        factory.invalidar("teste1");
        var cc = factory.criar("teste1");
        cc.removerItem(0);
        assert.equal(cc.getValorTotal(), 0);
    });
});
