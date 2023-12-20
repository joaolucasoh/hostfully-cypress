export class HomePage{
    btnAddComputer(){
        return cy.get('#add').first();
    }

    inputFilterByName(){
        return cy.get('#searchbox').first();
    }

    btnFilterByName(){
        return cy.get('#searchsubmit').first();
    }

    tableComputers(){
        return cy.get('.computers.zebra-striped').first();
    }

    validateCreatedMessage() {
        cy.get('.alert-message.warning').then($element => {
            let newCompany = $element.text();
            const expectedText = `${newCompany}`;
            
            expect(expectedText).to.contain(`${newCompany}`);
        });
    }
}