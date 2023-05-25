describe('Тестирование HuntingPony.com', function () {

    it('создание заказа', function () {
       cy.visit('https://huntingpony.com/');
       cy.get('[data-index="2"] > .header__collections-controls > .header__collections-link').click();
       cy.get('[data-product-id="338932768"] > .product-preview__content > .product-preview__area-title > .product-preview__title > a').click().wait(3000);
       cy.get('.add-cart-counter__btn').click().wait(2000);
       cy.get('[data-add-cart-counter-plus=""]').click();
       cy.get('.header__cart').click();
       cy.get('.cart-controls > .button').click();
       cy.contains('Оформление заказа');
       })
})