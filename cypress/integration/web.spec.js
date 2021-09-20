/// <reference types="cypress" />

describe('Complex test suite', () => {
  beforeEach(() => {

    cy.visit('http://localhost:4200/pages/forms/layouts')

  })

  it('automatically fill in form and submit its data', () => {

    cy.contains('nb-card', 'Using the Grid').then(firstForm => {
      const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
      const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()

      expect(emailLabelFirst).to.equal('Email')
      expect(passwordLabelFirst).to.equal('Password')

      cy.contains('nb-card', 'Basic form').then(secondForm => {
        const emailLabelSecond = secondForm.find('[for="exampleInputEmail1"]').text()
        const passwordLabelSecond = secondForm.find('[for="exampleInputPassword1"]').text()
      
        // expect(emailLabelSecond).to.equal(emailLabelFirst)
        expect(passwordLabelFirst).to.equal(passwordLabelSecond)
      })
    })    
  })
})
