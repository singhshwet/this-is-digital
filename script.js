var tl=gsap.timeline();

tl
.from("#nav a",{
    top:"-100%",
    duration:2,
    opacity:0,
    stagger:{
        amount:1
    }
})
.from("#page1 p",{
    x:-100,
    duration:2,
    opacity:0,
    stagger:{
        amount:1
    }
},"-=3")
.from(" #page1 h4",{
    x:-100,
    duration:2,
    opacity:0,
    // stagger:{
    //     amount:1
    // }
},"-=1")

.from("#page1 #img1",{
    y:100,
    duration:2,
    opacity:0
},"-=2")
.from("#page1 #img2",{
    x:100,
    duration:2,
    opacity:0
},"-=2")
.from("#page1 #img3",{
    y:-100,
    duration:2,
    opacity:0
},"-=2")
.from("#page2 #to",{
    y:100,
    duration:2,
    scale:1,
    opacity:0
},"-=4")

gsap.from("#page2 h3",{
    scrollTrigger:{
        trigger:"#page2 h3",
        start:"top 80%",
       
    },
    y:50,
    opacity:0,
    ease:"Expo.easeInOut",
    duration:2
})
gsap.from("#page2 h1",{
    scrollTrigger:{
        trigger:"#page2 h1",
        start:"top 50%",
       
    },
    y:40,
    opacity:0,
    ease:"Expo.easeInOut",
    duration:2
})
gsap.from("#page3 h5",{
    scrollTrigger:{
        trigger:"#page3 h5",
        start:"top 50%",
       
    },
    y:30,
    opacity:0,
    ease:"Expo.easeInOut",
    duration:2
})
gsap.from("#page3  h1 ",{
    scrollTrigger:{
        trigger:" #page3 h1",
        start: "top 80%"

    },
    y:40,
    opacity:0,
    ease:"Expo.easeInOut",
    duration:4
},"-=2")
gsap.from("#page3  #photu",{
    scrollTrigger:{
        trigger:" #page3 #photu ",
        start: "top 80%"

    },
    y:40,
    opacity:0,
    ease:"Expo.easeInOut",
    duration:4
},"-=2")

gsap.from("#page3  h3",{
    scrollTrigger:{
        trigger:" #page3 h3 ",
        start: "top 80%"

    },
    y:30,
    opacity:0,
    ease:"Expo.easeInOut",
    duration:4
},"-=2")
gsap.from("#page3  #cov",{
    scrollTrigger:{
        trigger:" #page3 #cov ",
        start: "top 80%"

    },
    y:50,
    opacity:0,
    ease:"Expo.easeInOut",
    duration:4
},"-=2")


gsap.from("#page3  #box1 img ",{
    scrollTrigger:{
        trigger:" #page3  #box1 img",
        start: "top 50%"

    },
    y:50,
    opacity:0,
    ease:"Expo.easeInOut",
    duration:4
},"-=2")
gsap.from("#page3  #box2 img ",{
    scrollTrigger:{
        trigger:" #page3  #box1 img",
        start: "top 50%"

    },
    x:50,
    opacity:0,
    ease:"Expo.easeInOut",
    duration:4
},"-=2")
gsap.from("#page4  h1 ",{
    scrollTrigger:{
        trigger:" #page4  h1",
        start: "top 50%"

    },
    y:30,
    opacity:0,
    ease:"Expo.easeInOut",
    duration:4
},"-=3")


const menuIcon = document.querySelector("#menu_icon");
var flag = 0;

menuIcon.addEventListener("click", function(){
    if(flag===0){
        document.querySelector("#menu_icon .line:nth-child(2)").style.display = "none";
        document.querySelector("#menu_icon .line:nth-child(3)").style.width = "100%";
        menuIcon.style.justifyContent = "center",
        document.querySelector("#menu_icon .line:nth-child(1)").style.transform = "rotate(-45deg)";
        document.querySelector("#menu_icon .line:nth-child(3)").style.transform = "rotate(45deg)";
        document.querySelector("#menudata").style.display="flex";
        flag=1;
    }else if(flag===1){
        document.querySelector("#menu_icon .line:nth-child(2)").style.display = "initial";
        document.querySelector("#menu_icon .line:nth-child(3)").style.width = "50%";
        menuIcon.style.justifyContent = "space-evenly",
        document.querySelector("#menu_icon .line:nth-child(1)").style.transform = "rotate(0deg)";
        document.querySelector("#menu_icon .line:nth-child(3)").style.transform = "rotate(0deg)";
        document.querySelector("#menudata").style.display="none";
        flag=0;
    }




})
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });