/// <reference types= "cypress" />
import { url } from '../../../config'
import GiftCardPage from '../../page-objects/pages/GiftCardPage'
import SummaryPage from '../../page-objects/pages/SummaryPage'

describe('Buy Gift Voucher Flow', () => {

  before(function () {
    cy.visit(url)

    cy.log("Wrap inbox before test")
    return cy.mailslurp()
      .then(mailslurp => mailslurp.createInbox())
      .then(inbox => {
        cy.log(`Inbox id ${inbox.id}`)
        cy.wrap(inbox.id).as('inboxId')
        cy.wrap(inbox.emailAddress).as('emailAddress')
      })
  });

  it('Buy Voucher and check email', function() {
    GiftCardPage.select100()
    GiftCardPage.setEmail(this.emailAddress)
    GiftCardPage.setFirstName('Adam')
    GiftCardPage.setLastName('Test')
    GiftCardPage.clickCheckout()
    SummaryPage.clickConfirm()
    SummaryPage.cardFillPayment()
    SummaryPage.checkPaymentAccepted()

    cy.mailslurp()
      .then(mailslurp => mailslurp.waitForLatestEmail(this.inboxId, 30000, true))
      .then(email => {
        expect(email.body).to.have.string('This card can be redeemed at Demo US and is valid until Jun 2, 2121')
      })
  })
})