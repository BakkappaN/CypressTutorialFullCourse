import homePage from '../e2e/pages/HomePage'
import resultPage from '../e2e/pages/ResultPage'
import playlistPage from '../e2e/pages/PlaylistPage'

describe('Page Object Test Suite', ()=>{

    it('Page Object Test1', ()=>{

        // Open youtube
        homePage.visit();

        //search in youtube
        homePage.searchInYoutube();

        //Go to playlist
        resultPage.goToPlaylist();

        //validate playlist title
        playlistPage.elements.playlistTitle().should('have.text','API Testing Testers Talk')

    })

})