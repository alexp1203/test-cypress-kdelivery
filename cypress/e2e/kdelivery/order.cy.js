/// <reference types="cypress" />

describe('Teste de pedido de lanche', () => {
    it('Deve adicionar um lanche ao carrinho', () => {
        cy.visit('https://kdelivery.com.br/exemplo2')
        cy.get('[data-id="130"]').should('contain', 'X-Burguer Duplo').click()
        cy.get('[type="checkbox"]').check('Mostarda')
        cy.get('.fdm-popup-product-content-add-cart').click()
    });
});