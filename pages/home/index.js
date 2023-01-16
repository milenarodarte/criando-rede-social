/* Desenvolva a lógica da página aqui */
const buttonHeart = document.querySelector('.heart-like-post')


function changeHeartToRed () {
   
    buttonHeart.addEventListener('click', function(e){
        const el = e.target
        console.log(el)

        if (el.classList.contains('heart-like-post')){
            buttonHeart.setAttribute('src', './assets/img/heart.svg')
            buttonHeart.setAttribute('class', 'heart-like-post-red')
        }
        

    })
}
changeHeartToRed()