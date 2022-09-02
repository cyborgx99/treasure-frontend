describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Checks sign in form validation', () => {
    it('Shows name validation error', () => {
      cy.get('input[name="name"]').focus().blur();

      cy.findByText('Field is requied.').should('exist');
    });

    it('Allows to login', () => {
      cy.get('input[name="name"]').type('John');
      cy.get('button[type="submit"]').click();

      cy.url().should('include', '/game');
      cy.get('button').contains('Logout').should('exist');
    });

    it('Can logout', () => {
      cy.login('John');
      cy.get('button').contains('Logout').click();
      cy.url().should('include', '/');
    });

    it('Allows to stay logged in after refreshing the page', () => {
      cy.login('John');
      cy.url().should('include', '/game');
      cy.get('button').contains('Logout').should('exist');

      cy.reload();

      cy.url().should('include', '/game');
      cy.get('button').contains('Logout').should('exist');
    });
  });
});
