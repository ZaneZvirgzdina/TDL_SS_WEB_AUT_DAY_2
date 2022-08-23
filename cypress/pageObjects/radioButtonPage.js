import BasePage from "./basePage";

class RadioButtonPage extends BasePage {
    static get url() {
        return "/radio-button";
      }

      static get radioButtons(){ //better approach
        return cy.get(".custom-control-label")
      }

      static get radioButtonDisabled(){ //better approach
        return cy.get(".custom-control-label.disabled")
      }

    // static get yesRadio(){ // regular approach
    //     return cy.get(".custom-control-label[for='yesRadio']");
    // }

    static get message(){
        return cy.get('.mt-3');
    }

    // static get impressiveRadio(){ // regular approach
    //     return cy.get(".custom-control-label[for='impressiveRadio']")
    // }
}

export default RadioButtonPage