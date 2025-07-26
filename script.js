var tl = gsap.timeline();
    gsap.set(".animation", {
    opacity: 0,
    y: 10})

    gsap.set("#shopping-img", {
    opacity: 0,
    y: 10,
    scale: 0.8,})

tl
    .to(".animation", {
        opacity: 1,
        y: 0,
        ease: Expo.easeInOut,
        duration: 3.5,
        stagger: 0.1,
        delay: -1,
    })

    .to("#shopping-img", {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: Expo.easeInOut,
        duration: 1,
        stagger: 1.1,
        delay: -1.5,
    })