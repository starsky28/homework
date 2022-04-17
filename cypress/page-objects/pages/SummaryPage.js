export default class SummaryPage {

  static clickConfirm(){
    cy.contains('Confirm Details').click()
    cy.contains('Submit').should('be.visible')
  }

  static cardFillPayment(){
   cy.iframe('#bancard-payment-form > iframe')
       .find('#card-name').type('TestCard')

   cy.iframe('#bancard-payment-form > iframe')
       .find('#card-zip').type('92606')

   cy.iframe('#bancard-payment-form > iframe')
       .find('#card-number').type('4111 1111 1111 1111')

   cy.iframe('#bancard-payment-form > iframe')
       .find('#card-expiry').type('12/22')

    cy.iframe('#bancard-payment-form > iframe')
        .find('#card-security').type('999')

    cy.iframe('#bancard-payment-form > iframe')
        .contains('Submit').click()
    }

   static checkPaymentAccepted(){
    cy.contains('Payment accepted, thank you!')
        .should('be.visible')
        .click()
    cy.url()
        .should('be.equal', 'https://gift-cards.phorest.com/salons/demo-us#success')
    }
}