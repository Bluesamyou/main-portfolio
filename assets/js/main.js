var rellax = new Rellax('.rellax');

var scene = new Scene({
    '.personal-card' : {
        0: {
            height : "0px",
            transform : "scale(0.7)", 
            opacity : 0
        },

        .5 : {
            height : "100%",
            transform : "scale(1.2)", 
        },

        1:{
            height : "100%",
            transform : "scale(1)", 
            opacity : 1
        }
    }, 
    '.avatar ' : {
        0: {
            transform : "scale(0)", 
            opacity : 0
        },
        1:{
            transform : "scale(1)", 
            opacity : 1
        }
    }, 
    ".cta" : function(index){
        return {
            0: {
                opacity : 0,
                transform : "translate(0px, 0px)"
                
            },
            0.5 : {
                opacity : 0.5,
                transform : "translate(0px, -20px)"
            },
            1:{
                opacity : 1,
                transform : "translate(0px, 0px)"
            }, 
            options : {
                delay : index * 0.5

            }
        }
    }
}, 
{
    duration : 2,
    easing : Scene.EASE_IN_OUT,
    selector: true, 
}).playCSS();

randNumber = () => {
    console.log(`${(Math.floor(Math.random())*70)+10}px`)
    return `${(Math.floor(Math.random)*70)+10}px`
}

var sceneInf = new Scene({
    '.dev-icon' : function(i){
        return {
            0 : {
                position : 'absolute',
                left : randNumber(),
                opacity : "0",
                transform : "translate(0px,0px)"
            }, 1:{
                position : 'absolute',
                left : randNumber(),
                opacity : "1",
                transform : `translate(0px,-${(Math.floor(Math.random()*10000))}px)`
            }, 
            options : {
                delay  : i * 1
            }
        }
    }
}, 
{
    duration : 10, 
    easing : Scene.EASE_IN_OUT,
    iterationCount: "infinite",
    selector: true, 
}).playCSS()


var testAnim = new Scene({
    '#code-1' : {
        0:{
            width: "0px"
        },
        1:{
            width : "39px"
        }
    },

},{
    selector: true, 
    easing : Scene.EASE_IN_OUT, 
    iterationCount: "infinite", 
    duration : 3
    
}).playCSS()


var typed = new Typed(".typed", {
    strings: ["Fullstack Developer", "Frontend Expert","Backend Guru","Web Automation Tester"],
    backSpeed : 40, 
    typeSpeed : 50, 
    loop : true,
    cursorChar: '|',
  });

