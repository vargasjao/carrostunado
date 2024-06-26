describe("app", () => {
  it("should visit the app", () => {
    cy.visit("http://localhost:8081");
  });

  it("should go to main page when login is valid", () => {
    cy.visit("http://localhost:8081/");
    cy.get('[data-testid="username-input"]')
      .should("be.visible")
      .type("teste", { force: true });
    cy.get('[data-testid="password-input"]')
      .should("be.visible")
      .type("123", { force: true });
    cy.get('[data-testid="login-button"]').click();
    cy.url().should("include", "/home");
  });

  
});
