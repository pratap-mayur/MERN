 let dayNight = document.querySelector(".dayNight");
 let banner = document.querySelector(".banner");
  dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night");
  })

  let typingEffect = new Typed("#text",{
    strings:["Mayur Pratap Singh","a B.tech Graduate","from Galgotias University"],
    loop:true,
    typeSpeed:80,
    backSpeed:50,
    backDelay:400
  }) 