// When we want them to come in add into .box .show 
const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll',checkBoxes)
//check the positon of each box 

checkBoxes();

function checkBoxes(){
    //we gonna start to figure out we we gonna want to come in (where is the trigger point )
   // console.log(window.innerHeight/5*4)
   const triggerBottom = window.innerHeight/5*4;  //to get triggerBottom(triggerpoint)

    // to get window height

    boxes.forEach(box=>{
        const boxTop = box.getBoundingClientRect().top  // tosee size of box (position it should give x,y,width height whether it's present in top,left)
        //if box Top is less than triggerbottom then add the class (show) 

        if(boxTop<triggerBottom){
            box.classList.add('show')

        }else{
            box.classList.remove('show')
        }
    })
}


//it's showing only 1st 3 bcs they are in range (triggerBottom is 566) 
//untill condition is true such as box top i less than trigger bottom of height of viewport it will come in bcs show class will add
//