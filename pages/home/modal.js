const buttonOpenPost1 = document.querySelector('.id1')
const modal1 = document.querySelector('.modal1')
const buttonClosePost1 = document.querySelector('.id2')
function addEventClickOpenToModal1 () {
    
    buttonOpenPost1.addEventListener('click', function(e){

        const el = e.target
        
        if (el.classList.contains('id1')){
        
           modal1.classList.add('show-modal')
        }
    })
    
}
addEventClickOpenToModal1 ()
function addEventClickCloseToModal1 (){

    buttonClosePost1.addEventListener('click', function(e){
        const el = e.target
        console.log(el)

        if (el.classList.contains('id2')){
            modal1.classList.remove('show-modal')
        }
    })
}
addEventClickCloseToModal1()



const buttonOpenPost2 = document.querySelector('.id3')
const modal2 = document.querySelector('.modal2')
const buttonClosePost2 = document.querySelector('.id4')

function addEventClickOpenToModal2 () {
    
    buttonOpenPost2.addEventListener('click', function(e){

        const el= e.target
        console.log(el)

        if (el.classList.contains('id3')){
        
           modal2.classList.add('show-modal')
        }
    })
    
}
addEventClickOpenToModal2 ()

function addEventClickCloseToModal2 (){

    buttonClosePost2.addEventListener('click', function(e){
        const el = e.target

        if (el.classList.contains('id4')){
            modal2.classList.remove('show-modal')
        }
    })
}
addEventClickCloseToModal2()




const buttonOpenPost3 = document.querySelector('.id5')
const modal3 = document.querySelector('.modal3')
const buttonClosePost3 = document.querySelector('.id6')


function addEventClickOpenToModal3 () {
    
    buttonOpenPost3.addEventListener('click', function(e){

        const el = e.target
        
        if (el.classList.contains('id5')){
        
           modal3.classList.add('show-modal')
        }
    })
    
}
addEventClickOpenToModal3 ()



function addEventClickCloseToModal3 (){

    buttonClosePost3.addEventListener('click', function(e){
        const el = e.target

        if (el.classList.contains('id6')){
            modal3.classList.remove('show-modal')
        }
    })
}
addEventClickCloseToModal3()

