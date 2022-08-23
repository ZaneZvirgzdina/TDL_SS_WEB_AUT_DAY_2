import CheckBoxPage from "../../pageObjects/checkBoxPage";
import TextBoxPage from "../../pageObjects/textBoxPage";

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
      TextBoxPage.submitButton.click();
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
    it.only('check checkbox scenario 2', ()=>{
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
    // Create RadioButtons page object
    // Scenario 1:
    // Click yesButton
    // validate the message
    // click impressiveButton
    // validate the message
    // noButton - validate that the button exists but is disabled
  });

  context("Web tables scenarios", () => {
    // Create WebTables page object
    // Create scenario 1:
    // Click add record button
    // fill in the necessary information
    // click submit button
    // search for the user based on previously added information
    // validate tha the user is visible

    // Create Scenario 2:
    // Delete all table rows
    // Validate that we see text - No rows found
  });

  context("Buttons scenarios", () => {
    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    // Click Double click button
    // Validate the double click message
    // Click rightclick button
    // Validate the right click message
    // Do dynamic click
    // Validate dynamic click message
  });
});
