import TextBoxPage from "../../pageObjects/textBoxPage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    // Create texbox scenario
    // fill in textboxes with necessary information
    // validate the paragraphs
    it.only("Filling in Text Boxes", () => {
      TextBoxPage.fullNameField.click();
      TextBoxPage.fullNameField.type('Name Surname');
      TextBoxPage.emailField.click();
      TextBoxPage.emailField.type('email@email.com')
      TextBoxPage.currentAddressField.click();
      TextBoxPage.currentAddressField.type('This is an address');
      TextBoxPage.permanentAddressField.click();
      TextBoxPage.permanentAddressField.type('Another address - permanent one');
      TextBoxPage.submitButton.click();
      TextBoxPage.validateName.should('contain.text', 'Name Surname');
      TextBoxPage.validateEmail.should('contain.text', 'email@email.com');
      TextBoxPage.validateCurrentAddress.should('contain.text', 'This is an address');
      TextBoxPage.validatePermanentAddress.should('contain.text', 'Another address - permanent one');
    });
  });

  context("Check box scenarios", () => {
    // Create CheckBoxPage page object
    // Create checkbox scenario 1:
    // Click the "+"/expand button
    // Click Notes, React, Angular, General, Excel File.doc
    // Validate the clicked checkboxes

    // Create checkbox scenario 2:
    // Click expand button
    // Click Office
    // Validate the checked checkboxes
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
