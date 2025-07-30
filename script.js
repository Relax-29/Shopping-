function animation() {
    const tl2 = gsap.timeline();
  
    tl2.from('#nav', {
      y: -30,
      opacity: 0,
      delay: 1,
      duration: 0.8,
      stagger: 0.1,
    });
  
    tl2.from('.hero-section h1', {
      x: -200,
      opacity: 0,
      duration: 0.5,
    });
  
    tl2.from('.hero-section p', {
      x: -300,
      opacity: 0,
      duration: 0.4,
    });
  
    tl2.from('.hero-section .btn', {
      opacity: 0,
      duration: 0.4,
    });
  
    tl2.from('.hero-section img', {
      opacity: 0,
      duration: 0.4,
    }, "-=1"); 

    tl2.from(".section1bottom img", {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.6,
    });
  }
  
  animation();
  
  
  // Scroll-triggered animation
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#topListDiv h1",
      scroller: "body",
      markers: false, 
      start: "top 80%",
      end: "top 60%",
      scrub: 2,
    }
  });
  
  tl3.from("#topListDiv h1", {
    y: 30,
    opacity: 0,
    duration: 0.5
  });

  tl3.from(".card", {
    y: -30,
    opacity: 0,
    duration: 1,
    stagger:0.5,
  },"sametime");
  