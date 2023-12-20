// cypress/support/index.d.ts

declare namespace Cypress {
    interface Chainable<Subject = any> {
    /**
       * Comando personalizado para clicar em um elemento quando ele estiver visível.
       * @param selector - O seletor CSS do elemento.
       * @param timeout - Tempo de espera em milissegundos (opcional).
       */
    clickWhenVisible(selector: string, timeout?: number): Chainable<Subject>;
    }
}
