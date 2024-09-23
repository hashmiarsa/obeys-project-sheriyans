//--------------------------------- loading animation by me------------------------------------------------//

// gsap.from(".line h1",{
//     y:150,
//     stagger:0.25,
//     duration:0.6,
//     delay:0.5
// })

// var h5=document.querySelector("#line1-part1 h5")


// var count=0;
// setInterval(function(){
//     if(count<100){
//         count++;
//         console.log(count);
//     }
//     else
//     count=100;
//     h5.textContent=count;
    


// },35);


// gsap.from("#line1-part1, .line h2",{
//     opacity:0,
//     delay:0.7,

// })

// gsap.to("#loader",{
//     opacity:0,
//     duration:0.4,
//     delay:4

// })

//--------------------------------- loading animation by me with optimization------------------------------------------------//
var tl =gsap.timeline();
tl.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5
})

tl.from("#line1-part1",{
    opacity:0,
    onStart: function(){
        var h5=document.querySelector("#line1-part1 h5")


    var count=0;
    setInterval(function(){
    if(count<100){
        count++;
        console.log(count);
    }
    else
    count=100;
    h5.textContent=count;
    


    },35);

    }

})

tl.to(".line h2",{
    animationName:"anime",
    opacity:1,
})
tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:4

})

tl.from("#page1",{
    y:1600,
    opacity:0,
    delay:0.2,
    ease:Power4,
    duration:0.5

})
tl.to("#loader",{
    display:"none"
})