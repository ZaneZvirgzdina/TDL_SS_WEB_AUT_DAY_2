// import page objects

import SelectablePage from "../../pageObjects/selectablePage";

context("Interactions", () => {
  context("Selectable", () => {
    beforeEach(() => {
      SelectablePage.visit();
    });
    // Create scenario 1:
    it('Selectable Scenario 1', () => {
       // Click on "Cras justo odio"
      SelectablePage.textList.contains('Cras justo odio').click({force:true});
      // Validate that class contains active
      SelectablePage.textList.contains('Cras justo odio').should('have.class','active');
      // Click on "Dapibus ac facilisis in"
      SelectablePage.textList.contains('Dapibus ac facilisis in').click({force:true});
      // Validate that chosen buttons contains class active
      SelectablePage.textList.contains('Dapibus ac facilisis in').should('have.class','active');
    })
   
     // Create scenario 2:
    it.only('Selectable Scenario 2', () => {
    // Click on grid
    SelectablePage.openGrid.click();
    // Click on numbers 4, 8, 6, 2
      SelectablePage.secondGridRow.contains('Four').click();
      SelectablePage.thirdGridRow.contains('Eight').click();
      SelectablePage.secondGridRow.contains('Six').click();
      SelectablePage.firstGridRow.contains('Two').click();
    // Validate that chosen buttons contains class active
      SelectablePage.firstGridRow.contains('Two').should('have.class','active');
      SelectablePage.secondGridRow.contains('Four').should('have.class','active');
      SelectablePage.secondGridRow.contains('Six').should('have.class','active');
      SelectablePage.thirdGridRow.contains('Eight').should('have.class','active');
    });
    

   
    
  });
});
