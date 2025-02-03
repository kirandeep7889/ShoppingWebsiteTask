import ProductPage from "./ProductPage";

describe("Product Page", () => {
    beforeEach(() => {
        cy.mount(<ProductPage />);
    });
  
    it("should open the iframe modal when 'Add to Quote' is clicked", () => {

      cy.get("[data-cy='add-to-quote']").should("be.visible").click();
  

      cy.get("iframe")
        .should("be.visible") 
        .and("have.attr", "src", "/quote");
  

      cy.get("iframe").should("have.class", "w-full h-full");
    });
  
    it("should close the iframe modal when clicked outside", () => {
   
      cy.get("[data-cy='add-to-quote']").click();
  

      cy.get("iframe").should("be.visible");
  

      cy.get("div.fixed").click("topRight"); 
  
  
      cy.get("iframe").should("not.exist");
    });
  
    it("should handle quantity change properly", () => {
  
      cy.get(".px-4.py-1.border").should("have.text", "2");
  

      cy.get("button")
        .contains("+")
        .click();
      

      cy.get(".px-4.py-1.border").should("have.text", "3");
  

      cy.get("button")
        .contains("−")
        .click();
  

      cy.get(".px-4.py-1.border").should("have.text", "2");
    });
  
    it("should verify the 'Add to Cart' button functionality", () => {

      cy.get("button").contains("Add to Cart").should("be.visible");
  
   
      cy.get("button").contains("Add to Cart").click();

    });
  });
  