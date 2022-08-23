import BasePage from "../../pageObjects/basePage";
import ButtonsPage from "../../pageObjects/buttonsPage";
import CheckBoxPage from "../../pageObjects/checkBoxPage";
import RadioButtonPage from "../../pageObjects/radioButtonPage";
import TextBoxPage from "../../pageObjects/textBoxPage";
import WebTablesPage from "../../pageObjects/webTablesPage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    // Create texbox scenario

    it("Filling in Text Boxes", () => {
      // fill in textboxes with necessary information
      TextBoxPage.fullNameField.click();
      TextBoxPage.fullNameField.type('Name Surname');
      TextBoxPage.emailField.click();
      TextBoxPage.emailField.type('email@email.com');
      TextBoxPage.currentAddressField.click();
      TextBoxPage.currentAddressField.type('This is an address');
      TextBoxPage.permanentAddressField.click();
      TextBoxPage.permanentAddressField.type('Another address - permanent one');
      BasePage.submitButton.click();
       // validate the paragraphs
      TextBoxPage.validateName.should('contain.text', 'Name Surname');
      TextBoxPage.validateEmail.should('contain.text', 'email@email.com');
      TextBoxPage.validateCurrentAddress.should('contain.text', 'This is an address');
      TextBoxPage.validatePermanentAddress.should('contain.text', 'Another address - permanent one');
    });
  });

  context("Check box scenarios", () => {
    beforeEach(() => {
      CheckBoxPage.visit();
    });
    // Create checkbox scenario 1:
    it('Check box scenario 1', () => {
    // Click the "+"/expand button
    CheckBoxPage.expandButton.click();
    // Click Notes, React, Angular, General, Excel File.doc
    CheckBoxPage.checkboxTitles.contains('Notes').click();
    CheckBoxPage.checkboxTitles.contains('React').click();
    CheckBoxPage.checkboxTitles.contains('Angular').click();
    CheckBoxPage.checkboxTitles.contains('General').click();
    CheckBoxPage.checkboxTitles.contains('Excel File.doc').click();
    // Validate the clicked checkboxes 
    CheckBoxPage.checkboxNotes.should('be.checked');
    CheckBoxPage.checkboxReact.should('be.checked');
    CheckBoxPage.checkboxAngular.should('be.checked');
    CheckBoxPage.checkboxGeneral.should('be.checked');
    CheckBoxPage.checkboxExcel.should('be.checked');
    // Validate the clicked checkboxes as intended by the task (via message below):
    CheckBoxPage.checkboxCheck.contains('notes');
    CheckBoxPage.checkboxCheck.contains('react');
    CheckBoxPage.checkboxCheck.contains('angular');
    CheckBoxPage.checkboxCheck.contains('general');
    CheckBoxPage.checkboxCheck.contains('excelFile');
    });
    
   
    // Create checkbox scenario 2:
    it('check checkbox scenario 2', ()=>{
    // Click expand button
    CheckBoxPage.expandButton.click();
    // Click Office
    CheckBoxPage.checkboxTitles.contains('Office').click();
    // Validate the checked checkboxes
    CheckBoxPage.checkboxCheck.contains('office');
    CheckBoxPage.checkboxCheck.contains('public');
    CheckBoxPage.checkboxCheck.contains('private');
    CheckBoxPage.checkboxCheck.contains('classified');
    CheckBoxPage.checkboxCheck.contains('general');
    });
  });

  context("Radio button scenarios", () => {
    beforeEach(() => {
      RadioButtonPage.visit();
    });
     // Scenario 1:
    it('check radio button scenario 1', () => {
      // Click yesButton
      // RadioButtonPage.yesRadio.click(); // regular approach
      RadioButtonPage.radioButtons.contains('Yes').click(); // improved approach
      // validate the message
      RadioButtonPage.message.contains('Yes');
    // click impressiveButton
    // RadioButtonPage.impressiveRadio.click(); // regular approach
    RadioButtonPage.radioButtons.contains('Impressive').click();
    // validate the message
    RadioButtonPage.message.contains('Impressive');
    // noButton - validate that the button exists but is disabled
    RadioButtonPage.radioButtonDisabled.click();
    });
   
  });

  context("Web tables scenarios", () => {
    beforeEach(() => {
      WebTablesPage.visit();
    });
    // Create scenario 1:
    it('check web tables scenario 1', () => {
      // Click add record button
      WebTablesPage.addUser.click();
      // fill in the necessary information
      WebTablesPage.firstName.click();
      WebTablesPage.firstName.type('Zane');
      WebTablesPage.lastName.click();
      WebTablesPage.lastName.type('Mazenko');
      WebTablesPage.emailForm.click();
      WebTablesPage.emailForm.type('email@email.com');
      WebTablesPage.userAge.click();
      WebTablesPage.userAge.type(18);
      WebTablesPage.salary.click();
      WebTablesPage.salary.type(3000);
      WebTablesPage.department.click();
      WebTablesPage.department.type('Manual testing');
      // click submit button
      BasePage.submitButton.click();
      // search for the user based on previously added information
      WebTablesPage.searchBox.click();
      WebTablesPage.searchBox.type('Zane');
      // validate tha the user is visible
      WebTablesPage.row.should('contain.text', 'Zane')
      WebTablesPage.row.should('contain.text', 'Mazenko');
    });
    
    // Create Scenario 2:
    it('check web tables scenario 2', () => {
      // Delete all table rows
      ['Cierra', 'Alden', 'Kierra'].forEach((name) => {
      WebTablesPage.deleteUser(name);
      });
    // Validate that we see text - No rows found
      WebTablesPage.row.should('contain.text','');
    })
  });

   // Create buttons clicking scenario
  context("Buttons scenarios", () => {
    beforeEach(() => {
      ButtonsPage.visit();
    });

    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    it.only('buttons scenario 1', () => {
      // Click Double click button
      ButtonsPage.dblClickBtn.dblclick();
      // Validate the double click message
      ButtonsPage.dblClickMessage.should('have.text', "You have done a double click");
      // Click rightclick button
      ButtonsPage.rightClickBtn.rightclick();
      // Validate the right click message
      ButtonsPage.rightClickMessage.should('have.text', 'You have done a right click');
      // Do dynamic click
      ButtonsPage.dynamicClick.click();
      // Validate dynamic click message
      ButtonsPage.dynamicClickMessage.should('have.text', 'You have done a dynamic click')
    });
  });
});
