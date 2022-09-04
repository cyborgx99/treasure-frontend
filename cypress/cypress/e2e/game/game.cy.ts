import { tileContents, tileCoordinates } from '../../utils/constants';

describe('Game functionality', () => {
  beforeEach(() => {
    // usually we would call some script to reset db / seed it before each test
    // we're logging in with "new" user everytime
    cy.login(`John${Math.floor(Math.random() * 100000)}`);
  });

  it('Allows user to select up to 3 tiles', () => {
    cy.url().should('include', '/game');

    cy.get('[data-cy="reveal-button"]').should('be.disabled');
    cy.get('[data-cy="deselect-button"]').should('be.disabled');

    // clicking 4 items
    cy.get('[data-cy-coordinates="1:1"]').click();
    cy.get('[data-cy-coordinates="1:2"]').click();
    cy.get('[data-cy-coordinates="2:1"]').click();
    cy.get('[data-cy-coordinates="3:1"]').click();

    // selected only 3
    cy.get('[data-cy-selected="true"]').should('have.length', 3);
  });

  it('Allows to revel the selected tile content', () => {
    cy.url().should('include', '/game');

    cy.get('[data-cy="reveal-button"]').should('be.disabled');
    cy.get('[data-cy="deselect-button"]').should('be.disabled');

    cy.get('[data-cy-coordinates="1:1"]').click();
    cy.get('[data-cy-coordinates="1:2"]').click();
    cy.get('[data-cy-coordinates="2:1"]').click();

    cy.get('[data-cy="reveal-button"]').click();

    const contentOptions = new RegExp(`${tileContents.join('|')}`, 'g');

    cy.get('[data-cy-coordinates="1:1"]').contains(contentOptions);
    cy.get('[data-cy-coordinates="1:2"]').contains(contentOptions);
    cy.get('[data-cy-coordinates="2:1"]').contains(contentOptions);

    cy.get('[data-cy-coordinates="1:1"]').should('be.disabled');
    cy.get('[data-cy-coordinates="1:2"]').should('be.disabled');
    cy.get('[data-cy-coordinates="2:1"]').should('be.disabled');
  });

  it('Allows to deselect selected tiles', () => {
    cy.url().should('include', '/game');

    cy.get('[data-cy="reveal-button"]').should('be.disabled');
    cy.get('[data-cy="deselect-button"]').should('be.disabled');

    cy.get('[data-cy-coordinates="1:1"]').click();
    cy.get('[data-cy-coordinates="1:2"]').click();
    cy.get('[data-cy-coordinates="2:1"]').click();

    cy.get('[data-cy="deselect-button"]').click();

    cy.get('[data-cy-selected="true"]').should('have.length', 0);
  });

  it('Allows to win the game and go to the scoreboard', () => {
    const revalTiles = (arr: string[]) => {
      const last = arr.length - 1;
      const preLast = arr.length - 2;
      const prePreLast = arr.length - 3;

      cy.get(`[data-cy="game-container"]`).then((container) => {
        if (arr.length === 0) return;
        if (
          container.find('button[data-cy-tile-button][disabled]').length >= 25
        ) {
          // recursively clicking 3 tiles and revealing until we get all of them disalbed (we won)
          return;
        }

        if (arr[last]) {
          cy.get(`[data-cy-coordinates="${arr[last]}"]`).click();
        }

        if (arr[preLast]) {
          cy.get(`[data-cy-coordinates="${arr[preLast]}"]`).click();
        }

        if (arr[prePreLast]) {
          cy.get(`[data-cy-coordinates="${arr[prePreLast]}"]`).click();
        }

        cy.get('[data-cy="reveal-button"]').click();

        revalTiles(arr.slice(0, -3));
      });
    };

    revalTiles(tileCoordinates);

    cy.get('[data-cy-win]').contains('You won!');

    cy.get('[data-cy-view-scores]').click();

    cy.url().should('include', '/scoreboard');

    cy.get('[aria-label="Score table"]').should('be.visible');
  });
});

describe('Saves progress', () => {
  beforeEach(() => {
    // login with the same user
    // the "DB" (server) should be reset for the test to pass
    cy.login(`John`);
  });

  it('Allows to continue the game after reload', () => {
    cy.get('[data-cy-coordinates="1:1"]').click();
    cy.get('[data-cy-coordinates="1:2"]').click();
    cy.get('[data-cy-coordinates="2:1"]').click();

    cy.get('[data-cy="reveal-button"]').click();

    const contentOptions = new RegExp(`${tileContents.join('|')}`, 'g');

    cy.get('[data-cy-coordinates="1:1"]').contains(contentOptions);
    cy.get('[data-cy-coordinates="1:2"]').contains(contentOptions);
    cy.get('[data-cy-coordinates="2:1"]').contains(contentOptions);

    cy.reload();

    cy.get('[data-cy-coordinates="1:1"]').contains(contentOptions);
    cy.get('[data-cy-coordinates="1:2"]').contains(contentOptions);
    cy.get('[data-cy-coordinates="2:1"]').contains(contentOptions);
  });
});
