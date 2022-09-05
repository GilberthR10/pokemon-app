/// <reference types="cypress" />
// https://docs.cypress.io/api/introduction/api.html

describe("Pokemon App test loading pages", () => {
  it("should: load Home page", () => {
    cy.visit("http://localhost:8080");
  });

  it("should: load Favorites page", () => {
    cy.visit("http://localhost:8080/favoritos");
  });

  it("should: load Pokemon page", () => {
    cy.visit("http://localhost:8080/pokemones");
  });
});

describe("Page menu Navigations tests", () => {
  it("should: redirect to the home page when clicking inicio link", () => {
    cy.visit("http://localhost:8080");
    cy.get(".p-menubar-root-list li a span").contains("Inicio").click();
    cy.url().should("include", "/");
  });

  it("should: redirect to the pokemones page when clicking pokemones link", () => {
    cy.get(".p-menubar-root-list li a span").contains("Pokemones").click();
    cy.url().should("include", "/pokemones");
  });

  it("should: redirect to the favoritos page when clicking favoritos link", () => {
    cy.get(".p-menubar-root-list li a span").contains("Favoritos").click();
    cy.url().should("include", "/favoritos");
  });
});

describe("Page pokemones tests", () => {
  it("should: load pokemones page", () => {
    cy.visit("http://localhost:8080/pokemones");
  });

  it("should: click one pokemon and then add to Datatable component ", () => {
    cy.get(".pokemon-list__item button").first().click();
    cy.get(".p-datatable-tbody .p-datatable-emptymessage").should("not.exist");
  });

  it("should: click one pokemon and then remove from Datatable component", () => {
    cy.get(".p-datatable-tbody tr td button").last().click();
    cy.get(".p-dialog").should("exist");
    cy.get(".p-dialog .p-dialog-footer button").contains("Si").click();
    cy.get(".p-datatable-tbody .p-datatable-emptymessage").should("exist");
  });
});

describe("Page favoritos tests", () => {
  it("should: click one pokemon and then add to Datatable component", () => {
    cy.get(".pokemon-list__item button").first().click();
    cy.get(".p-datatable-tbody .p-datatable-emptymessage").should("not.exist");
  });

  it("should: add one pokemon to favoritos", () => {
    cy.get(".p-datatable-tbody tr td button").first().click();
    cy.get(".p-menubar-root-list li a span").contains("Favoritos").click();
    cy.get(".pokemon-list .p-fieldset").should("exist");
  });
});
