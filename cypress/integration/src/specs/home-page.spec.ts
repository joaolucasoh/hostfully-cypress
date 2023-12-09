import { HomePage } from "../page-objects/computer-data-base.page";

const home = new HomePage();;

describe('Test', () => {
    cy.visit('https://computer-database.gatling.io/computers')
    home.inputFilterByName().type('textates');
    home.btnFilterByName();
})