/*global Given, Then, When */

import { Before, Given } from "@badeball/cypress-cucumber-preprocessor";
import { HomePage } from "../page_objects/home-page.page";
const home = new HomePage();

Before(() => {
    cy.visit('/');
});

Given("that I am on the add computers page", () => {
    home.btnAddComputer().click();
    home.tit
})