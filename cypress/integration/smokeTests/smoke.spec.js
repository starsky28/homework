import { url } from '../../../config'
import GiftCardPage from '../../page-objects/pages/GiftCardPage'
import SummaryPage from '../../page-objects/pages/SummaryPage'

describe('Smoke test', () => {
  before(function () {
    cy.visit(url)
  })

  it('Check the correctly calculated discount', function () {
     GiftCardPage.select100()
     GiftCardPage.checkPriceOnTheVoucherCard()
     GiftCardPage.checkDiscount()
     })


  it('Check is Checkout button is disable when email details are empty', function () {
     GiftCardPage.isCheckoutButtonDisabled()
     })

   it('Check send to someone else additional text field', function() {
    GiftCardPage.sendToSomeoneElse()
    })
})