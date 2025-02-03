import React from 'react'
import { QuoteModal } from './QuoteModal'
import ProductPage from '../pages/ProductPage';

describe("Quote Modal", () => {
  beforeEach(() => {
    cy.mount(<ProductPage />);
  });

  it("should open the quote modal when the 'Add to Quote' button is clicked", () => {
    cy.get("[data-cy='add-to-quote']").click({force: true});
    cy.get("[data-cy='quote-modal']").should("be.visible");
  });

  it("should navigate through the steps", () => {
    cy.get("[data-cy='add-to-quote']").click(); // Open the modal

    // Check if the first step (Product selection) is shown
    cy.contains("Product that you are interested in").should("be.visible");

    // Click 'Next' to go to the second step (Contact information)
    cy.get("[data-cy='next-button']").click();
    cy.contains("We want to know a little more about you").should("be.visible");

    // Click 'Next' to go to the third step (Confirm)
    cy.get("[data-cy='next-button']").click();
    cy.contains("Product that you are interested in").should("be.visible");
  });

  it("should go back to the previous step", () => {
    cy.get("[data-cy='add-to-quote']").click(); // Open the modal

    // Move to the second step
    cy.get("[data-cy='next-button']").click();
    cy.contains("We want to know a little more about you").should("be.visible");

    // Click 'Back' to go to the first step
    cy.get("[data-cy='back-button']").click();
    cy.contains("Product that you are interested in").should("be.visible");
  });

  it("should close the modal when the close button is clicked", () => {
    cy.get("[data-cy='add-to-quote']").click(); // Open the modal
    cy.get("[data-cy='close-button']").click(); // Close the modal
    cy.get("[data-cy='quote-modal']").should("not.exist"); // Ensure the modal is closed
  });
});
