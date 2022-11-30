import selectors from "./selectors";
import {formData} from "./testdata";

export class Form {

    get firstNameField() {
        return selectors.firstNameInput;
    }

    get nameField() {
        return selectors.nameInput;
    }

    get year() {
        return selectors.yearInput;
    }

    get submit() {
        return selectors.submitInput;
    }

    get successMessage() {
        return selectors.successMessage;
    }

    get successName() {
        return selectors.successName;
    }

    visit() {
        cy.visit("http://localhost:3000/form")
    }

    fillOutFormAndSubmit() {
        cy.get(this.firstNameField).type(formData.fistName)
        cy.get(this.nameField).type(formData.name)
        cy.get(this.year).type(formData.year)
        cy.get(this.submit).click();
    }

    checkSuccessMessage() {
        cy.get(this.successMessage).should('exist');
        cy.get(this.successName).should('contain', 'Test First Name');
    }
}