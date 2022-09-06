const textDisplay= document.getElementById('text')
const phrases =['Hello, my name is Noah', 'I love to code', 'I love to learn']
let i=0
let j=0
function loop () {
    
    if (i < phrases.length){
        console.log(phrases[i])
        if(j < phrases[i].length){
            console.log(phrases[i][j])
            j++
        }
    }
    
}