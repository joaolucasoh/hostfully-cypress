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

    validateMessage() {
        cy.get('.alert-message.warning').then($element => {
            let newCompany = $element.text();
            const expectedText = `${newCompany}`;
            
            expect(expectedText).to.be.equal(`${newCompany}`);
        })
    }

    validateTableResult(containOrNot) {
        cy.get('.computers.zebra-striped').find('tr').then($trs => {
            console.log('Amount lines:', $trs.length);
            const allRowsExceptFirst = $trs.slice(1);
    
            cy.wrap(allRowsExceptFirst).each(($tr, index) => {
            console.log('Checking lines: ' + (index + 1));
            cy.wrap($tr).find('td').first().should(containOrNot, 'ASUS');
            })
        })
    }

    clickOnTheFirstRegisterToDelete(text: string) {
        cy.get('.computers.zebra-striped').find('tr').then($trs => {
        // Check if there's at least two rows
        if ($trs.length > 1) {
        // Click on the first cel in the second line
            cy.wrap($trs.eq(1)).find('td').first().contains(text).click();
            }
        });
    }
};