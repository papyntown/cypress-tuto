declare namespace Cypress {
    interface Chainable<Subject> {
        mount: typeof import("@cypress/react").mount;
    }
}
