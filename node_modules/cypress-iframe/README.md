# Cypress iframe
Adds iframe support to [Cypress](https://www.cypress.io/).

## Installation
```bash
npm install -D cypress-iframe
```

In your `cypress/support/commands.js` file, add the following:
```js
import 'cypress-iframe';
// or
require('cypress-iframe');
```

If you're using typescript with cypress, and have not overridden the `types` or `typeRoots` in your tsc compiler options, then everything should work.

If you have overridden them, or if it otherwise doesn't work out-of-the-box, you will also either want to:
1. Add `///<reference types="cypress-iframe" />` to the top of your cypress
1. Add a `globals.d.ts` in the root of your `cypress` directory and add `///<reference types="cypress-iframe" />` to it

## Usage
You can now use the three included commands.

### `frameLoaded`
This command checks that an iframe has loaded onto the page

Example:
```js
// This will verify that the iframe is loaded to any page other than 'about:blank'
cy.frameLoaded()

// This will verify that the iframe is loaded to any url containing the given path part
cy.frameLoaded({ url: 'https://google.com' })
cy.frameLoaded({ url: '/join' })
cy.frameLoaded({ url: '?some=query' })
cy.frameLoaded({ url: '#/hash/path' })

// You can also give it a selector to check that a specific iframe has loaded
cy.frameLoaded('#my-frame')
cy.frameLoaded('#my-frame', { url: '/join' })
```

### `iframe`
This will cause subsequent commands to be executed inside of the given iframe

Example:
```js
// This will verify that the iframe is loaded to any page other than 'about:blank'
cy.iframe().find('.some-button').should('be.visible').click()
cy.iframe().contains('Some hidden element').should('not.be.visible')
cy.find('#outside-iframe').click() // this will be executed outside the iframe

// You can also give it a selector to find elements inside of a specific iframe
cy.iframe('#my-frame').find('.some-button').should('be.visible').click()
cy.iframe('#my-second-frame').contains('Some hidden element').should('not.be.visible')
```

### `enter`
This can be used to execute a group of commands within an iframe

Example:
```js
// This will verify that the iframe is loaded to any page other than 'about:blank'
cy.enter().then(getBody => {
  getBody().find('.some-button').should('be.visible').click()
  getBody().contains('Some hidden element').should('not.be.visible')
})

// You can also give it a selector to find elements inside of a specific iframe
cy.enter('#my-iframe').then(getBody => {
  getBody().find('.some-button').should('be.visible').click()
  getBody().contains('Some hidden element').should('not.be.visible')
})
```
