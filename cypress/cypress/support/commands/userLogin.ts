Cypress.Commands.add('login', (name: string) => {
  cy.visit('/');
  cy.get('input[name="name"]').type(name);

  cy.get('button[type="submit"]').click();
  cy.url().should('contain', '/game');
});
