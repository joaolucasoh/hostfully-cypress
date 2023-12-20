/*global Given, Then, When */

import { Before, Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomePage } from "../page_objects/home-page.page";
import { AddAComputer } from "../page_objects/add-computer.page";

const computerPage = new AddAComputer();
const home = new HomePage();
let laptopToDelete;

Before(() => {
    cy.visit('/');
});

Given("that I am on the computer listing page", () => {
    home.btnFilterByName().should('be.visible');
    home.tableComputers().should('be.visible');
}),

Given("that I am on the add computers page", () => {
    home.btnAddComputer().should('be.visible').click();
}),

When("I fill in all required fields with valid information", () => {
    computerPage.fillAllFields(); 
}),

When("I only fill in the required fields with valid information", () => {
    computerPage.fillRequiredFields();
}),

When("I try to add a new computer without fill in the required field", () => {
    computerPage.fillOnlyNotRequiredFields();
});

Then("I see an error message indicating that the required field was not filled in", () => {
});

When("the computer is not added to the list", () => {

});

When("I click on the add button", () => {
    computerPage.buttonCreateComputer().click()
}),

Then("the computer is added successfully", () => {
    home.validateMessage()
})

When("I filter computers by the name {string}", (computerName:string) => {
    home.inputFilterByName().type(computerName);
    home.btnFilterByName().click();
});

Then("the list displays only computers with the corresponding name", () => {
    home.validateTableResult('contain')
});

When("there is a computer in the list with the name {string}", (modelToDelete:string) => {
    laptopToDelete = modelToDelete;
    home.inputFilterByName().type(laptopToDelete);
    home.btnFilterByName().click();
});

Then("I select the computer for deletion", () => {
    home.clickOnTheFirstRegisterToDelete(laptopToDelete);
    computerPage.buttonDeleteComputer().should('be.visible')
});

When("I confirm the deletion", () => {
    computerPage.buttonDeleteComputer().click({force: true});
    home.validateMessage();
});

Then("the computer is successfully removed from the list", () => {
    home.inputFilterByName().type(laptopToDelete);
    home.btnFilterByName().click();
    home.validateTableResult('not.be.visible');
});
