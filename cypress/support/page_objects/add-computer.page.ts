import { faker } from '@faker-js/faker';
let companyName;

export class AddAComputer {
    constructor() {}

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

    checkRequiredFieldNotFilled() {
        cy.get('.help-inline').then($element => {
            let fieldMessage = $element.text();
            console.log(fieldMessage);
            expect(fieldMessage).contains('Failed to refine type : Predicate isEmpty() did not fail.')
            
        })
    }

    buttonCreateComputer() {
        return cy.get('input[type="submit"][value="Create this computer"]');
    }

    buttonDeleteComputer() {
        return cy.get('input[type="submit"][value="Delete this computer"]');
    }

    formatNumberWithLeadingZero(number) {
        return number < 10 ? `0${number}` : number.toString();
    }

    fillIntroducedAndDiscontinued() {
        let randomDay = faker.datatype.number({ min: 1, max: 30})
        let randomMonth = faker.datatype.number({ min: 1, max: 12})

        randomDay = this.formatNumberWithLeadingZero(randomDay);
        randomMonth = this.formatNumberWithLeadingZero(randomMonth);

        this.inputIntroduced().type(`2021-${randomMonth}-${randomDay}`)
        this.inputDiscontinued().type(`2023-${randomMonth}-${randomDay}`)
    }

    fillRequiredFields() {
        companyName = this.inputComputerName().type(faker.company.name())
    }

    fillAllFields() {
        this.fillIntroducedAndDiscontinued();
        companyName = this.inputComputerName().type(faker.company.name())
        this.inputCompany().select('RCA')
    }
    
    fillOnlyNotRequiredFields() {
        this.fillIntroducedAndDiscontinued();
    }
}
export default { companyName }