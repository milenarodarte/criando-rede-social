const followAside = document.querySelector('.follow-aside')
const homeMain = document.querySelector('.home-main')
const addNewPost =document.querySelector('.add-new-post')
const homePosts = document.querySelector('.home-posts')
const homePost = document.querySelector('.home-post')

function mobileOrganization () {
    let windowWidth = window.innerWidth;
   if (windowWidth <= 500) {
    homeMain.append(addNewPost, followAside, homePosts, homePost)
    
   }
}
mobileOrganization()
