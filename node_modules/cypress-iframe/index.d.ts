/// <reference types="cypress" />

declare namespace Cypress {
  interface IframeHandler<T> {
    (options?: Partial<IframeOptions>): Chainable<T>
    (selector: string, options?: Partial<IframeOptions>): Chainable<T>
  }

  interface IframeOptions extends Loggable, Timeoutable {
    url?: RegExp | string
  }

  interface Chainable<Subject = any> {
    frameLoaded: IframeHandler<JQuery<HTMLIFrameElement>>
    iframe: IframeHandler<JQuery<HTMLBodyElement>>
    enter: IframeHandler<() => Chainable<JQuery<HTMLBodyElement>>>
  }
}
