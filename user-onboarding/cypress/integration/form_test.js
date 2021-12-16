describe('Form test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  const userInput = () => cy.get('Input[name=username]');
  const emailInput = () => cy.get('Input[name=email]');
  const passwordInput = () => cy.get('Input[name=password]');
  const tosInput = () => cy.get('Input[name=tos]');
  const submitButton = () => cy.get('button');

  it('has elements visible', () => {
    userInput().should('exist');
    emailInput().should('exist');
    passwordInput().should('exist');
    tosInput().should('exist');
    submitButton().should('exist');
  })

  it('can navigate to site', () => {
    cy.url().should('include', 'localhost');
  })

  it('submit button starts disabled', () => {
    submitButton().should('be.disabled');
  })

  describe('filling inputs and checking submit btn', () => {
    it('can type in the input', () => {
      userInput()
        .should('have.value', '')
        .type('joe-stanton')
        .should('have.value', 'joe-stanton')
  
      emailInput()
        .should('have.value', '')
        .type('joe@stanton.com')
        .should('have.value', 'joe@stanton.com')
  
      passwordInput()
        .should('have.value', '')
        .type('password')
        .should('have.value', 'password')
    })

    it('can check TOS', () => {
      tosInput().should('not.be.checked');
      tosInput().click();
      tosInput().should('be.checked');
    })

    it('submit btn enabled when everything is filled', () => {
      userInput().type('joe-stanton');
      emailInput().type('joe@stanton.com');
      passwordInput().type('password');
      tosInput().click();
      submitButton().should('be.not.disabled');
    })

    it('shows error messages', () => {
      userInput().type('joe');
      cy.get('.errors').should('exist').contains('Name has to be at least 6 characters');
      emailInput().type('joe');
      cy.get('.errors').should('exist').contains('Must be a valid email');
      passwordInput().type('pass');
      cy.get('.errors').should('exist').contains('Password has to be at least 6 characters');
    })
  })

  describe('submitting a new user', () => {
    it('adds new user', () => {
      userInput().type('joe-stanton');
      emailInput().type('joe@stanton.com');
      passwordInput().type('password');
      tosInput().click();
      submitButton().click();
      cy.intercept({method: 'POST'}).as('apiCheck');
      cy.wait('@apiCheck');
      cy.get('.newUser').should('exist').contains('joe-stanton').contains('joe@stanton.com').contains('password');
    })
  })
})