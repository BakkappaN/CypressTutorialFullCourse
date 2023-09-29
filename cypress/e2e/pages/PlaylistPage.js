class PlaylistPage {

    elements = {
        playlistTitle : () => cy.get('#header-description > h3 > yt-formatted-string > a'),
    }

}

module.exports = new PlaylistPage();