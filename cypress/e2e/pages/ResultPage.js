class ResultPage {

    elements = {
        playlist : () => cy.get('[title="API Testing by Testers Talk"]'),
    }

    goToPlaylist() {
        this.elements.playlist().click();
    }

}

module.exports = new ResultPage();