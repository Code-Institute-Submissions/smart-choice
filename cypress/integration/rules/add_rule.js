/// <reference types="Cypress" />

import { clickStartCtaButton } from "../landing";
import {
  clickCreateRuleButton,
  enterRuleName,
  enterCriterionName,
  submitRule,
  enterNote
} from "../../helpers/create_rule";

describe("Users can create a new rule", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("with single criterion", () => {
    clickStartCtaButton();
    clickCreateRuleButton();

    const tail = Date.now();

    enterRuleName(`Test-rule ${tail}`);
    enterCriterionName(`Criterion ${tail}`);
    enterNote(`Note ${tail}`);

    submitRule();

    cy.get(".rule li")
      .contains(tail)
      .should("be.visible");
  });
});