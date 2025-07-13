// $("document").ready(function(){
// $("#img1").mouseenter(function(){
//     $("#img1").css("width", "500px");
// });
// $("#img1").mouseleave(function(){
//     $("#img1").css("width","250px");
// })
// });

// $("#img1").hover(func1, func2)
// function func1(){
//     $("#img1").css("width", "500px");
// }
// function func2(){
//      $("#img1").css("width", "250px");
// }
$("document").ready(function () {
    $("#btn1").click(function(){
    $("#img1").hide(); 
    })
    $("#btn2").click(function(){
    $("#img1").show(2000); 
    })
    $("#btn3").click(function(){
    $("#img1").toggle(3000); 
    })
    


    $("#btn4").click(function(){
    $("#img1").fadeIn(2000); 
    })
    $("#btn5").click(function(){
    $("#img1").fadeOut(2000); 
    })
    $("#btn6").click(function(){
    $("#img1").fadeToggle(3000); 
    })
    });