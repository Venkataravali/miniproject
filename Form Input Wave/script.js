const labels = document.querySelectorAll('.form-control label')
// we don't know how many labels are in we need to get them out with querySelector

labels.forEach(label => {
    label.innerHTML = label.innerText 
    // the above is just gonna be each letter
    .split('')
    // to split into array like E,m,a,i,l by using method called .split ('') wth empty string 
    .map((letter,idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`) 
    // idx starts from 0 and add ms
    //to turn wave we use backticks inside that 
    // we need to manupulate it by isng above map function
    .join('')
    // to get back as string
})