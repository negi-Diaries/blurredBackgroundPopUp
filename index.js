console.log("this is tutorial");

// grab the container button
let btn1 = document.getElementById('btn1');
// console.log(btn)

// grab the  first container 
let container = document.querySelector('.container');
console.log(container);
// grab the popup container
let popupContainer = document.querySelector(".popup-container");
console.log(popupContainer)

// grab the crooss button
let closeIcon = document.querySelector('.close-icon')
// console.log(closeIcon)

// add event listener

btn1.addEventListener('click', ()=>{
    container.classList.add("active");
    popupContainer.classList.remove("active")

})

closeIcon.addEventListener('click', ()=>{
    container.classList.remove("active")
    popupContainer.classList.add("active");
})

