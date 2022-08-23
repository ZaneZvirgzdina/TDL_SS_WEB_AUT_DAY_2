import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get fullNameField() {
    return cy.get("#userName");
  }

  static get emailField(){
    return cy.get('#userEmail');
  }

  static get currentAddressField(){
    return cy.get('#currentAddress')
  }

  static get permanentAddressField(){
    return cy.get("#permanentAddress")
  }

  static get validateName(){
    return cy.get("#name")
  }

  static get validateEmail(){
    return cy.get('#email')
  }

  static get validateCurrentAddress(){
    return cy.get("#currentAddress[class='mb-1']")
  }

  static get validatePermanentAddress(){
    return cy.get("#permanentAddress[class='mb-1']")
  }



}

export default TextBoxPage;
