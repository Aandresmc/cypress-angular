describe('Search', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/')
    })

    it('search movie with query', () => {
        cy.get('form input[name="search-movie"]').type('last');
        cy.get('form').submit();

        cy.get('.grid app-movie').should('have.a.property', 'last')

    })


    it('search with result empty', () => {
        cy.get('form input[name="search-movie"]').type('aaaaaaaaaaaaa');
        cy.get('form').submit();

        cy.get('app-movies button[name="nav-right"]')
            .should('not.be.enabled')

        cy.get('.grid h1').last().contains('Sorry, result empty')

    })

})