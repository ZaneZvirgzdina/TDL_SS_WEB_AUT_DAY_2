import BasePage from "./basePage";

class SelectablePage extends BasePage {

    static get url() {
        return "/selectable";
      }

      static get textList(){
        return cy.get('.vertical-list-container')
      }

      static get openGrid(){
        return cy.get('#demo-tab-grid')
      }

      static get firstGridRow(){
        return cy.get("#row1")
      }

      static get secondGridRow(){
        return cy.get("#row2")
      }

      static get thirdGridRow(){
        return cy.get("#row3")
      }

}

export default SelectablePage