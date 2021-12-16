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
})