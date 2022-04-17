export default class GiftCardPage {

  static select100(){
    cy.get('#option100').check()
  }

  static setEmail(value){
    cy.get('[data-target="email.purchaserEmailInput"]').type(value)
  }

  static setFirstName(value){
    cy.get('input[placeholder="first name ..."]').type(value)
  }

  static setLastName(value){
    cy.get('input[placeholder="last name ..."]').type(value)
  }

  static clickCheckout(){
    cy.contains('Checkout').click()
  }

  static isCheckoutButtonDisabled(){
//    cy.get('[data-target="checkout.checkoutButton"]').should('not.have.attr', 'disabled');
//    cy.get('[data-target="checkout.checkoutButton"]').click();
    oddsSelectionElements.oddsButton().each((element, index) => {
      if (!element.prop("disabled") && !element.hasClass("selected")) {
        cy.wrap(element).click()
        return false
      }
    })

  }

  static checkDiscount(){
    cy.contains('$90').should('be.visible')
  }

  static checkPriceOnTheVoucherCard(){
    cy.contains('$100.00').should('be.visible')
  }

  static sendToSomeoneElse(){
    cy.contains('Send to someone else').click()
    cy.get('[data-target="tabs.sendToOtherContent"] > :nth-child(1) > .flex-auto').should('contain', 'Recipient Email')
//    cy.get('input[placeholder="gift card will be sent here ..."]').should.('contain', 'gift card will be sent here ...')
//    cy.get('input').invoke('attr', 'placeholder').should('contain', 'gift card will be sent here ...')
//    cy.get('[data-target="tabs.sendToOtherContent"] > input').should('have.text', 'gift card will be sent here ...');
//    cy.get('[data-target="tabs.sendToOtherContent"] > input').should('have.text', 'gift card will be sent here ...');

//    cy.get('input[placeholder="gift card will be sent here ..."]')
//    .should('equal', 'gift card will be sent here ...')
//    placeholder="gift card will be sent here ..."
  }
}