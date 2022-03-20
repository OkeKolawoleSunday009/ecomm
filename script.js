let menu = document.querySelector('#menu-bar');
let navbar =  document.querySelector('.navbar');

menu.onclick = () =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}
// $(function(){
//     $("#item").click(function(){
//         $("#subMenu").slideToggle(500);
//     });

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

};

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
};
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
};
// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 7500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//      loop:true,
//   }); 

let check = document.querySelector('#check');
let nav_a = document.querySelectorAll('a');
let nav_h3 = document.querySelectorAll('h3');

check.addEventListener('click', function(){
    if(check.checked){
        // alert('check')
        document.querySelector('header').style.backgroundColor ='black';
        document.querySelector('.logo').style.color ='white';
        document.querySelector('body').style.backgroundColor ='black';
        // if(navbar.style.width == '700px'){
        //     navbar.style.backgroundColor ='black';
        
        // }
        for(let i = 0; i < nav_a.length; i++){
            nav_a[i].style.color ='white';
        
        }
        for(let i = 0; i < nav_h3.length; i++){
            nav_h3[i].style.color ='white';
        
        }
        
    }else{
        document.querySelector('header').style.backgroundColor ='white'
        document.querySelector('.logo').style.color ='black';
        document.querySelector('body').style.backgroundColor ='white';
        for(let i = 0; i < nav_a.length; i++){
            nav_a[i].style.color ='black';
        
        }
        for(let i = 0; i < nav_h3.length; i++){
            nav_h3[i].style.color ='black';
        
        }
        

    }
})