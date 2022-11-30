import {Form} from "../fixtures/Form";

context('', () => {
    const form = new Form();
    describe('empty spec', () => {
        it('does the form process', () => {
            cy.log('Go to Form page')
            form.visit();
            form.fillOutFormAndSubmit();
            form.checkSuccessMessage();
        })
    })
});