const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click',()=>{
    boxesContainer.classList.toggle('big');
    // if we click on button that big class got toggled
})

function createBoxes(){
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            const box = document.createElement('div')
            box.classList.add('box');
            // take the classList and add method
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            //to add style we use above property
            // dynamically added x and y axis
            // console.log(box)
            boxesContainer.appendChild(box)
        }
    }

}
createBoxes()