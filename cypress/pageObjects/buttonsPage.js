import BasePage from "./basePage";

class ButtonsPage extends BasePage{
        static get url() {
            return "/buttons";
          }

static get dblClickBtn(){
    return cy.get('#doubleClickBtn')
}

static get dblClickMessage(){
    return cy.get('#doubleClickMessage')
}

static get rightClickBtn(){
    return cy.get('#rightClickBtn')
}

static get rightClickMessage(){
    return cy.get('#rightClickMessage')
}

static get dynamicClick(){
    return cy.get(':nth-child(3) > .btn.btn-primary')
}

static get dynamicClickMessage(){
    return cy.get('#dynamicClickMessage')
}



}

export default ButtonsPage