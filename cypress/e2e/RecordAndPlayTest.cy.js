describe('Record and Play Suite', () => {
  it('Test1', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://www.youtube.com/');
    cy.get('#search-input > #search').clear();
    cy.get('#search-input > #search').type('testers talk');
    cy.get('#search-icon-legacy > yt-icon.style-scope > .style-scope > .yt-spec-icon-shape > div').click();
    cy.get('.ytd-channel-renderer > #img').click();
    cy.get('#c4-player > .html5-video-container > .video-stream').click();
    cy.get(':nth-child(1) > #details > h3.style-scope > #video-title').click();
    cy.get('#movie_player > .html5-video-container > .video-stream').click();
    /* ==== End Cypress Studio ==== */
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('JavaScriptByTestersTalk', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://www.youtube.com/');
    cy.get('#search-input > #search').clear('j');
    cy.get('#search-input > #search').type('javascript by testers talk');
    cy.get('#search-icon-legacy > yt-icon.style-scope > .style-scope > .yt-spec-icon-shape > div').click();
    /* ==== End Cypress Studio ==== */
  });
})