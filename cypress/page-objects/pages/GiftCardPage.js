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
}