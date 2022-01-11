
//aos start
AOS.init(); 
//aos end

//toggle navigation start
// $(document).ready(function(){
//     $("#icon").click(function(){
//     $("ul").toggleClass("show");
    
    
    
//     });
    
//     });


var a=1;
$(document).ready(function(){
$("#abt").click(function(){
$("#links").hide();
a=1;
});
$("#serv").click(function(){
    $("#links").hide();
    a=1;
    });
    $("#ghar").click(function(){
        $("#links").hide();
        a=1;
        });
        $("#cont").click(function(){
            $("#links").hide();
            a=1;
            });  
            $("#menuu").click(function(){
                $("#links").hide();
                a=1;
                });  
               
                $("#blg").click(function(){
                    $("#links").hide();
                    a=1;
                    });   

$("#icon").click(function(){
            $("#links").slideToggle();
// if (a==1){
//          $("#links").animate({"right":"0"});
//          a=2;
// }
// else{
//          $("#links").animate({"right":"-100%"});
// } 
});
});


//new 
var a=1;
$(document).ready(function(){
$("#abt").click(function(){
$("#linkss").hide();
a=1;
});
$("#homee").click(function(){
    $("#linkss").hide();
    a=1;
    });
    $("#skill").click(function(){
        $("#linkss").hide();
        a=1;
        });
        $("#edu").click(function(){
            $("#linkss").hide();
            a=1;
            });   
            $("#cont").click(function(){
                $("#linkss").hide();
                a=1;
                });   
                $("#port").click(function(){
                    $("#linkss").hide();
                    a=1;
                    });   
        //         $("#icon").click(function(){
        //             $("#links").css("display", "block");
        // if (a==1){
        //          $("#linkss").animate({"right":"0"});
        //          a=2;
        // }
        // else{
        //          $("#linkss").animate({"right":"100%"});
                 
        // } 
        // });
        $("#icon").click(function(){
$("#linkss").slideToggle();


});
$("#abt").click(function(){
  $("#abt").hide();
});

        });