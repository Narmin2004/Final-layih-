// let snow = document.querySelector('#snow')
let darkMood = document.querySelector('.darkmood');
let headerContainer = document.querySelector('.header_container')
let sectionContainer = document.querySelector('.section_container')
let body = document.querySelector('body')
let sweetContainer =document.querySelector('.sweet_container h1')
let sweetMain = document.querySelectorAll('.sweet_main div')
let guestContainerOut =document.querySelector('.guest_container_out h1')
let guestContainerOutP =document.querySelector('.guest_container_out p')
let footer = document.querySelector('footer')
let zeroContainerImg = document.querySelector('.zero_container img')
// let sweetMainImg = document.querySelectorAll('.sweet_main img')
let flag = true;
// let snowNumber = 100;
let index = 0
let array = ['../image/Chocolate.jpg', '../image/Foto7.jpg', '../image/Logo.jpg', '../image/Strawberry.jpg', '../image/Foto.jpg']
setInterval( function (){
    zeroContainerImg.src= array[index]
    index=(index+1) % array.length
} , 1500)
// let indexOf=0;
// let arrayTwo = ['../image/Chocolate.jpg', '../image/Chocolate2.jpg', '../image/Foto3.jpg']
// sweetMainImg.forEach(item =>{
//     setInterval( function (){
//         item.src = arrayTwo[indexOf]
//         indexOf=(indexOf+1) % arrayTwo.length
//     } , 1500)
// })

// function createSnow(){
//     let div= document.createElement('div')
//     div.classList.add('snow');
//     div.innerHTML= '❄️'
//     div.style.left = `${Math.random() *90}vw`
//     div.style.animationDuration=`${35}s`
//     div.style.fontSize= `${1}em`
//     snow.appendChild(div)
//     div.addEventListener('animationend',()=>{
//         div.remove();
//         createSnow()
//     })
// }

// for (let i=0;i<snowNumber; i++){
//     setTimeout(createSnow, i *200);
// }

darkMood.addEventListener('click',()=>{
    if(flag == true){
        darkMood.style.backgroundColor="black";
        darkMood.style.color="white"
        darkMood.style.boxShadow =  "10px 5px 5px brown"
        headerContainer.style.backgroundColor="black"
        sectionContainer.style.backgroundColor="rgb(35, 35, 35)"
        sectionContainer.style.color="white"
        body.style.backgroundColor="rgb(35, 35, 35)"
        sweetContainer.style.color="white"
        sweetMain.forEach(item=>{
            item.style.color='white'
        })
        guestContainerOut.style.color="white"
        guestContainerOutP.style.color="white"
        footer.style.backgroundColor="rgb(35, 35, 35)"
        flag=false
    }else if(flag == false){
        darkMood.style.backgroundColor="white"
        darkMood.style.color="black"
        darkMood.style.boxShadow =  "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
        headerContainer.style.backgroundColor="#540d0d"
        sectionContainer.style.backgroundColor="rgb(243, 234, 223)"
        sectionContainer.style.color="rgb(235, 152, 35)"
        body.style.backgroundColor="white"
        sweetContainer.style.color="black"
        sweetMain.forEach(item=>{
            item.style.color='black'
        })
        guestContainerOut.style.color="black"
        guestContainerOutP.style.color="black"
        footer.style.backgroundColor="black"
        flag=true
    }
})

window.onscroll = function () {
    let goToTopButton = document.querySelector('#goToTopButton');

    if (window.scrollY > 1000) {
        goToTopButton.style.display = 'flex';
    } else {
        goToTopButton.style.display = 'none';
    }
};

function goToTop() {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
        window.scrollTo(0, currentScroll - 30);
        setTimeout(goToTop, 10);
    }
}