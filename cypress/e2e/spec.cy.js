describe('Web Server', () => {
  it('should have the correct title', () => {
    cy.visit('http://localhost:80')
    cy.title().should('eq', 'Docker Demo Page')
  })
})