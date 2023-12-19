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


}