

function loadFunction() {

	
     gsap.from('.headline-aref',{ duration:2, opacity: 0,delay:1 })
     gsap.to('.content-aref',{ duration:2, y : '-110vh' , delay:1,ease:'power2.in'})
	 gsap.to('.content-product',{ duration:2.2, y : '-100vh' , delay:1.1,ease:'power2.in'})
     gsap.from('.headline-product-first',{ duration:3, opacity: 0,delay:3.2 })
     gsap.from('.product-img',{ duration:2.8, opacity: 0,delay:3.2 })
     gsap.from('.product-btn',{ duration:2.8, opacity: 0,delay:3.2 })
      gsap.to('.headline-product-first',{ duration:3, opacity: 0,delay:5 })
      gsap.from('.headline-product-second',{ duration:3, opacity: 0,delay:7 })
  	gsap.fromTo('.product-img',{ opacity: 1,scale: 0, rotation:100},
     	{ duration: 1,delay: 3.5, opacity:1 , scale:1, rotation:0},
     	
    )


   
}


