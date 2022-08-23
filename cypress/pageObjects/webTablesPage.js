import BasePage from "./basePage";

class WebTablesPage extends BasePage {
    static get url() {
        return "/webtables";
      }

static get addUser(){
    return cy.get("#addNewRecordButton");
}

static get firstName(){
    return cy.get('#firstName');
}

static get lastName(){
    return cy.get('#lastName');
}

static get emailForm(){
    return cy.get('#userEmail');
}

static get userAge(){
    return cy.get('#age');
}

static get salary(){
    return cy.get('#salary');
}

static get department(){
    return cy.get('#department');
}

static get row(){
    return cy.get('.rt-td ')
}

static get searchBox(){
    return cy.get('#searchBox')
}

static deleteUser(userName) {
    return this.row
      .contains(userName)
      .parent()
      .find("[title='Delete']")
      .click();
  }

}


export default WebTablesPage