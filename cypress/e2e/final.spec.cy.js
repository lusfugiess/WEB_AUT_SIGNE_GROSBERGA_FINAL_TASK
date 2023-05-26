import pp from "/cypress/e2e/pageObjekts/objekts.page";
describe('Automation Practice Form Test', () => {

  beforeEach(() => {
    //cy.visit("https://demoqa.com/text-box");
    pp.visit();
    //cy.visit(this.url);
    
  });

  it('Fills out and submits the form', () => {
       
    cy.get('#firstName').type('Signe');
    cy.get('#lastName').type('Grosberga');
    cy.get('#userEmail').type('signegrosberga@example.com');
    cy.get('#userNumber').type('1234567890');
    cy.get("#gender-radio-2").check({force: true});

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('February');
    cy.get('.react-datepicker__year-select').select('1930');
    cy.get(".react-datepicker__day").contains("28").click();

    cy.get('#subjectsInput').type('Economics');
    cy.get('.subjects-auto-complete__menu-list').contains('Economics').click();

    cy.get('#hobbies-checkbox-3').check({force: true});

    //cy.get('uploadImage').selectFile('cypress/image.jpg',{force: true});
    
    cy.get("#currentAddress").type('House1, Street2');

    
    //cy.get("#state").type('NCR{enter}'+{force: true});
    //cy.get("#city").type("Delhi{enter}"+{force: true}); 

    //cy.get('#state').select('have.value','NCR');   
    //cy.get('#state').select('have.value','Dalhi'); 
    
    cy.get('#submit').click({ force: true });
    
    cy.get('.table-responsive').within(() => {
      cy.contains('Student Name').next().should('contain.text', 'Signe Grosberga');
      cy.contains('Student Email').next().should('contain.text', 'signegrosberga@example.com');
      cy.contains('Gender').next().should('contain.text', 'Female');
      cy.contains('Mobile').next().should('contain.text', '1234567890');
      cy.contains('Date of Birth').next().should('contain.text', '28 February,1930');
      cy.contains('Subjects').next().should('contain.text', 'Economics');
      cy.contains('Hobbies').next().should('contain.text', 'Music');
      cy.contains('Picture').next().should('contain.text', 'image.jpg');
      cy.contains('State and City').next().should('contain.text', 'NCR Delhi');
    });
  });
});
