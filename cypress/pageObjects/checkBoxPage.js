import BasePage from "./basePage";

class CheckBoxPage extends BasePage {

    static get url() {
        return "/checkbox";
      }
    
    static get expandButton(){
        return cy.get("button[title='Expand all']")
    }

    // this took the whole tree as array
    static get checkboxTitles(){
        return cy.get('.rct-title');
    }

    // all checkboxes in array
    static get checkboxNotes(){
        return cy.get('#tree-node-notes')
    }

    static get checkboxReact(){
        return cy.get('#tree-node-react')
    }

    static get checkboxAngular(){
        return cy.get('#tree-node-angular')
    }
    
    static get checkboxGeneral(){
        return cy.get('#tree-node-general')
    }
    
    static get checkboxExcel(){
        return cy.get('#tree-node-excelFile')
    }

    static get checkboxCheck(){
        return cy.get("#result")
    }
}

export default CheckBoxPage