/// <reference types="cypress" />

describe('Teste de pedido de lanche', () => {
    it('Deve adicionar um lanche ao carrinho', () => {
        cy.visit('https://kdelivery.com.br/exemplo2')
        cy.get('[data-id="130"]').should('contain', 'X-Burguer Duplo').click()
        cy.get('#popup-130 > .fdm-popup-product-content > .myd-product-popup-extras > .fdm-product-add-extras > :nth-child(1) > .fdm-extra-option-title > :nth-child(2) > .myd-extra-item-loop-checkbox > .option_prod_exta').click()
        cy.get('#popup-130 > .fdm-popup-product-content > .myd-product-popup-extras > .fdm-product-add-extras > :nth-child(2) > .fdm-extra-option-title > :nth-child(2) > .myd-extra-item-loop-checkbox > .option_prod_exta').click()
        cy.get('#myd-product-note-130').type('teste de mensagem')
        cy.get('#130.fdm-add-to-cart-popup').click()
        //ir para o checkout
        cy.get('.myd-float__title').click()
        cy.get('.myd-cart__button-text').click()
        //retirar na loja
        cy.get('[data-content=".myd-cart__checkout-customer"]').click()
        //nome telefone
        cy.get('#input-customer-name').type('Cliente Teste')
        cy.get('#input-customer-phone').type('99999999999')
        //cupom de desconto
        cy.get('#input-coupon').type('KDESC20')
        //Avançar
        cy.get('.myd-cart__button-text').click()
        //forma de pagto
        cy.get('#input-payment').select('Crédito')
        cy.get('.myd-cart__button-text').click()
        //acompanhar pedido (status)
        cy.get('.myd-cart__finished-track-order > a').click()
        //enviar para whatsapp
        //cy.get('.myd-cart__finished-whatsapp > a').click()
    });

    describe('Painel de controle dos pedidos', () => {
        it('Deve mostrar os pedidos recebidos', () => {
            cy.visit('https://kdelivery.com.br/order')

        });
    });

});