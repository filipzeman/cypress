/// <reference types="cypress" />


describe('Complex test suite', () => {
  beforeEach(() => {

    cy.visit('http://localhost:4200/pages/forms/layouts')

  })

  it('automatically fill in form and submit its data', () => {

    cy.get('basic form')
  })
})
