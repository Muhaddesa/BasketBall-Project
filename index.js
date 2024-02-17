let homeScoreBtnOne= document.getElementById('plusOneBtn')
let countEl = document.getElementById('count-el')
let guestEl= document.getElementById('count-el-guest')
let count= 0
let guest= 0

let homeScoreBtnTwo= document.getElementById('plusTwoBtn')
let homeScoreBtnThree= document.getElementById('plusThreeBtn')

function oneIncrement(){
    count +=1
    countEl.textContent= count
    
}

function twoIncrement(){
    count +=2
    countEl.textContent= count
    
}
function threeIncrement(){
    count +=3
    countEl.textContent= count
}


function oneIncrementg(){
    
    guestEl.textContent= guest
    guest +=1
}

function twoIncrementg(){
    guestEl.textContent= guest
    guest +=2
    
}
function threeIncrementg(){
   guestEl.textContent= guest
    guest +=3
}
function remove(){
        count = 0
        guest = 0
        countEl.textContent = count
        guestEl.textContent = guest


}