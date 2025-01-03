/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('Feedback Form', () => {
    let name, email, subject, comment
    beforeEach( () => {
        cy.visit('/feedback.html')
        name = faker.person.fullName()
        email = faker.internet.email()
        subject = faker.lorem.words(4)
        comment = faker.lorem.sentences(5)

    })

    it ('Submit Form', () => {

         cy.submitForm(name, email, subject, comment)
         cy.get('.btn-signin').click()
         cy.get('#feedback-title').should('contain', 'Feedback')
         cy.contains(`Thank you for your comments, ${name}. They will be reviewed by our Customer Service staff and given the full attention that they deserve.`)
    })

    it ('Clear Form', () => {
        
        cy.submitForm(name, email, subject, comment)
        cy.get('[type="reset"]').click()
    })
})