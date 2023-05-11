import Autocomplete from "../../src/components/Autocomplete";
import countries from "../../data/countries.json";
import React from "react";

describe("Teste la fonctionnalité de autocompletation", () => {
    beforeEach(() => {
        cy.mount(<Autocomplete countries={countries} />);
    });
    it("regarde si tous fonctionne", () => {
        cy.get('[data-cy="heading"]').contains("Search your country");
        cy.get('input[type="text"]').should("have.value", "");
        cy.get('[data-cy="suggestion-list"]').should("not.exist");
    });
    it("regarde si le filtre est fonctionnel", () => {
        cy.get('input[type="text"]').type("no");
        cy.get('[data-cy="suggestion-list"]')
            .should("be.visible")
            .as("suggestList");
        cy.get("@suggestList").should("have.length", 1);
    });
    it("regarde si les selections fonctionnes", () => {
        cy.get('input[type="text"]').as("inputText");
        cy.get("@inputText")
            .type("no")
            .type(Cypress._.repeat("{downArrow}{downArrow}", 1));
        cy.get('[data-cy="suggestion-list"]-li:nth-child(3)').should(
            "have.class",
            "active"
        );
        cy.get("@inputText").type(Cypress._.repeat("{upArrow}", 1));
        cy.get('[data-cy="suggestion-list"]-li:nth-child(2)').should(
            "have.class",
            "active"
        );
        cy.get('[data-cy="suggestion-list"]-li:nth-child(2)').click();
        cy.get('input[type="text"]').should("have.lenght", 1);
        cy.get('[data-cy="suggestion-list"]').should("not.exist");
    });
});

// Description de la fonctionnalité
/*Ce code Cypress permet de tester la fonctionnalité d'autocomplétion d'un composant Autocomplete en utilisant des assertions sur les éléments HTML générés.

La fonction beforeEach() est exécutée avant chaque test et permet de monter le composant Autocomplete avec la liste des pays.

Ensuite, le test vérifie que l'élément <h1> contenant le texte "Search your country" est présent, que le champ de saisie est vide et que la liste des suggestions n'est pas affichée.

Ces vérifications sont réalisées à l'aide de méthodes de la bibliothèque Cypress comme cy.get() pour sélectionner les éléments HTML et should() pour vérifier leurs propriétés.
*/
