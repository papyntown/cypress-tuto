import Autocomplete from "../../src/components/Autocomplete";
import countries from "../../data/countries.json";
import React from "react";

describe("Teste la fonctionnalité de autocompletation", () => {
    beforeEach(() => {
        cy.mount(<Autocomplete countries={countries} />);
    });
    it("regarde si tous fonctionne", () => {});
});
