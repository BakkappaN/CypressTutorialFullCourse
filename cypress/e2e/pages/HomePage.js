class HomePage {

    elements = {
        searchTextbox : () => cy.get('[name="search_query"]'),
        searchIcon : () => cy.get('#search-icon-legacy > yt-icon')
    }

    visit() {
        cy.visit('https://www.youtube.com/');
    }

    searchInYoutube() {
        this.elements.searchTextbox().type('api testing by testers talk');
        this.elements.searchIcon().click();
    }

}

module.exports = new HomePage();