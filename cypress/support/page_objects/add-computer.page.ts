import { Faker, faker } from '@faker-js/faker';
let companyName;

export class AddAComputer {
    constructor() {}

    pageTitle() {
        return cy.origin('#main', () => {
            cy.get('h1').contains('Add a computer')
        })
    }

    inputComputerName() {
        return cy.get('#name')
    }

    inputIntroduced() {
        return cy.get('#introduced')
    }

    inputDiscontinued() {
        return cy.get('#discontinued')
    }

    inputCompany() {
        return cy.get('#company')
    }

    buttonCreateComputer() {
        return cy.get('input[type="submit"][value="Create this computer"]');
    }

    formatNumberWithLeadingZero(number) {
        return number < 10 ? `0${number}` : number.toString();
    }

    fillAllFields() {
        let randomDay = faker.datatype.number({ min: 1, max: 30})
        let randomMonth = faker.datatype.number({ min: 1, max: 12})

        randomDay = this.formatNumberWithLeadingZero(randomDay);
        randomMonth = this.formatNumberWithLeadingZero(randomMonth);
        
        companyName = this.inputComputerName().type(faker.company.name())

        this.inputIntroduced().type(`2021-${randomMonth}-${randomDay}`)
        
        this.inputDiscontinued().type(`2023-${randomMonth}-${randomDay}`)
        
        this.inputCompany().select('RCA')
    }    
}
export default { companyName }