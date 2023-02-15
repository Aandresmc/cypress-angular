describe('Movies', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/')
    })

    it('display movies with initial page 1', () => {
        cy.get('.grid app-movie')
        .should('be.visible')
        .should('have.length.at.least', 5);
    })

    it('navigate to page 5', () => {
        cy.intercept('GET', '**/3/discover/movie**').as('getMovies')
        // https://api.themoviedb.org/3/discover/movie?api_key=756e1622851086c3d011b8461693b962&language=es-ES&sort_by=popularity.desc&page=5

        cy.get('app-movies button[name="nav-right"]')
            .click()
            .click()
            .click()
            .click();

        // cy.get('@getMovies').should('have.property', 'response.statusCode', 200)

        cy.get('@getMovies').should(({ request, response }) => {

            expect(request.url).to.contains('discover/movie')
            expect(request.url).to.contains('page=5')
            expect(request.method).to.equal('GET')
            expect(response.statusCode).to.equal(200)
        })

    })


    it('should can scroll to down and right in list movies', () => {
        // cy.wait(5000)

        cy.scrollTo(0, 500)
            .get('app-movie p')
            .should('be.visible')

        cy.get('app-movies .grid').scrollTo('right', { duration: 1000 })
            .should('be.visible')
            .children('.grid app-movie')
            .should('be.visible')
            .should('have.length.at.least', 5);
    })
})